"use strict"; // strict syntax

var upSound = new Audio("Buttons/media/8.mp3");
var dnSound = new Audio("Buttons/media/1.mp3");

// Changes button from current color to the opposite color
function buttonChange(connectedButton) {

	console.log(upSound, " ", dnSound);
	
	if (connectedButton.style.backgroundColor === dGreen) {
		connectedButton.style.backgroundColor = lGreen;
		upSound.play();
	} 
	else if (connectedButton.style.backgroundColor === lGreen) {
		connectedButton.style.backgroundColor = dGreen;
		dnSound.play();
	}
	else if (connectedButton.style.backgroundColor === dBlue) {
		connectedButton.style.backgroundColor = lBlue;
		upSound.play();
	} 
	else if (connectedButton.style.backgroundColor === lBlue) {
		connectedButton.style.backgroundColor = dBlue;
		dnSound.play();
	}
	else if (connectedButton.style.backgroundColor === dOrange) {
		connectedButton.style.backgroundColor = lOrange;
		upSound.play();
	} 
	else if (connectedButton.style.backgroundColor === lOrange) {
		connectedButton.style.backgroundColor = dOrange;
		dnSound.play();
	}
	else if (connectedButton.style.backgroundColor === dPurple) {
		connectedButton.style.backgroundColor = lPurple;
		upSound.play();
	}
	else if (connectedButton.style.backgroundColor === lPurple) {
		connectedButton.style.backgroundColor = dPurple;
		dnSound.play();
	}
}

function level1Check(currButton) {
	buttonClicks ++;
	document.getElementById('levelTracker').childNodes[1].nodeValue = buttonClicks;
	buttonChange(currButton);
	checkCombo(endData[currentLevel]);
}

function level2Check(currButton) {

	buttonClicks += 1;
	document.getElementById('levelTracker').childNodes[1].nodeValue = buttonClicks;
	buttonChange(currButton);

	if (currButton === buttonArr[1]) {
		buttonChange(buttonArr[2]);
	}

	checkCombo(endData[currentLevel]);
}

function level3Check(currButton) {


	buttonClicks += 1;
	document.getElementById('levelTracker').childNodes[1].nodeValue = buttonClicks;

	// Changes button pressed
	buttonChange(currButton);

	// Checks if current button is a button that is connected to others
	if (currButton === buttonArr[2]) {
		buttonChange(buttonArr[1]);
	}
	else if (currButton === buttonArr[4]) {
		buttonChange(buttonArr[3]);
	}
	else if (currButton === buttonArr[5]) {
		buttonChange(buttonArr[8]);
	}
	else if (currButton === buttonArr[6]) {
		buttonChange(buttonArr[7]);
	} 

	// Checks if your current color combo is the winning combo
	checkCombo(endData[currentLevel]);

}

function level4Check(currButton) {

	buttonClicks += 1;
	document.getElementById('levelTracker').childNodes[1].nodeValue = buttonClicks;
	
	// Changes button pressed
	buttonChange(currButton);

	// Checks if current button is a button that is connected to others
	if (currButton === buttonArr[0]) {
		buttonChange(buttonArr[4]);
	}
	else if (currButton === buttonArr[2]) {
		buttonChange(buttonArr[1]);
	}
	else if (currButton === buttonArr[8]) {
		buttonChange(buttonArr[5]);
	}

	// Checks if your current color combo is the winning combo
	checkCombo(endData[currentLevel]);
}

function level5Check(currButton) {

	buttonClicks += 1;
	document.getElementById('levelTracker').childNodes[1].nodeValue = buttonClicks;
	
	// Changes button pressed
	buttonChange(currButton);

	// Checks if current button is a button that is connected to others

	// Blue buttons
	if (currButton === buttonArr[0]) {
		buttonChange(buttonArr[1]);
	}
	else if (currButton === buttonArr[4]) {
		buttonChange(buttonArr[6]);
	}
	else if (currButton === buttonArr[8]) {
		buttonChange(buttonArr[5]);
	}

	// Orange buttons
	if (currButton === buttonArr[5]) {
		buttonChange(buttonArr[2]);
		buttonChange(buttonArr[7]);
	}

	// Checks if current color combo is winning combo
	checkCombo(endData[currentLevel]);
}

function level6Check(currButton) {

	buttonClicks += 1;
	document.getElementById('levelTracker').childNodes[1].nodeValue = buttonClicks;

	buttonChange(currButton);

	// It's official, I need a new system

	// Blue Buttons
	if (currButton === buttonArr[2]) 
		buttonChange(buttonArr[4])
	else if (currButton === buttonArr[3])
		buttonChange(buttonArr[0])
	else if (currButton === buttonArr[4])
		buttonChange(buttonArr[3])
	else if (currButton === buttonArr[8])
		buttonChange(buttonArr[7])
	
	// Orange Buttons
	if (currButton === buttonArr[0]) {
		buttonChange(buttonArr[3])
		buttonChange(buttonArr[4])
	}
	else if (currButton === buttonArr[5]) {
		buttonChange(buttonArr[1])
		buttonChange(buttonArr[7])
	}
	else if (currButton === buttonArr[7]) {
		buttonChange(buttonArr[6])
		buttonChange(buttonArr[5])
	}


	checkCombo(endData[currentLevel]);
}

function level7Check(currButton) {

	buttonClicks += 1;
	document.getElementById('levelTracker').childNodes[1].nodeValue = buttonClicks;

	buttonChange(currButton);

	// It's official, I need a new system

	// Blue Buttons
	if (currButton === buttonArr[1]) 
		buttonChange(buttonArr[2])
	else if (currButton === buttonArr[5])
		buttonChange(buttonArr[8])
	else if (currButton === buttonArr[8])
		buttonChange(buttonArr[4])
	
	// Orange Button
	if (currButton === buttonArr[6]) {
		buttonChange(buttonArr[3])
		buttonChange(buttonArr[4])
	}

	// Purple Button
	if(currButton === buttonArr[4]) {
		buttonChange(buttonArr[1])
		buttonChange(buttonArr[6])
		buttonChange(buttonArr[7])
	}

	checkCombo(endData[currentLevel]);
}

function level8Check(currButton) {

	buttonClicks += 1;
	document.getElementById('levelTracker').childNodes[1].nodeValue = buttonClicks;

	buttonChange(currButton);

	//Blue buttons
	if (currButton === buttonArr[0]) {
		buttonChange(buttonArr[5]);
	}

	else if (currButton === buttonArr[5]) {
		buttonChange(buttonArr[9]);
	}
	else if (currButton === buttonArr[10]) {
		buttonChange(buttonArr[14]);
	}
	else if (currButton === buttonArr[12]) {
		buttonChange(buttonArr[13]);
	}
	else if (currButton === buttonArr[13]) {
		buttonChange(buttonArr[10]);
	}

	// Orange buttons
	if (currButton === buttonArr[2]) {
		buttonChange(buttonArr[1]);
		buttonChange(buttonArr[7]);
	}
	else if (currButton === buttonArr[4]) {
		buttonChange(buttonArr[0]);
		buttonChange(buttonArr[8]);
	}
	else if (currButton === buttonArr[7]) {
		buttonChange(buttonArr[3]);
		buttonChange(buttonArr[11]);
	}
	else if (currButton === buttonArr[11]) {
		buttonChange(buttonArr[10]);
		buttonChange(buttonArr[15]);
	}
	else if (currButton === buttonArr[14]) {
		buttonChange(buttonArr[9]);
		buttonChange(buttonArr[15]);
	}

	checkCombo(endData[currentLevel]);
}

function level9Check(currButton) {

	buttonClicks += 1;
	document.getElementById('levelTracker').childNodes[1].nodeValue = buttonClicks;

	buttonChange(currButton);

	//Blue buttons
	if (currButton === buttonArr[0]) {
		buttonChange(buttonArr[4]);
	}
	else if (currButton === buttonArr[2]) {
		buttonChange(buttonArr[3]);
	}
	else if (currButton === buttonArr[3]) {
		buttonChange(buttonArr[6]);
	}
	else if (currButton === buttonArr[4]) {
		buttonChange(buttonArr[5]);
	}
	else if (currButton === buttonArr[6]) {
		buttonChange(buttonArr[7]);
	}
	else if (currButton === buttonArr[8]) {
		buttonChange(buttonArr[12]) 
	}
	else if (currButton === buttonArr[9]) {
		buttonChange(buttonArr[8]);
	}
	else if (currButton === buttonArr[11]) {
		buttonChange(buttonArr[15]);
	}
	else if (currButton === buttonArr[12]) {
		buttonChange(buttonArr[13]);
	}
	else if (currButton === buttonArr[13]) {
		buttonChange(buttonArr[14]);
	}

	// Orange buttons 
	if (currButton === buttonArr[1]) {
		buttonChange(buttonArr[0]);
		buttonChange(buttonArr[6]);
	}
	else if (currButton === buttonArr[5]) {
		buttonChange(buttonArr[2]);
		buttonChange(buttonArr[9]);
	}
	else if (currButton === buttonArr[7]) {
		buttonChange(buttonArr[10]);
		buttonChange(buttonArr[11]);
	}
	else if (currButton === buttonArr[10]) {
		buttonChange(buttonArr[9]);
		buttonChange(buttonArr[13]);
	}
	else if (currButton === buttonArr[15]) {
		buttonChange(buttonArr[10]);
		buttonChange(buttonArr[14]);
	}

	checkCombo(endData[currentLevel]);
}

function level10Check(currButton) {

	buttonClicks += 1;
	document.getElementById('levelTracker').childNodes[1].nodeValue = buttonClicks;

	buttonChange(currButton);

	//Blue buttons
	if (currButton === buttonArr[2]) {
		buttonChange(buttonArr[1]);
	}
	else if (currButton === buttonArr[5]) {
		buttonChange(buttonArr[8]);
	}
	else if (currButton === buttonArr[6]) {
		buttonChange(buttonArr[3]);
	}
	else if (currButton === buttonArr[8]) {
		buttonChange(buttonArr[4]);
	}
	else if (currButton === buttonArr[10]) {
		buttonChange(buttonArr[9]);
	}
	else if (currButton === buttonArr[12]) {
		buttonChange(buttonArr[8]) 
	}
	else if (currButton === buttonArr[14]) {
		buttonChange(buttonArr[11]);
	}

	// Orange buttons 
	if (currButton === buttonArr[3]) {
		buttonChange(buttonArr[2]);
		buttonChange(buttonArr[7]);
	}
	else if (currButton === buttonArr[4]) {
		buttonChange(buttonArr[5]);
		buttonChange(buttonArr[0]);
	}
	else if (currButton === buttonArr[9]) {
		buttonChange(buttonArr[4]);
		buttonChange(buttonArr[13]);
	}
	else if (currButton === buttonArr[15]) {
		buttonChange(buttonArr[14]);
		buttonChange(buttonArr[10]);
	}

	// Purple buttons
	if (currButton === buttonArr[1]) {
		buttonChange(buttonArr[0]);
		buttonChange(buttonArr[6]);
		buttonChange(buttonArr[2]);
	}
	else if (currButton === buttonArr[11]) {
		buttonChange(buttonArr[7]);
		buttonChange(buttonArr[10]);
		buttonChange(buttonArr[15]);
	}

	checkCombo(endData[currentLevel]);
}



