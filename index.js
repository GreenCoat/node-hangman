var inquirer = require("inquirer");
var Word = require("./Word.js");

var wordBank = ["Sword"];

var newWord = new Word(wordBank[0]);

console.log(newWord);
newWord.toString();