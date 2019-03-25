// Developer:       Jim Horton
// Date:            03/25/2019
// Purpose:         practice using npm to add functionality to code
// File:            AMOMENT

var moment = require('moment');
const chalk = require('chalk');

// console.log(moment().format('dddd'));   // gives current day
// console.log(moment().format('hh'));     // gives hour
// console.log(moment().format('dd'));     // not this

var day = moment().format('dddd');      // sets day to variable
var hourNow = moment().format('H');    // sets hour to variable
var greeting = "";

if (hourNow > 17 ) {
    greeting = "Good Evening"
} // end of if evening
if (hourNow > 00 && hourNow < 12){
    greeting = "Good Morning";
} // end of if morning
if (hourNow > 12 && hourNow < 17 ){
    greeting = "Good Afternoon"
} // end of if afternoon

// console.log(hourNow);   // test for output
// console.log(greeting);  // test for output


console.log(chalk.underline.blue(day) + chalk.red.underline(" ") + chalk.underline.green(greeting)); 