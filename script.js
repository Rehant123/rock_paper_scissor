// Define the possible choices


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper') {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  } 
  function getcomputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  
  
  function game() {
    var i = 0;
    var score = 0;
    while(i < 5) {
      var playerSelection = prompt("Enter rock, paper, or scissors:");
      const computerSelection = getcomputerChoice();
      const output = playRound(playerSelection, getcomputerChoice());
      console.log(output);
      if(output === "You win!") {
        score++;
      }
      i++;
    }
    console.log(`Final score: ${score} out of 5`);
  }
  game()