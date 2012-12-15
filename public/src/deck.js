function Deck(){
	this.cards = [];
	this.name = ""
}

Deck.prototype.setName = function(name){
	this.name = name;
}


Deck.prototype.shuffleDeck = function(){
	deck = this;
	for(var j, x, i = deck.cards.length; i; j = parseInt(Math.random() * i), x = deck.cards[--i], deck.cards[i] = deck.cards[j], deck.cards[j] = x);

} 