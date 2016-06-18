'use strict';

var api = require('./index.js');
var paytable = require('../../component/paytable');

describe('Draw Response Of the game:', function () {


    describe('Draw response', function () {

        it('should return array of 5 cards with no holded cards', function () {
            var response = api({bet: 10, betLevel: 0, holdedCards: {}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
        });

        it('should return array of 5 cards with 1 holded cards at 1st position', function () {
            var response = api({bet: 10, betLevel: 0, holdedCards: {'1': '7_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['1']).to.be.equal('7_A');
        });
        it('should return array of 5 cards with 1 holded cards at 2nd position', function () {
            var response = api({bet: 10, betLevel: 0, holdedCards: {'2': '2_S'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['2']).to.be.equal('2_S');
        });
        it('should return array of 5 cards with 1 holded cards at 3rd position', function () {
            var response = api({bet: 10, betLevel: 0, holdedCards: {'3': '8_C'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['3']).to.be.equal('8_C');
        });
        it('should return array of 5 cards with 1 holded cards at 4th position', function () {
            var response = api({bet: 10, betLevel: 0, holdedCards: {'4': 'K_D'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['4']).to.be.equal('K_D');
        });
        it('should return array of 5 cards with 1 holded cards at 5th position', function () {
            var response = api({bet: 10, betLevel: 0, holdedCards: {'5': '4_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['5']).to.be.equal('4_A');
        });

        it('should return array of 5 cards with 2 holded cards', function () {
            var response = api({bet: 10, betLevel: 0, holdedCards: {'2': 'K_D', '5': '4_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['2']).to.be.equal('K_D');
            expect(response.cards['5']).to.be.equal('4_A');
        });

        it('should return array of 5 cards with 3 holded cards', function () {
            var response = api({bet: 10, betLevel: 0, holdedCards: {'1': 'J_S', '2': 'K_D', '5': '4_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['1']).to.be.equal('J_S');
            expect(response.cards['2']).to.be.equal('K_D');
            expect(response.cards['5']).to.be.equal('4_A');
        });

        it('should return array of 5 cards with 4 holded cards', function () {
            var response = api({bet: 10, betLevel: 0, holdedCards: {'1': 'J_S', '2': 'K_D', '4': '6_C', '5': '4_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['1']).to.be.equal('J_S');
            expect(response.cards['2']).to.be.equal('K_D');
            expect(response.cards['4']).to.be.equal('6_C');
            expect(response.cards['5']).to.be.equal('4_A');
        });

        it('should return array of 5 cards with 5 holded cards', function () {
            var response = api({bet: 10, betLevel: 0, holdedCards: {'1': 'J_S', '2': 'K_D', '3': 'Q_D', '4': 'A_A', '5': '4_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['1']).to.be.equal('J_S');
            expect(response.cards['2']).to.be.equal('K_D');
            expect(response.cards['3']).to.be.equal('Q_D');
            expect(response.cards['4']).to.be.equal('A_A');
            expect(response.cards['5']).to.be.equal('4_A');
        });

        it('should return error on duplicate carda', function () {
            var response = api({bet: 10, betLevel: 0, holdedCards: {'1': 'J_S', '2': 'K_D', '3': 'J_S', '4': 'A_A', '5': '4_A'}});
            expect(response).to.have.property('error');
            expect(response.cards).to.be.an('Object');
            expect(response.error).to.be.equal("Multiple cards with same value found");
        });


        it('should return random cards', function () {
            var response1 = api({bet: 10, betLevel: 0});
            var response2 = api({bet: 10, betLevel: 0});
            expect(response1.cards).to.not.eql(response2.cards);

        });
        it('should return bet = bet passes', function () {
            var response = api({bet: 10, betLevel: 0});
            expect(response.bet).to.eql(10);
        });

        it('should return win', function () {
            var response = api({bet: 10, betLevel: 0});
            expect(response).to.have.property('win');
        });

        it('should return roundOver = true', function () {
            var response = api({bet: 10, betLevel: 0});
            expect(response.roundOver).to.eql(true);
        });
        it('should return nextAction = draw', function () {
            var response = api({bet: 10, betLevel: 0});
            expect(response.nextAction).to.eql("deal");
        });

        it('should return win state : HIGH_CARD with selectedBetLevel:0 ', function () {
            var selectedBetLevel = 0;
            var bet = 10;
            var response = api({
                bet: bet,
                holdedCards: {'1': '11_D', '2': '12_D', '3': '13_C', '4': '7_H', '5': '5_C'},
                betLevel: selectedBetLevel
            });
            expect(response.winType).to.be.equal('HIGH_CARD');
            expect(response.win).to.be.equal(0);

        });

        it('should return win state : JACKS_OR_BETTER with selectedBetLevel:0 ', function () {
            var selectedBetLevel = 0;
            var bet = 10;
            var response = api({
                bet: bet,
                holdedCards: {'1': '8_D', '2': '12_C', '3': '14_D', '4': '14_C', '5': '2_S'},
                betLevel: selectedBetLevel
            });
            var winMultipler = paytable['JACKS_OR_BETTER'][selectedBetLevel];
            expect(response.winType).to.be.equal('JACKS_OR_BETTER');
            expect(response.win).to.be.equal(bet * winMultipler);


        });
        it('should return win state : TWO_PAIR with selectedBetLevel:0 ', function () {
            var selectedBetLevel = 0;
            var bet = 10;
            var response = api({
                bet: bet,
                holdedCards: {'1': '6_H', '2': '12_D', '3': '9_S', '4': '9_C', '5': '6_D'},
                betLevel: selectedBetLevel
            });
            var winMultipler = paytable['TWO_PAIR'][selectedBetLevel];
            expect(response.winType).to.be.equal('TWO_PAIR');
            expect(response.win).to.be.equal(bet * winMultipler);



        });
        it('should return win state : THREE_OF_A_KIND with selectedBetLevel:0 ', function () {
            var selectedBetLevel = 0;
            var bet = 10;
            var response = api({
                bet: bet,
                holdedCards: {'1': '5_H', '2': '12_D', '3': '5_S', '4': '9_C', '5': '5_D'},
                betLevel: selectedBetLevel
            });
            var winMultipler = paytable['THREE_OF_A_KIND'][selectedBetLevel];
            expect(response.winType).to.be.equal('THREE_OF_A_KIND');
            expect(response.win).to.be.equal(bet * winMultipler);


        });
        it('should return win state : STRAIGHT with selectedBetLevel:0 ', function () {
            var selectedBetLevel = 0;
            var bet = 10;
            var response = api({
                bet: bet,
                holdedCards: {'1': '2_D', '2': '3_S', '3': '4_D', '4': '14_D', '5': '5_D'},
                betLevel: selectedBetLevel
            });
            var winMultipler = paytable['STRAIGHT'][selectedBetLevel];
            expect(response.winType).to.be.equal('STRAIGHT');
            expect(response.win).to.be.equal(bet * winMultipler);

        });
        it('should return win state : FLUSH with selectedBetLevel:0 ', function () {
            var selectedBetLevel = 0;
            var bet = 10;
            var response = api({
                bet: bet,
                holdedCards: {'1': '5_D', '2': '12_D', '3': '13_D', '4': '14_D', '5': '11_D'},
                betLevel: selectedBetLevel
            });
            var winMultipler = paytable['FLUSH'][selectedBetLevel];
            expect(response.winType).to.be.equal('FLUSH');
            expect(response.win).to.be.equal(bet * winMultipler);

        });
        it('should return win state : FLUSH with selectedBetLevel:0 ', function () {
            var selectedBetLevel = 0;
            var bet = 10;
            var response = api({
                bet: bet,
                holdedCards: {'1': '11_D', '2': '12_D', '3': '13_D', '4': '14_D', '5': '5_D'},
                betLevel: selectedBetLevel
            });
            var winMultipler = paytable['FLUSH'][selectedBetLevel];
            expect(response.winType).to.be.equal('FLUSH');
            expect(response.win).to.be.equal(bet * winMultipler);

        });

        it('should return win state : FULL_HOUSE with selectedBetLevel:0', function () {
            var selectedBetLevel = 0;
            var bet = 10;
            var response = api({
                bet: bet,
                holdedCards: {'1': '2_D', '2': '2_S', '3': '4_D', '4': '4_C', '5': '4_S'},
                betLevel: selectedBetLevel
            });
            var winMultipler = paytable['FULL_HOUSE'][selectedBetLevel];
            expect(response.winType).to.be.equal('FULL_HOUSE');
            expect(response.win).to.be.equal(bet * winMultipler);

        });
        it('should return win state : FOUR_OF_A_KIND with selectedBetLevel:0', function () {
            var selectedBetLevel = 0;
            var bet = 10;
            var response = api({
                bet: bet,
                holdedCards: {'1': '2_D', '2': '2_S', '3': '2_H', '4': '2_C', '5': '4_S'},
                betLevel: selectedBetLevel
            });
            var winMultipler = paytable['FOUR_OF_A_KIND'][selectedBetLevel];
            expect(response.winType).to.be.equal('FOUR_OF_A_KIND');
            expect(response.win).to.be.equal(bet * winMultipler);


        });
        it('should return win state : STRAIGHT_FLUSH with selectedBetLevel:0', function () {
            var selectedBetLevel = 0;
            var bet = 10;
            var response = api({
                bet: bet,
                holdedCards: {'1': '2_D', '2': '3_D', '3': '4_D', '4': '5_D', '5': '6_D'},
                betLevel: selectedBetLevel
            });
            var winMultipler = paytable['STRAIGHT_FLUSH'][selectedBetLevel];
            expect(response.winType).to.be.equal('STRAIGHT_FLUSH');
            expect(response.win).to.be.equal(bet * winMultipler);


        });
        it('should return win state : ROYAL_FLUSH with selectedBetLevel:0', function () {
            var selectedBetLevel = 0;
            var bet = 10;
            var response = api({
                bet: bet,
                holdedCards: {'1': '10_D', '2': '14_D', '3': '11_D', '4': '13_D', '5': '12_D'},
                betLevel: selectedBetLevel
            });
            var winMultipler = paytable['ROYAL_FLUSH'][selectedBetLevel];
            expect(response.winType).to.be.equal('ROYAL_FLUSH');
            expect(response.win).to.be.equal(bet * winMultipler);
        });



    });

});
