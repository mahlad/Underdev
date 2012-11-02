<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>Sending mail ...</title>
</head>
<body>
	<?php
		error_reporting(E_ALL ^ E_NOTICE);

		$admin = 'zahedi.zohreh@gmail.com';

		$name    = $_POST['name'];
		$subject = $_POST['subject'];
		$text    = $_POST['txt'];

		if( strlen($name)>=3 && strlen($subject)>=5 && strlen($text)>=10 ){
			if( @mail (
					$admin,
					"mydomain.com contact : $subject",
					$text)
			){
				echo '<div style="margin-left:160px"><h4 class="ok">Mail sent</h4></div>';
			}else{
				echo '<div style="margin-left:160px"><h4 class="err">Error in sending mail.</h4></div>';
			}
		}else{
			echo '<div style="margin-left:160px"><h4 class="err">Access Restricted !</h4></div>';
		}
	?>
</body>
</html>