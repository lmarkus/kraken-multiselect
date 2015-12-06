'use strict';

var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {


        res.render('index', model);


    });

    router.post('/', function (req, res) {

        var excuse = req.body.excuse;

        if (!excuse) {
            //Nothing was selected
        }
        else if (Array.isArray(excuse)) {
            //Multiple excuses were selected
        }
        else {
            //A single excuse was selected
        }

        //Inject these into the model for rendering.
        model.receivedExcuse = excuse;

        res.render('index',model)
    });

};
