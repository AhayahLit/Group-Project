var gametotal
var userChoice = prompt("Choose R, P, or S"); 
var computerSelection = Math.random();

for (var i = 0; i<10; i++) {
}
//    if (computerSelection i <= 3) { 
//    computerSelection = "rock";
   // }    
 //else if (computerSelection i <= 6) {
 //   computerSelection = "paper";
 //} 
 //else {
 //   computerSelection = "scissor";
//}
//console.log(getRandomInt(10));

function compare( userChoice, computerSelection ) {
	
	if ( userChoice === computerSelection ) {
		return 
        alert("The result is a tie!");
	}
	
	switch ( userChoice ) {
		case "rock":
			return (computerSelection === "scissors" ? "Rock" : "Paper") + " wins!";
			break;
		case "paper":
			return (computerSelection === "rock" ? "Paper" : "Scissors") + " wins!";
			break;
		case "scissors":
			return (computerSelection === "paper" ? "Scissors" : "Rock") + " wins!";
			break;
	}
	
}
//function gameTotal= (userWin, compWin)