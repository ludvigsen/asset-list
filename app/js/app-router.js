/*global document*/
var Backbone = require('backbone');
var React = require('react');
var Assets = require('./components/assets');
var AssetsForm = require('./components/asset-form');

module.exports = Backbone.Router.extend({
    routes: {
        "":                 "index",
        "asset/:id":        "asset",
    },

    index: function() {
        console.log('routing...');
        var container = document.getElementById('content');
        React.renderComponent(Assets({router: this}), container);
    },

    asset: function(id) {
        console.log('asset route');
        if(!id){
            console.log('no asset: redirect...');
            this.navigate("");
        }
        var container = document.getElementById('content');
        React.renderComponent(AssetsForm({router: this, data: {id: id}}), container);
    }
});
