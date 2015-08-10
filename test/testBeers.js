(function () {
    'use strict';

    var mocha = require('mocha'),
        chai = require('chai');

    var expect = chai.expect(),
        mongoose = require('mongoose'),
        Beer = require('../src/models/beer').Beer;

    describe('Beers', function () {
        mongoose.connect('dockerhost.local', 'hapiBeerTest');

        describe('#saveBeer', function () {
            it('should create a beer object', function () {
                var beer = new Beer({ name: 'Stinger' });
                beer.save(function (err) {
                    expect(err).to.be.null;
                });
            });

            it('should fail name validation when creating', function () {
                var beer = new Beer();
                beer.save(function (err) {
                    expect(err).not.to.be.null;
                });
            });

            it('should fail on abv validation when creating', function () {
                var beer = new Beer({ name: 'Stinger', abv: -10 });
                beer.save(function (err) {
                    expect(err).not.to.be.null;
                });
            });
        });
    });
})();