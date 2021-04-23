export default class TextToImage extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			img: '',
			err: '',
			color: this.props.color,
			value: this.props.value !== '' ? this.props.value : 'Enter Your Text',
			fontFamily: this.props.font,
			fontSize: 42,
		};
	}

	componentDidMount() {
		const { value, color, fontFamily, fontSize } = this.state;

		const font = 'bold ' + fontSize + 'px "' + fontFamily + '"';

		let canvasTxt = document.getElementById( 'canvasComponent' ).getContext( '2d' );

		canvasTxt.canvas.width = 500;
		canvasTxt.canvas.height = 100;
		canvasTxt.clearRect( 0, 0, 500, 100 );
		canvasTxt.font = font;
		canvasTxt.fillStyle = color;
		canvasTxt.textAlign = 'center';
		canvasTxt.textBaseline = 'middle';

		let text = this.props.connect === 'individual' ? value.split( '' ).join( ' ' ) : value;

		// Canvas can tell us the width
		this.props.callbackWidth( canvasTxt.measureText( value ).width / fontSize );

		canvasTxt.fillText( text, canvasTxt.canvas.width / 2, canvasTxt.canvas.height / 2 );

		this.setState( {
			img: canvasTxt.canvas.toDataURL(),
		} );
	}

	render() {
		return (
			<div>
				<canvas
					id="canvasComponent"
					style={ { display: 'none' } }
				/>
				{
					this.state.img
						? <img id="imageComponent" src={ this.state.img } />
						: null
				}
			</div>
		);
	}
}
