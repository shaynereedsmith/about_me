'use strict';

alert('Ok, one and all -- time to answer some questions about ME! (fun, right?.... RIGHT???)');
alert('Now on to Question 1!');

var questionOne = 'Have I ever jumped from a roof?';
var roof = prompt(questionOne).toLowerCase();
if (roof === 'yes' || roof === 'y') {
  alert('Correct! I have.');
} else if (roof === 'no' || roof === 'n') {
  alert('Sorry, wrong -- but I was actually insane as a child. I actually have jumped from a roof');
} else {
  alert('You are very naughty -- play by the ruuuuuules!!!');
}

console.log('Q 1: ' + questionOne + ' | A: ' + roof);

alert('Ok -- on to QUESTION 2!');

var questionTwo = 'Have I ever been arrested before?';
var arrested = prompt(questionTwo).toLowerCase();
if (arrested === 'yes' || arreste === 'y') {
  alert('Nope! I\'m a good boy.');
} else if (arrested === 'no' || arrested === 'n'){
  alert('That\'s right! Stay out of jail, kids');
} else {
  alert('You are very naughty -- play by the ruuuuuules!!!');
}

console.log('Q 2: ' + questionTwo + ' | A: ' + arrested);

alert('Now on to QUESTION 3!!');

var questionThree = 'Have I ever fainted at work?';
var faint = prompt(questionThree).toLowerCase();
if (faint === 'yes' || faint === 'y') {
  alert('That\'s right! It SUCKED! I was in the break room, awake and fine one moment, then the next thing I remember was staring up from the ground at 5 worried coworkers :D');
} else if (faint === 'no' || faint === 'n') {
  alert('No! I actually HAVE fainted. And it\s no fun, believe you me!');
} else {
  alert('You are very naughty -- play by the ruuuuuules!!!');
}

console.log('Q 3: ' + questionThree + ' | A: ' + faint);

alert('Alright! Here comes QUESTION NUMERO QUATRO (that means number 4)!!!');

var questionFour = 'Have I ever been outside the continental US?';
var outsideTheUS = prompt(questionFour).toLowerCase();
if (outsideTheUS === 'yes' || outsideTheUS === 'y') {
  alert('Unfortunately, I have lived most of my life right here in the Pacific Northwest. But I would really like to travel around a bit some day.');
} else if (outsideTheUS === 'no' || outsideTheUS === 'n'){
  alert('Sadly, that is correct. :(');
} else {
  alert('You are very naughty -- play by the ruuuuuules!!!');
}
