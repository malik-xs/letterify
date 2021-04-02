<?php
namespace Letterify;
use Letterify;

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

		add_shortcode('letterify', [$this, 'letterify_form_function']);

		add_action( 'woocommerce_before_calculate_totals', [$this, 'woocommerce_custom_price_to_cart_item'], 99 );

		
		// check permission for manage user
		add_action('admin_menu', [$this, 'admin_menu']);
	
		add_action( 'wp_ajax_ajax_save_admin_options', [$this, 'ajax_save_admin_options'] );
		add_action( 'wp_ajax_nopriv_ajax_save_admin_options', [$this, 'ajax_save_admin_options'] );

		remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );

		add_action( 'woocommerce_single_product_summary', [$this, 'replace_default_button'], 30 );

		add_filter( 'woocommerce_cart_item_name', [$this, 'cart_description'], 20, 3);

		// add_action( 'add_meta_boxes', [$this, 'add_meta_box'] );

		// add_action('save_post', [$this, 'letterify_save_meta']);
	}

	function add_meta_box( $post_type ) {
		require_once 'core/admin/meta/view.php';

		$post_types = array('product');     //limit meta box to certain post types
		global $post;
		$product = wc_get_product( $post->ID );
		if ( in_array( $post->post_type, $post_types ) ) {
			add_meta_box(
				'letterify_values',
				esc_html__( 'Letterify Preview', 'letterify' ),
				[$this, 'render_meta_box_content'],
				$post_types,
				'advanced',
				'high'
			);
		}
	}

	function render_meta_box_content() {
		\Letterify\MetaBox_View::render_meta_box_content();
	}

	function letterify_save_meta( $post_id ) {
		if ( !current_user_can( 'edit_post', $post_id ) ) return;

		$this->letterify_update_meta( $post_id, 'letterify-finish', sanitize_text_field($_POST['letterify-finish']));
		$this->letterify_update_meta( $post_id, 'letterify-color', sanitize_text_field($_POST['letterify-color']));
	}

	function letterify_update_meta( $post_id, $term, $value ) {
		if ( get_post_meta( $post_id, $term, true ) ) {
			if ( isset( $value ) ) {        
				update_post_meta($post_id, $term, $value);      
			}
		} else {
			add_post_meta($post_id, $term, sanitize_text_field( $value ), true);
		}
	}

	function cart_description( $name, $cart_item, $cart_item_key ) {
		// Get the corresponding WC_Product
		$product_item = $cart_item['data'];
	
		if(!empty($product_item)) {
			// WC 3+ compatibility
			$description = $product_item->get_description();
			// $result = esc_html__( 'Description: ', 'letterify' ) . $description;
			return $name . '<br>' . $description;
		} else {
			return $name;
		}
	}

	function replace_default_button(){
		global $post;
		$settings = '';
		$settings->finish = get_post_meta( $post->ID, 'letterify-finish', true );
		$settings->color = get_post_meta( $post->ID, 'letterify-color', true );

		echo '<div class="xm-letterify">
		<div class="xm-letterify-form-wrapper" data-ajaxurl="' . admin_url('admin-ajax.php') . '"
			data-wpNonce="' . wp_create_nonce("xm_letterify") . '"
			data-colors=' . stripslashes( preg_replace( '/\s*/m', '', json_decode( get_option('__letterify_colors') ) )) . '
			data-settings=' . json_encode( $settings ) . '
		><div class="xm-letterify-template"></div></div></div>';
	}

	function ajax_save_admin_options() {
		$colors = $_POST['colors'];

		if ( ! get_option("__letterify_colors") ){
			add_option("__letterify_colors", $colors);
		} else {
			update_option("__letterify_colors", json_encode($colors));
		}
		
		wp_die();
	}

	function my_admin_page_contents() {
		?>
			<h1>
				<?php esc_html_e( 'Welcome to my custom admin page.', 'letterify' ); ?>
			</h1>
		<?php
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
		$filename        = $_POST['value'] . '.png';
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
		print_r($_POST);
		$content = '<table class="letterify-cart-desc"><tbody>';
		if ( isset($_POST['font']) && $_POST['font'] !== '' ) {
			$content .= '<tr><td>Font: </td><td>' . esc_html($_POST['font']) . '</td></tr>';
		}
		if ( isset($_POST['finish']) && $_POST['finish'] !== '' ) {
			$content .= '<tr><td>Finish: </td><td>' . esc_html($_POST['finish']) . '</td></tr>';
		}
		if ( isset($_POST['height']) && $_POST['height'] !== '' ) {
			$content .= '<tr><td>Height: </td><td>' . esc_html($_POST['height']) . '</td></tr>';
		}
		if ( isset($_POST['thickness']) && $_POST['thickness'] !== '' ) {
			$content .= '<tr><td>Thickness: </td><td>' . esc_html($_POST['thickness']) . '</td></tr>';
		}
		if ( isset($_POST['mounting']) && $_POST['mounting'] !== '' ) {
			$content .= '<tr><td>Mounting: </td><td>' . esc_html($_POST['mounting']) . '</td></tr>';
		}
		if ( isset($_POST['color']) && $_POST['color'] !== '' ) {
			$content .= '<tr><td>Color: </td><td>' . esc_html($_POST['color']) . '</td></tr>';
		}
		if ( isset($_POST['width']) && $_POST['width'] !== '' ) {
			$content .= '<tr><td>Width: </td><td>' . esc_html($_POST['width']) . '</td></tr>';
		}
		if ( isset($_POST['connect']) && $_POST['connect'] !== '' ) {
			$content .= '<tr><td>Connect: </td><td>' . esc_html($_POST['connect']) . '</td></tr>';
		}
		$content .= '</tbody></table>';

		$data = array(
			'post_title' => $_POST['value'],
			'post_status' => 'publish',
			'post_content' => $content,
			'post_type' => 'product',
		);

		// include_once 'core/entries/entry.php';

		$entry_id = wp_insert_post( $data );
		$entry_id_letter = wp_insert_post( 
			array(
				'post_title' => $_POST['value'],
				'post_status' => 'publish',
				'post_content' => $content,
				'post_type' => 'letterify-orders',
			)
		);

		$price = $_POST['price'] / $_POST['quantity'];
		$quantity = $_POST['quantity'];

		$thumbnail_id = $this->save_photo($_POST['imgBase64']);

		set_post_thumbnail( $entry_id, $thumbnail_id );
		set_post_thumbnail( $entry_id_letter, $thumbnail_id );

        //add price to the product,
        update_post_meta($entry_id, '_regular_price', $price);
        update_post_meta($entry_id, '_sale_price', $price);
        update_post_meta($entry_id, '_price', $price);
        update_post_meta($entry_id, 'price', $price);

        /** Include required files */
        include_once WC_ABSPATH . 'includes/wc-cart-functions.php';
        include_once WC_ABSPATH . 'includes/class-wc-cart.php';
        wc_load_cart();

		$passed_validation = apply_filters('woocommerce_add_to_cart_validation', true, $entry_id, $quantity);
		
		$product_id = apply_filters('woocommerce_add_to_cart_product_id', absint($entry_id));
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
		) );
	}


	public function js_css_admin() {
        wp_enqueue_style('letterify-admin-css', plugin_dir_url(__FILE__) . 'core/assets/css/admin-style.css', false, $this->version());
        wp_enqueue_script('letterify-admin-js', plugin_dir_url(__FILE__) . 'core/assets/js/admin-scripts.js', array('jquery'), $this->version(), true);
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
            'supports'              => ['title', 'editor'],
            'capabilities'          => ['create_posts' => 'do_not_allow'],
            'map_meta_cap'          => true,
            'hierarchical'          => false,
            'public'                => false,
            'show_ui'               => true,
            'show_in_menu'          => "letterify-menu",
            'menu_icon'             => 'dashicons-format-aside',
            'menu_position'         => 5,
            'show_in_admin_bar'     => false,
            'show_in_nav_menus'     => false,
            'can_export'            => true,
            'has_archive'           => false,
            'publicly_queryable'    => false,
            'rewrite'               => false,
            'query_var'             => true,
            'exclude_from_search'   => true,
            'capability_type'       => 'page',
            'show_in_rest'          => true,
            'rest_base'             => 'letterify-orders',
		);

		register_post_type( 'letterify-orders', $args );
        flush_rewrite_rules();
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