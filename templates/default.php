<?php


// require_once trailingslashit(plugin_dir_path(__FILE__)) . 'TextToImage.php';

// $img;
    
// $text = "Testing";
// $fontSize = 20;
// $imgWidth = 400;
// $imgHeight = 80;

// if ($text != '') {
// 	$dir = dirname( __FILE__ );
// 	//text font path
// 	$fonts = [
// 		'PermanentMarker' => $dir . '/fonts/PermanentMarker.ttf',
// 	];
// 	// $font = 'fonts/SourceCodePro.ttf';
	
// 	$font = $fonts['PermanentMarker'];
// 	//create the image
// 	$img = imagecreatetruecolor($imgWidth, $imgHeight);

// 	$textbgcolor = imagecolorallocate($img, 255, 255, 255);
// 	$textcolor = imagecolorallocate($img, 0, 0, 0);
	
// 	//create some colors
// 	$white = imagecolorallocatealpha($img, 255, 255, 255, 50);
// 	$grey = imagecolorallocate($img, 128, 128, 128);
// 	$black = imagecolorallocate($img, 0, 0, 0);
	
// 	//break lines
	
// 	$textBox = imagettfbbox($fontSize,$angle,$font,$text);

// 	$textWidth = abs(max($textBox[2], $textBox[4]));
// 	$textHeight = abs(max($textBox[5], $textBox[7]));

// 	$x = (imagesx($img) - $textWidth)/2;
// 	$y = ((imagesy($img) + $textHeight)/2);

// 	imagefilledrectangle($img, 0, 0, $imgWidth, $imgHeight, $white);

// 	//add the text
// 	imagettftext($img, $fontSize, $angle, $x, $y, $black, $font, $text);

// 	ob_start();
// 	imagepng($img);
// 	printf('<img src="data:image/png;base64,%s"/ width="'.$imgWidth.'">', base64_encode(ob_get_clean()));
// }


?>

<div class="xm-letterify">
	<div class="xm-letterify-form-wrapper">
		<div class="xm-letterify-template">
			<form>
				<input placeholder=${props.state.hello} />
			</form>
		</div>
	</div>
</div>