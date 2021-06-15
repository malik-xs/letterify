<?php
namespace Letterify;

class Cpt_MetaBox {
	public function __construct() {
	}

	public static function render_metabox() {
		the_content();
	}

	public static function render_metabox_download() {
		global $post;
		?>
		<img src="<?php echo get_post_meta( $post->ID, '_letterify_image', true ); ?>" />
		<div class="letterify-download-preview"><?php the_post_thumbnail(); ?></div>
		<a href="<?php the_post_thumbnail_url(); ?>" class="button button-primary button-large" download>Download</a>
		<?php
	}
}