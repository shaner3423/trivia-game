var questions= [
      { questions: `What is THE `,  
      choices: ["Shane", "Shaun", "Shawn", "Shain"], 
      answer: 'Shane'},

      { question: `What is my age`,  
      choices: ["1", "S2", "3", "4"], 
      answer: 'S2'},

      { questions: `What is my last name`,  
      choices: ["Shane", "Crisostomo", "Shawn", "Shain"], 
      answer: 'Crisostomo'},

      { questions: `What is my middle name`,  
      choices: ["Shane", "Hello", "Shawn", "Shain"], 
      answer: 'Hello'},

      { questions: `What is my father's name`,  
      choices: ["Shane", "Dad", "Shawn", "Shain"], 
      answer: 'Dad'},

      { questions: `What is my sister's name`,  
      choices: ["Shane", "Sister", "Shawn", "Shain"], 
      answer: 'Sister'},

      { questions: `What is my mother's name`,  
      choices: ["Mom", "Shane", "Shawn", "Shain"], 
      answer: 'b'}
];


var score = 0;
var startButtonEl = document.getElementById("startButton")

//start game button - when the button is click the timer starts
document.getElementById("startButton").addEventListener('click', function (){
    startButtonEl.disabled = true;
  var timeleft = 15

    var downloadTimer = setInterval(function function1(){
        document.getElementById("countdownTimer").innerHTML = timeleft + 
        "&nbsp"+"seconds remaining!";
    
        timeleft -= 1;
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdownTimer").innerHTML = "Time is up!!!"
            displayQuestion();
        }
        }, 1000);
    
        displayQuestion();
    }); 

// when start button is clicked the game starts - first question is displayed
function displayQuestion() {
    console.log("question")
  for (let index = 0; index < questions.length; index++) {
      document.getElementById("questionSelection").innerHTML = questions[index].questions;
      document.getElementById("btnA").innerHTML = questions[index].choices[0];
      document.getElementById("btnB").innerHTML = questions[index].choices[1];
      document.getElementById("btnC").innerHTML = questions[index].choices[2];
      document.getElementById("btnD").innerHTML = questions[index].choices[3];

      // //listen for the click in the questionsContainer then if the answer is = correct then 
      // var answerClick = document.getElementById("answerButtons")

      // console.log(answerClick)

      // answerClick.addEventListener('click', function()s{

      //   if (
      //     (answer === true && questions[index].answer === 't') ||
      //     (answer === false && questions[index].answer === 'f')
      //   ) {
      //     // Increase score
      //     score++;
      //     // Tell the user what their answer status is
      //     document.getElementById("answerStatus").innerHTML = questions[index].answer

          
      //   } else {
      //     alert('Wrong!');
      //   }

      // });


  }
      

      

     
};

//then the start button game disappears when game is started
// function hideStartButton() {
//     var startButtonEl = document.getElementById("startGame");
//     if (startButtonEl.style.display === "none") {
//         startButtonEl.style.display = "block";
//     } else {
//         startButtonEl.style.display = "none";
//     }
   
// };




//when timer runs out, then continue to next question

//parse through random questions by displaying them

//parse through answer

//correct answer turns green background

//wrong answer turns red background

//when you go through all the questions then the game is over

//display total score

//save initials and score for high score 

















//when the start button is clicked then the timer starts
    // var seconds = document.getElementById("countdown").textContent;
    // var countdownTimer = setInterval(function() {
    //    seconds--;
    //    document.getElementById("countdown").textContent = seconds;
    //    //when timer reaches 0 then the user is alerted and then user is alerted
    //    if (seconds <= 0) clearInterval(countdownTimer);

    // }, 1000);
 