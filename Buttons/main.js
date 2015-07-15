"use strict";
require(["level1.js"]);
require(["levelData.js"]);
var buttonArr = [];
var currentLevel = 0;

// Starts game by displaying board after start button is pressed
function startGame() {
	document.getElementById('explanation').style.display = 'none';
	document.getElementById('buttonArea').style.display = 'block';
	loadLevel(gameData[currentLevel]);
}

// Loads a level based on the array passed in
function loadLevel(startArr) {
	document.getElementById('buttonArea').innerHTML = '';
	buttonArr = [];
	var rowsNeeded = Math.sqrt(startArr.length);
	var rowsArr = [];
	var check = 'level' + (currentLevel + 1) + 'Check(this)';

	// Creates buttons based on array passed in
	for (var i = 0; i < startArr.length; i++) {
		var newButton = document.createElement('button');
		newButton.setAttribute('id', 'button' + (i + 1));
		newButton.setAttribute('onclick', check);
		console.log(newButton);
		buttonArr.push(newButton);
		buttonArr[i].style.backgroundColor = startArr[i];
		newButton.appendChild(document.createTextNode("Hello!"));

	}
	// Creates new row divs to hold the buttons created
	var k = 0;
	for (var j = 1; j <= rowsNeeded; j++) {
		var newRow = document.createElement('div');
		newRow.setAttribute('id', 'row' + j);
		newRow.style.display = 'block';
		newRow.style.textAlign = 'center';
		document.getElementById('buttonArea').appendChild(newRow);
		rowsArr.push(newRow);
		
		while (k < rowsNeeded * j) {
			newRow.appendChild(buttonArr[k]);
			k++;
		}
	}
	
}

// Checks each time a button is clicked to see if the winning combo has appeared
function checkCombo(endArr) {
	for (var i = 0; i < buttonArr.length; i++) {
		if (buttonArr[i].style.backgroundColor != endArr[i]) {
			break;
		}
		else if (i === endArr.length - 1) {
			alert("You have beaten the board!");
			currentLevel++;
			loadLevel(gameData[currentLevel]);
		}
	}
}