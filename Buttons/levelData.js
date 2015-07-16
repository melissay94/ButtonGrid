var lBlue = 'rgb(120, 205, 229)';
var dBlue = 'rgb(86, 171, 195)';
var lGreen = 'rgb(95, 191, 110)';
var dGreen = 'rgb(61, 141, 76)';
var lOrange = 'rgb(255, 163, 121)';
var dOrange = 'rgb(221, 113, 97)';

var gameData = [];
var endData = [];

var level1 = [dGreen, dGreen, dBlue, 
			   dGreen, dBlue, dBlue, 
			   dBlue, dGreen, dGreen];

gameData.push(level1);

var level1End = [lGreen, dGreen, dBlue,
				  lGreen, lBlue, dBlue, 
				  lBlue, dGreen, lGreen];

endData.push(level1End);

var level2 = [dBlue, dGreen, dBlue, 
			  dGreen, dGreen, dGreen, 
			  dGreen, dGreen, dBlue];

gameData.push(level2);

var level2End = [lBlue, lGreen, dBlue,
				 dGreen, lGreen, lGreen,
				 lGreen, dGreen, lBlue];

endData.push(level2End);

var level3 = [dBlue, dGreen, dGreen,
			 dGreen, dBlue, dOrange, 
			 dGreen, dGreen, dBlue];

gameData.push(level3);

var level3End = [lBlue, dGreen, lGreen, 
				lGreen, dBlue, lOrange, 
				dGreen, lGreen, dBlue]; 

endData.push(level3End);

