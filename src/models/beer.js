(function () {
    'use strict';

    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        Joi = require('joi');

    var beerSchema = new Schema({
        name: { type: String, required: true },
        abv: {type: Number, min: 0.1},
        ibu: {type: Number},
        srm: {type: Number},
        og: {type: Number},
        style: {type: String},
        description: String,
        picture: String
    });

    var Beer = mongoose.model('Beer', beerSchema);

    Beer.schema.path('abv').validate(function (val) {
        var validation = Joi.number().precision(2).positive().validate(val);
        return !val.err;
    });

    exports.Beer = Beer;

})();
