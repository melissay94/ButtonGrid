"use strict"; // strict syntax
var buttonArr;

var tileArr = ["#3D8D4C", "#3D8D4C", "#56ABC3", 
			   "#3D8D4C", "#56ABC3", "#56ABC3", 
			   "#56ABC3", "#3D8D4C", "#3D8D4C"];

var winningArr = ['rgb(95, 191, 110)', 'rgb(61, 141, 76)', 'rgb(86, 171, 195)',
				  'rgb(95, 191, 110)', 'rgb(120, 205, 229)', 'rgb(86, 171, 195)',
				  'rgb(120, 205, 229)', 'rgb(61, 141, 76)', 'rgb(95, 191, 110)'];

window.onload = function() {
	buttonArr = [document.getElementById('topLeft'), document.getElementById('topMiddle'), document.getElementById('topRight'), 
document.getElementById('middleLeft'), document.getElementById('middle'), document.getElementById('middleRight'), 
document.getElementById('bottomLeft'), document.getElementById('bottomMiddle'), document.getElementById('bottomRight')];
	loadLevel1();
}

function loadLevel1() {
	
	for (var i = 0; i < tileArr.length; i++) {
		buttonArr[i].style.backgroundColor = tileArr[i];
	}
}

function clickButton(currButton) {
	// Turns dark green button lighter
	if (currButton.style.backgroundColor === "rgb(61, 141, 76)") {
		currButton.style.backgroundColor = "#5FBF6E";
	}
	// Turns dark blue button lighter
	else if (currButton.style.backgroundColor === "rgb(86, 171, 195)") {
		currButton.style.backgroundColor = "#78CDE5";
		if (currButton === buttonArr[2]) {
			buttonArr[1].style.backgroundColor = "#5FBF6E";
		}
		else if (currButton === buttonArr[4]) {
			buttonArr[3].style.backgroundColor = "#5FBF6E";
		}
		else if (currButton === buttonArr[5]) {
			buttonArr[8].style.backgroundColor = "#5FBF6E";
		}
		else if (currButton === buttonArr[6]) {
			buttonArr[7].style.backgroundColor = "#5FBF6E";
		}
	}
	// Turns light green button darker
	else if(currButton.style.backgroundColor === "rgb(95, 191, 110)") {
		currButton.style.backgroundColor = "#3D8D4C";
	}
	// Turns light blue button darker
	else if (currButton.style.backgroundColor === "rgb(120, 205, 229)") {
		currButton.style.backgroundColor = "#56ABC3";
		if (currButton === buttonArr[2]) {
			buttonArr[1].style.backgroundColor = "#3D8D4C";
		}
		else if (currButton === buttonArr[4]) {
			buttonArr[3].style.backgroundColor = "#3D8D4C";
		}
		else if (currButton === buttonArr[5]) {
			buttonArr[8].style.backgroundColor = "#3D8D4C";
		}
		else if (currButton === buttonArr[6]) {
			buttonArr[7].style.backgroundColor = "#3D8D4C";
		}
	}

	checkCombo();

}

function checkCombo() {
	for (var i = 0; i < buttonArr.length; i++) {
		if (buttonArr[i].style.backgroundColor != winningArr[i]) {
			break;
		}
		else if (i === 8) {
			alert("You have beaten the board!");
			// loadLevel2();
		}
	}
}

