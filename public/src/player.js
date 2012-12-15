function Player(){
	this.deck = new Deck("Deck");
	this.discard = new Deck("Discard");
	this.hand = new Deck("Hand");
	//this.inPlay = new Deck(); //if different than had?
}


Player.prototype.shuffleDiscard = function(){
	this.discard.shuffleDeck();
	this.deck.setCards(this.discard.getCards());
	this.discard.setCards(new Array());
}

Player.prototype.drawHand = function(numberOfCards){
	player = this;
	for(var i = 0; i < numberOfCards; i++){
		player.hand.push(player.deck.pop());
	}
}