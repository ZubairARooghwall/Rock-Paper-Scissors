let user = 0;
let computer = 0;


let result_user = document.querySelector(".user");
let result_computer = document.querySelector(".computer");
let total_result = document.querySelector(".result");
let winnerParagraph = document.querySelector(".winner");

let content = document.getElementById("container");
let winner = document.getElementById("retry")

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3 + 1);
    let returnValue;
        if(random === 1) returnValue =  "rock";
        else if(random === 2) returnValue = "paper";
        else if(random === 3) returnValue = "scissors"
    
        console.log(returnValue);
        result_computer.textContent = "Computer: " + returnValue.toUpperCase();
    return returnValue;
 }

function getUserChoice(){
    let btn = document.querySelectorAll(".btn");

    btn.forEach((item) => {
        item.addEventListener('click', () => {
            
            
            let userInput = item.getAttribute("id");
            console.log(userInput);

            let computerInput = getComputerChoice();
            let total = playRound(userInput, computerInput);

            result_user.textContent = "User: " + item.getAttribute("id").toUpperCase();
            // return item.getAttribute("id");
            console.log(total)
            total_result.textContent = total;
            
            if(user == 5 || computer == 5){
                showTheWinner();
            }

        });
    });
    
}

function retry(){

    content.style.display = "flex";
    winner.style.display = "none";

    computer = 0;
    user = 0;
    result_user.textContent = "User: ";
    result_computer.textContent = "Computer: ";
    total_result.textContent = "Result: ";



}


function showTheWinner(){
    

    content.style.display = "none";
    winner.style.display = "flex";

    winnerParagraph.textContent = (user > computer) ? "You are the winner" : "Computer is the winner";
    

}


function playRound(playerSelection, computerSelection){

    let returnValue = ' ';

        if(playerSelection == computerSelection){
             returnValue = "Draw: No one wins";
             computer++;
             user++;
            }
        else if(playerSelection == "rock"  && computerSelection == "paper"){
             returnValue = "Computer won\n\tPaper beats rock";
             computer++;
        }
        else if(playerSelection == "paper" && computerSelection == "rock"){
             returnValue = "You won\n\tPaper beats rock";
             user++;
            }
        else if(playerSelection == "rock" && computerSelection == "scissors"){
             returnValue = "You won\n\tRock beats scissors";
             user++;
        }
        else if(playerSelection == "scissors" && computerSelection == "rock"){
            returnValue = "Computer won\n\tRock beats scissors";
            computer++;
        }
        else if(playerSelection == "paper" && computerSelection == "scissors"){ 
            returnValue = "Computer won\n\tScissors beat paper";
            computer++;
    }
        else if(playerSelection == "scissors" && computerSelection ==  "paper"){
             returnValue = "You won\n\tScissors beat paper";
             user++;
        }

    return returnValue;
}



getUserChoice();








