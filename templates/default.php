<?php
global $post;

$settings = '';
if ( !empty( get_post_meta( $post->ID, 'letterify-settings', true ) ) ) {
	$settings = (string) get_post_meta( $post->ID, 'letterify-settings', true );
}
$status = (string) get_post_meta( $post->ID, 'letterify-settings--status', true );

if ( $status === '"true"' || $status === 'true' ) {
	return;
}

$product = wc_get_product( $post->ID );
$fonts = (string) get_option('__letterify_fonts');
$colors = (string) get_option('__letterify_colors');
?>	
<div class="xm-letterify">
	<div class="xm-letterify-form-wrapper"
		data-price="<?php echo $product->get_price() ?>"
		data-wpNonce="<?php echo wp_create_nonce("xm_letterify") ?>"
		data-fonts='<?php echo $fonts; ?>'
		data-colors='<?php echo $colors; ?>'
		data-settings=<?php echo $settings; ?> >
		<div class="xm-letterify-template"></div>
	</div>
</div>