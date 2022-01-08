//directions:
// Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

// Race number:

// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.
// Start time:

// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).
// But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.


let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let age = 19;

if (age > 18 && earlyRegistration === true) {
  raceNumber = raceNumber + 1000;
}else if (age > 18 && earlyRegistration === false){
  raceNumber = raceNumber + 1000;
}else{
  raceNumber = raceNumber;
}

if(age > 18 && earlyRegistration === true){
  console.log(`'Because you\'ve registered early and you\'re over 18 years old, you will run at 9:30am. Your race number is: ${raceNumber} `);
}else if(age > 18 && earlyRegistration === false){
  console.log(`'Because you\'ve registered late and you\'re over 18 years old, you will run at 11am. Your race number is: ${raceNumber} `);
}else if(age < 18){
  console.log(`'Because you\'re under 18 years old, you will run at 12:30pm. Your race number is: ${raceNumber} `);
}else{
  console.log('upon arrival, see us at the registration desk');
}
