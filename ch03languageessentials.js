//For Loop
limit = 10;
for (i=1;i<=limit;i++) {
	document.write("For loop number " +i+"<br/>");
}

//Do While Loop
do {
	ans = prompt("Tell me your name");
}
while (!ans) //do while loop continues true when ans is false
document.write("Hello, " +ans+"<br/>");

//Function
function saySomething(){
	document.write("Four score and seven years ago.<br/>");
}
saySomething();

function userquote(quote){
	document.write("<b>You wrote the following:</b> " +quote+"<br/>");
}
quote = prompt("Share a famous quote");
userquote(quote);

//Select Case
function saySomethingSwitchCase(buttonName){
	switch(buttonName.value) {
		case "Lincoln":
			document.write("Four score and seven years ago.<br/>");
			break;
		case "Kennedy":
			document.write("Ask not what your country can do for you.<br/>");
			break;
		case "Nixon":
			document.write("I'm not a crook!");
			break;
		default:
			document.write("Continue learning");
	}
}

//Function returns a value
function addition(number1, number2) {
	sum = number1 + number2;
	return sum
}
document.write(addition(5,9));
document.write("<br/>");

//Try, Throw, Catch handle errors
squareroot = prompt("Enter a number to calculate the square root");
try {
	if (!squareroot || isNaN(squareroot)) {
		throw new Error("Not a valid number");
	}
	document.write("The square root is " +Math.sqrt(squareroot)+"<br/>");
}
	catch(errMsg){
		alert("Invalid number or no number");

	}

//Scrolling Status Bars.  Doesn't work.  Outdated window.status?
scrollmessage = "Don't create a scroller";
i = 0
function scrollMessage(){
	window.status = scrollmessage.substring(i,scrollmessage.length) + scrollmessage.substring(0,i);
	if (i < scrollmessage.length) {
		i++;
	}
	else {
		i = 0;
	}
setTimeout("scrollMessage()",50);
}

//Status Bar Messages.  Doesn't work.  Outdated window.status?
function secretmessage() {
	window.status = "Secret message";
	return true
}