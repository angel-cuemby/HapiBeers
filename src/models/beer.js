(function () {
    'use strict';

    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        Joi = require('joi');

    var beerSchema = new Schema({
        name: String,
        abv: {type: Number, min: 0.1},
        ibu: {type: Number},
        srm: {type: Number},
        og: {type: Number},
        style: {type: String},
        description: String,
        picture: String
    });

    var Beer = mongoose.model('Beer', beerSchema);

    Beer.schema.path('name').validate(function validateName(value, respond) {
        var name = Joi.string().required();
        name.validate(value, function (err) {
            return respond(!err);
        });
    }, 'validation of `{PATH}` failed with value `{VALUE}`');

    exports.Beer = Beer;

})();
