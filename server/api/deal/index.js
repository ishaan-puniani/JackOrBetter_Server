'use strict';
var MersenneTwister = require('mersenne-twister');
// MersenneTwister uses Date().getTime() as a default seed - good enough
var generator = new MersenneTwister();

var deck = require('../../config/deck');

function deal(game) {
    console.log("JackOrBetter : deal ")

    return {
        roundOver:true,
        bet:0,
        win:0,
        cards: []
    }
}



module.exports = deal;
