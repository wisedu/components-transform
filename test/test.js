var path = require('path');
var async = require('async');

var utils = require('./utils');
var selfheal = require('selfheal');
var parseHtml = require('../index');


// var srcFolder = path.join(path.resolve(), 'test/components/');

let htmlContent = '';
let components = {};
async.waterfall([
    function(callback) {
        utils.readFile(path.join(path.resolve(), 'test/pages/test.html'), callback);
    },
    function(_result, callback) {
        htmlContent = _result.data;
        selfheal.combine(path.join(path.resolve(), 'test/components/'), callback);
    },
    function(_result, callback) {
        components = _result;
        let transformHtml = parseHtml.transform('test', htmlContent, components, 'ubase', '-');
        console.log(transformHtml)
    }
]);
