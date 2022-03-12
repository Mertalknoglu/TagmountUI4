<?php 
    if(empty($_GET['selector']) || empty($_GET['validator'])){
        echo 'Could not validate your request!';
    }else{
        $selector = $_GET['selector'];
        $validator = $_GET['validator'];
        
        if(ctype_xdigit($selector) && ctype_xdigit($validator)) { ?>
<?php 

    include_once './helpers/session_helper.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Tagmount</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="assets/css/util.css">
	<link rel="stylesheet" type="text/css" href="assets/css/main.css">
<!--===============================================================================================-->
</head>


<?php flash('newReset') ?>


<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-50 p-b-90">
				<form method="post" action="controllers/ResetPasswords.php" class="login100-form validate-form flex-sb flex-w">
					<span class="login100-form-title p-b-51">
						New Password
					</span>


                    <input type="hidden" name="type" value="reset" />
        <input type="hidden" name="selector" value="<?php echo $selector ?>" />
        <input type="hidden" name="validator" value="<?php echo $validator ?>" />
					<div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
						<input class="input100" type="password" name="pwd" placeholder="Enter a new password..." autofocus>
						<span class="focus-input100"></span>
					</div>
                    <div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
						<input class="input100" type="password"  name="pwd-repeat" placeholder="Repeat new password..." autofocus>
						<span class="focus-input100"></span>
					</div>

                    <div class="container-login100-form-btn m-t-17">
						<button type="submit" name="submit" class="login100-form-btn">
							New Password
						</button>
					</div>



            
<?php 
    }else{
        echo 'Could not validate your request!';
    }
}
?>
    