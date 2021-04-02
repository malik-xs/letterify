import Select from 'react-select';
import chroma from 'chroma-js';
import TextToImage from './utils/TextToImage';

const fonts_fallback = require( '../configs/fonts.json' );
const colors_fallback = require( '../configs/colors.json' );

const dot = ( color = '#ccc' ) => ( {
	alignItems: 'center',
	display: 'flex',
	':before': {
		backgroundColor: color,
		borderRadius: 3,
		content: '" "',
		display: 'block',
		marginRight: 8,
		height: 16,
		width: 16,
		border: '1px solid #f2f2f2',
	},
} );

const fontsStyles = {
	control: styles => ( { ...styles } ),
	option: ( styles, { data } ) => {
		return { ...styles, fontFamily: data.value };
	},
	input: ( styles, { data } ) => {
		return { ...styles, fontFamily: data.value };
	},
	placeholder: styles => ( { ...styles } ),
	singleValue: styles => ( { ...styles } ),
};

const colourStyles = {
	control: styles => ( { ...styles, backgroundColor: 'white' } ),
	option: ( styles, { data, isDisabled, isSelected } ) => {
		const color = chroma( data.value );
		return {
			...styles,
			// backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha( 0.1 ).css() : null,
			// color: isDisabled ? '#ccc' : isSelected ? chroma.contrast( color, 'white' ) > 2 ? 'white' : 'black' : data.color,
			cursor: isDisabled ? 'not-allowed' : 'default',
			':active': {
				...styles[':active'],
				backgroundColor: ! isDisabled && ( isSelected ? data.value : color.alpha( 0.3 ).css() ),
			},
			...dot( color.css() ),
		};
	},
	input: styles => ( { ...styles, ...dot() } ),
	placeholder: styles => ( { ...styles, ...dot() } ),
	singleValue: ( styles, { data } ) => ( { ...styles, ...dot( data.value ) } ),
};
class LetterifyEl extends React.Component {
	constructor( props ) {
		super( props );
		const colors_data = JSON.parse( props.colors );

		this.state = {
			value: '',
			height: '',
			width: 0,
			finish: JSON.parse( this.props.settings ).finish || '',
			color: JSON.parse( this.props.settings ).color || '#343234',
			colors: ( props.colors !== '' && Array.isArray( colors_data.data ) ) ? colors_data.data : colors_fallback.data,
			font: 'Almibar',
			connect: '',
			quantity: 1,
			loaded: false,
			price: 0.59,
			mounting: '',
			add_to_cart_text: 'Add to cart',
			added_to_cart: false,
			settings: JSON.parse( this.props.settings ) || {},
		};
	}

	componentDidUpdate( ) { }

	componentDidMount( ) {
		this.setState( { loaded: true } );
	}

	callbackWidth = ( v ) => {
		const { height } = this.state;
		const width = Number( v ) * Number( height );
		this.handleChange( { target: { name: 'width', value: width } } );
	}

	handleChange = ( e ) => {
		if ( e.value ) {
			this.setState( { color: e.value } );
		} else {
			const { name, value } = e.target;
			if ( this.state[name] !== value ) {
				this.setState( {
					[name]: value,
				} );
			}
		}
	}

	handleSubmit = ( e ) => {
		e.preventDefault();
		if ( this.state.added_to_cart ) {
			window.location = letterify_admin_var.cart_url;
			return;
		}

		this.setState( { loading: true } );

		var image = document.getElementById( 'canvasComponent' );
		var imageURL = image.toDataURL( 'image/png' );

		var data = {
			action: 'woocommerce_ajax_add_to_cart',
			value: this.state.value,
			price: ( 0.59 * ( this.state.value.replace( /\s/g, '' ).length > 0 ? this.state.value.replace( /\s/g, '' ).length : 1 ) ).toFixed( 2 ),
			quantity: this.state.quantity,
			variation_id: null,
			imgBase64: imageURL,
			finish: this.state.finish,
			height: this.state.height,
			thickness: this.state.thickness,
			mounting: this.state.mounting,
			color: this.state.color,
			width: this.state.width,
			connect: this.state.connect,
			font: this.state.font,
		};

		jQuery.ajax( {
			type: 'post',
			url: wc_add_to_cart_params.ajax_url,
			data: data,
			beforeSend: ( response ) => {
				this.setState( { add_to_cart_text: 'Adding to cart' } );
			},
			complete: ( response ) => {
				setTimeout( ( ) => {
					this.setState( { loading: false } );
				}, 1000 );
			},
			success: ( response ) => {
				if ( ! response.error ) {
					this.setState( { add_to_cart_text: 'View Cart', added_to_cart: true } );
				}
			},
			error: ( error ) => {
				this.setState( { add_to_cart_text: 'Unsuccessful' } );
				setTimeout( () => {
					this.setState( { add_to_cart_text: 'Add to cart' } );
				}, 1000 );
			},
		} );
	}

	render() {
		const parent = this;
		const { state } = parent;

		if ( ! state.loaded ) {
			return <><h4>Loading</h4></>;
		}

		return (
			<>
				<form>
					<div className="xm-input-wrap text-center">
						{ React.createElement( () => {
							return (
								<TextToImage
									font={ state.font }
									color={ state.color }
									connect={ state.connect }
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
						<Select
							className="" name="font"
							id="font" onChange={ e => this.handleChange( { target: { name: 'font', value: e.value } } ) }
							isSearchable={ false }
							styles={ fontsStyles }
							options={ fonts_fallback.fonts }
						/>
					</div>
					<div className="xm-input-wrap" style={ { display: ( state.settings.finish ? 'none' : 'flex' ) } }>
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

					<div className="xm-input-wrap" style={ { display: ( state.height === '' ? 'none' : 'flex' ) } }>
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
							className="" name="color"
							id="color" onChange={ this.handleChange }
							isSearchable={ false }
							styles={ colourStyles }
							options={ this.state.colors }
						/>
					</div>
					<div className="xm-input-wrap text-center xm-input-sm">
						<p>
							<strong>Approx. Width: </strong>
							{
								state.value !== '' && state.height !== ''
									? state.width.toFixed( 2 ) + '"'
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
						<label htmlFor="connect" className="text-right"><strong>Letter Connect</strong></label>
						<select name="connect" id="connect" onChange={ this.handleChange } value={ state.connect }>
							<option value="">-- Please Select --</option>
							<option value="shown" price="0">As Shown </option>
							<option value="connect" price="0">Each Word Connected </option>
							<option value="individual" price="0">Individual Letters </option>
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
								value={ this.state.add_to_cart_text }
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
	const { letterify_admin_var, wpNonce, colors, settings } = el.dataset;

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
			letterify_admin_var: letterify_admin_var,
			wpNonce: wpNonce,
			colors: colors,
			settings: settings,
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
