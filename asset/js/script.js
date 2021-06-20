var questions= [
      { questions: `Where can you find the oldest ancient wonder of the world? `,  
      choices: ["USA", "Egypt", "Brazil", "France"], 
      answer: 'Egypt'},

      { question: `Which actor starred in a total fo seven James Bond movies?`,  
      choices: ["Pierce Brosnan", "Roger Moore", "Sean Connery", "Daniel Craig"], 
      answer: 'Roger Moore'},

      { questions: `Who is the leader of Nirvana`,  
      choices: ["Kurt Cobain", "Freddy Mercury", "Slash", "Billie Joe Armstrong"], 
      answer: 'Kurt Cobain'},

      { questions: `According to legend, what item is most effective against werewolves?`,  
      choices: ["Cross", "Garlic", "Gold", "Silver"], 
      answer: 'Silver'},

      { questions: `A doctor with a PhD is a doctor of what?`,  
      choices: ["Philosophy", "Phrenology", "Psychology", "Physical Therapy"], 
      answer: 'Psychology'},

      { questions: `What is the largest state in the U.S.?`,  
      choices: ["Maryland", "Alaska", "California", "Texas"], 
      answer: 'Texas'},

      { questions: `What is the name of the Canadian national anthem?`,  
      choices: ["O Canada", "O Red Maple", "March of the Puck Drop", "Leaf-Spangled Banner"], 
      answer: 'O Canada'}
];


var score = 0;
var questionNumber = 0;
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
  };
  appendChild(displayQuestion);
  displayQuestion();

};

function beginGame() {
  startDiv.style.display = "none";
  questionContainer.style.display = "block";
  quesPosition.style.display = "block";
  finalStats.style.display = "none";
  playAgainBtn.style.display = "none";
  counter = 0;
  correctAnswers = 0;
  displayQuestion();
}

function emptyDiv() {
  questionContainer.innerHTML = "";
}


function displayQuestionChoices() {
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var choice = document.createElement("h4");
    choice.setAttribute("class", "choiceBG");
    choice.setAttribute("data-value", currentQuestion.choices[i]);
    choice.textContent = currentQuestion.choices[i];
    questionContainer.appendChild(choice);
  }
}
questionContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.matches("h4")) {
    var chosenAnswer = e.target.getAttribute("data-value");
    compareAnswers(chosenAnswer);
  }
});

function compareAnswers(chosenAnswer) {
  if (chosenAnswer === currentQuestion.answer) {
    correctAnswers++;
    counter++;
    playOrEnd();
  } else {
    counter++;
    playOrEnd();
  }
}


//then the start button game disappears when game is started
function hideStartButton() {
    var startButtonEl = document.getElementById("startGame");
    if (startButtonEl.style.display === "none") {
        startButtonEl.style.display = "block";
    } else {
        startButtonEl.style.display = "none";
    }
   
};

//when timer runs out, then continue to next question

//parse through random questions by displaying them

//parse through answer

//correct answer turns green background

//wrong answer turns red background

//when you go through all the questions then the game is over

//display total score

//save initials and score for high score 
















