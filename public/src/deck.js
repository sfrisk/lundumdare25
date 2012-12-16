function Deck(name){
	if(typeof(name)==='undefined') name = "";
	this.cards = [];
	this.name = name;
}

Deck.prototype.getPower = function(){
	var power = 0;
	deck = this;
	for(var i = 0; i < deck.cards.length; i++){
		power += deck.cards[i].getPower();
	}
	return power;
}

Deck.prototype.getTech = function(){
	var tech = 0;
	deck = this;
	for(var i = 0; i < deck.cards.length; i++){
		tech += deck.cards[i].getTech();
	}
	return tech;
}

Deck.prototype.getMoney = function(){
	var money = 0;
	deck = this;
	for(var i = 0; i < deck.cards.length; i++){
		money += deck.cards[i].getMoney();
	}
	return money;
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

Deck.prototype.paintTopCard = function(location){
	deck = this;
	deck.cards[0].paintCard(location, deck.name);
}

Deck.prototype.addCard = function(card){
	deck = this;
	deck.cards.push(card);
}

Deck.prototype.drawCard = function(){
	deck = this;
	return deck.cards.pop();
}

Deck.prototype.paintDeck = function(location){
	deck=this;
	for(var i =0; i < deck.cards.length; i++){
		deck.cards[i].paintCard(location);
	}
}