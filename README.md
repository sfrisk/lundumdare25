
Notes
Object Card
	ID
	Name
	Tech Value (?)
	Money Value (?)
	Power Points (for win)
	image (if null, display text)


Full Deck
	where all the cards reside at first


Player's Deck
Player's Discard

-> Player's Hand



functions Draw Card
	-> Full Deck to Players Deck
	-> Player's Deck to Players Hand

functions Shuffle
	Player's Deck is filled with Discoard automatically shuffles when Player's Deck is filled





Object Player
 --> Player Hand
 --> Player Deck
 --> Discard
 -- (At play(?))


Game:
	-players[]
	-Full Deck