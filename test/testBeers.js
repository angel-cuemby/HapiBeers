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
                    expect(err).to.be.a('null');
                });
            });
        });
    });
})();