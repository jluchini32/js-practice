//FizzBuzz
// Write a program that prints the numbers from 1 to 100
// For numbers divisible by 3, print “Fizz”
// For numbers divisible by 5, print “Buzz”
// For numbers divisible by both 3 and 5, print “FizzBuzz”


for (let number = 0; number <= 100; number = number +1 ){

	if(number % 3 === 0 && number % 5 === 0){
  	console.log('FizzBuzz')
    
  } else if (number % 3 === 0){
  	console.log('Fizz')
    
  } else if (number % 3 === 0 && number % 5 === 0) {
  	console.log('Buzz')
    
  } else {
 		console.log(number) 	
  }
}
