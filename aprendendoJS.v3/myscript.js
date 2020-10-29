function changeColor() {
	var dd1 = document.getElementById("d1");
	var dd2 = document.getElementById("d2");

	dd1.className = "cd1";
	dd2.className = "cd2";
}

function doRed() {
	var dd1 = document.getElementById("d1");
	var dd2 = document.getElementById("d2");
	dd1.style.backgroundColor = "red";
	dd2.style.backgroundColor = "red";

	var context = dd1.getContext("2d");
	context.fillStyle="yellow";
	context.fillRect(10, 10, 40, 40);
}


function doBlue() {
	var dd1 = document.getElementById("d1");
	var dd2 = document.getElementById("d2");

	dd1.style.backgroundColor = "blue";
	dd2.style.backgroundColor = "blue";
}