let userName = 'Joe';
let userQuestion = "What do you want to ask magic 8 ball?"
let userName = '';
let userQuestion = "What do you want to ask magic 8 ball?"
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log(`Hello ${userName}, ${userQuestion}`)

switch(randomNumber) {
case 0:
  randomNumber = 5;
  break;
case 1 :
  eightBall = 1;
  console.log('It is certain');
  break;
case 2: 
  eightBall = 2;
  console.log('It is decidedly so');
  break;
case 3: 
  eightBall = 3;
  console.log('Reply hazy try again');
  break;
case 4: 
  eightBall = 4;
  console.log('Cannot predict now');
  break;
case 5:
  eightBall = 5;
  console.log('Do not count on it');
  break;
case 6: 
  eightBall = 6;
  console.log('My sources say no');
  break;
case 7:
  eightBall = 7;
  console.log('Outlook not so good');
  break;
case 8: 
  eightBall = 8;
  console.log('Signs point to yes');
  break;
}

console.log(eightBall)