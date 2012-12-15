function Game(deckSrc, numberOfPlayers){
	this.decks = [];
	this.numberOfPlayers = 0;

	this.loadDecks(deckSrc);

	console.log(this);
}



Game.prototype.loadDecks = function(deckSrc){
	var game = this;
	var deck = this.deck;
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
			game.decks.push(d);

		});
	});
}