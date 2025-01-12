<!-- Design by folishdeveloper.com -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Typing text</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
  <style>
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.iam{
  color: white;
    font-size: 55px;
    padding: 15px;
    font-family: sans-serif;
}
.text{
  color: white;
    border-right: 2px solid rgb(62, 216, 255);
    font-size: 55px;
    font-family: sans-serif;
    color: rgb(62, 216, 255);
}
  </style>
</head>
<body>
	<div class="iam">I am</div>
    <div class="text"></div>

	<script>
		var typing=new Typed(".text", {
			strings: [ "Web Designer", "Freelancer", "Graphics Designer", "Web Developer"],
			typeSpeed: 100,
			backSpeed: 40,
			loop: true,
		});
	 </script>
</body>
</html>
