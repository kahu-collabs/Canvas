function Validator(){

}


Validator.prototype.audioValidator = function(soundUrl){
	var fileExt = soundUrl.split(".").pop().toLowerCase()
	
	if ( fileExt == "mp3" || fileExt == "wav"){
		alert("congratulations")
	}else{
		alert("no congratulations")
	}
}

Validator.prototype.imgValidator = function(imgUrl){
	var imgExt = imgUrl.split(".").pop().toLowerCase()
	
	if ( imgExt == "jpg" || imgExt == "png"){
		alert("congratulations")
	}else{
		alert("no congratulations")
	}
}

// test = new Validator()
// test.imgValidator("something.jpg")
// test.imgValidator("something.jg")
// test.imgValidator("something.PNG")
// // test.audioValidator("http://soundjax.com/reddo/51012%5EDIALTONE.wav");
// console.log(test);
