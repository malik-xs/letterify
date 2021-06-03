jQuery( document ).ready( function( $ ) {
	'use strict';

	$( '.letterify-product-option-form-submit' ).on( 'click', function( e ) {
		e.preventDefault();
		let form_data = new FormData();
		let sub_data = {};
		let el = $( '.letterify-product-option-form input[type="checkbox"]' );
		el.each( function() {
			if ( $( this ).is(":checked") )
				sub_data[ $(this).attr( 'name' ) ] = $( this ).is(":checked");
		});

		form_data.append( 'letterify-settings', sub_data );

		jQuery.ajax( {
			type: 'post',
			url: letterify_admin_product_var.ajax_url,
			data: {
				action: 'letterify_save_meta',
				post_id: $( this ).data( 'post_id' ),
				letterify_settings: sub_data,
			},
			success: ( response ) => {
				alert("Successfully Saved");
			},
			error: ( error ) => {
				alert("Error: " + error);
			},
		} );
	} )
} );
