function dochange() {
	var choice = confirm("O que você deseja?");
	if (choice) {
		var secondChoice = "OK!";
		alert(secondChoice);
	}
	else{
		var secondChoice = confirm("Você deseja mesmo cancelar?");
		if (secondChoice) {
			alert("Você cancelou!");
		}
		else{
			alert("OK!");
		}
	}
}

function changeColor() {
	var dd1 = document.getElementById("d1");
	var dd2 = document.getElementById("d2");
	var dd3 = document.getElementById("d3");

	dd1.className = "cd1";
	dd2.className = "cd2";
	dd3.className = "cd3";
}

function changeText() {
	var dd1 = document.getElementById("d1");
	var dd2 = document.getElementById("d2");
	var dd3 = document.getElementById("d3");

	dd1.innerHTML = "First Button";
	dd2.innerHTML = "Second Button";
	dd3.innerHTML = "Third Button";
}

function changeStyle() {
	var dd1 = document.getElementById("d1");
	var dd2 = document.getElementById("d2");
	var dd3 = document.getElementById("d3");

	dd1.style.color = "#457845";
	dd2.style.color = "magenta";
	dd3.style.color = "lightblue";
}