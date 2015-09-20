"use strict";
require(["Buttons/level1.js"]);
require(["Buttons/levelData.js"]);
var buttonArr = [];
var currentLevel = 0;
var total = 0;
var buttonClicks = 0;
var clickValue;

// Starts game by displaying board after start button is pressed
function startGame() {
	document.getElementById('explanation').style.display = 'none';
	document.getElementById('buttonArea').style.display = 'block';
	loadLevel(gameData[currentLevel]);
}

// Allows player to jump to a level they last went to 
function submitCode() {
	var textCode = document.getElementById('textCode').value;
	for (var i = 1; i < cheatCodes.length; i++) {
		if (cheatCodes[i] === textCode) {
			currentLevel = i;
			document.getElementById('explanation').style.display = 'none';
			document.getElementById('buttonArea').style.display = 'block';
			loadLevel(gameData[currentLevel]);
			break;
		}
		else {
			document.getElementById('textCode').value = "Not a valid code!";
		}
	}
}

function restartGame() {
	document.getElementById('endGame').style.display = 'none';
	document.getElementById('buttonArea').style.display = 'block';
	currentLevel = 0;
	buttonClicks = 0;
	total = 0;
	loadLevel(gameData[currentLevel]);
}

function goHome() {
	document.getElementById('explanation').style.display = 'inherit';
	document.getElementById('buttonArea').style.display = 'none';
	currentLevel = 0;
	buttonClicks = 0;
	total = 0;
}

// Loads a level based on the array passed in
function loadLevel(startArr) {
	document.getElementById('buttonArea').innerHTML = '';
	document.getElementById('buttonArea').appendChild(createAnswerKey(startArr));

	buttonArr = [];
	var rowsNeeded = Math.sqrt(startArr.length);
	var rowsArr = [];
	var buttonClicks = 0;
	var check = 'level' + (currentLevel + 1) + 'Check(this)';

	var grid = document.createElement('div');
	grid.setAttribute('id', 'buttonGrid');
	var gridWidth = Math.round(buttonArea.offsetWidth * .8 * .4);

	var textSize = 50/rowsNeeded;

	// Creates buttons based on array passed in
	for (var i = 0; i < startArr.length; i++) {
		var newButton = document.createElement('button');
		newButton.setAttribute('id', 'button' + (i + 1));
		newButton.setAttribute('onclick', check);
		buttonArr.push(newButton);
		newButton.style.width = Math.round((gridWidth/rowsNeeded) - 5) + 'px';
		newButton.style.height = Math.round((gridWidth/rowsNeeded) - 5) + 'px';
		buttonArr[i].style.backgroundColor = startArr[i];
		newButton.appendChild(document.createTextNode("Hello!"));
		newButton.style.fontSize = (Math.round((gridWidth/rowsNeeded) - 5) / 4) + 'px';
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
	levelTracker.setAttribute('id', 'levelTracker');
	levelTracker.appendChild(document.createTextNode('Current Level: ' + (currentLevel + 1) + ' Number of presses: '));
	clickValue = document.createTextNode(buttonClicks);
	levelTracker.appendChild(clickValue);
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
		greenRule.appendChild(document.createTextNode("Green Tiles: Change themselves"));
		daRulez.appendChild(greenRule);
	}
	if (startArr.indexOf(dBlue) > -1) {
		var blueRule = document.createElement('li');
		blueRule.appendChild(document.createTextNode("Blue Tiles: Change themselves + 1 tile"));
		daRulez.appendChild(blueRule);
	}
	if (startArr.indexOf(dOrange) > -1) {
		var orangeRule = document.createElement('li');
		orangeRule.appendChild(document.createTextNode("Orange Tiles: Change themselves + 2 tile"));
		daRulez.appendChild(orangeRule);
	}
	if (startArr.indexOf(dPurple) > -1) {
		var purpleRule = document.createElement('li');
		purpleRule.appendChild(document.createTextNode("Blue Tiles: Change themselves + 1 tile"));
		daRulez.appendChild(purpleRule);
	}

	answerKey.appendChild(daRulez);

	// Adds code word for level skipping
	var keyCode = document.createElement('h3');
	keyCode.appendChild(document.createTextNode('Level Code: ' + cheatCodes[currentLevel]));
	answerKey.appendChild(keyCode);

	var totalScore = document.createElement('h3');
	totalScore.setAttribute('id', 'total');
	totalScore.appendChild(document.createTextNode('Total Score: '));
	totalScore.appendChild(document.createTextNode(total));
	answerKey.appendChild(totalScore);

	return answerKey;
}

// Checks each time a button is clicked to see if the winning combo has appeared
function checkCombo(endArr) {
	for (var i = 0; i < buttonArr.length; i++) {
		if (buttonArr[i].style.backgroundColor != endArr[i]) {
			break;
		}
		else if (i === endArr.length - 1) {
			currentLevel++;
			total += totalPoints[currentLevel - 1];
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