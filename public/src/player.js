var REST = 0;  // not your turn
var ACTION = 1; //beginning of turn
var DISCARD = 2; //you're done, discard 
var DRAW = 3; //end of turn


function Player(){
	this.deck = new Deck("Deck");
	this.discard = new Deck("Discard");
	this.hand = new Deck("Hand");
	this.state = REST;
	//this.inPlay = new Deck(); //if different than had?
}


Player.prototype.shuffleDiscard = function(){
	if(player.getState() == DRAW){
		this.discard.shuffleDeck();
		this.deck.setCards(this.discard.getCards());
		this.discard.setCards(new Array());
	}

}

Player.prototype.discardHand = function(){
	if(player.getState() == DISCARD){
		player = this;
		length = player.hand.cards.length
		for(var i = 0; i < length; i++){
			player.discard.addCard(player.hand.drawCard());
		}
	}
}

Player.prototype.drawHand = function(numberOfCards, state){
	if(typeof(state)==='undefined') state = REST;
	player = this;
	if (player.getState() == DRAW){
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
	player.setState(state);
	player.getHandStats();
	}	
}

Player.prototype.purchaseCard = function(deck){
	card = deck.cards[0];
	player = this;
	cmoney = card.getMoney();
	ctech = card.getTech();
	hmoney = player.hand.getMoney();
	htech = player.hand.getTech();

	if(hmoney >= cmoney && htech >= ctech){

	}
}

Player.prototype.getHandStats = function(){
	player = this;
	power = player.hand.getPower();
	tech = player.hand.getTech();
	money = player.hand.getMoney();
	$("#power span").html(power);
	$("#tech span").html(tech);
	$("#money span").html(money);
}

Player.prototype.paintHand = function(){
	$('#hand .readout').empty();
	player.hand.paintDeck('#hand .readout');
}

Player.prototype.getState = function(){
	return this.state;
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

Player.prototype.setState = function(state){
	this.state = state;
}