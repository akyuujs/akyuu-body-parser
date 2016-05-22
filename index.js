/**
 * XadillaX created at 2016-05-22 17:43:39 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

var _util = require("config.util");
var _bodyParser = require("body-parser");

var DEFAULT_OPTIONS = {
    urlencoded: true
};

var BodyParser = function(akyuu, options) {
    this.akyuu = akyuu;
    this.options = _util.extendDeep({}, DEFAULT_OPTIONS, options || {});
    this.position = this.akyuu.PLUGIN_POS.BEFORE_CONTROLLER;
};

BodyParser.prototype.plug = function() {
    for(var key in this.options) {
        if(!this.options.hasOwnProperty(key)) continue;
        if(!this.options[key] || typeof _bodyParser[key] !== "function") continue;

        var mid = _bodyParser[key];
        var options = this.options[key];
        if(options === true) options = {};
        this.akyuu.use(mid(options));
    }
};

exports.create = function(akyuu, options) {
    return new BodyParser(akyuu, options);
};
