<?php
global $post;
$settings = (object) array();

if ( !empty( get_post_meta( $post->ID, 'letterify-settings', true ) ) ) {
	$settings = get_post_meta( $post->ID, 'letterify-settings', true );
}

$product = wc_get_product( $post->ID );

?>
<div class="xm-letterify">
	<div class="xm-letterify-form-wrapper"
		data-price="<?php echo $product->get_price() ?>"
		data-wpNonce="<?php echo wp_create_nonce("xm_letterify") ?>"
		data-fonts='<?php echo get_option('__letterify_fonts'); ?>'
		data-colors='<?php echo get_option('__letterify_colors'); ?>'
		data-settings=<?php echo $settings ?> >
		<div class="xm-letterify-template"></div>
	</div>
</div>