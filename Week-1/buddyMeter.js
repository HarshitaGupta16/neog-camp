// Play this with your friends to test how much they know you

var readLineSync = require('readline-sync');
const chalk = require('chalk');

var usersCount = 0;    // to keep the count of users

function play(question, answer)
{
  var userAnswer = readLineSync.question(chalk.bgCyan(question) + " ")
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green("Right!"));
    score += 1
  }
  else{
    console.log(chalk.red("Wrong!"));
  }
  console.log(chalk.cyan("Current score: ", score));
  console.log(chalk.magenta("-----------------------"));
}

var questions = [
  questionOne = {
    question: "What is my hobby?",
    answer: "Dance"
  },
  questionTwo = {
    question: "Where do I work?",
    answer: "Infosys"
  },
  questionThree = {
    question: "Where do I belong to?",
    answer:  "Aligarh"
  },
  questionFour = {
    question: "Which is my favorite snack?",
    answer: "Chowmin"
  },
  // questionFour = {
  //   question: "Where do we first met?",
  //   answer: "School"
  // },
  questionFive = {
    question: "Series I last watched?",
    answer: "The Family Man"
  }
];

var userDetails = []
  function addScoresDetails(userName, score)
  {
    userDetails[usersCount] = {
      name: userName,
      score: score
      }
  }
 
//find if current user's score is hightest or not
function findHighestScore(userDetails)
{
  // for(var i = 0; i < userDetails.length; i++)
  // {
  //   if(userDetails[i].score )
  // }
  userDetails.sort(function(a, b)
  {
     return b.score - a.score
   })
}

while(true)
{
  var score = 0;
  let ansWantToPlay = 'Y';
  var userName = readLineSync.question(chalk.red("What's your name? "));
  console.log("Welcome "+ chalk.yellow(userName) + " to How much you know Harshita? ");

  const yOrN = chalk.bgYellow("[Y/N]"); 
  let wantToPlay = readLineSync.question("Do you want to play? " + yOrN + " ");

  if(wantToPlay.toUpperCase() === ansWantToPlay.toUpperCase()) 
  {
    for(var i = 0; i < questions.length; i ++)
    {
      play(questions[i].question, questions[i].answer);
    }
  }
  else{
    break;
  }
  addScoresDetails(userName, score)
  usersCount ++;
  findHighestScore(userDetails)
  console.log('YAY!! Your Final Score: ' + score + ' and Highest scorer is ' + userDetails[0].name + ' with score: ' + userDetails[0].score)
  console.log(chalk.magenta("\n------------------NEXT PLAYER----------------------------\n"));
  
}




