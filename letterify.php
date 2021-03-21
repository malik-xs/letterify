<?php
/**
 * Plugin Name: Lettetify
 * Plugin URI:  https://github.com/malik-xs/letterify
 * Description: Letter printing plugin
 * Version: 1.0.3
 * Author: Xian Malik
 * Author URI: 
 * Text Domain: letterify
 * License:  GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
  
defined('ABSPATH') || exit;

require_once 'plugin.php';  

final class Letterify
{
	public static function version() {
		return '1.0.3';
	}

	static function author_name() {
		return 'Xian Malik';
	}

	public function __construct() {
		do_action('letterify/before_loaded');
		add_action('letterify/plugins_loaded', [$this, 'init'], 100);
		do_action('letterify/plugins_loaded');
		do_action('letterify/after_loaded');
	}

	public function init() {
		Letterify\Plugin::instance()->init();
	}
}

new Letterify();


function activate_letterify() {
//   \Letterify\Core\Letterify_Template_Cpt::instance()->init();
   flush_rewrite_rules();
}


function deactivate_letterify() {

}

register_activation_hook(__FILE__, 'activate_letterify');

register_deactivation_hook(__FILE__, 'deactivate_letterify');

  