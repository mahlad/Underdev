<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>Sending mail ...</title>
	<style type="text/css">
		body {
			background-color: #F4F4F4;
		}
		
	</style>
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
				echo '<h2 class="ok">Mail sent</h2>';
			}else{
				echo '<h2 class="err">Error in sending mail.</h2>';
			}
		}else{
			echo '<h2 class="err">Access Restricted !</h2>';
		}
	?>
</body>
</html>