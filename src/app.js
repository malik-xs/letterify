// import GoogleFontLoader from 'react-google-font-loader';
import Select from 'react-select-2';
import TextToImage from './utils/TextToImage';
import 'react-select-2/dist/css/react-select.css';

const fonts = [
	'Almibar',
	'PermanentMarker',
	'SourceCodePro',
];

const colors = [
	{ value: '#ffffff', label: '#ffffff' },
	{ value: '#000000', label: '#000000' },
	{ value: '#971a1e', label: '#971a1e' },
	{ value: '#D40000', label: '#D40000' },
	{ value: '#DAB0AA', label: '#DAB0AA' },
	{ value: '#fcf1f7', label: '#fcf1f7' },
	{ value: '#f199bf', label: '#f199bf' },
	{ value: '#e3568a', label: '#e3568a' },
	{ value: '#FC9E8B', label: '#FC9E8B' },
	{ value: '#f16728', label: '#f16728' },
	{ value: '#E87400', label: '#E87400' },
	{ value: '#faed12', label: '#faed12' },
	{ value: '#faf8ae', label: '#faf8ae' },
	{ value: '#e4ecb0', label: '#e4ecb0' },
	{ value: '#abcf37', label: '#abcf37' },
	{ value: '#97b94b', label: '#97b94b' },
	{ value: '#119f49', label: '#119f49' },
	{ value: '#0f643d', label: '#0f643d' },
	{ value: '#1e214a', label: '#1e214a' },
	{ value: '#0d5488', label: '#0d5488' },
	{ value: '#083B9C', label: '#083B9C' },
	{ value: '#70c1ec', label: '#70c1ec' },
	{ value: '#63888E', label: '#63888E' },
	{ value: '#88cfbd', label: '#88cfbd' },
	{ value: '#A2E8D9', label: '#A2E8D9' },
	{ value: '#dee8e7', label: '#dee8e7' },
	{ value: '#8882b2', label: '#8882b2' },
	{ value: '#7d52a1', label: '#7d52a1' },
	{ value: '#3D266E', label: '#3D266E' },
	{ value: '#b783a7', label: '#b783a7' },
	{ value: '#E5DDD0', label: '#E5DDD0' },
	{ value: '#fef7dd', label: '#fef7dd' },
	{ value: '#D3AD12', label: '#D3AD12' },
	{ value: '#c0ac94', label: '#c0ac94' },
	{ value: '#6d4835', label: '#6d4835' },
	{ value: '#291A00', label: '#291A00' },
	{ value: '#B5B0AC', label: '#B5B0AC' },
	{ value: '#808281', label: '#808281' },
	{ value: '#494B4E', label: '#494B4E' },
];

class LetterifyEl extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			value: '',
			height: '',
			width: 0,
			finish: '',
			color: '#343234',
			font: 'Almibar',
			quantity: 1,
			loading: false,
			price: 0.59,
		};
	}

	componentDidUpdate( ) {
	}

	componentDidMount( ) {

	}

	callbackWidth = ( v ) => {
		const { height } = this.state;
		const width = Number( v ) * Number( height );
		console.log( width );
		// this.handleChange( { target: { name: 'width', value: width } } );
	}

	handleChange = ( e ) => {
		const { name, value } = e.target;

		if ( this.state[name] !== value ) {
			this.setState( {
				[name]: value,
			} );
		}
	}

	handleSubmit = ( e ) => {
		e.preventDefault();
		this.setState( { loading: true } );

		var image = document.getElementById( 'canvasComponent' );
		var imageURL = image.toDataURL( 'image/png' );

		jQuery.ajax( {
			type: 'POST',
			url: this.props.ajaxurl,
			data: { action: 'ajax_save_photo', title: this.state.value + Math.floor( ( Math.random() * 100 ) + 1 ), imgBase64: imageURL },
		} ).done( function() {
			console.log( 'saved' );
		} );

		var data = {
			action: 'woocommerce_ajax_add_to_cart',
			product_id: 163,
			product_sku: '',
			price: 500,
			quantity: this.state.quantity,
			variation_id: null,
		};

		// jQuery( document.body ).trigger( 'adding_to_cart', [ e.target, data ] );

		jQuery.ajax( {
			type: 'post',
			url: wc_add_to_cart_params.ajax_url,
			data: data,
			beforeSend: ( response ) => {
				// $thisbutton.removeClass('added').addClass('loading');
			},
			complete: ( response ) => {
				setTimeout( ( ) => {
					this.setState( { loading: false } );
				}, 1000 );
				// $thisbutton.addClass('added').removeClass('loading');
			},
			success: ( response ) => {
				console.log( response );
				if ( ! response.error ) {
					// jQuery( document.body ).trigger('added_to_cart', [ response.fragments, response.cart_hash, e.target ]);
				}
			},
		} );
	}

	render() {
		const parent = this;
		const { state } = parent;

		return (
			<>
				<form>
					<div className="xm-input-wrap text-center">
						{ React.createElement( () => {
							return (
								<TextToImage
									font={ state.font }
									color={ state.color }
									callbackWidth={ this.callbackWidth }
									value={ state.value || '' }
									x="0" y="10" />
							);
						} ) }
					</div>
					<div className="xm-input-wrap">
						<input
							name='value'
							className="xm-entry-text"
							value={ state.value }
							onChange={ this.handleChange }
							placeholder={ 'Enter your text' } />
					</div>
					<div className="xm-input-wrap">
						<label htmlFor="font" className="text-right"><strong>Choose Font</strong></label>
						<select name="font" id="font" onChange={ this.handleChange } value={ state.font }>
							{ fonts.map( ( f, i ) => <option key={ i } value={ f }>{ f }</option> ) }
						</select>
					</div>
					<div className="xm-input-wrap">
						<label htmlFor="finish" className="text-right"><strong>Finish</strong></label>
						<select name="finish" id="finish" onChange={ this.handleChange } value={ state.finish }>
							<option value="">Choose Finish...</option>
							<option value="painted">Painted</option>
							<option value="unpainted">Unpainted</option>
						</select>
					</div>
					<div className="xm-input-wrap" style={ { display: ( state.finish === '' ? 'none' : 'flex' ) } }>
						<label htmlFor="height" className="text-right"><strong>Height</strong></label>
						<select name="height" id="height" onChange={ this.handleChange } value={ state.height }>
							<option value="">Choose Height...</option>
							<option value="1" style={ { display: ( state.finish === 'painted' ? 'none' : 'block' ) } }>1 inch</option>
							<option value="2" style={ { display: ( state.finish === 'painted' ? 'none' : 'block' ) } }>2 inch</option>
							<option value="3" style={ { display: ( state.finish === 'painted' ? 'none' : 'block' ) } }>3 inch</option>
							<option value="4">4 inch</option>
							<option value="5">5 inch</option>
							<option value="6">6 inch</option>
							<option value="7">7 inch</option>
							<option value="8">8 inch</option>
							<option value="9">9 inch</option>
							<option value="10">10 inch</option>
							<option value="11">11 inch</option>
							<option value="12">12 inch</option>
							<option value="13">13 inch</option>
							<option value="14">14 inch</option>
							<option value="15">15 inch</option>
							<option value="16">16 inch</option>
							<option value="17">17 inch</option>
							<option value="18">18 inch</option>
						</select>
					</div>
					<div className="xm-input-wrap" style={ { display: ( state.height === '' ? 'none' : 'flex' ) } }>
						<label htmlFor="thickness" className="text-right"><strong>Thickness</strong></label>
						<select name="thickness" id="thickness" onChange={ this.handleChange }>
							<option value="">Choose Thickness...</option>
							<option value="1/8 inch">1/8 inch</option>
							<option value="1/4 inch">1/4 inch</option>
							<option value="3/8 inch">3/8 inch</option>
							<option value="1/2 inch">1/2 inch</option>
							<option value="3/4 inch">3/4 inch</option>
						</select>
					</div>

					<div className="xm-input-wrap" style={ { display: ( this.state.height > 4 ? 'flex' : 'none' ) } }>
						<label htmlFor="mounting" className="text-right"><strong>Mounting</strong></label>
						<select name="mounting" id="mounting" onChange={ this.handleChange }>
							<option value="">- Select an Option -</option>
							<option value="">Hanging Strips & Paper Template (+10%)</option>
							<option value="">None</option>
						</select>
					</div>

					<div className="xm-input-wrap" style={ { display: ( this.state.finish === 'painted' ? 'flex' : 'none' ) } }>
						<label htmlFor="color" className="text-right"><strong>Color</strong></label>
						<Select
							name="color"
							id="color"
							onChange={ this.handleChange }
							options={ colors } />
					</div>

					<div className="xm-input-wrap text-center xm-input-sm">
						<p>
							<strong>Approx. Width: </strong>
							{
								state.value !== '' && state.height !== ''
									? state.width + '"'
									: 'Enter text and select a Height to see Approx. Width.'
							}
						</p>
					</div>
					<div className="xm-input-wrap xm-input-sm">
						<p>
							<strong>Total Letter Count: </strong>
							{ state.value.replace( /\s/g, '' ).length }
						</p>
					</div>
					<div className="xm-input-wrap xm-input-full">
						<label htmlFor="thickness" className="text-right"><strong>Letter Connect</strong></label>
						<select name="letterConnect" id="letterConnect" onChange={ this.handleChange } value={ state.letterConnect }>
							<option value="">-- Please Select --</option>
							<option value="502" price="0">As Shown </option>
							<option value="503" price="0">Each Word Connected </option>
							<option value="504" price="0">Individual Letters </option>
						</select>
					</div>
					<div className="xm-input-wrap">
						<div className="xm-input-frag">
							Starting At: ${
								( 0.59 * ( this.state.value.replace( /\s/g, '' ).length > 0 ? this.state.value.replace( /\s/g, '' ).length : 1 ) * ( state.quantity > 0 ? state.quantity : 1 ) ).toFixed( 2 )
							}
						</div>
						<div className="xm-input-frag">
							<label htmlFor="quantity" className="text-right"><strong>Qty</strong></label>
							<input type='number'
								name='quantity' value={ state.quantity }
								onChange={ this.handleChange } placeholder={ 'Enter your size' } />
						</div>
						<div className="xm-input-frag">
							<input
								type='submit' name='submit'
								className='xm-input-submit'
								disabled={ state.loading }
								value={ state.loading ? 'Loading...' : 'Add to cart' }
								onClick={ this.handleSubmit } />
						</div>
					</div>
				</form>
			</>
		);
	}
}

/**
 * Init Function
 *
 * @param $scope
 */
let init = function( $scope ) {
	const [ el ] = $scope.find( '.xm-letterify-form-wrapper' );
	if ( ! el ) {
		return;
	}
	const { ajaxurl, wpNonce } = el.dataset;

	const [ templateEl ] = $scope.find( '.xm-letterify-template' );
	if ( ! templateEl ) {
		return;
	}

	/**
	 * Renders the main component
	 */
	ReactDOM.render(
		React.createElement( LetterifyEl, {
			templateEl: templateEl,
			ajaxurl: ajaxurl,
			wpNonce: wpNonce,
		} ),
		el,
	);
};

jQuery( window ).on( 'elementor/frontend/init', () => {

} ).on( 'load', function() {
	const shortcodeEls = document.querySelectorAll( '.xm-letterify' );

	shortcodeEls.forEach( ( el ) => {
		init( jQuery( el ) );
	} );
} );
