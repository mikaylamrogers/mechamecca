<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="search.css">
    <link rel="stylesheet" href="https://use.typekit.net/zko5kvo.css">
    <link rel="stylesheet" href="https://use.typekit.net/zko5kvo.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
</head>
<body>
<div class="radial-gradient"></div>
<div id="home"><a href="home.html">⇠ home</a></div>

<?php
// extract infor from form
$productName = $_GET['productName'];

// open the file product.txt

$file = fopen("products.txt", "r");

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

// check for a product match between what user input and 
// whats in file convert both strings to lowercase

if ((strtolower($productName)) == (strtolower($info[0])))
{

// if there is a match set flag to true and exit
$flag = TRUE;
break;
}

}

// check to see if there is a match flag = TRUE 

if ($flag)
	{
	print(" <h1>Here is information about this product:</h1>");

	foreach ($info as $value)
		{ 
		print("<h2> $value "); 
		}
	}
else
{
	print("<h1>Sorry- We don't have the Product that you are searching for!</h1>");
}
?>
    <script src="search.js"></script>
</body>
</html>

