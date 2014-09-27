/*global document*/
var vimondApi = require('./vimond-api');
var Assets = require('./components/assets');
var React = require('react');

var promise = vimondApi.assets.get();

/*promise.then(function(data){
    //console.log('data: ', data);
    //
    var elem = data[0];
    console.log('elem: ', elem);
    var asset = Asset(null);
    console.log('rendered..');
    asset.setState(elem);
    console.log('rendered..');
    console.log('rendered..');
},function(error){
    console.log('error: ', error);
});

*/

var container = document.getElementById('content');
React.renderComponent(Assets(null), container);
