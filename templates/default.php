<?php if ( \Elementor\Plugin::$instance->editor->is_edit_mode() ) : ?>
	<div class="elementor-editor-panel elementor-editor-alert">Cannot preview in Elementor Editor Mode</div>
<?php else : ?>
	<div class="xm-letterify">
		<div
			class="xm-letterify-form-wrapper"
			data-ajaxurl="<?php echo admin_url('admin-ajax.php'); ?>"
			data-wpNone="<?php echo wp_create_nonce("xm_letterify"); ?>"
		>
			<div class="xm-letterify-template">
				<!-- Code Here -->
			</div>
		</div>
	</div>
<?php endif; ?>