import inquirer from "inquirer";

let guess= Math.floor(Math.random() * 10+1)



let guessNumber = await inquirer.prompt(
    {
    message:"enter your number between 1-10:",
    type:"number",
    name:"yourguess",
    }
);

if(guessNumber.yourguess === guess){
    console.log("congratulations||| your guess is right.....");
}else{
console.log("your guess is wrong");
}