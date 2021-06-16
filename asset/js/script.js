var questions= [
      { questions: `What is THE `,  
      choices: ["Shane", "Shaun", "Shawn", "Shain"], 
      answer: 'b'},

      { question: `What is my age`,  
      choices: ["Shane", "Shaun", "Shawn", "Shain"], 
      answer: 'b'},

      { questions: `What is my last name`,  
      choices: ["Shane", "Shaun", "Shawn", "Shain"], 
      answer: 'b'},

      { questions: `What is my middle name`,  
      choices: ["Shane", "Shaun", "Shawn", "Shain"], 
      answer: 'b'},

      { questions: `What is my father's name`,  
      choices: ["Shane", "Shaun", "Shawn", "Shain"], 
      answer: 'b'},

      { questions: `What is my sister's name`,  
      choices: ["Shane", "Shaun", "Shawn", "Shain"], 
      answer: 'b'},

      { questions: `What is my nother's name`,  
      choices: ["Shane", "Shaun", "Shawn", "Shain"], 
      answer: 'b'}
];

var score = 0;
var userAnswer = "";
var timeLeft = 15;
var questionsContainer = document.getElementById('questions')
var submitButton = document.getElementById('submit');


//start game button

//when start button is clicked the game starts

//when the start button is clicked then the timer starts
    var seconds = document.getElementById("countdown").textContent;
    var countdownTimer = setInterval(function() {
       seconds--;
       document.getElementById("countdown").textContent = seconds;
       //when timer reaches 0 then the user is alerted and then user is alerted
       if (seconds <= 0) clearInterval(countdownTimer);
       
    }, 1000);
 

//star to build the quick
//parse through array questions by displaying them

// for (var i = 0; i < questions.length)


//show results












