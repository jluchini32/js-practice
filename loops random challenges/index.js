// first challenge
//Write a for loop that will log only the even numbers in 0 through 200.

for(let even = 0; even <= 200; even = even + 2){
    console.log(even)
  }
  
  
//2nd challenge
//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
  
  for(let count = 0; count <= 20; count = count + 1){
      console.log("Love me, pet me! HSSSSSS!")
  }
  
//2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
//Hint: You will need to use Math.random()
  
  let petThoughts1 = "Love me, pet me! HSSSSSS!";
  let petThoughts2 = ["...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..."];
  
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      const rand = petThoughts2[Math.floor(Math.random() * petThoughts2.length)];
      console.log(rand);
    } else {
      console.log(petThoughts1);
    }
  }