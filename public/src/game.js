function Game(deckSrc, numberOfPlayers){
	game = this;
	this.decks = [];
	this.discard = [];
	this.numberOfPlayers = numberOfPlayers;
	this.loadDecks(deckSrc);

	this.player = new Player();

}


Game.prototype.start = function(){
	game = this;
	game.shuffleDecks(game.decks);
	game.paintDecks();


	$("#decks").on("click", "button", function(event){
		deck = game.getDeckByName($(this).attr('id'));
		game.drawCard(deck, game.player.discard);
	});

	$("#PlayerDraw").on("click",  function(event){
		game.player.drawHand(3);
	});
}

Game.prototype.shuffleDecks = function (decks){
	game = this;
	for(var i = 0; i < decks.length; i++){
		game.decks[i].shuffleDeck();
	}
}

Game.prototype.loadDecks = function(deckSrc){
	var game = this;
	var decks = [];
	i = 0;
	$.getJSON(deckSrc, function (data){
		$.each(data, function(name, subdeck){

			d = new Deck();
			d.setName(name);
		
			$.each(subdeck, function(index, card){

				if (card.numberOfCards > 1){
					for(count = 0; count < card.numberOfCards; count ++){
						slug = card.slug + "-" + i;
						c = new Card();
						c.loadCard(i, card.name, card.tech, card.money, card.power, card.image, card.techCost, card.moneyCost, slug);
						d.cards.push(c);
						i ++;
					}
				}
				else{
					slug = card.slug + "-" + i;
					c = new Card();
					c.loadCard(i, card.name, card.tech, card.money, card.power, card.image, card.techCost, card.moneyCost, slug);
					d.cards.push(c);
					i++;
				}
			});

			decks.push(d);
		

		});
		game.decks = decks;
		game.start();
	});	
}


Game.prototype.paintDecks = function(){
	game = this;
	for(var i = 0; i < game.decks.length; i++){
		game.decks[i].createElement('#decks');
	}
}

Game.prototype.drawCard = function(firstdeck, seconddeck){
	seconddeck.addCard(firstdeck.drawCard());
}



Game.prototype.getDeckByName = function(name){
	game = this;
	for(var i = 0; i < game.decks.length; i++){
		if(game.decks[i].getName() == name){
			return game.decks[i];
		}
	}
}

Game.prototype.getDecks = function(){
	return this.decks;
}
