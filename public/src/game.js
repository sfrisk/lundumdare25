function Game(deckSrc, numberOfPlayers){
	this.deck = new Deck();
	this.numberOfPlayers = 0;

	this.deck.loadDeck(deckSrc);

	console.log(this.deck);
}

