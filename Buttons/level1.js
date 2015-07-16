"use strict"; // strict syntax

function buttonChange(connectedButton) {
	if (connectedButton.style.backgroundColor === dGreen) {
		connectedButton.style.backgroundColor = lGreen;
	} 
	else if (connectedButton.style.backgroundColor === lGreen) {
		connectedButton.style.backgroundColor = dGreen;
	}
}

function level1Check(currButton) {
	// Turns dark green button lighter
	if (currButton.style.backgroundColor === dGreen) {
		currButton.style.backgroundColor = lGreen;
	}
	// Turns dark blue button lighter
	else if (currButton.style.backgroundColor === dBlue) {
		currButton.style.backgroundColor = lBlue;

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
	}
	// Turns light green button darker
	else if(currButton.style.backgroundColor === lGreen) {
		currButton.style.backgroundColor = dGreen;
	}
	// Turns light blue button darker
	else if (currButton.style.backgroundColor === lBlue) {
		currButton.style.backgroundColor = dBlue;
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
	}

	checkCombo(endData[currentLevel]);

}

function level2Check(currButton) {
	// Turns dark green button lighter
	if (currButton.style.backgroundColor === dGreen) {
		currButton.style.backgroundColor = lGreen;
	}
	// Turns dark blue button lighter
	else if (currButton.style.backgroundColor === dBlue) {
		currButton.style.backgroundColor = lBlue;
		if (currButton === buttonArr[0]) {
			buttonChange(buttonArr[3]);
		}
		else if (currButton === buttonArr[2]) {
			buttonChange(buttonArr[1]);
		}
		else if (currButton === buttonArr[8]) {
			buttonChange(buttonArr[7]);
		}
	}
	// Turns light green button darker
	else if(currButton.style.backgroundColor === lGreen) {
		currButton.style.backgroundColor = dGreen;
	}
	// Turns light blue button darker
	else if (currButton.style.backgroundColor === lBlue) {
		currButton.style.backgroundColor = dBlue;
		if (currButton === buttonArr[0]) {
			buttonChange(buttonArr[3]);
		}
		else if (currButton === buttonArr[2]) {
			buttonChange(buttonArr[1]);
		}
		else if (currButton === buttonArr[8]) {
			buttonChange(buttonArr[7]);
		}
	}

	checkCombo(endData[currentLevel]);
}


