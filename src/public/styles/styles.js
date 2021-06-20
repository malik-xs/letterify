import chroma from 'chroma-js';

const DOT_STYLE = ( color = '#ccc' ) => ( {
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

const FONT_STYLE = {
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

const COLOR_STYLE = {
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
			...DOT_STYLE( color.css() ),
		};
	},
	input: styles => ( { ...styles, ...DOT_STYLE() } ),
	placeholder: styles => ( { ...styles, ...DOT_STYLE() } ),
	singleValue: ( styles, { data } ) => ( { ...styles, ...DOT_STYLE( data.value ) } ),
};

export { DOT_STYLE, FONT_STYLE, COLOR_STYLE };
