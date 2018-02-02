var Letter = require("./Letter.js");

var Word = function(word){
	this.word = function(){
		var temp = [];
		var char;

		for(var i = 0; i < word.length; i++){
			char = word.charAt(i);
			temp.push(new Letter(char));
		}


		return temp;
	};
	this.toString = function(){
		var string = "";
		var w = this.word();

		for(var i = 0; i < w.length; i++){
			string += w[i].show();
		}

		return string;
	};
	this.guess = function(char){
		console.log(char);
		var w = this.word();
		for(var i = 0; i < w.length; i++){
			w[i].guess(char);
		}
	};
}

var w = new Word("sword");
console.log(w);
console.log(w.toString());
w.guess('s');
console.log(w.toString());

module.exports = Word;