function Deck(){
	this.cards = [];
	this.cardsSrc = "";

}

Deck.prototype.loadDeck = function(deckSrc){
	var deck = this;
	deck.cardsSrc = deckSrc;
	i = 0;
	$.getJSON(deck.cardsSrc, function (data){
		$.each(data, function(index, cards){
			$.each(cards, function(index, card){
				if (card.numberOfCards > 1){
					for(count = 0; count < card.numberOfCards; count ++){
						c = new Card();
						c.loadCard(i, card.name, card.tech, card.money, card.power, card.image, card.techCost, card.moneyCost);
						deck.cards.push(c);
						i ++;
					}
				}
				else{
					c = new Card();
					c.loadCard(i, card.name, card.tech, card.money, card.power, card.image, card.techCost, card.moneyCost);
					deck.cards.push(c);
					i++;
				}
			});
		});
	});
}