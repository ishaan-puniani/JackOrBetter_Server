'use strict';

var deck = require('../../config/deck');
var betOptions = require('../../config/betOptions');
var betLevels = require('../../config/betLevels');
var paytable = require('../../component/paytable');
function init() {
    console.log("JackOrBetter : init ")
    return {
        cards: deck.cards,
        win: 0,
        roundOver: true,
        nextAction: "deal",
        betOptions: betOptions,
        paytable: paytable,
        betLevels: betLevels
    }
}

module.exports = init;
