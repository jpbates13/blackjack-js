function Card(cardRank, cardSuit, cardPointValue, cardFaceDown){
	this.faceDown = cardFaceDown;
	this.rank = cardRank;
	this.suit = cardSuit;
	this.pointValue = cardPointValue;
	this.image = '<img class = "card" src="./assets/cards/';
	if(this.faceDown){
		console.log("here");
		this.image = this.image + 'red_back.png" />';
	}else if(this.pointValue == 10 && cardRank != "ten"){
		this.image = this.image + this.rank.substring(0,1) + this.suit.substring(0,1) + '.png" />';
	} else {
		this.image = this.image + String(this.pointValue) + this.suit.substring(0,1) + '.png" />';
	}
	this.text = function(){
		return this.rank + " of " + this.suit + " (point value = " + String(this.pointValue) + ")";
	}

	//console.log("Image Source: " + this.image);
	//console.log(this.rank + " of " + this.suit);

}