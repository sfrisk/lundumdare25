function Deck(name){
	if(typeof(name)==='undefined') name = "";
	this.cards = [];
	this.name = name;
}

Deck.prototype.setName = function(name){
	this.name = name;
}


Deck.prototype.setCards = function(cards){
	this.cards = cards;
}

Deck.prototype.getCards = function(){
	return this.cards;
}

Deck.prototype.getName = function(){
	return this.name;
}

Deck.prototype.shuffleDeck = function(){
	deck = this;
	for(var j, x, i = deck.cards.length; i; j = parseInt(Math.random() * i), x = deck.cards[--i], deck.cards[i] = deck.cards[j], deck.cards[j] = x);

} 

Deck.prototype.createElement = function(location){
	deck = this;
	$(location).append('<button id="'+deck.name+'">'+deck.name+'</button>');
}


