'use strict';

var api = require('./index.js');


describe('Draw Response Of the game:', function () {


    describe('Draw response', function () {

        it('should return array of 5 cards with no holded cards', function () {
            var response = api({bet: 10, holdedCards: {}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
        });
        
        it('should return array of 5 cards with 1 holded cards at 1st position', function () {
            var response = api({bet: 10, holdedCards: {'1': '7_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['1']).to.be.equal('7_A');
        });
        it('should return array of 5 cards with 1 holded cards at 2nd position', function () {
            var response = api({bet: 10, holdedCards: {'2': '2_S'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['2']).to.be.equal('2_S');
        });
        it('should return array of 5 cards with 1 holded cards at 3rd position', function () {
            var response = api({bet: 10, holdedCards: {'3': '8_C'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['3']).to.be.equal('8_C');
        });
        it('should return array of 5 cards with 1 holded cards at 4th position', function () {
            var response = api({bet: 10, holdedCards: {'4': 'K_D'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['4']).to.be.equal('K_D');
        });
        it('should return array of 5 cards with 1 holded cards at 5th position', function () {
            var response = api({bet: 10, holdedCards: {'5': '4_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['5']).to.be.equal('4_A');
        });

        it('should return array of 5 cards with 2 holded cards', function () {
            var response = api({bet: 10, holdedCards: {'2': 'K_D', '5': '4_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['2']).to.be.equal('K_D');
            expect(response.cards['5']).to.be.equal('4_A');
        });

        it('should return array of 5 cards with 3 holded cards', function () {
            var response = api({bet: 10, holdedCards: {'1': 'J_S', '2': 'K_D', '5': '4_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['1']).to.be.equal('J_S');
            expect(response.cards['2']).to.be.equal('K_D');
            expect(response.cards['5']).to.be.equal('4_A');
        });

        it('should return array of 5 cards with 4 holded cards', function () {
            var response = api({bet: 10, holdedCards: {'1': 'J_S', '2': 'K_D', '4': '6_C', '5': '4_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['1']).to.be.equal('J_S');
            expect(response.cards['2']).to.be.equal('K_D');
            expect(response.cards['4']).to.be.equal('6_C');
            expect(response.cards['5']).to.be.equal('4_A');
        });

        it('should return array of 5 cards with 5 holded cards', function () {
            var response = api({bet: 10, holdedCards: {'1': 'J_S', '2': 'K_D', '3': 'Q_D', '4': 'A_A', '5': '4_A'}});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
            expect(response.cards['1']).to.be.equal('J_S');
            expect(response.cards['2']).to.be.equal('K_D');
            expect(response.cards['3']).to.be.equal('Q_D');
            expect(response.cards['4']).to.be.equal('A_A');
            expect(response.cards['5']).to.be.equal('4_A');
        });

        it('should return error on duplicate carda', function () {
            var response = api({bet: 10, holdedCards: {'1': 'J_S', '2': 'K_D', '3': 'J_S', '4': 'A_A', '5': '4_A'}});
            expect(response).to.have.property('error');
            expect(response.cards).to.be.an('Object');
            expect(response.error).to.be.equal("Multiple cards with same value found");
        });


        it('should return random cards', function () {
            var response1 = api({bet: 10});
            var response2 = api({bet: 10});
            expect(response1.cards).to.not.eql(response2.cards);

        });
        it('should return bet = bet passes', function () {
            var response = api({bet: 10});
            expect(response.bet).to.eql(10);
        });

        it('should return win', function () {
            var response = api({bet: 10});
            expect(response).to.have.property('win');
        });



        it('should return roundOver = true', function () {
            var response = api({bet: 10});
            expect(response.roundOver).to.eql(true);
        });
        it('should return nextAction = draw', function () {
            var response = api({bet: 10});
            expect(response.nextAction).to.eql("deal");
        });

    });

});
