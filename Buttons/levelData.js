var lBlue = 'rgb(120, 205, 229)';
var dBlue = 'rgb(29, 100, 169)';
var lGreen = 'rgb(95, 191, 110)';
var dGreen = 'rgb(4, 86, 50)';
var lOrange = 'rgb(255, 163, 121)';
var dOrange = 'rgb(164, 58, 0)';
var lPurple = 'rgb(176, 72, 201)';
var dPurple = 'rgb(85, 0, 141)';

var gameData = [];
var endData = [];

var level1 = [dGreen, dGreen, dGreen, dGreen];
gameData.push(level1);

var level1End = [dGreen, lGreen, lGreen, dGreen];
endData.push(level1End);

var level2 = [dGreen, dBlue, dGreen, dGreen];
gameData.push(level2);

var level2End = [lGreen, lBlue, dGreen, lGreen];
endData.push(level2End);

var level3 = [dGreen, dGreen, dBlue, 
			   dGreen, dBlue, dBlue, 
			   dBlue, dGreen, dGreen];

gameData.push(level3);

var level3End = [lGreen, dGreen, dBlue,
				  lGreen, lBlue, dBlue, 
				  lBlue, dGreen, lGreen];

endData.push(level3End);

var level4 = [dBlue, dGreen, dBlue, 
			  dGreen, dGreen, dGreen, 
			  dGreen, dGreen, dBlue];

gameData.push(level4);

var level4End = [lBlue, lGreen, dBlue,
				 dGreen, lGreen, lGreen,
				 lGreen, dGreen, lBlue];

endData.push(level4End);

var level5 = [dBlue, dGreen, dGreen,
			 dGreen, dBlue, dOrange, 
			 dGreen, dGreen, dBlue];

gameData.push(level5);

var level5End = [lBlue, dGreen, lGreen, 
				lGreen, dBlue, lOrange, 
				dGreen, lGreen, dBlue]; 

endData.push(level5End);

var level6 = [dBlue, dGreen, dOrange, dGreen,
			  dOrange, dBlue, dGreen, dOrange, 
			  dGreen, dGreen, dBlue, dOrange, 
			  dBlue, dBlue, dOrange, dGreen];

gameData.push(level6);

var level6End = [dBlue, lGreen, dOrange, dGreen,
			  dOrange, dBlue, dGreen, lOrange, 
			  dGreen, dGreen, lBlue, dOrange, 
			  dBlue, dBlue, lOrange, dGreen];

endData.push(level6End);