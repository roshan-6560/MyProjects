<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<style type="text/css">
fieldset table {
	margin: auto;
	text-align: left;
}

fieldset {
	margin: 15px 520px;
	text-align: center;
}

legend {
	color: white;
	background-color: #333;
}

ul {
	list-style-type: none;
	overflow: hidden;
	background-color:red;
	border:1px solid;
}

li {
	float: right;
}

li a {
	display: block;
	margin: 0px;
	padding: 15px;
}

li a:hover {
	background-color: lightblue;
}
</style>
</head>
<body>
    <ul>
		<li><a style="color: white;" href="./logout">Logout</a></li>
		<li><a style="color: white;" href="./search">Search Car</a></li>
		<li><a style="color: white;" href="./add">Add Car</a></li>
		<li><a style="color: white;" href="./update">Update Car</a></li>
		<li><a style="color: white;" href="./remove">Remove Car</a></li>
		<li><a style="color: white;" href="./home">Home</a></li>
	</ul>
</body>
</html>