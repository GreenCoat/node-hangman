var Letter = require("./Letter.js");

var Word = function(word){
	this.word = word;
	this.letters = [];
	this.createWord = function(){
		var char;

		for(var i = 0; i < this.word.length; i++){
			char = this.word.charAt(i);
			this.letters.push(new Letter(char));
		}
	};
	this.toString = function(){
		var string = "";

		for(var i = 0; i < this.letters.length; i++){
			string += this.letters[i].show();
		}

		return string;
	};
	this.guess = function(char){
		console.log(char);
		for(var i = 0; i < this.letters.length; i++){
			this.letters[i].guess(char);
		}
	};
}

module.exports = Word;