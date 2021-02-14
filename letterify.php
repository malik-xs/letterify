<?php
/**
 * Plugin Name: Lettetify
 * Plugin URI:  https://github.com/malik-xs/letterify
 * Description: Letter printing plugin
 * Version: 1.0.0
 * Author: Xian Malik
 * Author URI:  https://wpmet.com
 * Text Domain: xm-letterify
 * License:  GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
  
  
defined('ABSPATH') || exit;
require 'plugin.php';
  
  
final class Letterify
{

	/**
	 * Plugin Version
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	public static function version() {
		return '1.0.0';
	}


	/**
	 * Package type
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	public static function package_type() {
		return 'free';
	}


	/**
	 * Product ID
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	static function product_id() {
		return '0';
	}


	/**
	 * Plugin Author Name
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	static function author_name() {
		return 'Xian Malik';
	}


	/**
	 * Minimum Elementor Version required to run the plugin.
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	public static function min_el_version() {
		return '3.0.0';
	}


	/**
	 * Minimum PHP Version required to run the plugin
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	public static function min_php_version() {
		return '7.0';
	}


	/**
	 * Minimum Woocommerce version required to run the plugin.
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	public static function min_woo_version() {
		return '4.1';
	}


	/**
	 * Plugin file plugins's root file.
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	public static function plugin_file() {
		return __FILE__;
	}


	/**
	 * Plugin url
	 *
	 * @since 1.0.0
	 * @return mixed
	 */
	public static function plugin_url() {
		return trailingslashit(plugin_dir_url(__FILE__));
	}


	/**
	 * Plugin dir
	 *
	 * @since 1.0.0
	 * @return mixed
	 */
	public static function plugin_dir() {
		return trailingslashit(plugin_dir_path(__FILE__));
	}


	/**
	 * Plugin's widget directory.
	 *
	 * @since 1.0.0
	 * @return string
	 */
	public static function widget_dir() {
		return self::plugin_dir() . 'widgets/';
	}


	/**
	 * Plugin's widget url.
	 *
	 * @since 1.0.0
	 * @return string
	 */
	public static function widget_url() {
		return self::plugin_url() . 'widgets/';
	}


	/**
	 *
	 * @since 1.0.0
	 * @return string
	 */
	public static function views_dir() {
		return self::plugin_dir() . 'views/';
	}


	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {

		do_action('letterify/before_loaded');

	//   add_action('init', [$this, 'i18n']);

		add_action('plugins_loaded', [$this, 'init'], 100);

		do_action('letterify/after_loaded');
	}


	/**
	 * Load text domain
	 *
	 * Load plugin localization files.
	 * Fired by `init` action hook.
	 *
	 * @since 1.0.0
	 * @access public
	 */
//   public function i18n() {

// 	  load_plugin_textdomain('wooengine', false, self::plugin_dir() . 'languages/');
//   }


	public function init() {

		Letterify\Plugin::instance()->init();
	}
}


new Letterify();


function activate_letterify() {

//   \Wooengine\Core\Wooengine_Template_Cpt::instance()->init();
//   flush_rewrite_rules();
}


function deactivate_letterify() {

}

register_activation_hook(__FILE__, 'activate_letterify');

register_deactivation_hook(__FILE__, 'deactivate_letterify');

  