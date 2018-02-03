var Letter = function(char){
	this.char = char;
	this.ph = "_";
	this.guessed = false;
	this.show = function(){
		if(this.guessed == true){
			return this.char;
		} else {
			return this.ph;
		}
	}
	this.guess = function(guess){
		if(guess.toLowerCase() == this.char.toLowerCase()){
			this.guessed = true;
		}
	}
}

module.exports = Letter;

