'use strict';
var MersenneTwister = require('mersenne-twister');
// MersenneTwister uses Date().getTime() as a default seed - good enough
var generator = new MersenneTwister();
var winEvaluator = require('../../component/winEvaluator');
var deck = require('../../config/deck');
var paytable = require('../../component/paytable');

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
        var winType = winEvaluator.evaluate(selectedCards);
        var payForWin = paytable[winType];
        var win = 0;
        if (payForWin) {
            win = game.bet * payForWin[game.betLevel]
        }
        //   console.log(payForWin );
    }

    return {
        roundOver: true,
        bet: game.bet,
        win: win,
        cards: pickedCards,
        nextAction: "deal",
        winType: winType,
        error: error
    }
}



module.exports = draw;
