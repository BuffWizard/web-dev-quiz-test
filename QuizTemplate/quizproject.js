let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "What year did the Nintendo 64 come out?",
	"a": "1994",
	"b": "1985",
	"c": "1996",
	"d": "2001",
	"image":"quizimages/q1.jpg",
	"answer": "c"
   },
   {
	"question": "The GameBoy came with the hit game...",
	"a": "Tetris",
	"b": "Super Mario Land",
	"c": "Donkey Kong",
	"d": "Luigi's Mansion",
	"image":"quizimages/q2.jpg",
	"answer": "a"
   },
   {
	"question":"What famous Nintendo game had a sequel that was cancelled" ,
	"a": "Pac-Man",
	"b": "Super Mario 64",
	"c": "Super Smash Bros",
	"d": "Luigi's Mansion",
	"image":"quizimages/q2.jpg",
	"answer": "b"
   },
    {
	"question":"Nintendo started as a..." ,
	"a": "Cigarette shop",
	"b": "Playing card maker",
	"c": "Car designer",
	"d": "Candy Shop",
	"image":"quizimages/q2.jpg",
	"answer": "b"
   },
    {
	"question":"Mario's name was " ,
	"a": "Pac-Man",
	"b": "Super Mario 64",
	"c": "Super Smash Bros",
	"d": "Luigi's Mansion",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   }
	
 
 
 ];
 
 
 function loadQuestion() {
    
	if(currentQuestion == 0){
		closeLightBox();
	}
	
	
	//load the image 
	let img = document.getElementById("image");
	let preLoadImg = new Image();
	preLoadImg.src = questions[currentQuestion].image;
	
	preLoadImg.onload = function () {
		img.width = this.width;
	}
	img.style.maxWidth = "80%";
	img.src = preLoadImg.src
	
	
	// load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
	document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
	document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
	document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
	let message = "";
	
	if (ans == questions[currentQuestion].answer) {
			
		score = score + 1;
  
		//display score on webpage
		document.getElementById("score").innerHTML = score + " / " + questions.length;
		
		message = "Correct!!!! Your score is " + score + " / " + questions.length;
	}else {
		message = "Incorrect :( " + score + " / " + questions.length;
	}// else
	
	
	
	//move to the next question
	currentQuestion++;
	if(currentQuestion >= questions.length){
	//make message
	message = "do later ljierljejljljejerjje";
	}else{
		loadQuestion();
	}
	
	//show lightbox
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("message").innerHTML = message;
	
 }  // markIt
 
 
 function closeLightBox(){
	 document.getElementById("lightbox").style.display = "none";
 }
 
 
 
 
 
 
 
 
 
   
