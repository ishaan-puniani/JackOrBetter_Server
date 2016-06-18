'use strict';
var MersenneTwister = require('mersenne-twister');
// MersenneTwister uses Date().getTime() as a default seed - good enough
var generator = new MersenneTwister();

var deck = require('../../config/deck');

function draw(game) {
    console.log("JackOrBetter : draw ")
    var selectedCards = [], error;
    var pickedCards = game.holdedCards || {};

    for (var i in game.holdedCards) {
        var cardValue = game.holdedCards[i];
        if (selectedCards.indexOf(cardValue) > -1) {
            error = "Multiple cards with same value found";
            pickedCards = {};
        }
        selectedCards.push(cardValue);
    }
    if (!error) {
        var cards = deck.cards;
        for (var i = 1; selectedCards.length < 5; ) {
            if (!pickedCards[i]) {
                var randomCard = cards[Math.floor(generator.random() * cards.length)];
                if (selectedCards.indexOf(randomCard) < 0) {
                    selectedCards.push(randomCard);
                    pickedCards[i] = randomCard;
                    i++;
                }
            } else {
                i++;
            }
        }
    }
    return {
        roundOver: true,
        bet: game.bet,
        win: 10,
        cards: pickedCards,
        nextAction: "deal",
        error: error
    }
}



module.exports = draw;
