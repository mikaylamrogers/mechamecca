<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <link rel="stylesheet" href="https://use.typekit.net/zko5kvo.css">
    <link rel="stylesheet" href="https://use.typekit.net/zko5kvo.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>

</head>
<body>
<div class="radial-gradient"></div>


<?php 
// process login instruction 

// extract infor from form
$user = $_POST['username'];
$password =$_POST['password'];

// open the file users.txt

$file = fopen("../signup/users.txt", "r");

$flag = FALSE;

// read one line at time from file and assign each line to a string called $line
while(!(feof($file)))
{

// get one line at time from file
$line= fgets($file);

// remove end of line character from line using rtrim function
$line = rtrim($line);

// split string on : to get each field separatly and put values in an array

$info = explode(":", $line);

// check for a match between what user inputted and whats in file

if (($user == $info[0] ) && ( $password == $info[1] ))
{
// if there is a match set flag to true and exit
$flag = TRUE;
break;
}

}

// check to see if there is a match flag = TRUE 

if ($flag)
	{
		print("<a href='../home/home.html'><h1>open</h1></a>");
	}

else
{
	print("<h2>The username or password entered does not match our records.</h2>");
}

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
