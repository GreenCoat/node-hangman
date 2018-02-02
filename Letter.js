var Letter = function(char){
	this.char = char;
	this.ph = "_";
	this.guessed = false;
	this.show = function(){
		if(this.guessed){
			console.log('unhidden');
			return this.char;
		} else {
			console.log('hidden');
			return this.ph;
		}
	}
	this.guess = function(guess){
		if(guess === this.char){
			console.log('You guessed right');
			this.guessed = true;
		}
	}
}

module.exports = Letter;

