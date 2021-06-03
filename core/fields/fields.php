<?php

namespace Letterify;

class Fields_Schema {
    static $fields_list = [
		'finish' => [
			'name' => 'Finish',
			'slug' => 'letterify-finish',
			'values' => [
				'unpainted' => 'Unpainted',
				'painted' => 'Painted',
			],
		],
		'height' => [
			'name' => 'Height',
			'slug' => 'letterify-height',
			'values' => [
				'4 Inch',
				'5 Inch',
				'6 Inch',
				'7 Inch',
				'8 Inch',
				'9 Inch',
				'10 Inch',
				'11 Inch',
				'12 Inch',
				'13 Inch',
				'14 Inch',
				'15 Inch',
				'16 Inch',
				'17 Inch',
				'18 Inch',
				'19 Inch',
				'20 Inch',
			]
		],
		'edge' => [
			'name' => 'Edge',
			'slug' => 'letterify-edge',
			'values' => [
				'straight-edge' => 'Straight Edge',
				'beveled-edge' => 'Beveled edge',
				'rounded-edge' => 'Rounded edge',
			],
		],
		'edge-2' => [
			'name' => 'Edge',
			'slug' => 'letterify-edge-2',
			'values' => [
				'regular' => 'regular',
				'rustic' => 'rustic',
			],
		],
		'form' => [
			'name' => 'A form',
			'slug' => 'letterify-form',
			'values' => [
			],
		],
		'mounting-hardware' => [
			'name' => 'Mounting Hardware',
			'slug' => 'letterify-mounting-hardware',
			'values' => [
				'flush-stud-mount' => 'flush stud mount',
				'projected-stud-mount' => 'projected stud mount (1/2 inch)',
			],
		],
		'mounting-1' => [
			'name' => 'Mounting',
			'slug' => 'letterify-mounting-1',
			'values' => [
				'hanging-stripes-and-paper-template' => 'hanging stripes and paper template (4.50$ per letter)',
				'no-mounting-paper-template-only' => 'no mounting - paper template only (1.0$ per letter)',
				'none' => 'none',
			],
		],
		'mounting-2' => [
			'name' => 'Mounting',
			'slug' => 'letterify-mounting-2',
			'values' => [
				'hanging-stripes-and-paper-template' => 'hanging stripes and paper template ( 4.50$ per letter )',
				'metal-mounting-studs' => 'metal mounting studs( 4.50$ per letters )',
				'no-mounting-paper-template-only' => 'no mounting-paper template Only (1.00$ per letter)',
				'none' => 'none',
			],
		],																	
		'mounting-3' => [
			'name' => 'Mounting',
			'slug' => 'letterify-mounting-3',
			'values' => [
				'hanging-stripes-and-paper-template' => 'hanging stripes and paper template (+10%)',
				'none' => 'none',
			],
		],
		'stain-color' => [
			'name' => 'Stain color',
			'slug' => 'letterify-stain-color',
			'type' => 'color',
			'values' => [
				'dark-walnut' => 'Dark walnut',
				'classic-grey' => 'Classic grey',
				'ebony' => 'Ebony',
				'golden-oak' => 'Golden oak',
				'clear-coat' => 'Clear coat',
				'shaker-maple' => 'Shaker maple',
			],
		],
		'paper-template' => [
			'name' => 'Paper Template',
			'slug' => 'letterify-paper-template',
			'values' => [
				'yes' => 'Yes ($1.00 per letter)',
				'no' => 'No',
			],
		],
		'material-1' => [
			'name' => 'Material 1',
			'slug' => 'letterify-material-1',
			'values' => [
				'alder' => 'Alder',
				'alder-clear-coat' => 'Alder clear coat',
				'oak' => 'Oak',
				'oak-clear-coat' => 'Oak clear coat',
				'cherry' => 'Cherry',
				'cherry-clear-coat' => 'Cherry clear coat',
				'walnut' => 'Walnut',
				'walnut-clear-coat' => 'Walnut clear coat',
			],
		],
		'material-2' => [
			'name' => 'Material 2',
			'slug' => 'letterify-material-2',
			'values' => [
				'baltic birch plywood' => 'baltic birch plywood',
				'MDF' => 'MDF',
				'painted-baltic-birch-plywood' => 'painted baltic birch plywood',
				'Painted-MDF' => 'Painted MDF',
				'outdoor-wood' => 'outdoor wood',
				'painted-outdoor-wood' => 'painted outdoor wood',
				'plastic' => 'plastic',
				'galvanized-steel' => 'galvanized steel',
				'cardboard' => 'cardboard',
				'foam' => 'foam',
				'painted-foam' => 'painted foam',
			],
		],
		'material-finish' => [
			'name' => 'Material/finish',
			'slug' => 'letterify-material-finish',
			'values' => [
				'alder' => 'alder',
				'alder satin clear coat' => 'alder satin clear coat(+25% per letter)',
				'alder gloss clear coat' => 'alder gloss clear coat(+40% per letter)',
				'hickory' => 'hickory',
				'hickory satin clear coat' => 'hickory satin clear coat(+25% per letter)',
				'hickory gloss clear coat' => 'hickory gloss clear coat(+40% per letter)',
				'maple' => 'maple',
				'maple satin clear coat' => 'maple satin clear coat(+25% per letter)',
				'maple gloss clear coat' => 'maple gloss clear coat(+40% per letter)',
				'walnut' => 'walnut',
				'walnut satin clear coat' => 'walnut satin clear coat(+25% per letter)',
				'walnut gloss clear coat' => 'walnut gloss clear coat',
			],
		],
		'flat-bottom-standing' => [
			'name' => 'Flat bottom(standing)',
			'slug' => 'letterify-flat-bottom-standing',
			'values' => [
				'yes' => 'Yes ($1.00 per letter)',
				'no' => 'No',
			],
		],
		'frame' => [
			'name' => 'Frame',
			'slug' => 'letterify-frame',
			'values' => [
				'none' => 'none',
				'circular' => 'circular(+10%)',
				'rectangular' => 'rectangular(+10%)',
			],
		],
		'size' => [
			'name' => 'Size',
			'slug' => 'letterify-size',
			'values' => [
				'small' => 'small (8 x 20 ) in',
				'medium' => 'medium (12 x 30) in',
				'large' => 'large (18x 44) in',
			],
		],
		'letter-finish' => [
			'name' => 'Letter Finish',
			'slug' => 'letterify-letter-finish',
			'values' => [
				'unpainted' => 'Unpainted',
				'painted' => 'Painted',
			],
		],
		'letter-finish-2' => [
			'name' => 'Letter Finish',
			'slug' => 'letterify-letter-finish-2',
			'values' => [
				'gloss' => 'gloss',
				'matte' => 'matte',
			],
		],
		'letter-height' => [
			'name' => 'Letter height',
			'slug' => 'letterify-letter-height',
			'values' => [
			],
		],
		'letter-thickness' => [
			'name' => 'Letter thickness',
			'slug' => 'letterify-letter-thickness',
			'values' => [
			],
		],
		'circle-backer' => [
			'name' => 'Circle Backer',
			'slug' => 'letterify-circle-backer',
			'values' => [
				'18 in x 3/8 in (Baltic birch) +10%' => '18 in x 3/8 in (Baltic birch) +10%',
				'22 in x 3/8 in (Baltic birch) +10%' => '22 in x 3/8 in (Baltic birch) +10%',
			],
		],
		'mounting-hardware-2' => [
			'name' => 'Mounting Hardware',
			'slug' => 'letterify-mounting-hardware-2',
			'values' => [
				'none' => 'none',
				'flush (3.00$ per letter)' => 'flush (3.00$ per letter)',
				'projected spacer (3.00$ per letter)' => 'projected spacer (3.00$ per letter)',
				'projected jam nut (3.00$ per letter)' => 'projected jam nut (3.00$ per letter)',
			],
		],
		'wood-backer' => [
			'name' => 'Wood Backer',
			'slug' => 'letterify-wood-backer',
			'values' => [
				'1/4 in baltic birch (+10$)' => '1/4 in baltic birch (+10$)',
			],
		],
		'thickness' => [
			'name' => 'Thickness',
			'slug' => 'letterify-thickness',
			'values' => [
			],
		],
		'ribbon-color' => [
			'name' => 'Ribbon Color',
			'slug' => 'letterify-ribbon-color',
			'type' => 'color',
			'values' => [
				'solid royal' => 'solid royal',
				'polka dot royal blue' => 'polka dot royal blue',
				'polka dot blue' => 'polka dot blue',
				'polka dot apple green' => 'polka dot apple green',
				'solid apple green' => 'solid apple green',
				'solid mint' => 'solid mint',
				'solid aqua' => 'solid aqua',
				'solid baby maize' => 'solid baby maize',
				'polka dot maize' => 'polka dot maize',
				'solid torrid orange' => 'solid torrid orange',
				'solid red' => 'solid red',
				'polka dot red' => 'polka dot red',
				'solid hot pink' => 'solid hot pink',
				'pink' => 'pink',
				'polka dot pink' => 'polka dot pink',
				'solid orcid' => 'solid orcid',
				'polka dot lilac' => 'polka dot lilac',
				'polka dot purple' => 'polka dot purple',
				'solid brown' => 'solid brown',
				'polka dot brown' => 'polka dot brown',
				'solid black' => 'solid black',
				'polka dot black' => 'polka dot black',
				'solid white' => 'solid white',
				'polka dot white/black' => 'polka dot white/black',
			],
		],
		'ribbon-color-2' => [
			'name' => 'Ribbon Color',
			'slug' => 'letterify-ribbon-color-2',
			'type' => 'color',
			'values' => [
				'red (+2.00$)' => 'red (+2.00$)',
				'green (+2.00$)' => 'green (+2.00$)',
				'white (+2.00$)' => 'white (+2.00$)',
				'black (+2.00$)' => 'black (+2.00$)',
				'natural yarn (+2.00$)' => 'natural yarn (+2.00$)',
				'none' => 'none',
			],
		],
		'frame-shape' => [
			'name' => 'Frame Shape',
			'slug' => 'letterify-frame-shape',
			'values' => [
				'round' => 'round',
				'square' => 'square',
				'round scalloped' => 'round scalloped',
				'square scalloped' => 'square scalloped',
			],
		],
		'add-ribbon' => [
			'name' => 'Add Ribbon',
			'slug' => 'letterify-add-ribbon',
			'values' => [
				'yes' => 'yes ($4.00 per letter)',
				'no' => 'no',
			],
		],
		'longest-dimension' => [
			'name' => 'Longest Dimension',
			'slug' => 'letterify-longest-dimension',
			'values' => [
			],
		],
	];

	public function __construct() {
	}

	public static function get_list() {
		return self::$fields_list;
	}
}