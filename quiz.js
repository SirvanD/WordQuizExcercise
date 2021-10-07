/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/


// 2. Store the rank of a player


// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/




/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


// 6. Output results to the <main> element
let score =0;
let crown = "No Crown";
let q1= prompt("Name a programming language that's also a snake.");
  if (q1.toUpperCase() === "PYTHON" ) {
    score += 1;
  } 
let q2= prompt(" What language do you use to style web pages?");
  if (q2.toUpperCase() === "CSS" ) {
    score += 1;
  }
let q3= prompt(" what language do you use to build the structure of your web page?");
  if (q3.toUpperCase() === "HTML" ) {
    score += 1;
  }
let q4= prompt ("what language do you use for interactivity of web pages?");
  if (q4.toUpperCase() === "JAVASCRIPT" ) {
    score += 1;
  }
let q5=prompt("Name a programming language that's also a gem.");
  if (q5.toUpperCase() === "RUBY" ) {
    score += 1;
  }
  
console.log (score);
if (score === 0) {
    crown = " You didn't get any of the question! No crown for you this time";
} else if (score === 1 || score === 2) {
    crown = " You answered 1 or 2 questions correct! a Bronze medal for you.";
} else if (score === 3 || score === 4) {
    crown = " Well done, you answered 3 or 4 questions, a Silver medal for you.";
} else if (score === 5) {
    crown = "Jackpot, you answered all the questions, Gold Medal for you";
} 
console.log (crown);

let message = `<p> ${crown} </p> `;
document.querySelector ('main').innerHTML = message;