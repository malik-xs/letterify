<?php
namespace Letterify;

require_once plugin_dir_path(__FILE__) . '../../fields/fields.php';

class MetaBox_View {
	public function __construct() {
	}

	public static function render_meta_box_content() {
		global $post;

		foreach( \Letterify\Fields_Schema::get_list() as $meta ) :
			$value = get_post_meta( $post->ID, 'letterify-finish', true ); ?>

				<div class="form-field term-meta-text-wrap">
					<input type="checkbox">
					<label for="<?php echo $meta['slug'] ?>"><?php esc_html_e( $meta['name'] , 'letterify' ); ?></label>
					<select name="<?php echo $meta['slug'] ?>" id="<?php echo $meta['slug'] ?>" class="<?php echo $meta['slug'] ?>">
						<option value="" <?php selected( $value, $key ); ?>>-- Choose Option ---</option>
						<?php foreach( $meta['values'] as $key => $val ) : ?>
							<option value="<?php echo $key ?>" <?php selected( $value, $key ); ?>><?php echo $val ?></option>
						<?php endforeach; ?>
					</select>
				</div>

		<?php endforeach;
	}
}