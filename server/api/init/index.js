'use strict';

var deck = require('../../config/deck');

function init() {
    return {
        cards: deck.card,
        win:0,
        roundOver:true
    }
}

module.exports = init;
