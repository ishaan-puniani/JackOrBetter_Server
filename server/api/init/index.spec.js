'use strict';

var api = require('./index.js');
var deck = require('../../config/deck');

describe('Init Response Of the game:', function () {

    describe('init response', function () {

        it('should return array of cards', function () {
            var response = api();
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('array');
        });

        it('should return initial 52 cards', function () {
            var response = api();
            expect(response.cards.length).to.eql(52);
        });

        it('should return win = 0', function () {
            var response = api();
            expect(response.win).to.eql(0);
        });
        it('should return roundOver = true', function () {
            var response = api();
            expect(response.roundOver).to.eql(true);
        });
        it('should return nextAction = deal', function () {
            var response = api();
            expect(response.nextAction).to.eql("deal");
        });
    });
});
