'use strict';
var MersenneTwister = require('mersenne-twister');
// MersenneTwister uses Date().getTime() as a default seed - good enough
var generator = new MersenneTwister();
var winEvaluator = require('../../component/winEvaluator');
var deck = require('../../config/deck');
var paytable = require('../../component/paytable');

function draw(game) {
    console.log("JackOrBetter : draw ")
    //game.holdedCards = {'1': '8_D', '2': '12_C', '3': '14_D', '4': '14_C', '5': '2_S'}
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
        var sortedCards = winEvaluator.getSortedHand();
        var payForWin = paytable[winType];
        var win = 0;
        if (payForWin) {
             console.log("game.bet",game.bet,"game.betLevel",game.betLevel );
            win = game.bet * payForWin[game.betLevel]
        }
           console.log("win",win );
    }

    return {
        roundOver: true,
        bet: game.bet,
        win: win,
        cards: pickedCards,
        nextAction: "deal",
        winType: winType,
        winningCards: sortedCards,
        error: error
    }
}



module.exports = draw;
