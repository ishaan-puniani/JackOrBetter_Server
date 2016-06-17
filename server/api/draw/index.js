'use strict';
var MersenneTwister = require('mersenne-twister');
// MersenneTwister uses Date().getTime() as a default seed - good enough
var generator = new MersenneTwister();

var deck = require('../../config/deck');

function draw(game) {
    console.log("JackOrBetter : draw ")
    return {
        roundOver:true,
        bet:0,
        win:0,
        cards: []
    }
}



module.exports = draw;
