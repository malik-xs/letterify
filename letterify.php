<?php
/**
 * Plugin Name: Lettetify
 * Plugin URI:  https://github.com/malik-xs/letterify
 * Description: Letter printing plugin
 * Version: 1.1.13
 * Author: Xian Malik
 * Author URI: 
 * Text Domain: letterify
 * License:  GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

defined('ABSPATH') || exit;

require_once 'plugin.php';  

final class Letterify {
	public static function version() {
		return '1.1.13';
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
	$colors = '[{"value":"#ffffff","label":"White"},{"value":"#000000","label":"Black"},{"value":"#971a1e","label":"Barn Red"},{"value":"#D40000","label":"RedMetallic Rose"},{"value":"#DAB0AA","label":"Princess Pink"},{"value":"#fcf1f7","label":"Lisa Pink"},{"value":"#f199bf","label":"#f199bf"},{"value":"#e3568a","label":"#e3568a"},{"value":"#FC9E8B","label":"#FC9E8B"},{"value":"#f16728","label":"#f16728"},{"value":"#E87400","label":"#E87400"},{"value":"#faed12","label":"#faed12"},{"value":"#faf8ae","label":"#faf8ae"},{"value":"#e4ecb0","label":"#e4ecb0"},{"value":"#abcf37","label":"#abcf37"},{"value":"#97b94b","label":"#97b94b"},{"value":"#119f49","label":"#119f49"},{"value":"#0f643d","label":"#0f643d"},{"value":"#1e214a","label":"#1e214a"},{"value":"#0d5488","label":"#0d5488"},{"value":"#083B9C","label":"#083B9C"},{"value":"#70c1ec","label":"#70c1ec"},{"value":"#63888E","label":"#63888E"},{"value":"#88cfbd","label":"#88cfbd"},{"value":"#A2E8D9","label":"#A2E8D9"},{"value":"#dee8e7","label":"#dee8e7"},{"value":"#8882b2","label":"#8882b2"},{"value":"#7d52a1","label":"#7d52a1"},{"value":"#3D266E","label":"#3D266E"},{"value":"#b783a7","label":"#b783a7"},{"value":"#E5DDD0","label":"#E5DDD0"},{"value":"#fef7dd","label":"#fef7dd"},{"value":"#D3AD12","label":"#D3AD12"},{"value":"#c0ac94","label":"#c0ac94"},{"value":"#6d4835","label":"#6d4835"},{"value":"#291A00","label":"#291A00"},{"value":"#B5B0AC","label":"#B5B0AC"},{"value":"#808281","label":"#808281"},{"value":"#494B4E","label":"#494B4E"}]';
	$colors = json_encode($colors);
	
	$fonts = '[{"value":"Almibar","label":"Almibar"},{"value":"AlwaysAGoodTime","label":"AlwaysAGoodTime"},{"value":"Betterfly","label":"Betterfly"},{"value":"BreakingBread","label":"BreakingBread"},{"value":"Brusher","label":"Brusher"},{"value":"BukhariScript","label":"BukhariScript"},{"value":"GrandHotel","label":"GrandHotel"},{"value":"HickoryJack","label":"HickoryJack"},{"value":"Kaleidos","label":"Kaleidos"},{"value":"Lavanderia","label":"Lavanderia"},{"value":"Norican","label":"Norican"},{"value":"PermanentMarker","label":"PermanentMarker"},{"value":"Sanelma","label":"Sanelma"},{"value":"Sophia","label":"Sophia"},{"value":"StorytellerScript","label":"StorytellerScript"}]';
	$fonts = json_encode($fonts);

	if ( ! get_option("__letterify_colors") ){
		add_option("__letterify_colors", $colors);
	}

	if ( ! get_option("__letterify_fonts") ){
		add_option("__letterify_fonts", $fonts);
	}

//   \Letterify\Core\Letterify_Template_Cpt::instance()->init();
	flush_rewrite_rules();
}


function deactivate_letterify() {

}

register_activation_hook(__FILE__, 'activate_letterify');

register_deactivation_hook(__FILE__, 'deactivate_letterify');

  