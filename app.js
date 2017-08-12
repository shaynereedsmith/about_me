'use strict';

//this variable will keep score
var total = 0;

//start of game
alert('Hey there. I hope you are well today :D');
var name = prompt('Please give you your name.');
alert('Ok, ' + name + ', time to answer some questions. I hope you\'re ready.');
alert('Question 1!');

//loading question function calls
qOne();
qTwo();
qThree();
qFour();
qFive();
qSix();
qSeven();

//first question.
function qOne() {
  var questionOne = 'Have I ever jumped from a roof?';
  var roof = prompt(questionOne).toLowerCase();
  if (roof === 'yes' || roof === 'y') {
    alert('Correct! I have.');
    total++;
  } else if (roof === 'no' || roof === 'n') {
    alert('Sorry, wrong -- but I was actually insane as a child. I actually have jumped from a roof');
  } else {
    alert('You are very naughty -- play by the ruuuuuules!!!');
  }
  console.log('Q 1: ' + questionOne + ' | A: ' + roof);
}

//second question
function qTwo () {
  alert('QUESTION 2!');
  var questionTwo = 'Have I ever been arrested before?';
  var arrested = prompt(questionTwo).toLowerCase();
  if (arrested === 'yes' || arrested === 'y') {
    alert('Nope! I\'m a good boy.');
  } else if (arrested === 'no' || arrested === 'n'){
    alert('That\'s right! Stay out of jail, kids');
    total++;
  } else {
    alert('You are very naughty -- play by the ruuuuuules!!!');
  }
  console.log('Q 2: ' + questionTwo + ' | A: ' + arrested);
}

//third question
function qThree() {
  alert('Now on to QUESTION 3!!');
  var questionThree = 'Have I ever fainted at work?';
  var faint = prompt(questionThree).toLowerCase();
  if (faint === 'yes' || faint === 'y') {
    alert('That\'s right! It SUCKED! I was in the break room, awake and fine one moment, then the next thing I remember was staring up from the ground at 5 worried coworkers :D');
    total++;
  } else if (faint === 'no' || faint === 'n') {
    alert('Wrong! I actually HAVE fainted. And it\s no fun, believe you me!');
  } else {
    alert('You are very naughty -- play by the ruuuuuules!!!');
  }
  console.log('Q 3: ' + questionThree + ' | A: ' + faint);
}

//fourth question
function qFour() {
  alert('Alright! Here comes QUESTION NUMERO QUATTRO (that means number 4)!!!');
  var questionFour = 'Have I ever been outside the continental US?';
  var outsideTheUS = prompt(questionFour).toLowerCase();
  if (outsideTheUS === 'yes' || outsideTheUS === 'y') {
    alert('Unfortunately, no, I have lived most of my life right here in the Pacific Northwest. But I would really like to travel around a bit some day.');
  } else if (outsideTheUS === 'no' || outsideTheUS === 'n'){
    alert('Sadly, that is correct. :(');
    total++;
  } else {
    alert('You are very naughty -- play by the ruuuuuules!!!');
  }
  console.log('Q 4: ' + questionFour + ' | A: ' + outsideTheUS);
}

//fifth question
function qFive() {
  alert('QUESTION NUMBER 5!!!!!!!1!11!!1');
  var questionFive = 'Have I ever read 2 books in one day?';
  var books = prompt(questionFive).toLowerCase();
  if (books === 'yes' || books === 'y') {
    alert('I HAVE! Once upon a time, I used to read those book-things.');
    total++;
  } else if (books === 'no' || books === 'n'){
    alert('HAH! you underestimate me, young padawan -- I actually have read two books in one day :D');
  } else {
    alert('You are very naughty -- play by the ruuuuuules!!!');
  }
  console.log('Q 5: ' + questionFive + ' | A: ' + books);
}

//sixth question
function qSix() {
  alert('How about answering Question 6, ' + name + '?');
  for (var i = 0; i < 4; i++) {
    var questionSix = 'What is my lucky number? Guess between 1 and 10.';
    var answer = prompt(questionSix);
    if (answer == 7) {
      alert('Woah! You got it!');
      var answerSix = true;
      total++;
      break;
    } else if (answer < 7) {
      alert('Sorry, that\'s too low :D');
    } else if (answer > 7) {
      alert('A bit too high!');
    }
  }
  console.log('Q 6: ' + questionSix + ' | A: ' + answer);
  if (answerSix) {
    alert('Congratulations! You\'re fantastic at guessing!!!!');
  } else {
    alert('Sorry, you didn\'t get it. :( Better luck next time.');
  }
}

//seventh question 
function qSeven() {
  alert(name + '! You\'ve gotten this far! :D Might as well try to answer QUESTION 7!!');
  for (var i = 0; i < 6; i++) {
    var questionSeven = 'Guess my favorite food.';
    var answer = prompt(questionSeven);
    var food;
    food = ['spagetti', 'pizza', 'coffee', 'noodles', 'fruit', 'veggies'];

    if (food.includes(answer.toLowerCase())) {
      alert('WOW! That\'s right! Good job.');
      var answerSeven = true;
      total++;
      break;
    } else {
      alert('Sorry, that\'s not one of my favorites :(');
    }
  }
  console.log('Q 7: ' + questionSeven + ' | A: ' + answer);

  if (answerSeven) {
    alert('Congrats on getting the right answer! Any of these choices would have been right: ' + food[0] + ', ' + food[1] + ', ' + food[2] + ', ' + food[3] + ', ' + food[4] + ', and ' + food[5] + '.');
  } else {
    alert('WRONG! :D The answer you SHOULD have given was one of these: ' + food[0] + ', ' + food[1] + ', ' + food[2] + ', ' + food[3] + ', ' + food[4] + ', and ' + food[5] + '.');
  }
}

//end of game
alert('You finished! Your final score is ' + total + '/7!!');
console.log('Final score: ' + total + '/7');

alert('Thanks for playing my little guessing game. Please enjoy the rest of my page.');
