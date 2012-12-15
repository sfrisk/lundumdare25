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

Player.prototype.discardHand = function(){
	player = this;
	length = player.hand.cards.length
	for(var i = 0; i < length; i++){
		player.discard.addCard(player.hand.drawCard());
	}
}

Player.prototype.drawHand = function(numberOfCards){
	player = this;

	for(var i = 0; i < numberOfCards; i++){
		if(player.deck.cards.length > 0){
			player.hand.addCard(player.deck.drawCard());
		}
		else{
			player.shuffleDiscard();
			player.hand.addCard(player.deck.drawCard());
		}
		
	}
	player.paintHand();
	
}

Player.prototype.paintHand = function(){
	$('#player #hand').empty();
	player.hand.paintDeck('#player #hand');



}

Player.prototype.getDiscard = function(){
	return this.discard;
}

Player.prototype.getDeck = function(){
	return this.deck;
}

Player.prototype.getHand = function(){
	return this.hand;
}