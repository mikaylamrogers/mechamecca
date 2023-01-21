<!DOCTYPE HTML>
<html>
<head>
<title> Thanks for visting our site! </title>
	<link rel="stylesheet" type="text/css" href="form1.css">

</head>
<body>

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
	print(" <h2>Here is information about this product:</h2>");

	foreach ($info as $value)
		{ 
		print("<li> $value "); 
		}
	}
else
{
	print("Sorry- We don't have the Product that you are searching for!");
}
?>
</body>
</html>

