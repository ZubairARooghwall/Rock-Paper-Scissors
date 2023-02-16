function getComputerChoice(){
    let random = Math.floor(Math.random() * 3 + 1);
    let returnValue;
        if(random === 1) returnValue =  "Rock";
        else if(random === 2) returnValue = "Paper";
        else if(random === 3) returnValue = "Scissors"
    
    return returnValue;
 }

function getUserChoice(){
    let input = parseInt(prompt("Enter a number: (1 => Rock, 2 => Paper, 3 => Scissors"));
    let returnValue;
        if(input == 1) returnValue = "Rock";
        else if(input == 2) returnValue = "Paper";
        else if(input == 3) returnValue = "Scissors"

    return returnValue;
}

