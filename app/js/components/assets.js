/*global document, localStorage*/
var React = require('react');
var vimondApi = require('../utils/vimond-api');
var Asset = require('./asset');
var sortable = require('nativesortable');
var $ = require('jquery');

function getId(elem){
    var reactId = $(elem).data('reactid');
    if(reactId){
        var id = reactId.split('$')[1];
        if(id){
            return id.split('.')[0];
        }
    }
    return null;
}

module.exports = React.createClass({displayName: 'Assets',
    getInitialState: function(){
        return {assets: {getAssets: function(){return [];}}};
    },
    onchange: function(to, from){
        var toId = getId(to);
        var fromId = getId(from);
        if(toId && fromId){
            this.state.assets.swap(toId,fromId);
        }
    },
    componentDidMount: function(){
        var promise = vimondApi.assets.get();
        promise.then(function(assetsModel){
            this.setState({assets: assetsModel});
        }.bind(this));
        var list = document.getElementById("assets");
        sortable(list, { change: this.onchange, warp: true});
    },
    assetClick: function(id){
        this.props.router.navigate('asset/'+id, {trigger: true});
    },
    render: function(){
        return React.DOM.ul({id: 'assets', className: 'assets'},
                this.state.assets.getAssets().map(function(e){
                    return Asset({key: e['@id'], data:e, clickHandler: this.assetClick});
                }.bind(this)));
    }
});
