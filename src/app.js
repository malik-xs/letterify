// import GoogleFontLoader from 'react-google-font-loader';
import TextToImage from './utils/TextToImage';

class LetterifyEl extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			value: '',
			size: 24,
			font: 'Roboto',
		};
	}

	componentDidUpdate( ) {

	}

	componentDidMount( ) {

	}

	handleChange = ( e ) => {
		const { name, value } = e.target;
		this.setState( {
			[name]: value,
		} );
	}

	render() {
		const parent = this;
		const { state } = parent;

		return (
			<>
				<form>
					{ /* <GoogleFontLoader fonts={ [ { font: state.font } ] } /> */ }
					<div className="xm-input-wrap">
						{ React.createElement( () => {
							return <TextToImage name={ state.value || '' } x="0" y="10" font={ state.font } />;
						} ) }
					</div>
					<div className="xm-input-wrap">
						<input
							name='value'
							value={ state.value }
							onChange={ this.handleChange }
							placeholder={ 'Enter your text' } />
					</div>
					<div className="xm-input-wrap">
						<label htmlFor="font"></label>
						<select name="font" id="font">
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option>
						</select>
					</div>
					<div className="xm-input-wrap">
						<input type='number' name='size' value={ state.size } onChange={ this.handleChange } placeholder={ 'Enter your size`' } />
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
	const [ el ] = $scope.find( '.xm-letterify-form-wrapper' ); if ( ! el ) {
		return;
	}

	const [ templateEl ] = $scope.find( '.xm-letterify-template' ); if ( ! templateEl ) {
		return;
	}

	/**
	 * Renders the main component
	 */
	ReactDOM.render(
		React.createElement( LetterifyEl, { templateEl: templateEl } ),
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
