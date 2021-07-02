jQuery( document ).ready( function( $ ) {
	'use strict';

	/**
	 * Product Option Settings attribute toggler fn
	 * 
	 */
	$( '#letterify_values' ).on( 'click', '.letterify-product-option-master-button', function( e ) {
		e.preventDefault();

		let _target = $( '.letterify-product-option-form input[type="checkbox"]' ),
			value = $( this ).data( 'value' );

		_target.attr('checked', _ => value === 'enable' ? 'checked' : null );
	} );

	/**
	 * Product Option Settings attribute data submit fn
	 * 
	 */
	$( '.letterify-product-option-form-submit' ).on( 'click', function( e ) {
		e.preventDefault();
		let sub_data = {},
			el = $( '.letterify-product-option-form input[type="checkbox"]' ),
			data;

		if ( $( '#letterify-settings--status-val' ).is(":checked") ) {
			data = {
				action: 'letterify_save_meta_status',
				post_id: $( this ).data( 'post_id' ),
				letterify_settings_status: $( '#letterify-settings--status-val' ).is(":checked") ? 'true' : '',
			};
		} else {
			console.log( 'naah' );
			el.each( function() {
				if ( $( this ).is(":checked") )
					sub_data[ $(this).attr( 'name' ) ] = $( this ).is(":checked");
			} );

			if ( $('#height-multiplier').val() > 0 ) { sub_data['height-multiplier'] = $('#height-multiplier').val(); }
			if ( $('#thickness-multiplier').val() > 0 ) { sub_data['thickness-multiplier'] = $('#thickness-multiplier').val(); }

			data = {
				action: 'letterify_save_meta',
				post_id: $( this ).data( 'post_id' ),
				letterify_settings: sub_data,
			};
		}
		console.log( data );
		jQuery.ajax( {
			type: 'post',
			url: letterify_admin_product_var.ajax_url,
			data: data,
			success: ( response ) => {
				alert("Successfully Saved");
			},
			error: ( error ) => {
				alert("Error: " + error);
			},
		} );
	} )
} );
