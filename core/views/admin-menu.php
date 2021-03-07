<?php
	$posts = json_decode(get_option('__letterify_colors'));
	$posts = stripslashes($posts);
?>
<div class="letterify-admin-wrap">
	<h2>Letterify Configuration</h2>
	
	<form id="letterify-admin-form" name="letterify-admin-form">
		<label for="letterify-colors">Colors</label>
		<textarea id="letterify-colors" type="text" name="letterify-colors"><?php echo $posts ?></textarea>
    	<input type="submit" value="SAVE" class="letterify-btn" />
	</form>
</div>

<script>
jQuery(document).ready(function() {
   jQuery('#letterify-admin-form').submit(function(e) { 
	   	e.preventDefault();
		jQuery.ajax( {
			type: 'POST',
			url: '<?php echo admin_url('admin-ajax.php'); ?>',
			data: { action: 'ajax_save_admin_options', colors: jQuery('#letterify-colors').val() },
		} ).done( function() {
			console.log( 'saved' );
		} );
   });
});
</script>