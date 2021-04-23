import { Affix, Row, Col, Badge, Input, Button, Tag, Tooltip, Typography, message } from 'antd';
import { CheckCircleFilled, FontColorsOutlined, BgColorsOutlined } from '@ant-design/icons';
import Fonts from '../configs/fonts.json';
import Colors from '../configs/colors.json';

class LetterifyAdminEl extends React.Component {
	constructor( props ) {
		super( props );
		const { colors, fonts } = props;
		let colors_parsed, font_parsed;

		try {
			colors_parsed = JSON.parse( colors );
			colors_parsed = Array.isArray( colors_parsed ) ? colors_parsed : Colors;
		} catch {
			colors_parsed = Colors;
		}
		try {
			font_parsed = JSON.parse( fonts );
			font_parsed = Array.isArray( font_parsed ) ? font_parsed : Fonts;
		} catch {
			font_parsed = Fonts;
		}
		this.state = {
			colors: colors_parsed,
			fonts: font_parsed,
			btn_text: 'Save Settings',
			loaded: false,
			font_input: '',
			font_error: false,
			color_input_1: '',
			color_input_2: '',
			saving: false,
		};
	}

	componentDidUpdate( ) { }

	colorMap = ( color ) => {
		return <span key={ color.value }>
			<Tooltip title={ color.value }>
				<Tag className='letterify-admin-tag' closable
					onClose={ e => {
						e.preventDefault();
						this.setState( { colors: this.state.colors.filter( tag => tag !== color ) } );
					} } >
					<span className='letterify-admin-tag-preview' style={ { background: color.value } }></span>
					{ color.label }
				</Tag>
			</Tooltip>
		</span>;
	};

	fontMap = font => {
		return <span key={ font.value }>
			<Tag className='letterify-admin-tag' closable
				onClose={ e => {
					e.preventDefault();
					this.setState( { fonts: this.state.fonts.filter( tag => tag !== font ) } );
				} } >
				{ font.label }
			</Tag>
		</span>;
	}

	componentDidMount( ) {
		this.setState( { loaded: true } );
	}

	handleColorInput = () => {
		const { colors, color_input_1, color_input_2 } = this.state;
		if ( color_input_2 === '' ) {
			return message.error( 'Color Code field cannot be empty!' );
		}
		this.setState( {
			colors: [ ...colors, ...[ { value: '#' + color_input_2, label: color_input_1 } ] ],
			color_input_1: '',
			color_input_2: '',
		} );
	}

	handleFontInput = () => {
		const { fonts, font_input } = this.state;
		if ( font_input === '' ) {
			return message.error( 'Font field cannot be empty!' );
		}
		this.setState( {
			fonts: [ ...fonts, ...[ { value: font_input, label: font_input } ] ],
			font_input: '',
		} );
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState( { [name]: value } );
	}

	handleSubmit = () => {
		const parent = this;
		jQuery.ajax( {
			type: 'POST',
			url: letterify_admin_var.ajax_url,
			data: {
				action: 'ajax_save_admin_options',
				colors: this.state.colors,
				fonts: this.state.fonts,
			},
			beforeSend: () => {
				this.setState( { btn_text: 'Saving Settings', saving: true } );
			},
			complete: () => {
				this.setState( { saving: false } );
			},
			success: ( response ) => {
				if ( ! response.error ) {
					parent.setState( { btn_text: 'Saved' } );
					setTimeout( () => {
						parent.setState( { btn_text: 'Save Settings' } );
					}, 1000 );
				}
			},
			error: () => {
				message.error( 'Font field cannot be empty!' );
				this.setState( { btn_text: 'Save Settings' } );
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
				<header>
					<Affix offsetTop={ 32 }>
						<div className="letterfiy-admin-header">
							<Row gutter='32' align='middle'>
								<Col span={ 12 } style={ { alignItems: 'top' } }>
									<Badge count={ 'v ' + letterify_admin_var.version }>
										<img src={ letterify_admin_var.plugin_url + 'core/assets/images/letterify-logo.png' } alt='Letterify' />
									</Badge>
								</Col>
								<Col span={ 12 } style={ { textAlign: 'right' } }>
									<Button
										onClick={ this.handleSubmit }
										type="primary" htmlType="submit"
										className="letterfiy-admin-save-btn"
										loading={ this.state.saving }
										icon={ <CheckCircleFilled twoToneColor="#ffffff" /> }
										size='large' shape='round'>
										{ this.state.btn_text }
									</Button>
								</Col>
							</Row>
						</div>
					</Affix>
				</header>
				<main>
					<Row gutter='32'>
						<Col span='12'>
							<Typography.Title level={ 3 } className='letterify-admin-input-title'>
								<BgColorsOutlined /> Colors
							</Typography.Title>
							<Row gutter='16' className="letterify-admin-input-group">
								<Col span='10'>
									<Input placeholder="Color Name"
										name="color_input_1" size='small' allowClear
										value={ this.state.color_input_1 }
										onChange={ this.handleChange } />
								</Col>
								<Col span='10'>
									<Input placeholder="Color Code (HEX)"
										name="color_input_2" size='small' allowClear
										value={ this.state.color_input_2 }
										addonBefore="#" maxLength='8'
										onChange={ this.handleChange } />
								</Col>
								<Col span='4'>
									<Button block type='primary' onClick={ () => this.handleColorInput() }>ADD</Button>
								</Col>
							</Row>
							{ this.state.colors.map( tag => this.colorMap( tag ) ) }
						</Col>
						<Col span='12'>
							<Typography.Title level={ 3 } className='letterify-admin-input-title'>
								<FontColorsOutlined />Fonts
							</Typography.Title>
							<Row gutter='16' className="letterify-admin-input-group">
								<Col span='20'>
									<Input placeholder="Font Family Name"
										name="font_input" size='small' allowClear
										value={ this.state.font_input }
										onChange={ this.handleChange } />
									{ this.state.font_error ? <Badge status="warning" text="Warning" /> : '' }
								</Col>
								<Col span='4'>
									<Button block type='primary' onClick={ () => this.handleFontInput() }>ADD</Button>
								</Col>
							</Row>
							{ this.state.fonts.map( tag => this.fontMap( tag ) ) }
						</Col>
					</Row>
				</main>
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
	const [ el ] = $scope.find( '.letterify-admin-template' );
	if ( ! el ) {
		return;
	}
	const { fonts, colors } = el.dataset;
	el.removeAttribute( 'data-colors' );

	/**
	 * Renders the main component
	 */
	ReactDOM.render(
		React.createElement( LetterifyAdminEl, {
			fonts: fonts,
			colors: colors,
		} ),
		el,
	);
};

jQuery( window ).on( 'elementor/frontend/init', () => {

} ).on( 'load', function() {
	const shortcodeEls = document.querySelectorAll( '.letterify-admin-wrapper' );

	shortcodeEls.forEach( ( el ) => {
		init( jQuery( el ) );
	} );
} );
