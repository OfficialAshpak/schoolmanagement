<!DOCTYPE html>
<html lang="en">


<head>

	<!-- META ============================================= -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="keywords" content="" />
	<meta name="author" content="" />
	<meta name="robots" content="" />
	
	<!-- DESCRIPTION -->
	<meta name="description" content="" />
	
	<!-- OG -->
	<meta property="og:title" content="" />
	<meta property="og:description" content="" />
	<meta property="og:image" content="" />
	<meta name="format-detection" content="telephone=no">
	
	<!-- FAVICONS ICON ============================================= -->
	<link rel="icon" href="assets2/images/favicon.ico" type="image/x-icon" />
	<link rel="shortcut icon" type="image/x-icon" href="assets2/images/favicon.ico" />
	
	<!-- PAGE TITLE HERE ============================================= -->
	<title>SM System Login </title>
	
	<!-- MOBILE SPECIFIC ============================================= -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	

	<script src="assets2/js/html5shiv.min.js"></script>
	<script src="assets2/js/respond.min.js"></script>
	
	
	<!-- All PLUGINS CSS ============================================= -->
	<link rel="stylesheet" type="text/css" href="assets2/css/assets2.css">
	
	<!-- TYPOGRAPHY ============================================= -->
	<link rel="stylesheet" type="text/css" href="assets2/css/typography.css">
	
	<!-- SHORTCODES ============================================= -->
	<link rel="stylesheet" type="text/css" href="assets2/css/shortcodes/shortcodes.css">
	
	<!-- STYLESHEETS ============================================= -->
	<link rel="stylesheet" type="text/css" href="assets2/css/style.css">
	<link class="skin" rel="stylesheet" type="text/css" href="assets2/css/color/color-1.css">
	
</head>
<body id="bg">
<div class="page-wraper">
	<div id="loading-icon-bx"></div>
	<div class="account-form">
		<div class="account-head" style="background-image:url(assets2/images/background/bg2.jpg);">
			<a href=""><img src="assets2/images/favicon.ico" alt=""></a>
		</div>
		<div class="account-form-inner">
			<div class="account-container">
				<div class="heading-bx left">
					<h2 class="title-head">Login to your <span>Account</span></h2>
					<p>Don't have an account? <a href="{{ route('register') }}">Create one here</a></p>
				</div>	
				  <form method="POST" action="{{ route('login') }}" class="contact-bx">
            @csrf
				
					<div class="row placeani">
						<div class="col-lg-12">
							<div class="form-group">
								<div class="input-group">
									<label>Your Name</label>
					 <input type="email" id="email" name="email" class="form-control" placeholder="">
									
								</div>
							</div>
						</div>

						<div class="col-lg-12">
							<div class="form-group">
								<div class="input-group"> 
									<label>Your Password</label>
									<input type="password" id="password" name="password" class="form-control" placeholder="">
								
								</div>
							</div>
						</div>

						<div class="col-lg-12">
							<div class="form-group form-forget">
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="customControlAutosizing">
									<label class="custom-control-label" for="customControlAutosizing">Remember me</label>
								</div>
							  <a href="{{ route('password.request') }}" class="ml-auto"></i> Forgot Password?</a>
								</di
							</div>
						</div>
						<div class="col-lg-12 m-b30">
						
							<button name="submit" type="submit" value="Submit" class="btn button-md">Login</button>
						</div>
						<div class="col-lg-12">
							<h6>Login with Social media</h6>
							<div class="d-flex">
								<a class="btn flex-fill m-r5 facebook" href="#"><i class="fa fa-facebook"></i>Facebook</a>
								<a class="btn flex-fill m-l5 google-plus" href="#"><i class="fa fa-google-plus"></i>Google Plus</a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- External JavaScripts -->
<script src="assets2/js/jquery.min.js"></script>
<script src="assets2/vendors/bootstrap/js/popper.min.js"></script>
<script src="assets2/vendors/bootstrap/js/bootstrap.min.js"></script>
<script src="assets2/vendors/bootstrap-select/bootstrap-select.min.js"></script>
<script src="assets2/vendors/bootstrap-touchspin/jquery.bootstrap-touchspin.js"></script>
<script src="assets2/vendors/magnific-popup/magnific-popup.js"></script>
<script src="assets2/vendors/counter/waypoints-min.js"></script>
<script src="assets2/vendors/counter/counterup.min.js"></script>
<script src="assets2/vendors/imagesloaded/imagesloaded.js"></script>
<script src="assets2/vendors/masonry/masonry.js"></script>
<script src="assets2/vendors/masonry/filter.js"></script>
<script src="assets2/vendors/owl-carousel/owl.carousel.js"></script>
<script src="assets2/js/functions.js"></script>
<script src="assets2/js/contact.js"></script>

</body>

</html>
