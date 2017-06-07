if (document.images) {
	lightbulbs = new Image
	questionmark = new Image
	lightbulbs.src = "images/lightbulbs.jpg"
	questionmark.src = "images/questionmark.jpg"
} else {
	lightbulbs = ""
	questionmark = ""
	document.bow = ""
	document.sam = ""
}

if (document.images) {
	bartender = new Image
	summitrock = new Image
	missionpeak = new Image
	quailcreekstatepark = new Image
	bartender.src = "images/bartender.jpg"
	summitrock.src = "images/summitrock.jpg"
	missionpeak.src = "images/missionpeak.jpg"
	quailcreekstatepark.src = "images/quailcreekstatepark.jpg"
} else {
	bartender = ""
	summitrock = ""
	missionpeak = ""
	quailcreekstatepark = ""
	document.oct = ""
	document.nov = ""
}

if (document.images) {
	alamedapolicetextfield = new Image
	berkeleypolicetextfield = new Image
	californiahighwaypatrolpolicetextfield = new Image
	blankpolicetextfield = new Image
	alamedapolicetextfield.src = "images/alamedapolicetextfield.jpg"
	berkeleypolicetextfield.src = "images/berkeleypolicetextfield.jpg"
	californiahighwaypatrolpolicetextfield.src = "images/californiahighwaypatrolpolicetextfield.jpg"
	blankpolicetextfield.src = "images/blankpolicetextfield.jpg"
} else {
	alamedapolicetextfield = ""
	berkeleypolicetextfield = ""
	californiahighwaypatrolpolicetextfield = ""
	blankpolicetextfield = ""
	document.policetextfield = ""
}