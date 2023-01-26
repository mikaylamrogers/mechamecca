<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="signup.css">
    <link rel="stylesheet" href="https://use.typekit.net/zko5kvo.css">
    <link rel="stylesheet" href="https://use.typekit.net/zko5kvo.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>

</head>
<body>
<div class="radial-gradient"></div>


<?php
// get values from form
$name = $_POST['username'];
$password = $_POST['password'];

// open the file to store data in with append operation 
$filea = fopen("users.txt","a") or die("can't open file");

// create line to store all values
$line= $name.":".$password."\n";

// write/store line into file
fwrite($filea, $line);

// close the file
fclose($filea);

print("<h2>Thank you for your registration. Enter your MECHA MECCA now:</h2><br><a href='../login/login.html'><h1>LOGIN</p></h1>");
?>

<script>
    // background gradient source code: https://codepen.io/lsammarco/pen/waMpJw
$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #d0e9f2, #86a3bf)');
  });
</script>
</body>
</html>
