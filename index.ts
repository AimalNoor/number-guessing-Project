//Number Guessing Game 

import inquirer from "inquirer"

let randomnumber=Math.floor(Math.random()*10 +1)

let answer= await inquirer.prompt([
{
name: "userGuessnumber",
type:"number",
message:"Please guess a number"

}

])


if (answer.userGuessnumber===randomnumber)
{console.log("Congrats! you guessed a right number.")}

else{console.log("You guessed wrong number")}




