function Validator(){

}


Validator.prototype.audioValidator = function(soundUrl){
	var fileExt = soundUrl.split(".").pop().toLowerCase()

	if ( fileExt == "mp3" || fileExt == "wav"){
		return true
	}else{
		return false
	}
}

Validator.prototype.imgValidator = function(imgUrl){
	var imgExt = imgUrl.split(".").pop().toLowerCase()

	if ( imgExt == "jpg" || imgExt == "png"){
		return true
	}else{
		return false
	}
}

module.exports = Validator

