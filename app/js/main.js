/*global document*/
var $ = require('jquery');
var AppRouter = require('./app-router');
var Backbone = require('backbone');

var router = new AppRouter();
Backbone.$ = $;
//Backbone.history.start({pushState: true});
Backbone.history.start();


router.navigate("");

