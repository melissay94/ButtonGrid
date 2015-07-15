"use strict";

var buttonArr;

window.onload = function() {
	buttonArr = [document.getElementById('topLeft'), document.getElementById('topMiddle'), document.getElementById('topRight'), 
document.getElementById('middleLeft'), document.getElementById('middle'), document.getElementById('middleRight'), 
document.getElementById('bottomLeft'), document.getElementById('bottomMiddle'), document.getElementById('bottomRight')];
	loadLevel(level1);
}