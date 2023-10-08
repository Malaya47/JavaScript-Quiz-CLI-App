import readlineSync from "readline-sync";
import chalk from "chalk";

const questionBank = [
  {
    question: "Q.1 What is JavaScript primarily used for in web development? ",
    answer: "Adding interactivity to web pages",
    answerOptions: [
      "Server-side scripting",
      "Styling web pages",
      "Adding interactivity to web pages",
      "Creating database schemas",
    ],
  },
  {
    question:
      "Q.2 What is the purpose of the console.log() function in JavaScript?",
    answer: "To display output in the browser console",
    answerOptions: [
      "To log errors to the console",
      "To create HTML elements",
      "To display output in the browser console",
      "To define functions",
    ],
  },
  {
    question: "Q.3 What does the === operator in JavaScript check for?",
    answer: "Equality in value and type",
    answerOptions: [
      "Equality in value and type",
      "Equality in value but not in type",
      "Equality in type but not in value",
      "None of the above",
    ],
  },
  {
    question: "Q.4 What does the NaN value represent in JavaScript?",
    answer: "Not a Number",
    answerOptions: ["Not a Number", "Null", "Negative", "No Argument"],
  },
  {
    question: "Q.5 In How many days JavaScript was created?",
    answer: 10,
    answerOptions: [11, 13, 15, 10],
  },
  {
    question: "Q.6 Which of the following is NOT a data type in JavaScript?",
    answer: "Float",
    answerOptions: ["Number", "Boolean", "String", "Float"],
  },
  {
    question:
      "Q.7 What is the purpose of the localStorage object in JavaScript?",
    answer: "To store data on the client's machine",
    answerOptions: [
      "To store data on the server",
      "To store data on the client's machine",
      "To store data in a database",
      "To store data in a cookie",
    ],
  },
  {
    question:
      "Q.8 Which loop in JavaScript is used for iterating over the properties of an object?",
    answer: "for...in loop",
    answerOptions: [
      "for loop",
      "while loop",
      "for...in loop",
      "do...while loop",
    ],
  },
  {
    question:
      "Q.9 Which of the following is a way to declare a variable in JavaScript?",
    answer: "$variable",
    answerOptions: ["#variable", "@variable", "$variable", "&variable"],
  },
  {
    question:
      "Q.10 Which keyword is used to declare a constant variable in JavaScript?",
    answer: "const",
    answerOptions: ["var", "let", "const", "constance"],
  },
];

const highestScores = {
  name: "Tanmay",
  score: 6,
};

function play(questionBank) {
  var score = 0;
  var userName = readlineSync.question(
    chalk.bold.yellow("May I know your name ? ")
  );
  console.log("----------------------------------------------------");
  console.log(chalk.bold.yellow("welcome to this Quiz " + userName));
  console.log("----------------------------------------------------");

  for (let i = 0; i < questionBank.length; i++) {
    console.log(chalk.blue(questionBank[i].question));

    var index = readlineSync.keyInSelect(
      questionBank[i].answerOptions,
      "choose the right option: "
    );

    if (questionBank[i].answer === questionBank[i].answerOptions[index]) {
      score = score + 1;
      console.log(chalk.bold.green("Your answer is correct"));
      console.log("----------------------------------------------------");
    } else {
      score = score - 1;
      console.log(chalk.bold.red("Your answer is incorrect"));
      console.log("----------------------------------------------------");
    }
  }
  console.log(chalk.bold.green(userName + " Your final score is: " + score));

  console.log("----------------------------------------------------");

  if (score > highestScores.score) {
    console.log(
      chalk.bold.green("Congrats " + userName + " you scored highest " + score)
    );
  } else {
    console.log(highestScores.name + " scored highest " + highestScores.score);
  }
}

play(questionBank);
