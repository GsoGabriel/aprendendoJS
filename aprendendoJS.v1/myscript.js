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