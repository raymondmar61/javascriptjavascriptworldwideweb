window.onunload = sayGoodnight;
function sayGoodnight() {
	alert("Thanks for visiting.  Come back soon");
}

window.onfocus = moveBack;
function moveBack() {
	self.blur();
}