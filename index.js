var isHotOutside = true;
var isWeekday = false;
var hasMoneyInPocket = true;

var costOfMilk = 3;
var moneyInWallet = 225;
var thirstLevel = 5;

var shouldBuyIcecream = true;
if (isHotOutside && hasMoneyInPocket) {
    console.log('Buy icecream!');
}


var willGoSwimming = true;
if (isHotOutside && !isWeekday) {
    console.log('Lets go swimming');
}

var isAGoodDay = true;
if (isHotOutside && hasMoneyInPocket && !isWeekday) {
    console.log('It is a good day');
}

var willBuyMilk = true;
if (isHotOutside && thirstLevel >=3 && moneyInWallet >= (costOfMilk * 2)) {
    console.log('Gotta buy milk');
} else if (thirstLevel < 2) {
    console.log('Not thirsty yet');
}