policeslideshowtext = new Array("Alameda","Berkeley","California Highway Patrol");
thisImg = 0;
imgCt = policeslideshowtext.length;
function policeslideshow(direction){
	if (document.images) {
		thisImg = thisImg + direction;
		if (thisImg < 0) {
			thisImg = imgCt - 1;
		}
		if (thisImg == imgCt) {
			thisImg = 0;
		}
		document.slideshow.src = "images/policecar" +thisImg+ ".jpg";
		document.imgForm.imgText.value = policeslideshowtext[thisImg];
	}

}