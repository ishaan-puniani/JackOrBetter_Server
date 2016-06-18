'use strict';

var api = require('./index.js');



describe('Deal Response Of the game:', function () {


    describe('Deal response', function () {

        it('should return array of 5 cards', function () {
            var response = api({bet:10});
            expect(response).to.have.property('cards');
            expect(response.cards).to.be.an('Object');
        });

        it('should return random cards', function () {
            var response1 = api({bet:10});
            var response2 = api({bet:10});
            expect(response1.cards).to.not.eql(response2.cards);

        });
        it('should return bet = bet passes', function () {
            var response = api({bet:10});
            expect(response.bet).to.eql(10);
        });
        
        it('should return win = 0', function () {
            var response = api({bet:10});
            expect(response.win).to.eql(0);
        });
        
        
        
        it('should return roundOver = false', function () {
            var response = api({bet:10});
            expect(response.roundOver).to.eql(false);
        });
        it('should return nextAction = draw', function () {
            var response = api({bet:10});
            expect(response.nextAction).to.eql("draw");
        });

    });

});
