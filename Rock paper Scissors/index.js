const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' ||userInput === 'scissors' || userInput === 'bomb'){
    return userInput
    } else 
    console.log('Not a valid input')
  }
  
  const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
      if (computerChoice === 1){
        return 'rock'
      } else if (computerChoice === 2){
        return 'paper'
      } else
        return 'scissors'
  }
  
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'Tie game'
  
    } else if (userChoice === 'bomb'){
      return 'The user won'
  
    } else if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'The Computer won'
          }else 
            return 'The user won'
  
    } else if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'The Computer won'
          }else 
            return 'The user won'
  
      }else (userChoice === 'scissors')
        if (computerChoice === 'rock'){
          return 'The Computer won'
          }else {
            return 'The user won' 
        }
  }
  
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame()