(function () {
    'use strict';

    var mocha = require('mocha'),
        chai = require('chai');

    var expect = chai.expect();
    var Beer = require('../src/models/beer').Beer;

    describe('Beers', function () {
        var mockBeer = new Beer({ name: 'Stinger' });
        describe('#saveBeer', function () {
            it('should create a beer object', function (done) {
                Beer.create({ name: 'Stinger' }, function (err, beer) {
                    expect(!err).to.be.true;
                    return done();
                });
            });
        });
    });
})();