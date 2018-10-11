//Introducing the constructor function and relative rating function
function newsongdetails(name, ID, rating,) {
	this.name = name;
	this.ID = ID;
	this.rating = rating;
}
function changeRating(newrating) {
	this.newrating = rating;
}
		
//Attributing the songs to their respective variables
var audio_0 = new Audio('0.mp3');
var details_0 = new newsongdetails("A Cheap Keyboard near You", 0, 0);

var audio_1 = new Audio('1.mp3');
var details_1 = new newsongdetails("Smooth Unease", 1, 0);

var audio_2 = new Audio('2.mp3');
var details_2 = new newsongdetails("Doot Doot", 2, 0);

var audio_3 = new Audio('3.mp3');
var details_3 = new newsongdetails("Jazzy Chords", 3, 0);

var audio_4 = new Audio('4.mp3');
var details_4 = new newsongdetails("Perpetual", 4, 0);

var audio_5 = new Audio('5.mp3');
var details_5 = new newsongdetails("These Plays", 5, 0);

var audio_6 = new Audio('6.mp3');
var details_6 = new newsongdetails("Make it Stop", 6, 0);

var audio_7 = new Audio('7.mp3');
var details_7 = new newsongdetails("Trebley Bass", 7, 0);

var audio_8 = new Audio('8.mp3');
var details_8 = new newsongdetails("Unworking", 8, 0);

var audio_9 = new Audio('9.mp3');
var details_9 = new newsongdetails("Arrivederci", 9, 0);

//PlayRand function starts here
 function playrand(){
    var randsong = Math.floor(Math.random() * 10);
	switch (randsong) {
		case 0:
			//Core player
			audio_0.play(name);
			alert("Now playing" + " " + details_0.name + ".");
			details_0.rating = prompt("How would you rate this song?");
			details_0.rating = Math.floor(details_0.rating);
			
			//NaN proofing and Extreme Rounding
			while (isNaN(details_0.rating) == true) {
				details_0.rating = prompt("How would you rate this song?");
				details_0.rating = Math.floor(details_0.rating);
			}
			
			if (details_0.rating < 0) {
				details_0.rating = 0;
			}
			
			if (details_0.rating > 3) {
				details_0.rating = 3;
			}
			
			//Thanks and song finalization
			alert("Thank you for rating" + " " + details_0.name + "!" + " " + "The song will now close" + ".");
			audio_0.pause(name);
			audio_0.currentTime = 0;
			break;
		case 1:
			//Core player
			audio_1.play(name);
			alert("Now playing" + " " + details_1.name + ".");
			details_1.rating = prompt("How would you rate this song?");
			details_1.rating = Math.floor(details_1.rating);
			
			//NaN proofing and Extreme Rounding
			while (isNaN(details_1.rating) == true) {
				details_1.rating = prompt("That is not a numeric value. How would you rate this song?");
				details_1.rating = Math.floor(details_1.rating);
			}
			
			if (details_1.rating < 0) {
				details_1.rating = 0;
			}
			
			if (details_1.rating > 3) {
				details_1.rating = 3;
			}
			
			//Thanks and song finalization
			alert("Thank you for rating" + " " + details_1.name + "!" + " " + "The song will now close" + ".");
			audio_1.pause(name);
			audio_1.currentTime = 0;
			break;
		case 2:
			//Core player
			audio_2.play(name);
			alert("Now playing" + " " + details_2.name + ".");
			details_2.rating = prompt("How would you rate this song?");
			details_2.rating = Math.floor(details_2.rating);
			
			//NaN proofing and Extreme Rounding
			while (isNaN(details_2.rating) == true) {
				details_2.rating = prompt("That is not a numeric value. How would you rate this song?");
				details_2.rating = Math.floor(details_2.rating);
			}
			
			if (details_2.rating < 0) {
				details_2.rating = 0;
			}
			
			if (details_2.rating > 3) {
				details_2.rating = 3;
			}
			
			//Thanks and song finalization
			alert("Thank you for rating" + " " + details_2.name + "!" + " " + "The song will now close" + ".");
			audio_2.pause(name);
			audio_2.currentTime = 0;
			break;		
		case 3:
			//Core player
			audio_3.play(name);
			alert("Now playing" + " " + details_3.name + ".");
			details_3.rating = prompt("How would you rate this song?");
			details_3.rating = Math.floor(details_3.rating);
			
			//NaN proofing and Extreme Rounding
			while (isNaN(details_3.rating) == true) {
				details_3.rating = prompt("That is not a numeric value. How would you rate this song?");
				details_3.rating = Math.floor(details_3.rating);
			}
			
			if (details_3.rating < 0) {
				details_3.rating = 0;
			}
			
			if (details_3.rating > 3) {
				details_3.rating = 3;
			}
			
			//Thanks and song finalization
			alert("Thank you for rating" + " " + details_3.name + "!" + " " + "The song will now close" + ".");
			audio_3.pause(name);
			audio_3.currentTime = 0;
			break;			
		case 4:
			//Core player
			audio_4.play(name);
			alert("Now playing" + " " + details_4.name + ".");
			details_4.rating = prompt("How would you rate this song?");
			details_4.rating = Math.floor(details_4.rating);
			
			//NaN proofing and Extreme Rounding
			while (isNaN(details_4.rating) == true) {
				details_4.rating = prompt("That is not a numeric value. How would you rate this song?");
				details_4.rating = Math.floor(details_4.rating);
			}
			
			if (details_4.rating < 0) {
				details_4.rating = 0;
			}
			
			if (details_4.rating > 3) {
				details_4.rating = 3;
			}
			
			//Thanks and song finalization
			alert("Thank you for rating" + " " + details_4.name + "!" + " " + "The song will now close" + ".");
			audio_0.pause(name);
			audio_4.currentTime = 0;
			break;	
		case 5:
			//Core player
			audio_5.play(name);
			alert("Now playing" + " " + details_5.name + ".");
			details_5.rating = prompt("How would you rate this song?");
			details_5.rating = Math.floor(details_5.rating);
			
			//NaN proofing and Extreme Rounding
			while (isNaN(details_5.rating) == true) {
				details_5.rating = prompt("That is not a numeric value. How would you rate this song?");
				details_5.rating = Math.floor(details_5.rating);
			}
			
			if (details_5.rating < 0) {
				details_5.rating = 0;
			}
			
			if (details_5.rating > 3) {
				details_5.rating = 3;
			}
			
			//Thanks and song finalization
			alert("Thank you for rating" + " " + details_5.name + "!" + " " + "The song will now close" + ".");
			audio_5.pause(name);
			audio_5.currentTime = 0;
			break;	
		case 6:
			//Core player
			audio_6.play(name);
			alert("Now playing" + " " + details_6.name + ".");
			details_6.rating = prompt("How would you rate this song?");
			details_6.rating = Math.floor(details_6.rating);
			
			//NaN proofing and Extreme Rounding
			while (isNaN(details_6.rating) == true) {
				details_6.rating = prompt("That is not a numeric value. How would you rate this song?");
				details_6.rating = Math.floor(details_6.rating);
			}
			
			if (details_6.rating < 0) {
				details_6.rating = 0;
			}
			
			if (details_6.rating > 3) {
				details_6.rating = 3;
			}
			
			//Thanks and song finalization
			alert("Thank you for rating" + " " + details_6.name + "!" + " " + "The song will now close" + ".");
			audio_6.pause(name);
			audio_6.currentTime = 0;
			break;	
		case 7:
			//Core player
			audio_7.play(name);
			alert("Now playing" + " " + details_7.name + ".");
			details_7.rating = prompt("How would you rate this song?");
			details_7.rating = Math.floor(details_7.rating);
			
			//NaN proofing and Extreme Rounding
			while (isNaN(details_7.rating) == true) {
				details_7.rating = prompt("That is not a numeric value. How would you rate this song?");
				details_7.rating = Math.floor(details_7.rating);
			}
			
			if (details_7.rating < 0) {
				details_7.rating = 0;
			}
			
			if (details_7.rating > 3) {
				details_7.rating = 3;
			}
			
			//Thanks and song finalization
			alert("Thank you for rating" + " " + details_7.name + "!" + " " + "The song will now close" + ".");
			audio_7.pause(name);
			audio_7.currentTime = 0;
			break;	
		case 8:
			//Core player
			audio_8.play(name);
			alert("Now playing" + " " + details_8.name + ".");
			details_8.rating = prompt("How would you rate this song?");
			details_8.rating = Math.floor(details_8.rating);
			
			//NaN proofing and Extreme Rounding
			while (isNaN(details_8.rating) == true) {
				details_8.rating = prompt("How would you rate this song?");
				details_8.rating = Math.floor(details_8.rating);
			}
			
			if (details_8.rating < 0) {
				details_8.rating = 0;
			}
			
			if (details_8.rating > 3) {
				details_8.rating = 3;
			}
			
			//Thanks and song finalization
			alert("Thank you for rating" + " " + details_8.name + "!" + " " + "The song will now close" + ".");
			audio_8.pause(name);
			audio_8.currentTime = 0;
			break;	
		case 9:
			//Core player
			audio_9.play(name);
			alert("Now playing" + " " + details_9.name + ".");
			details_9.rating = prompt("How would you rate this song?");
			details_9.rating = Math.floor(details_9.rating);
			
			//NaN proofing and Extreme Rounding
			while (isNaN(details_9.rating) == true) {
				details_9.rating = prompt("How would you rate this song?");
				details_9.rating = Math.floor(details_9.rating);
			}
			
			if (details_9.rating < 0) {
				details_9.rating = 0;
			}
			
			if (details_9.rating > 3) {
				details_9.rating = 3;
			}
			
			//Thanks and song finalization
			alert("Thank you for rating" + " " + details_9.name + "!" + " " + "The song will now close" + ".");
			audio_9.pause(name);
			audio_9.currentTime = 0;
			break;
		default:
			alert("Error!");
			break;
	}
 }
 
//PlayFav function starts here
 function playfav(){
	 alert(details_0.rating + ", " + details_1.rating + ", " + details_2.rating + ", " + details_3.rating + ".");
 }