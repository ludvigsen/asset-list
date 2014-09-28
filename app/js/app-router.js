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
        var container = document.getElementById('content');
        React.renderComponent(Assets({router: this}), container);
    },

    asset: function(id) {
        if(!id){
            this.navigate("");
        }
        var container = document.getElementById('content');
        React.renderComponent(AssetsForm({router: this, data: {id: id}}), container);
    }
});
