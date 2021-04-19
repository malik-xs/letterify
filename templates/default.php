<?php
global $post;
$settings = (object) array();

if ( !empty( get_post_meta( $post->ID, 'letterify-finish', true ) ) ) {
	$settings->finish = get_post_meta( $post->ID, 'letterify-finish', true );
}

if ( !empty( get_post_meta( $post->ID, 'letterify-color', true ) ) ) {
	$settings->color = get_post_meta( $post->ID, 'letterify-color', true );
}

$product = wc_get_product( $post->ID );

?>
<div class="xm-letterify">
	<div class="xm-letterify-form-wrapper"
		data-price="<?php echo $product->get_price() ?>"
		data-ajaxurl="<?php echo admin_url('admin-ajax.php') ?>"
		data-wpNonce="<?php echo wp_create_nonce("xm_letterify") ?>"
		data-colors=<?php echo stripslashes( preg_replace( '/\s*/m', '', json_decode( get_option('__letterify_colors') ) )) ?>
		data-settings=<?php echo json_encode( $settings ) ?> >
		<div class="xm-letterify-template"></div>
	</div>
</div>