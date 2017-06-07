dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
now = new Date;  //Create a new Date object, and fill it with the current date
document.write("From Javascript, today is " +dayName[now.getDay()]+ " " +monthName[now.getMonth()]+ " " +now.getDate()+", " +now.getFullYear());

todaysdate = ("Today is " +dayName[now.getDay()]+ " " +monthName[now.getMonth()]+ " " +now.getDate()+", " +now.getFullYear());
var p = document.getElementById("todaysdateid");
p.textContent = todaysdate;  

if (now.getDay() == 0 || now.getDay() == 6) {
	weekend = document.write("Horray, it's a weekend!");
} else {
	weekend = document.write("Sorry, it's a weekday.");
}
var p = document.getElementById("weekendid");
p.textContent = weekend;

if (now.getHours() < 5) {
	document.write("What are you doing up so late?");
} else if (now.getHours() < 9) {
	document.write("Good Morning");
} else if (now.getHours() < 17) {
	document.write("No surfing during working hours!");
} else {
	document.write("Good evening!");
}

thisyear = now.getFullYear()
nextyear = thisyear + 1;
document.write(thisyear);
document.write(nextyear);
birthday = new Date(thisyear,7,3) //Date(year, month, day); months Jan starts at zero.
document.write(birthday);
if (birthday.getTime() < now.getTime()) {
	birthday.setYear(nextyear);
}
function dayToDays(inTime) {
	return (inTime.getTime() / (1000 * 60 * 60 * 24))
}
function daysTill(inDate) {
	return(Math.ceil(dayToDays(inDate) - dayToDays(now)));
}
document.write("It's only " +daysTill(birthday)+ " days until my birthday");