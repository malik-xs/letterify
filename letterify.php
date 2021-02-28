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
require_once 'autoloader.php';

final class Letterify
{
	public static function version() {
		return '1.0.0';
	}

	static function author_name() {
		return 'Xian Malik';
	}

	public function letterify_form_function() {
		return "hello!";
	}

	public function __construct() {
		// do_action('letterify/before_loaded');

		add_action('plugins_loaded', [$this, 'init'], 100);

		do_action('plugins_loaded');
		// do_action('letterify/after_loaded');
	}

	public function init() {

		Letterify\Plugin::instance()->init();
	}
}


new Letterify();


function activate_letterify() {

//   \Letterify\Core\Letterify_Template_Cpt::instance()->init();
//   flush_rewrite_rules();
}


function deactivate_letterify() {

}

register_activation_hook(__FILE__, 'activate_letterify');

register_deactivation_hook(__FILE__, 'deactivate_letterify');

  