<?php
include_once(ABSPATH.'wp-admin/includes/plugin.php');
if ( is_plugin_active( 'elementor/elementor.php' ) && \Elementor\Plugin::$instance->editor->is_edit_mode() ) : ?>
	<div class="elementor-editor-panel elementor-editor-alert">Cannot preview in Elementor Editor Mode</div>
<?php else : ?>
	<div class="xm-letterify">
		<div
			class="xm-letterify-form-wrapper"
			data-ajaxurl="<?php echo admin_url('admin-ajax.php'); ?>"
			data-wpNone="<?php echo wp_create_nonce("xm_letterify"); ?>"
			data-colors='<?php echo stripslashes( preg_replace( '/\s*/m', '', json_decode( get_option('__letterify_colors') ) )); ?>'
		>
			<div class="xm-letterify-template">
				<!-- Code Here -->
			</div>
		</div>
	</div>
<?php endif; ?>