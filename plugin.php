<?php

namespace Letterify;

defined('ABSPATH') || exit;

/**
 * Plugin final Class.
 * Handles dynamically loading classes only when needed. Check Elementor Plugin, Woocomerce Plugin Loaded or Install.
 *
 * @since 1.0.0
 */
final class Plugin {
	const TEXT_DOMAIN       = 'letterify';
	// const CPT_WOO_BUILDER   = 'wooengine-template';
	// const CSS_CLASS_PREFIX  = 'wooengine_';
	// const GENERAL_PREFIX    = 'web__';


	private static $instance;
	private $entries;
	private $forms;


	/**
	 * __construct function
	 * @since 1.0.0
	 */
	public function __construct() {
		// load autoload method 
		Autoloader::run();
	}

	function letterify_form_function() {
		$tpl = trailingslashit(plugin_dir_path(__FILE__)) . 'templates/default.php';

		include $tpl;
	}

	/**
	 * Public function init.
	 * call function for all
	 *
	 * @since 1.0.0
	 */
	public function init() {
		#Loading the scripts and styles
		add_action('wp_enqueue_scripts', [$this, 'js_css_public']);

		add_action('wp_ajax_woocommerce_ajax_add_to_cart', [$this, 'woocommerce_ajax_add_to_cart']);
		add_action('wp_ajax_nopriv_woocommerce_ajax_add_to_cart', [$this, 'woocommerce_ajax_add_to_cart']);

		add_action( 'wp_ajax_ajax_save_photo',  [$this, 'ajax_save_photo'] );
		add_action( 'wp_ajax_nopriv_ajax_save_photo',  [$this, 'ajax_save_photo'] );

		// add_action('admin_enqueue_scripts', [$this, 'js_css_admin']);
		add_shortcode('letterify', [$this, 'letterify_form_function']);
	}


	function ajax_save_photo() {
		$upload_dir  = wp_upload_dir();
		$upload_path = str_replace( '/', DIRECTORY_SEPARATOR, $upload_dir['path'] ) . DIRECTORY_SEPARATOR;

		$img             = str_replace( 'data:image/png;base64,', '', $_POST['imgBase64'] );
		$img             = str_replace( ' ', '+', $img );
		$decoded         = base64_decode( $img );
		$filename        = $_POST['title'] . '.png';
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
		
		wp_die();
	}

	function woocommerce_ajax_add_to_cart() {
		$product_id = apply_filters('woocommerce_add_to_cart_product_id', absint($_POST['product_id']));
		$quantity = empty($_POST['quantity']) ? 1 : wc_stock_amount($_POST['quantity']);
		$variation_id = absint($_POST['variation_id']);
		$passed_validation = apply_filters('woocommerce_add_to_cart_validation', true, $product_id, $quantity);
		$product_status = get_post_status($product_id);

		if ($passed_validation && WC()->cart->add_to_cart($product_id, $quantity, $variation_id) && 'publish' === $product_status) {

			do_action('woocommerce_ajax_added_to_cart', $product_id);

			if ('yes' === get_option('woocommerce_cart_redirect_after_add')) {
				wc_add_to_cart_message(array($product_id => $quantity), true);
			}
			
			add_action( 'woocommerce_before_calculate_totals', [$this, 'woocommerce_custom_price_to_cart_item'], 99, WC()->cart->get_cart() );

			// WC_AJAX :: get_refreshed_fragments();

		} else {

			$data = array(
				'error' => true,
				'product_url' => apply_filters('woocommerce_cart_redirect_after_error', get_permalink($product_id), $product_id));

			echo wp_send_json($data);
		}

		wp_die();
	}

	function woocommerce_custom_price_to_cart_item( $cart_object ) {  
		if( !WC()->session->__isset( "reload_checkout" )) {
			foreach ( $cart_object->cart_contents as $key => $value ) {
				if( isset( $_POST['price'] ) ) {
					//for woocommerce version lower than 3
					//$value['data']->price = $_POST['price'];
					//for woocommerce version +3
					$value['data']->set_price($_POST['price']);
				}
			}  
		}  
	}
	/**
	 * Public function version.
	 * set for plugin version
	 *
	 * @since 1.0.0
	 */
	public function version() {
		return '1.0.0';
	}


	/**
	 * Public function package_type.
	 * set for plugin package type
	 *
	 * @since 1.0.0
	 */
	public function package_type() {
		return 'free';
	}


	/**
	 * Public function plugin_url.
	 * set for plugin url
	 *
	 * @since 1.0.0
	 */
	public function plugin_url() {
		return trailingslashit(plugin_dir_url(__FILE__));
	}


	/**
	 * Public function plugin_dir.
	 * set for plugin dir
	 *
	 * @since 1.0.0
	 */
	public function plugin_dir() {
		return trailingslashit(plugin_dir_path(__FILE__));
	}


	/**
	 * Public function core_url .
	 * set for plugin  core folder url
	 *
	 * @since 1.0.0
	 */
	public function core_url() {
		return $this->plugin_url() . 'core/';
	}


	/**
	 * Public function core_dir .
	 * set for plugin  core folder dir
	 *
	 * @since 1.0.0
	 */
	public function core_dir() {
		return $this->plugin_dir() . 'core/';
	}


	/**
	 * Public function base_url .
	 * set for plugin  base folder url
	 *
	 * @since 1.0.0
	 */
	public function base_url() {
		return $this->plugin_url() . 'base/';
	}


	/**
	 * Public function base_dir .
	 * set for plugin  base folder dir
	 *
	 * @since 1.0.0
	 */
	public function base_dir() {
		return $this->plugin_dir() . 'base/';
	}


	/**
	 * Public function utils_url .
	 * set for plugin  utils folder url
	 *
	 * @since 1.0.0
	 */
	public function utils_url() {
		return $this->plugin_url() . 'utils/';
	}


	/**
	 * Public function utils_dir .
	 * set for plugin  utils folder dir
	 *
	 * @since 1.0.0
	 */
	public function utils_dir() {
		return $this->plugin_dir() . 'utils/';
	}


	/**
	 * Public function widgets_url .
	 * set for plugin  widget folder url
	 *
	 * @since 1.0.0
	 */
	public function widgets_url() {
		return $this->plugin_url() . 'widgets/';
	}


	/**
	 * Public function widgets_dir .
	 * set for plugin  widget folder dir
	 *
	 * @since 1.0.0
	 */
	public function widgets_dir() {
		return $this->plugin_dir() . 'widgets/';
	}


	public function text_domain() {
		return self::TEXT_DOMAIN;
	}


	/**
	 * Public function js_css_public .
	 * Include public function
	 *
	 * @since 1.0.0
	 */
	public function js_css_public() {
        wp_enqueue_style('letterify-css', plugin_dir_url(__FILE__) . 'public/assets/css/style.css', false, '1.0.0');

        wp_enqueue_script('htm', plugin_dir_url(__FILE__) . 'public/assets/js/htm.js', null, '1.0.0', true);

        wp_enqueue_script('letterify-js', plugin_dir_url(__FILE__) . 'public/assets/js/app.js', array('htm', 'jquery', 'wp-element'), '1.0.0', true);
		wp_localize_script('letterify-js', 'ajaxurl', admin_url('admin-ajax.php'));
	}


	public function js_css_admin() {

		// get screen id
		// $screen = get_current_screen();

		// $cptName = Cpt::get_cpt_name();

		// if(in_array($screen->id, ['edit-' . $cptName, 'wwb_page_mt-form-settings'])) {

		// 	wp_enqueue_style('wooengine-ui', plugin_dir_url(__FILE__) . 'assets/css/design-ui.css', false, $this->version());
		// 	wp_enqueue_style('wooengine-admin-style', plugin_dir_url(__FILE__) . 'assets/css/admin-style.css', false, $this->version());

		// 	wp_enqueue_script('wooengine-ui', plugin_dir_url(__FILE__) . 'assets/js/ui.min.js', array(), $this->version(), true);
		// 	wp_enqueue_script('wooengine-admin-script', plugin_dir_url(__FILE__) . 'assets/js/admin-script.js', array(), $this->version(), true);
		// 	wp_localize_script('wooengine-admin-script', 'wwb_api', array(
		// 		'resturl' => get_rest_url(),
		// 		'siteurl' => get_option('siteurl'),
		// 		'nonce'   => wp_create_nonce('wp_rest'),
		// 	));
		// }

		// if($screen->id == 'edit-wooengine-entry' || $screen->id == 'wooengine-entry') {
		// 	wp_enqueue_style('wooengine-ui', plugin_dir_url(__FILE__) . 'assets/css/design-ui.css', false, $this->version());
		// 	wp_enqueue_script('wooengine-entry-script', plugin_dir_url(__FILE__) . 'assets/js/admin-entry-script.js', array(), $this->version(), true);
		// }

	}


	function admin_menu() {
		add_menu_page(
			esc_html__('Letterify', 'shopengine'),
			esc_html__('Letterify', 'shopengine'),
			'read',
			'wooengine-menu',
			'',
			'dashicons-feedback',
			5
		);
	}

	public static function instance() {
		if(!self::$instance) {
			self::$instance = new self();
		}

		return self::$instance;
	}

}