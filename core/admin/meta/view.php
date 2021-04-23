<?php

namespace Letterify;

class MetaBox_View {
    static $meta_list = [
		'finish' => [
			'name' => 'Finish',
			'slug' => 'letterify-finish',
			'values' => [
				'' => '-- User Defined --',
				'painted' => 'Painted',
				'unpainted' => 'Unpainted'
			],
		],
	];
	public function __construct() {
	}

	public static function render_meta_box_content() {
		global $post;

		foreach( self::$meta_list as $meta ) :
			$value = get_post_meta( $post->ID, 'letterify-finish', true ); ?>

				<div class="form-field term-meta-text-wrap">
					<label for="<?php echo $meta['slug'] ?>"><?php esc_html_e( $meta['name'] , 'letterify' ); ?></label>
					<select name="<?php echo $meta['slug'] ?>" id="<?php echo $meta['slug'] ?>" class="<?php echo $meta['slug'] ?>">
						<?php foreach( $meta['values'] as $key => $val ) : ?>
							<option value="<?php echo $key ?>" <?php selected( $value, $key ); ?>><?php echo $val ?></option>
						<?php endforeach; ?>
					</select>
				</div>

		<?php endforeach;
	}
}