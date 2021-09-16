const readLineSync = require('readline-sync');
const chalk = require('chalk');

var usercount = 0;

function askQuestions(question, answer, options)
{
  let userSelectedOption = readLineSync.keyInSelect(options, chalk.bold.yellow(question));
  if(options[userSelectedOption] === answer)
  {
    console.log(chalk.green("You're Right!!"));
    // console.log(userSelectedOption)
    score += 1;
  }
  // else if(userSelectedOption === -1)
  // {
  //   let ask = readLineSync.question(chalk.blue("Are you sure you want to end the game? [Y/N]"));
  //   if(ask.toUpperCase() === 'Y'){
  //     break;
  //   }
  //   else{
  //     continue;
  //   }
  // }
  else
  {
    // console.log(userSelectedOption)
    console.log(chalk.red("You're Wrong!!"));
  }
  console.log(chalk.cyan("Your current score is: ") + chalk.bold.bgMagenta(score));
}

let questions = [
    question1 = {
      question: "What is the name of the national bird of India?",
      answer: "Peacock",
      options: ["Swarn", "Hen", "Peacock", "Bulbul"]
    },
    question2 = {
      question: "What is the name of the national animal of India?",
      answer: "Tiger",
      options: ["Lion", "Elephant", "Tiger", "Wild Cat"]
    },
    question3 = {
      question: "What is the name of the national fruit of India?",
      answer: "Mango",
      options: ["Apple", "Grapes", "Strawberry", "Mango"]
    },
    question4 = {
      question: "Who is the current Prime Minister of India?",
      answer: "Narendra Modi",
      options: ["Narendra Modi", "Manmohan Singh", "APJ Abdul Kalam", "Atal Bihari Vajpayee"]
    },
    question5 = {
      question: "Who is the current President of India?",
      answer: "Ram Nath Kovind",
      options: ["Pranab Mukharjee", "Ram Nath Kovind","Narendra Modi", "APJ Abdul Kalam"]
    },

    question6 = {
      question: "How many states are there in India?",
      answer: "29",
      options: ["27", "29","21", "28"]
    },

    question7 = {
      question: "Who was the first woman Prime Minister of India?",
      answer: "Indira Gandhi",
      options: ["Indira Gandhi", "Pratibha Patil","Sushma Swaraj", "Sonia Gandhi"],
    },  
    question8 = {
      question: "Who is known as the Iron Man of India?",
      answer: "Sardar Vallabhbhai Patel",
      options: ["APJ Abdul Kalam", "Lal Bahadur Shastri","Sardar Vallabhbhai Patel", "Subhash Chand Bose"]
    }
  
]

userDetails = [];
function addUserDetails(username, score)
{
  // userDetails.push({name: username, score: score})
  userDetails[usercount] = {
    name: username,
    score: score
  }
}

function findHighestScore(userDetails)
{
  userDetails.sort(function(a,b){
    return b.score - a.score
  })
}

while(true)
{
  var score = 0;
  let answerWantToPlay = 'Y';
  let username = readLineSync.question(chalk.cyan("What's your name? "));
  console.log(chalk.red("Welcome ") + chalk.green(username) + chalk.red(" ! to the learn in play way"));
  const yOrN = chalk.bgMagenta('[Y/N]');
  let wantToPlay = readLineSync.question(chalk.blue('Want to test your General Knowledge about India? ') + yOrN + " ");

  if(wantToPlay.toUpperCase() === answerWantToPlay.toUpperCase())
  {
    for(var i = 0; i < questions.length; i ++)
    {
      askQuestions(questions[i].question, questions[i].answer, questions[i].options);
    }
  }
  else{
    break;
  }

  addUserDetails(username, score);
  usercount ++;
  findHighestScore(userDetails);
  if(userDetails[0].score == score)
  {
    // console.log(userDetails)
    console.log("You got the highest score and your score is: " + userDetails[0].score);
  }
  else{
    console.log("Your score is: "+ score + " and the highest scorer is: " + userDetails[0].name + `with score ${userDetails[0].score}`)
  }

  console.log(chalk.bgRed("Thanks for playing!!"));
  console.log(chalk.magenta("----------------NEXT PLAYER-------------------"))
}
