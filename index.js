var inquirer = require("inquirer");
var Word = require("./Word.js");

var guessesLeft;
var letterGuesses;
var wordBank = ["Makoto Naegi", "Junko Enoshima", "Kyoko Kirigiri", "Mukuro Ikusaba", "Chihiro Fujisaki", "Byakuya Togami", "Toko Fukawa", "Celestia Ludenberg", "Sayaka Maizono", "Aoi Asahina", "Sakura Ogami", "Mondo Owada", "Yasuhiro Hagakure", "Kiyotaka Ishimaru", "Leon Kuwata", "Hifumi Yamada",
				"Hajime Hinata", "Nagito Komaeda", "Mikan Tsumiki", "Chiaki Nanami", "Gundham Tanaka", "Fuyuhiko Kuzuryu", "Ibuki Mioda", "Hiyoko Sainonji", "Sonia Nevermind", "Peko Pekoyama", "Akane Owari", "Ultimate Imposter", "Kazuichi Soda", "Mahiru Koizumi", "Nekomaru Nidai", "Teruteru Hanamura",
				"Kaede Akamatsu", "Shuichi Saihara", "Kokichi Oma", "Rantaro Amami", "Tsumugi Shirogane", "Maki Harukawa", "Korekiyo Shinguji", "Ultimate Robot", "Miu Iruma", "Kaito Momota", "Himiko Yumeno", "Tenko Chabashira", "Angie Yonaga", "Gonta Gokuhara", "Kirumi Tojo", "Ryoma Hoshi"];
var regEx = /^[A-Za-z]+$/;
var newWord;

newGame();

function newGame(){
	guessesLeft = 7; 
	word = newWord(wordBank);
	word.createWord();
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
		var char = ans.guess;

		word.guess(char);
		if(word.toString().toLowerCase().indexOf(char.toLowerCase()) == -1){
			guessesLeft--;
			if(guessesLeft == 0){
				console.log("Ha ha, you're out of guesses! Too bad!");
			} else {
				console.log("Ha ha, wrong! Only " + guessesLeft + " guesses remaining!");
			}
		} else {
			console.log("Oh? You got it right?");
		}

		console.log(word.toString());

		if(word.toString().indexOf("_") == -1){
			console.log("You got it but... DR Hangman will never end! Next victim!");
			newGame();
		} else if(guessesLeft == 0){
			console.log("...But this game will never end! Next victim!");
			newGame();
		} else{
			gameLoop();
		}
	});
}

function newWord(wordBank){
	var num = Math.floor(Math.random() * Math.floor(wordBank.length));
	return new Word(wordBank[num]);
}

