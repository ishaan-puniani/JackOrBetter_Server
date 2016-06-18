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
        it('should return betOptions', function () {
            var response = api();
            expect(response).to.have.property('betOptions');
            expect(response.betOptions).to.be.an('array');
            expect(response.betOptions.length).to.eql(7);
        });
        it('should return paytable', function () {
            var response = api();
            expect(response).to.have.property('paytable');
            expect(response.paytable).to.be.an('Object');
        });
        it('should return betLevels', function () {
            var response = api();
            expect(response).to.have.property('betLevels');
            expect(response.betLevels).to.be.an('array');
            expect(response.betLevels.length).to.eql(5);
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
