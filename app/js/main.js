/*global document*/
var $ = require('jquery');
var AppRouter = require('./app-router');
var Backbone = require('backbone');

var router = new AppRouter();
Backbone.$ = $; //Because jquery is not globally defined

Backbone.history.start();
