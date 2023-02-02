const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    // If there was an error in reading input from file
    if (err) throw err;

    rounds = data.toString().split('\n');
    console.log(rounds);

   for(round of rounds){
        opponent = map_input(round[0]);
        player = map_input(round[2]);

        console.log(opponent);
        console.log(player);

        win = evaluate_winner(opponent, player);
        console.log(win)
        break;

   }

})

function map_input(input){
    switch(input){
        case 'X':
        case 'A':
            match = "ROCK";
            break;
        case 'Y':    
        case 'B':
            match = "PAPER";
            break;
        case 'Z':    
        case 'C':
            match = "SCISSORS"        
    }

    return match;
}

function evaluate_winner(opponent, player){
    if(opponent == "ROCK" && player == "ROCK"){
        return "ROCK";
    }
    if(opponent == "PAPER" && player == "PAPER"){
       return "PAPER";
    }
    if(opponent == "SCISSORS" && player == "SCISSORS"){
        return "SCISSORS";
    }
    if(opponent == "ROCK" && player == "PAPER"){
        return "PAPER";
    }
    if(opponent == "ROCK" && player == "PAPER" || opponent == "PAPER" && player == "ROCK"){
        return "PAPER";
    }
    if(opponent == "ROCK" && player == "SCISSORS" || opponent == "SCISSORS" && player == "ROCK"){
        return "ROCK";
    }
    if(opponent == "PAPER" && player == "SCISSORS" || opponent == "SCISSORS" && player == "PAPER"){
        return "SCISSORS";
    }
}