<?php

namespace Letterify;

class MetaBox_View {
	public function __construct() {
	}

	public static function render_meta_box_content() {
		global $post;
		echo get_post_meta( $post->ID, 'letterify-finish', true );
		?>
			<div class="form-field term-meta-text-wrap">
				<label for="letterify-color"><?php esc_html_e( 'Finish', 'letterify' ); ?></label>
				<select name="letterify-color" id="letterify-color" class="letterify-color">
					<option value="painted" <?php checked( get_post_meta( $post->ID, 'letterify-finish', true ), 'painted' ); ?>>Painted</option>
					<option value="unpainted" <?php checked( get_post_meta( $post->ID, 'letterify-finish', true ), 'unpainted' ); ?>>Unpainted</option>
				</select>
			</div>
			<div class="form-field term-meta-text-wrap">
				<label for="letterify-color"><?php esc_html_e( 'TERM META TEXT', 'letterify' ); ?></label>
				<input type="text" name="letterify-color" id="letterify-color" value="<?php echo get_post_meta( $post->ID, 'letterify-finish', true ) ?>" class="letterify-color" />
			</div>
		<?php 
	}
}