//newWindow = window.open("href","href new window's name", "toolbar=yes, location=yes, scrollbars=yes, resizable=yes, width=300, height=300")

function newWindow() {
	//window1 = window.open("file:///G:/Raymond/javascript/javascriptworldwideweb/ch5morefunwithimages.html", "Alameda", "width=600, height=400");
	window1 = window.open("images/alamedapolicecar001.jpg", "Alameda", "width=600, height=400");
	//window1 = window.open("images/alamedapolicecar001.jpg", "Alameda", "toolbar=yes, location=yes, scrollbars=yes, width=200, height=100");
}

function newWindowloaddifferentcontents(policepics) {
	policepicswindow = window.open(policepics, "policepicswindowname", "width=1024, height=768");
	policepicswindow.focus(); //tell the window you just opened to come to the front

}

function newWindowimagelinks(ininwebpage) {
	ininwebpagewindow = window.open(ininwebpage, "ininwebpagewindowname", "width=1024, height=768");
	ininwebpagewindow.focus(); //tell the window you just opened to come to the front

}

function newWindowsmultiplewindows(raymond) {
	windowname = raymond + "Win";  //window name is the link plus the string "Win"
	raymondwindow = window.open(raymond, windowname, "width=1024, height=768");  //as long as each window name is different, new windows open.
	raymondwindow.focus()
}

function newWindowsmultiplewindowssimultaneously() {
	raymondimages = new Array("images/bartender.jpg", "images/missionpeak.jpg", "images/quailcreekstatepark.jpg", "images/summitrock.jpg");
	for (i=0;i<raymondimages.length;i++) {
		windowname = raymondimages[i] + "Win"; //window name is the link plus the string "Win"
		raymondimageswindow = window.open(raymondimages[i],windowname, "width=400, height=300"); //as long as each window name is different, new windows open.		
		}
	}

function newWindowScrollyes() {
	scrollwindow = window.open("file:///G:/Raymond/javascript/javascriptworldwideweb/ch5morefunwithimages.html","scrollwindowname","width=800, height=600", scrollbars="yes");
	scrollwindow.onfocus();
}

function newWindowScrollno() {
	scrollwindow = window.open("file:///G:/Raymond/javascript/javascriptworldwideweb/ch5morefunwithimages.html","scrollwindowname","width=800, height=600", scrollbars="no");
	scrollwindow.onfocus();
}

/*
 function closeWindow() {
	newWindow = null;
	newWindow.close();
}
*/

function positionWindow(ininwebpage) {
	leftPos = 0;
	if (screen) {
		leftPos = screen.width - (screen.width)/2;
	}
	ininwebpagewindow = window.open(ininwebpage,"ininwebpagewindowname", "width=1024, height=768, left="+leftPos+", top=500");
	//ininwebpagewindow = window.open(ininwebpage,"ininwebpagewindowname", "width=1024, height=768, left=0, top=100");
}
//Use screen.height to check the height of the window.
//New window in the top left set top=0 and left=0.

