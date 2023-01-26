<HTML>
<head>
<title>PHP: online store</title>
<!-- <link rel="stylesheet" type="text/css" href="main.css"> -->
</head>
<body>

<?php
// get all values from form using foreach loop  

$line = "";

print("<h2> Thank you for shopping with us! The following is what you have entered!");

foreach ($_POST as $key => $value)
{
// form line with one value at a time when you go through the loop
$line .= $value . ":";

// print key and values to users

print("<li> $key: $value ");
}

// add \n to end of the line

$line .= "\n";

// open the file to store data in with append operation 
$filea = fopen("db.txt","a") or die("can't open file");


// write/store line into file
fwrite($filea, $line);

// close the file
fclose($filea);

?>
</body>
</html>