'use strict';

alert('Ok, one and all -- time to answer some questions about ME! (fun, right?.... RIGHT???)');

alert('First thing\'s first: Question 1!');

var questionOne = 'Have I ever jumped from a roof?';
var roof = prompt(questionOne);
if (roof.toLowerCase() === 'yes' || 'y') {
  alert('Correct! I have.');
} else {
  alert('Sorry, wrong -- but I was actually insane as a child. I actually have jumped from a roof');
}

console.log('Q 1: ' + questionOne + ' | A: ' + roof);

alert('Ok -- on to QUESTION 2!');

var questionTwo = 'Have I ever been arrested before?';
var arrested = prompt(questionTwo);
if (arrested.toLowerCase() === 'yes' || 'y') {
  alert('Nope! I\'m a good boy.');
} else {
  alert('That\'s right! Stay out of jail, kids');
}

console.log('Q 2: ' + questionTwo + ' | A: ' + arrested);

alert('Now on to QUESTION 3!!');

var questionThree = 'Have I ever fainted at work?';
var faint = prompt(questionThree);
if (faint.toLowerCase() === 'yes' || 'y') {
  alert('That\'s right! It SUCKED! I was in the break room, awake and fine one moment, then the next thing I remember was staring up from the ground at 5 worried coworkers :D');
} else {
  alert('No! I actually HAVE fainted. And it\s no fun, believe you me!');
}

console.log('Q 3: ' + questionThree + ' | A: ' + faint);

alert('Alright! Here comes QUESTION NUMERO QUATRO (that means number 4)!!!');

var questionFour = 'Have I ever been outside the continental US?';
var outsideTheUS = prompt(questionFour);
if (outsideTheUS.toLowerCase() === 'yes' || 'y') {
  alert('Unfortunately, I have lived most of my life right here in the Pacific Northwest. But I would really like to travel around a bit some day.');
} else {
  alert('Sadly, that is correct. :(');
}
