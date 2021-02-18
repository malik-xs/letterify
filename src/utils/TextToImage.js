export default class TextToImage extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			img: '',
			err: '',
		};
	}

	componentDidMount() {
		const { font } = this.props;

		let canvasTxt = document.getElementById( 'canvasComponent' ).getContext( '2d' );

		canvasTxt.canvas.width = 500;
		canvasTxt.canvas.height = 100;
		canvasTxt.textAlign = 'center';
		canvasTxt.textBaseline = 'middle';
		canvasTxt.font = '24px Arial';

		canvasTxt.fillText( this.props.name, canvasTxt.canvas.width / 2, canvasTxt.canvas.height / 2 );

		// var junction_font = new FontFace( font, 'url("https://fonts.googleapis.com/css2?family=' + font + '&display=swap")' );
		// junction_font.load().then( function( loaded_face ) {
		// 	document.fonts.add( loaded_face );
		// 	canvasTxt.font = '24px ' + loaded_face;
		// } );

		this.setState( {
			img: canvasTxt.canvas.toDataURL(),
		} );
	}

	render() {
		return (
			<div>
				<canvas id="canvasComponent" style={ { display: 'none' } } />
				{
					this.state.img.length > 0
						? <img id="imageComponent" src={ this.state.img } />
						: null
				}
			</div>
		);
	}
}
