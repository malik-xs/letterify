<?php
namespace Letterify;

require_once plugin_dir_path(__FILE__) . '../../fields/fields.php';

class MetaBox_View {
	public function __construct() {
	}

	public static function render_meta_box_content() {
		global $post;
		$value = get_post_meta( $post->ID, 'letterify-settings', true );
		$status = get_post_meta( $post->ID, 'letterify-settings--status', true );
		$value = json_decode( $value );
		?>
		<div class="form-field term-meta-text-wrap">
			<input type="checkbox"
				id="letterify-settings--status"
				name="letterify-settings--status"
				<?php checked( isset( $status ) ? $status : '', '"true"' ) ?> >

			<label for="letterify-settings--status">
				<strong><?php esc_html_e( 'Disable Letterify?' , 'letterify' ); ?></strong>
			</label>
		</div>

		<div>
			<input data-post_id="<?php echo $post->ID; ?>"
				class="letterify-product-option-form-submit button button-primary button-large"
				type="submit" value="Save Settings" style="margin: 20px 0; margin-left: auto" />
		</div>

		<form id="letterify-product-option-form-main" style="margin-top: 30px; display: <?php ! empty($status) ? 'none': 'block' ?>">
			<div class="letterify-product-option-form">
				<?php $multipliers = [
					[ 'slug' => 'height-multiplier', 'name' => 'Height Multiplier' ],
					[ 'slug' => 'thickness-multiplier', 'name' => 'Thickness Multiplier' ],
				];
				foreach( $multipliers as $multiplier ) : ?>
					<div class="form-field term-meta-text-wrap">
						<label for="<?php echo $multiplier['slug'] ?>">
							<strong><?php esc_html_e( $multiplier['name'] , 'letterify' ); ?></strong>
							<br><small>( <?php esc_html_e( $multiplier['slug'] , 'letterify' ); ?> )</small>
						</label>

						<input type="number"
							id="<?php echo $multiplier['slug'] ?>"
							name="<?php echo $multiplier['slug'] ?>">
					</div>
				<?php
				endforeach;
				echo '<div class="form-field term-meta-text-wrap"></div>';
				foreach( \Letterify\Fields_Schema::get_list() as $meta ) : ?>
					<div class="form-field term-meta-text-wrap">
						<input type="checkbox"
							id="<?php echo $meta['slug'] ?>"
							name="<?php echo $meta['slug'] ?>"
							<?php checked( isset( $value->{$meta['slug']} ) ? $value->{$meta['slug']} : '', 'true' ) ?> >

						<label for="<?php echo $meta['slug'] ?>">
							<strong><?php esc_html_e( $meta['name'] , 'letterify' ); ?></strong>
							<br><small>( <?php esc_html_e( $meta['slug'] , 'letterify' ); ?> )</small>
						</label>
						<!-- <select name="<?php echo $meta['slug'] ?>--value" id="<?php echo $meta['slug'] ?>--value" class="<?php echo $meta['slug'] ?>">
							<option>-- Choose Option ---</option>
							<?php foreach( $meta['values'] as $key => $val ) : ?>
								<option value="<?php echo $key ?>"><?php echo $val ?></option>
							<?php endforeach; ?>
						</select> -->
					</div>
				<?php endforeach; ?>
				<hr />
			</div>
			<div>
				<input data-post_id="<?php echo $post->ID; ?>"
					class="letterify-product-option-form-submit button button-primary button-large"
					type="submit" value="Save Settings" style="margin: 20px 0 0; margin-left: auto" />
			</div>
		</form>
		<?php
	}
}
