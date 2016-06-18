'use strict';
var MersenneTwister = require('mersenne-twister');
// MersenneTwister uses Date().getTime() as a default seed - good enough
var generator = new MersenneTwister();

var deck = require('../../config/deck');

function deal(game) {
    console.log("JackOrBetter : deal ")
    var selectedCards = [];
    var pickedCards = {};
    var cards = deck.cards;
    for(var i=0;selectedCards.length<5;i++){
        var randomCard = cards[Math.floor(generator.random() * cards.length)];
        if(selectedCards.indexOf(randomCard)<0){
            selectedCards.push(randomCard);
            pickedCards[selectedCards.length] = randomCard;
        }
    }
    
    return {
        roundOver:false,
        bet:game.bet,
        win:0,
        cards: pickedCards,
        nextAction : "draw"
    }
}



module.exports = deal;
