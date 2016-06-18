'use strict';

var deck = require('../../config/deck');

function init() {
    return {
        cards: deck.cards,
        win:0,
        roundOver:true,
        nextAction:"deal"
    }
}

module.exports = init;
