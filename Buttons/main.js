"use strict";
require(["Buttons/level1.js"]);
require(["Buttons/levelData.js"]);
var buttonArr = [];
var currentLevel = 0;

// Starts game by displaying board after start button is pressed
function startGame() {
	document.getElementById('explanation').style.display = 'none';
	document.getElementById('buttonArea').style.display = 'block';
	loadLevel(gameData[currentLevel]);
}

function restartGame() {
	document.getElementById('endGame').style.display = 'none';
	document.getElementById('buttonArea').style.display = 'block';
	currentLevel = 0;
	loadLevel(gameData[currentLevel]);
}

// Loads a level based on the array passed in
function loadLevel(startArr) {
	document.getElementById('buttonArea').innerHTML = '';
	document.getElementById('buttonArea').appendChild(createAnswerKey(startArr));

	buttonArr = [];
	var rowsNeeded = Math.sqrt(startArr.length);
	var rowsArr = [];
	var check = 'level' + (currentLevel + 1) + 'Check(this)';

	var grid = document.createElement('div');
	grid.setAttribute('id', 'buttonGrid');

	// Creates buttons based on array passed in
	for (var i = 0; i < startArr.length; i++) {
		var newButton = document.createElement('button');
		newButton.setAttribute('id', 'button' + (i + 1));
		newButton.setAttribute('onclick', check);
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
		grid.appendChild(newRow);
		rowsArr.push(newRow);
		
		while (k < rowsNeeded * j) {
			newRow.appendChild(buttonArr[k]);
			k++;
		}
	}

	// Creates level tracker for which level you're currently on
	var levelTracker = document.createElement('h2');
	levelTracker.appendChild(document.createTextNode('Current Level: ' + (currentLevel + 1)));
	grid.appendChild(levelTracker);

	document.getElementById('buttonArea').appendChild(grid);
	
}

function createAnswerKey(startArr) {
	// Create answer div
	var answerKey = document.createElement('div');
	answerKey.setAttribute('id', 'answerKey');

	// Create heading label for answer box
	var heading = document.createElement('h4');
	heading.appendChild(document.createTextNode("Answer: "));
	answerKey.appendChild(heading);

	// Create image
	var newKey = document.createElement('img');
	newKey.setAttribute('src', 'Buttons/images/level' + (currentLevel + 1) + 'key.png');
	newKey.setAttribute('alt', 'Answer for Grid');
	newKey.setAttribute('id', 'answerPhoto');
	answerKey.appendChild(newKey);
	var daRulez = document.createElement('ul');

	// Adds rules for only tiles that appear on the board
	if (startArr.indexOf(dGreen) > -1) {
		var greenRule = document.createElement('li');
		greenRule.appendChild(document.createTextNode("Green Tiles: Themselves"));
		daRulez.appendChild(greenRule);
	}
	if (startArr.indexOf(dBlue) > -1) {
		var blueRule = document.createElement('li');
		blueRule.appendChild(document.createTextNode("Blue Tiles: Themselves + 1 tile"));
		daRulez.appendChild(blueRule);
	}
	if (startArr.indexOf(dOrange) > -1) {
		var orangeRule = document.createElement('li');
		orangeRule.appendChild(document.createTextNode("Orange Tiles: Themselves + 2 tile"));
		daRulez.appendChild(orangeRule);
	}
	if (startArr.indexOf(dPurple) > -1) {
		var purpleRule = document.createElement('li');
		purpleRule.appendChild(document.createTextNode("Blue Tiles: Themselves + 1 tile"));
		daRulez.appendChild(purpleRule);
	}

	answerKey.appendChild(daRulez);

	return answerKey;
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
			if (currentLevel > gameData.length - 1) {
				document.getElementById('score').innerHTML = ' ';
				document.getElementById('answerKey').removeChild(document.getElementById('answerPhoto'));
				document.getElementById('explanation').innerHTML = " ";
				var endResults = document.createElement('h2');
				endResults.appendChild(document.createTextNode('You finished all ' + currentLevel + ' levels!'));
				document.getElementById('score').appendChild(endResults);
				document.getElementById('endGame').style.display = 'inherit';
				document.getElementById('buttonArea').style.display = 'none';
			} 
			else {
				document.getElementById('answerKey').removeChild(document.getElementById('answerPhoto'));
				loadLevel(gameData[currentLevel]);
			}
		}
	}
}