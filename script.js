function getComputerChoice(){
    let random = Math.floor(Math.random() * 3 + 1);
    let returnValue;
        if(random === 1) returnValue =  "rock";
        else if(random === 2) returnValue = "paper";
        else if(random === 3) returnValue = "scissors"
    
    return returnValue;
 }

function getUserChoice(){
    let input = prompt("Enter a value: (rock, paper, scissors)");
    let returnValue;
        if(input === "Rock" || input === "rock" || input === "ROCK" || input === "RocK" || input === "rOCk") returnValue = "rock";
        else if(input === "Paper" || input === "paper" || input === "PAPER" || input === "PapeR") returnValue = "paper";
        else if(input === "Scissors" || input === "Scissor" || input === "scissors" || input == "scissor") returnValue = "scissors"

    return returnValue;
}

function checkOutput(user, computer){
    let returnValue;
        if(user == computer) returnValue = "Draw: No one wins";
        else if(user == "rock"  && computer == "paper") returnValue = "Computer won\n\tPaper beats rock";
        else if(user == "paper" && computer == "rock") returnValue = "User won\n\tPaper beats rock";
        else if(user == "rock" && computer == "scissors") returnValue = "User won\n\tRock beats scissors";
        else if(user == "scissors" && computer == "rock") returnValue = "Computer won\n\tRock beats scissors";
        else if(user == "paper" && computer == "scissors") returnValue = "Computer won\n\tScissors beat paper";
        else if(user == "scissors" && "paper") returnValue = "User won\n\tScissors beat paper";

    return returnValue;
}






for(let a = 0; a < 5; a++){
    let user = getUserChoice();
    let computer = getComputerChoice();

    console.log(checkOutput(user, computer));
}





