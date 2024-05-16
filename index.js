#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// countdown timer
const timer = await inquirer.prompt([
    {
        type: "number",
        name: "timer",
        message: "How many seconds do you want to countdown?"
    }
]);
function countdownTimer(seconds) {
    if (timer.timer > 100) {
        console.log(chalk.red.bold("Seconds must be Less than or Equal 100"));
    }
    else {
        console.log(chalk.blue.bold("Countdown Timer Started!"));
        console.log(seconds);
        let time = setInterval(() => {
            seconds--;
            console.log(seconds);
            if (seconds === 0) {
                console.log(chalk.green.bold("Time's Up!"));
                clearInterval(time);
                console.log(chalk.red.bold("Thank you for playing!"));
            }
        }, 1000);
    }
}
countdownTimer(timer.timer);
