"use strict";

let questions = [
  {
    question: "What is the capital city of Hungary?", // index 0
    answers: {
      a: "Bratislava",
      b: "Prague",
      c: "Minsk",
      d: "Budapest",
    },
    correctAnswer: "d",
  },
  {
    question: "What is the capital city of Canada?", // index 1
    answers: {
      a: "Ottawa",
      b: "Toronto",
      c: "Vancouver",
      d: "Montreal",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the capital city of Italy ?", // index 2
    answers: {
      a: "Vatican City",
      b: "Florence",
      c: "Rome",
      d: "Milan",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the capital city of Ukraine?", // index 3
    answers: {
      a: "Sofia",
      b: "Kiev",
      c: "Odessa",
      d: "Moscow",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the capital city of Colombia ?", // index 4
    answers: {
      a: "Barranquilla",
      b: "Bogota",
      c: "Caracas",
      d: "Medelin",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the capital city of USA ?", // index 5
    answers: {
      a: "New York",
      b: "Los Angeles",
      c: "Washignton",
      d: "Chicago",
    },
    correctAnswer6: "c",
  },
  {
    question: "What is the capital city of India ?", // index 6
    choices: {
      a: "Jaipur",
      b: "Nagpur",
      c: "Mumbai",
      d: "New Delhi",
    },

    correctAnswer: "d",
  },
  {
    question: "What is the capital city of Vietnam ?", // index 7
    answers: {
      a: "Hanoi",
      b: "Haiphong",
      c: "Ho Chi Minh",
      d: "Thanh Hoa",
    },
    correctAnswer: "a",
  },
  {
    questi: "What is the capital city of Japan ?", // index 8
    answers: {
      a: "Osaka",
      b: "Yokohama",
      c: "Tokyo",
      d: "Hiroshima",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the capital city of Cina ?", // index 9
    answers: {
      a: "Shanghai",
      b: "Beijing",
      c: "Shenzhen",
      d: "Wenzhou",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the capital city of Morocco ?", // index 10
    answers: {
      a: "Rabat",
      b: "Casablanca",
      c: "Marrakech",
      d: "Fes",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the capital city of South Africa ?", // index 11
    answers: {
      a: "Johansburg",
      b: "Cape Town",
      c: "Pretoria",
      d: "Bloemfontein",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the capital city of Nigeria ?", // index 12
    answers: {
      a: "Abuja",
      b: "Lagos",
      c: "Kano",
      d: "Ibadan",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the capital city of Turkey ?", // index 13
    answers: {
      a: "Istanbul",
      b: "Adana",
      c: "Izmir",
      d: "Ankara",
    },
    correctAnswer: "d",
  },
  {
    question: "What is the capital city of Germany ?", // index 14
    answers: {
      a: "Munich",
      b: "Berlin",
      c: "Frankfurt",
      d: "Hamburg",
    },
    correctAnswer: "b",
  },
];

// let questions = [
//   {
//     question: "Question 1?",
//     correctAnwser: "a",
//     answers: {
//       a: "correct",
//       b: "incorrect 1",
//       c: "incorrect 2",
//       d: "incorrect 3",
//     },
//   },
//   {
//     question: "Question 2?",
//     correctAnwser: "a",
//     answers: {
//       a: "correct",
//       b: "incorrect 1",
//       c: "incorrect 2",
//       d: "incorrect 3",
//     },
//   },
//   {
//     question: "Question 3?",
//     correctAnwser: "a",
//     answers: {
//       a: "correct",
//       b: "incorrect 1",
//       c: "incorrect 2",
//       d: "incorrect 3",
//     },
//   },
//   {
//     question: "Question 4?",
//     correctAnwser: "a",
//     answers: {
//       a: "correct",
//       b: "incorrect 1",
//       c: "incorrect 2",
//       d: "incorrect 3",
//     },
//   },
// ];

//  stand in / stand out ===> The source: https://nodejs.org/api/readline.html#readline_readline
// Youtube ======> https://www.youtube.com/watch?v=vU6OTnhj3wM

// The readLine module allows us to receive user input from the user as well as being able to prompt the user. The readLine module also inherits from the eventemitter which allows us to listen for events, Such as when the stream receives user-input and as well as when the stream is closed.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = {
  correctAns: 0,
  incorrectAns: 0,
};

function start() {
  console.log(`====================
Welcome to the quiz: 
====================`);
  rl.question(
    "To start the quiz type < a >.\nTo stop the quiz type < q >: ",
    (answer) => {
      if (answer === "q") {
        console.log("🙁 sad to see you leaving! Goodbye see you next time 🖐🏼");
      }
      if (answer === "a") {
        console.log(`
Get ready 💪🏻 !!!
`);
        loadQuestion(0);
      }
    }
  );
}

function loadQuestion(index) {
  if (index == questions.length) {
    rl.close();
    console.log(
      `==================================================
The quiz is finished! Your result is ===> ${result.correctAns} of ${questions.length}.
==================================================`
    );
    return;
  }
  const questionObj = questions[index];
  rl.question(buildQuestion(questionObj), (ans) => {
    if (ans === questionObj.correctAnwser) {
      console.log(`
Correct! well done!
`);
      result.correctAns++;
    } else {
      console.log(`
Oops! Incorrect!
`);
      result.incorrectAns++;
    }
    console.log("\n");
    loadQuestion(++index);
  });
}

function buildQuestion(questionObj) {
  let questionString = questionObj.question;
  for (let letter in questionObj.answers) {
    questionString += "\n" + letter + ": " + questionObj.answers[letter];
  }
  return questionString + "\nPlease write Your answer here: ";
}

start();
