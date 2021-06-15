<?php
namespace Letterify;
use Letterify;

require_once plugin_dir_path(__FILE__) . 'core/fields/fields.php';

defined('ABSPATH') || exit;

final class Plugin {
	const TEXT_DOMAIN = 'letterify';
	private static $instance;

	public function __construct() {
	}

	public function version() {
		return Letterify::version();
	}

	public function package_type() {
		return 'free';
	}

	public function plugin_url() {
		return trailingslashit(plugin_dir_url(__FILE__));
	}

	public function plugin_dir() {
		return trailingslashit(plugin_dir_path(__FILE__));
	}

	public function core_url() {
		return $this->plugin_url() . 'core/';
	}

	public function core_dir() {
		return $this->plugin_dir() . 'core/';
	}

	public function text_domain() {
		return self::TEXT_DOMAIN;
	}

	function letterify_form_function() {
		$tpl = trailingslashit(plugin_dir_path(__FILE__)) . 'templates/default.php';

		include $tpl;
	}

	public function init() {
		add_action('init', [$this, 'letterify_cpt']);

		#Loading the scripts and styles
		add_action('wp_enqueue_scripts', [$this, 'js_css_public']);
		add_action('admin_enqueue_scripts', [$this, 'js_css_admin']);

		add_action('wp_ajax_woocommerce_ajax_add_to_cart', [$this, 'woocommerce_ajax_add_to_cart']);
		add_action('wp_ajax_nopriv_woocommerce_ajax_add_to_cart', [$this, 'woocommerce_ajax_add_to_cart']);

		add_action('wp_ajax_letterify_save_meta', [$this, 'letterify_save_meta']);
		add_action('wp_ajax_nopriv_letterify_save_meta', [$this, 'letterify_save_meta']);

		add_shortcode('letterify', [$this, 'letterify_form_function']);

		add_action( 'woocommerce_before_calculate_totals', [$this, 'woocommerce_custom_price_to_cart_item'], 99 );


		add_filter( 'woocommerce_data_stores', [$this, 'my_woocommerce_data_stores'] );

		// check permission for manage user
		add_action('admin_menu', [$this, 'admin_menu']);
	
		add_action( 'wp_ajax_ajax_save_admin_options', [$this, 'ajax_save_admin_options'] );
		add_action( 'wp_ajax_nopriv_ajax_save_admin_options', [$this, 'ajax_save_admin_options'] );

		remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );

		add_action( 'woocommerce_single_product_summary', [$this, 'replace_default_button'], 30 );

		add_filter( 'woocommerce_cart_item_name', [$this, 'cart_description'], 20, 3);

		add_action( 'add_meta_boxes', [$this, 'add_meta_box'] );

		// add_action('save_post', [$this, 'letterify_save_meta']);

		add_action('rest_api_init', function() {
			register_rest_route(untrailingslashit('letterify/v1/'), '/fields/get', array(
				'methods'  => 'GET',
				'callback' => [$this, 'api_endpoint'],
				'permission_callback' => '__return_true',
			));
		});

		// add_action('woocommerce_before_order_itemmeta',[$this, 'woocommerce_before_order_itemmeta'],10,3);

		add_filter( 'woocommerce_order_item_name', function( $item_name, $item ) {
			$order_item_id = (int) substr($item_name, strpos($item_name, "#") + 1, strpos($item_name, ' ') - 1 ); ?>
			<a href='<?php echo get_permalink(); ?>/?p=<?php echo $order_item_id; ?>'><?php echo $item_name; ?></a>
			<?php
		}, 99, 2 );

		// add_filter('single_template', function($original){
		// 	global $post;
		// 	$post_name = $post->post_name;
		// 	$post_type = $post->post_type;
		// 	if ( $post_type === 'letterify-orders' ) {
		// 		$base_name = 'single-blog';
		// 		$template = locate_template($base_name);
		// 		error_log( $template );
		// 		if ($template && ! empty($template)) return $template;
		// 		return $original;
		// 	} else {
		// 		error_log( 'nayy');
		// 		return $original;
		// 	}
		// });
	}
	

	public function woocommerce_before_order_itemmeta($item_id, $item, $product){
		// var_dump( $item );
		// echo $item->get_description();
		// echo ($shippingclass) ? __('<hr><b>Shipping with: </b> <i style = "text-transform:uppercase">'. $shippingclass .'</i><hr>','woocommerce') : 'No Shipping Class is assigned to this product';
		// echo '<p><b>Category:</b>  <i>'.get_the_term_list($product->id, 'product_cat').'</i></p>';
		// echo "howdy";
	}

	public function api_endpoint($request) {
		return \Letterify\Fields_Schema::get_list();
	}

	function my_woocommerce_data_stores( $stores ) {
		require_once dirname( __FILE__ ) . '/core/cpt/cpt.php';
		$stores['product'] = 'Letterify_CPT';
	
		return $stores;
	}

	function add_meta_box( $post_type ) {
		global $post;
		
		$product = wc_get_product( $post->ID );
		
		if ( in_array( $post->post_type, [ 'product' ] ) ) {
			require_once 'core/admin/meta/view.php';
			
			add_meta_box(
				'letterify_values',
				esc_html__( 'Letterify Preview', 'letterify' ),
				[ new MetaBox_View, 'render_meta_box_content'],
				[ 'product' ],
				'advanced',
				'high'
			);
		} else if ( in_array( $post->post_type, [ 'letterify-orders' ] ) ) {
			require_once 'core/cpt/meta.php';

			add_meta_box(
				'letterify_order_details',
				esc_html__( 'Order Details', 'letterify' ),
				[ new Cpt_MetaBox, 'render_metabox'],
				[ 'letterify-orders' ],
				'advanced',
				'high'
			);

			add_meta_box(
				'letterify_order_details_download',
				esc_html__( 'Order Details', 'letterify' ),
				[ new Cpt_MetaBox, 'render_metabox_download'],
				[ 'letterify-orders' ],
				'advanced',
				'high'
			);
		}
	}

	function letterify_save_meta( ) {
		$post_id = $_POST['post_id'];
		// if ( isset($_POST['letterify_settings']) ) {
			$value = json_encode( $_POST['letterify_settings'] );

			if ( get_post_meta( $post_id, 'letterify-settings', true ) ) {
				if ( $value ) {        
					update_post_meta($post_id, 'letterify-settings', $value);
				}
			} else {
				add_post_meta($post_id, 'letterify-settings', $value, true);
			}
		// }

		wp_die();
	}

	function cart_description( $name, $cart_item, $cart_item_key ) {
		$product_item = $cart_item['data'];
	
		if( ! empty( $product_item ) ) {
			$description = $product_item->get_description();
			return $name . '<br>' . $description;
		} else {
			return $name;
		}
	}

	function replace_default_button() {
		include_once plugin_dir_path(__FILE__) . 'templates/default.php';
	}

	function ajax_save_admin_options() {
		$colors = $_POST['colors'];
		$colors = json_encode($colors);

		$fonts = $_POST['fonts'];
		$fonts = json_encode($fonts);

		if ( ! get_option("__letterify_colors") ){
			add_option("__letterify_colors", $colors);
		} else {
			update_option("__letterify_colors", $colors);
		}

		if ( ! get_option("__letterify_fonts") ){
			add_option("__letterify_fonts", $fonts);
		} else {
			update_option("__letterify_fonts", $fonts);
		}
		
		wp_die();
	}

	function woocommerce_custom_price_to_cart_item( $cart_object ) {  
		if( !WC()->session->__isset( "reload_checkout" )) {
			foreach ( $cart_object->cart_contents as $key => $value ) {
				if( isset( $value["custom_price"] ) ) {
					//for woocommerce version lower than 3
					// $value['data']->price = $value["custom_price"];
					//for woocommerce version +3
					$value['data']->set_price($value["custom_price"]);
				}
			}  
		}  
	}

	function save_photo($imgBase64) {
		$upload_dir  = wp_upload_dir();
		$upload_path = str_replace( '/', DIRECTORY_SEPARATOR, $upload_dir['path'] ) . DIRECTORY_SEPARATOR;

		$img             = str_replace( 'data:image/png;base64,', '', $imgBase64 );
		$img             = str_replace( ' ', '+', $img );
		$decoded         = base64_decode( $img );
		$filename        = $_POST['data']['value']. time() . '.png';
		$file_type       = 'image/png';
		$hashed_filename = md5( $filename . microtime() ) . '_' . $filename;

		// Save the image in the uploads directory.
		$upload_file = file_put_contents( $upload_path . $hashed_filename, $decoded );

		$attachment = array(
			'post_mime_type' => $file_type,
			'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $hashed_filename ) ),
			'post_content'   => '',
			'post_status'    => 'inherit',
			'guid'           => $upload_dir['url'] . '/' . basename( $hashed_filename )
		);

		$attach_id = wp_insert_attachment( $attachment, $upload_dir['path'] . '/' . $hashed_filename );
		
		return $attach_id;
	}

	function woocommerce_ajax_add_to_cart() {
		$list = \Letterify\Fields_Schema::get_list();
		$content = '<table class="letterify-cart-desc"><tbody>';
		foreach( $_POST['data'] as $key => $value ) {
			$name = isset( $list[$key]['name'] ) ? $list[$key]['name'] : ucfirst($key);
			$content .= '<tr><td>' . $name . ': </td><td>' . esc_html($value) . '</td></tr>';
		}

		$content .= '</tbody></table>';

		$entry_id_letter = wp_insert_post( 
			[
				'post_title'	=> isset( $_POST['data']['value'] ) ? $_POST['data']['value'] : '',
				'post_status'	=> 'publish',
				'post_content'	=> $content,
				'post_type'		=> 'letterify-orders',
			]
		);

		wp_update_post(
			[
				'ID'         => $entry_id_letter,
				'post_title' => 'Order id #' . $entry_id_letter . ' : ' . ( isset( $_POST['data']['value'] ) ? $_POST['data']['value'] : '' ),
			]
		);

		$price = $_POST['price'] / $_POST['quantity'];
		$quantity = $_POST['quantity'];

		/** Set thumbnail */
		$thumbnail_id = $this->save_photo($_POST['imgBase64']);
		set_post_thumbnail( $entry_id_letter, $thumbnail_id );

        /** add price to the product */
        add_post_meta($entry_id_letter, '_regular_price', $price);
        add_post_meta($entry_id_letter, '_sale_price', $price);
        add_post_meta($entry_id_letter, '_price', $price);
        add_post_meta($entry_id_letter, 'price', $price);
		
		/** Set product as downloadable */
        add_post_meta($entry_id_letter, '_downloadable', 'yes');
        add_post_meta($entry_id_letter, '_download_limit', '-1');
        add_post_meta($entry_id_letter, '_download_expiry', '-1');

        include_once WC_ABSPATH . 'includes/class-wc-product-download.php';

		$product = wc_get_product( $entry_id_letter );
		$downloads = (array) $product->get_downloads(); 

        // Set the download data
        $download = new \WC_Product_Download(); // Get an instance of the WC_Product_Download Object
        $file_url = wp_get_attachment_url( $thumbnail_id );
        $file_md5 = md5($file_url);
        $download->set_name( 'Downloadable File' );
        $download->set_id($file_md5);
        $download->set_file($file_url);

        $downloads[$file_md5] = $download; // Insert the new download to the array of downloads
        $product->set_downloads($downloads); // Set new array of downloads
		// var_dump( $downloads );
		// var_dump( $product->get_downloads() );

        /** Include required files */
        include_once WC_ABSPATH . 'includes/wc-cart-functions.php';
        include_once WC_ABSPATH . 'includes/class-wc-cart.php';
        wc_load_cart();

		$passed_validation = apply_filters('woocommerce_add_to_cart_validation', true, $entry_id_letter, $quantity);
		$product_id = apply_filters('woocommerce_add_to_cart_product_id', absint($entry_id_letter));
		$quantity = empty($_POST['quantity']) ? 1 : wc_stock_amount($_POST['quantity']);
		$passed_validation = apply_filters('woocommerce_add_to_cart_validation', true, $product_id, $quantity);
		$product_status = get_post_status($product_id);

		if ($passed_validation && WC()->cart->add_to_cart($product_id, $quantity) && 'publish' === $product_status) {
			global $woocommerce;
			$woocommerce->cart->calculate_totals();
			// Save cart to session
			$woocommerce->cart->set_session();
			// Maybe set cart cookies
			$woocommerce->cart->maybe_set_cart_cookies();

			do_action('woocommerce_ajax_added_to_cart', $product_id);

			if ('yes' === get_option('woocommerce_cart_redirect_after_add')) {
				wc_add_to_cart_message(array($product_id => $quantity), true);
			}

		} else {

			$data = array(
				'error' => true,
				'product_url' => apply_filters('woocommerce_cart_redirect_after_error', get_permalink($product_id), $product_id));

			echo wp_send_json($data);
		}

		wp_die();
	}


	/**
	 * Public function js_css_public .
	 * Include public function
	 *
	 * @since 1.0.0
	 */
	public function js_css_public() {
        wp_enqueue_style('letterify-css', plugin_dir_url(__FILE__) . 'public/assets/css/style.css', false, $this->version());

        wp_enqueue_script('htm', plugin_dir_url(__FILE__) . 'public/assets/js/htm.js', null, $this->version(), true);

        wp_enqueue_script('letterify-js', plugin_dir_url(__FILE__) . 'public/assets/js/app.js', array('htm', 'jquery', 'wp-element'), $this->version(), true);
		wp_localize_script('letterify-js', 'letterify_admin_var', array(
			'ajax_url' => admin_url('admin-ajax.php'),
			'cart_url' => wc_get_cart_url(),
			'rest_api' => get_rest_url(null, 'letterify/v1/fields/get')
		) );
	}


	public function js_css_admin() {
		// get screen id
		$screen = get_current_screen();

		$dashboardPage = 'toplevel_page_letterify-menu';

		if(in_array($screen->id, [$dashboardPage])) {
			wp_enqueue_style('letterify-admin-css', plugin_dir_url(__FILE__) . 'core/assets/css/admin-style.css', false, $this->version());
			wp_enqueue_script('htm', plugin_dir_url(__FILE__) . 'public/assets/js/htm.js', null, $this->version(), true);
			wp_enqueue_script('letterify-admin-js', plugin_dir_url(__FILE__) . 'core/assets/js/app.js', array('htm', 'jquery', 'wp-element'), $this->version(), true);
			wp_localize_script('letterify-admin-js', 'letterify_admin_var', array(
				'ajax_url' => admin_url('admin-ajax.php'),
				'version' => self::version(),
				'plugin_url' => self::plugin_url(),
			) );
		}
		wp_enqueue_style('letterify-admin-product-css', plugin_dir_url(__FILE__) . 'core/assets/css/product-style.css', false, $this->version());
		wp_enqueue_script('letterify-admin-product-js', plugin_dir_url(__FILE__) . 'core/assets/js/admin-scripts.js', false, $this->version(), true);
		wp_localize_script('letterify-admin-product-js', 'letterify_admin_product_var', array(
			'ajax_url' => admin_url('admin-ajax.php'),
		) );
	}


	function admin_menu() {
		add_menu_page(
			esc_html__('Letterify', 'letterify'),
			esc_html__('Letterify', 'letterify'),
			'read',
			'letterify-menu',
			[$this, 'letterify_menu'],
			'dashicons-slides',
			5
		);

		add_submenu_page('letterify-menu', 'Settings', 'Settings', 'manage_options', 'letterify-menu');
	}

	function letterify_cpt() {

		$labels = array(
            'name'                  => esc_html_x( 'Entries', 'Post Type General Name', 'letterify' ),
            'singular_name'         => esc_html_x( 'Entry', 'Post Type Singular Name', 'letterify' ),
            'menu_name'             => esc_html__( 'Entry', 'letterify' ),
            'name_admin_bar'        => esc_html__( 'Entry', 'letterify' ),
            'archives'              => esc_html__( 'Entry Archives', 'letterify' ),
            'attributes'            => esc_html__( 'Entry Attributes', 'letterify' ),
            'parent_item_colon'     => esc_html__( 'Parent Item:', 'letterify' ),
            'all_items'             => esc_html__( 'Entries', 'letterify' ),
            'add_new_item'          => esc_html__( 'Add New Item', 'letterify' ),
            'add_new'               => esc_html__( 'Add New', 'letterify' ),
            'new_item'              => esc_html__( 'New Item', 'letterify' ),
            'edit_item'             => esc_html__( 'Edit Item', 'letterify' ),
            'update_item'           => esc_html__( 'Update Item', 'letterify' ),
            'view_item'             => esc_html__( 'View Item', 'letterify' ),
            'view_items'            => esc_html__( 'View Items', 'letterify' ),
            'search_items'          => esc_html__( 'Search Item', 'letterify' ),
            'not_found'             => esc_html__( 'Not found', 'letterify' ),
            'not_found_in_trash'    => esc_html__( 'Not found in Trash', 'letterify' ),
            'featured_image'        => esc_html__( 'Featured Image', 'letterify' ),
            'set_featured_image'    => esc_html__( 'Set featured image', 'letterify' ),
            'remove_featured_image' => esc_html__( 'Remove featured image', 'letterify' ),
            'use_featured_image'    => esc_html__( 'Use as featured image', 'letterify' ),
            'insert_into_item'      => esc_html__( 'Insert into item', 'letterify' ),
            'uploaded_to_this_item' => esc_html__( 'Uploaded to this item', 'letterify' ),
            'items_list'            => esc_html__( 'Order entries list', 'letterify' ),
            'items_list_navigation' => esc_html__( 'Order entries list navigation', 'letterify' ),
            'filter_items_list'     => esc_html__( 'Filter from entry list', 'letterify' ),
		);

		$args = array(
            'label'                 => esc_html__( 'Order entry', 'letterify' ),
            'description'           => esc_html__( 'letterify-orders', 'letterify' ),
			'labels'				=> $labels,
			'supports'				=> ['title', 'thumbnail'],
            'capabilities'          => ['create_posts' => 'do_not_allow'],
            'map_meta_cap'          => true,
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => "letterify-menu",
            'menu_icon'             => 'dashicons-format-aside',
            'menu_position'         => 5,
            'show_in_admin_bar'     => false,
            'show_in_nav_menus'     => false,
            'can_export'            => true,
            'has_archive'           => false,
            'publicly_queryable'    => true,
            'rewrite'               => false,
            'query_var'             => true,
            'exclude_from_search'   => true,
            'capability_type'       => 'page',
            'show_in_rest'          => true,
            'rest_base'             => 'letterify-orders',
		);

		register_post_type( 'letterify-orders', $args );
        flush_rewrite_rules();
		wp_reset_postdata(); 
	}

	function letterify_menu() {
		require_once 'core/views/admin-menu.php';
	}

	public static function instance() {
		if(!self::$instance) {
			self::$instance = new self();
		}

		return self::$instance;
	}
}