function Deck(ranks, suits, values){
	this.cards = [];
	this.size = 0;
	if(ranks != null){
		for (var j = 0; j < ranks.length; j++) {
			for(var i =0; i < suits.length; i++){
				this.cards.push(new Card(ranks[j], suits[i], values[j]));
				this.size += 1;
			};
		}
		this.size = this.cards.length; 
		for(var i =0; i < this.cards.length; i++){
			console.log(this.cards[i].text());
		}
		Reflect.apply(shuffle, this);
	}

	function shuffle(){
		for (var k = this.size - 1; k > 0; k--) {
			var howMany = k + 1;
			var start = 0;
			var randPos = (Math.random() * howMany) + start;
			var temp = cards[k];
			this.cards[k] = this.cards[randPos];
			this.cards[randPos] = temp;
			i--;
		}
		size = this.cards.length;
	}

	this.addCard = function addCard(card){
		this.cards.push(card);
		this.size += 1;
	}

	this.deal = function deal(){
		if(this.size == 0){
			return null;
		}
		this.size -= 1;
		return this.cards.pop();
	}
}