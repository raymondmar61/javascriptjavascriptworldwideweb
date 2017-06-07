raymondimages = new Array("images/bartender.jpg", "images/missionpeak.jpg", "images/quailcreekstatepark.jpg", "images/summitrock.jpg");
raymondimages2 = new Array("images/alamedapolicecar001.jpg", "images/berkeleypolicecar001.jpg", "images/californiahighwaypatrolpolicecar001.jpg");
raymondimages3 = new Array("images/alamedapolicecar001.jpg", "images/summitrock.jpg", "images/questionmark.jpg");
raymondimages3url = new Array("file:///G:/Raymond/innovateinfinitely/policecarphotoalbum/policecarphotoalbumca.html", "file:///G:/Raymond/innovateinfinitely/myphotoalbum.html", "file:///G:/Raymond/innovateinfinitely/aboutme.html");
slideshow = new Array("images/alamedapolicetextfield.jpg", "images/berkeleypolicetextfield.jpg", "images/blankpolicetextfield.jpg", "images/californiahighwaypatrolpolicetextfield.jpg")
imagenumber = 0;
imagenumber2 = 0;
slideshownumber = 0;
raymondimagescount = raymondimages.length;
raymondimagescount2 = raymondimages2.length;
slideshowcounter = slideshow.length - 1; //slideshowcounter = 3.  Match the slideshow array index 0, 1, 2, 3.
firstTime = true;

function rotateimages() {
	if (document.images) {
		imagenumber++;
		if (imagenumber == raymondimagescount) {
			imagenumber = 0;
		}		
		document.raymondbanner.src = raymondimages[imagenumber];		
		imagenumber2++;
		if (imagenumber2 == raymondimagescount2) {
			imagenumber2 = 0;
		}		
		document.raymondbanner2.src = raymondimages2[imagenumber2];
		setTimeout("rotateimages()",3000);	
	}
}

function rotateimageswait() {
	if (document.images) {
		if (document.raymondbannerwait.complete) {
			imagenumber++;
			if (imagenumber == raymondimagescount) {
				imagenumber = 0;
			}
		document.raymondbannerwait.src = raymondimages[imagenumber];
		}
		setTimeout("rotateimageswait()",3000);	
	}	
}

function rotateimagesurl() {
	if (document.images) {
		imagenumber2++;  //using imagenumber2 because the pic count is the same in raymdonimages2 array
		if (imagenumber2 == raymondimagescount2) {
			imagenumber2 = 0; 
		}
		document.raymondbannerurl.src = raymondimages3[imagenumber2];
		setTimeout("rotateimagesurl()",3000);
	}
}
function newurl(){  //using imagenumber2 because the pic count is the same in raymdonimages2 array
	document.location.href=raymondimages3url[imagenumber2];
}

function processprevious() {
	if (document.images && slideshownumber > 0) {
		slideshownumber--;
		document.slideshowpic.src = slideshow[slideshownumber];
	}
}
function processnext() {
	if (document.images && slideshownumber < slideshowcounter) {
		slideshownumber++;
		document.slideshowpic.src = slideshow[slideshownumber];
	}
}

//slideshow function with wraparound
function changeslide(direction){
	if (document.images) {
		slideshownumber = slideshownumber + direction;
		if (slideshownumber > slideshowcounter) {
			slideshownumber = 0;
		}
		if (slideshownumber < 0) {
			slideshownumber = slideshowcounter;
		}
		document.slideshowpicwraparound.src = slideshow[slideshownumber];
	}
}

function randompic() {
	if(document.images){
		randomnumber = Math.floor((Math.random() * raymondimagescount))
		document.randompic.src=raymondimages[randomnumber]
	}
}

//random pic cycle images with a random start
function randompicevenfromthestart() {
	if(document.images){
		if (firstTime == true){
			thisPic = Math.floor((Math.random() * raymondimagescount)) 
			firstTime = false;
		} else {
			thisPic++;
			if (thisPic == raymondimagescount) {
				thisPic = 0
			}
		}
		document.randompiccycle.src=raymondimages[thisPic]
		setTimeout("randompicevenfromthestart()",3000);
	}
}

function multiplerandomimages() {
	if (document.images) {
		randomnumber = Math.floor((Math.random() * raymondimagescount))
		document.multiplerandomimages1.src=raymondimages[randomnumber]
		randomnumber = Math.floor((Math.random() * raymondimagescount2))
		document.multiplerandomimages2.src=raymondimages2[randomnumber]
	}

}

if (document.images) {
	chapter1 = new Image;
	chapter2 = new Image;
	chapter3 = new Image;
	bookchapters = new Image;
	chapter1.src = "images/chapter1.jpg";
	chapter2.src = "images/chapter2.jpg";
	chapter3.src = "images/chapter3.jpg";
	bookchapters.src = "images/bookchapters.jpg";

} else {
	chapter1.src = "";
	chapter2.src = "";
	chapter3.src = "";
	bookchapters.src = "";
	document.roll = "";
}