<?php

namespace Letterify;

class MetaBox_View {
	public function __construct() {
	}

	public static function render_meta_box_content() {
		global $post;
		?>
			<div class="form-field term-meta-text-wrap">
				<label for="letterify-finish"><?php esc_html_e( 'Finish', 'letterify' ); ?></label>
				<select name="letterify-finish" id="letterify-finish" class="letterify-finish">
					<option value="painted" <?php checked( get_post_meta( $post->ID, 'letterify-finish', true ), 'painted' ); ?>>Painted</option>
					<option value="unpainted" <?php checked( get_post_meta( $post->ID, 'letterify-finish', true ), 'unpainted' ); ?>>Unpainted</option>
				</select>
			</div>
		<?php 
	}
}