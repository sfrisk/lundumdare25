function Card(){
	this.id = null;
	this.slug = "";
	this.name = "";
	this.tech = null
	this.money = null;
	this.power = null;
	this.techCost = null;
	this.moneyCost = null;
	this.image = "";
}

Card.prototype.loadCard = function(id, name, tech, money, power, image, techCost, moneyCost, slug){
	this.id = id;
	this.name = name;
	this.tech = tech;
	this.money = money;
	this.power = power;
	this.image = image;
	this.techCost = techCost;
	this.moneyCost = moneyCost;
	this.slug = slug;
}

Card.prototype.paintCard = function(location){
	card = this;
	html = '<div id="'+card.slug+'" class="playerCard"><h2>'+card.name+'</h2></div>';
	$(location).append(html);
}

Card.prototype.setId = function(id){
	this.id = id;
}

Card.prototype.setName = function(name){
	this.name = name;
}

Card.prototype.setTech = function(tech){
	this.tech = tech;
}

Card.prototype.setMoney = function(money){
	this.money = money;
}

Card.prototype.setPower = function(power){
	this.power = power;
}

Card.prototype.setImage = function(image){
	this.image = image;
}

Card.prototype.setMoneyCost = function(moneyCost){
	this.moneyCost = moneyCost;
}

Card.prototype.setTechCost = function(techCost){
	this.techCost = techCost;
}

Card.prototype.getId = function(){
	return this.id;
}

Card.prototype.getName = function(){
	return this.name;
}

Card.prototype.getTech = function(){
	return this.tech;
}

Card.prototype.getMoney = function(){
	return this.money;
}

Card.prototype.getPower = function(){
	return this.power;
}

Card.prototype.getImage = function(){
	return this.image;
}

Card.prototype.getMoneyCost = function(){
	return this.moneyCost;
}

Card.prototype.getTechCost = function(){
	return this.techCost;
}