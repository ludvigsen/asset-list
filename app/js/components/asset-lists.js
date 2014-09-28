var React = require('react');
var Assets = require('./assets');

module.exports = React.createClass({displayName: 'Asset',
    click: function(event){
        //this.props.clickHandler(this.props.data["@id"]);
    },
    render: function(){
        return React.DOM.button({className: 'asset', onClick: this.click}, 
                this.state.assets.getAssets().map(function(e){
                    return Assets({key: e['@id'], data:e, clickHandler: this.assetClick});
                }.bind(this)));
    }
});
