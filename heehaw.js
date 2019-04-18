function heeHaw() {

	var userInput = document.getElementById('num').value;

	for(var i = 1; i <= userInput; i++) {
		var hee = i/3;
		var haw = i/5;

		if(Number.isInteger(hee) && Number.isInteger(haw)) {
			console.log("Hee Haw!");
			document.write("Hee Haw!<br>");
		}
		else if(Number.isInteger(hee) && !Number.isInteger(haw)) {
			console.log("Hee!");
			document.write("Hee!<br>")
		}
		else if(Number.isInteger(hee)&& !Number.isInteger(haw)) {
			console.log("Haw!");
			document.write("Haw!<br>");
		}
		else {
			console.log(i);
			document.write(i + "<br>");
		}
	}
	
}


