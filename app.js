'use strict';

var questionOne = 'Have I ever jumped from a roof?';
var roof = prompt(questionOne);
if (roof.toLowerCase() === 'yes') {
  alert('Correct! I have.');
} else {
  alert('Sorry, wrong -- but I was actually insane as a child.');
}
console.log('Q 1: ' + questionOne + ' | A: ' + roof);
/*alert('On to QUESTION 2!');

var questionTwo = 'Have I been arrested before?';
var arrested = prompt(questionOne);
if (arrested.toLowerCase() === 'yes') {
  alert('Nope! I\'m a good boy.');
} else {
  alert('That\'s right! Stay out of jail, kids');
}

alert('On to QUESTION 3!!');
*/
