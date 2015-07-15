"use strict"; // strict syntax

function level1Check(currButton) {
	// Turns dark green button lighter
	if (currButton.style.backgroundColor === dGreen) {
		currButton.style.backgroundColor = lGreen;
		buttonOn = true;
	}
	// Turns dark blue button lighter
	else if (currButton.style.backgroundColor === dBlue) {
		currButton.style.backgroundColor = lBlue;

		if (currButton === buttonArr[2]) {
			buttonArr[1].style.backgroundColor = lGreen;
		}
		else if (currButton === buttonArr[4]) {
			buttonArr[3].style.backgroundColor = lGreen;
		}
		else if (currButton === buttonArr[5]) {
			buttonArr[8].style.backgroundColor = lGreen;
		}
		else if (currButton === buttonArr[6]) {
			buttonArr[7].style.backgroundColor = lGreen;
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
			buttonArr[1].style.backgroundColor = dGreen;
		}
		else if (currButton === buttonArr[4]) {
			buttonArr[3].style.backgroundColor = dGreen;
		}
		else if (currButton === buttonArr[5]) {
			buttonArr[8].style.backgroundColor = dGreen;
		}
		else if (currButton === buttonArr[6]) {
			buttonArr[7].style.backgroundColor = dGreen;
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
			buttonArr[3].style.backgroundColor = lGreen;
		}
		else if (currButton === buttonArr[2]) {
			buttonArr[1].style.backgroundColor = lGreen;
		}
		else if (currButton === buttonArr[8]) {
			buttonArr[7].style.backgroundColor = lGreen;
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
			buttonArr[3].style.backgroundColor = dGreen;
		}
		else if (currButton === buttonArr[2]) {
			buttonArr[1].style.backgroundColor = dGreen;
		}
		else if (currButton === buttonArr[8]) {
			buttonArr[7].style.backgroundColor = dGreen;
		}
	}

	checkCombo(endData[currentLevel]);
}


