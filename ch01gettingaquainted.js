alert("Welcome to my JavaScript");

confirm("Are you okay?");

if (confirm("Are you really okay?")){
	document.write("OK");
} else {
	document.write("Not OK.  Get well soon!");
}

prompt("abc or def?");

answer = prompt("ghi or jkl?");
if (answer == "ghi") {
	document.write("great ghi");
} else if (answer == "jkl") {
	document.write("jublee jkl");
} else {
	document.write("I don't understand");
}