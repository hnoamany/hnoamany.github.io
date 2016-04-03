var pictureArray= ["life-long-learner.png","adventurist.png","critical-thinker.png","tinkerer.png"];
var picture=document.getElementById("am_animation");
var pictureIndex=0;
function automaticSlider(){
	am_animation.setAttribute("src",pictureArray[pictureIndex]);
	pictureIndex++;
	if(pictureIndex >=pictureArray.length){
		pictureIndex=0;
	}
	
}
setInterval(automaticSlider,3000);

var PictureArray= ["learn-new-things.png","solve-problems.png","try-new-things.png"];
var Picture=document.getElementById("like_animation");
var PictureIndex=0;
function AutomaticSlider(){
	like_animation.setAttribute("src",PictureArray[PictureIndex]);
	PictureIndex++;
	if(PictureIndex >=PictureArray.length){
		PictureIndex=0;
	}
	
}
setInterval(AutomaticSlider,5000);
