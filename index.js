var inquirer = require("inquirer");
var Word = require("./Word.js");

var guessesLeft;
var letterGuesses;
var wordBank = ["Sword"];
var regEx = /^[A-Za-z]+$/;
var newWord;

newGame();

function newGame(){
	guessleft = 7; 
	newWord = newWord(wordBank);
	newWord.createWord();
	gameLoop();
}

function gameLoop(){

	inquirer.prompt([
	{
		name: 'guess',
		message: 'Guess a letter!',
		validate: function(input){
   			if(input.match(regEx)){
      			return true;
     		} else {
     			return false;
     		}
		}
	}
	]).then(function(ans){
		newWord.guess(ans.guess);
		console.log(newWord.toString());
	});

	if(false){
		gameLoop();
	}
}

function newWord(wordBank){
	return new Word(wordBank[0]);
}

