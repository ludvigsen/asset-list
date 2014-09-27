var React = require('react');
var vimondApi = require('../vimond-api');
var Asset = require('./asset');

module.exports = React.createClass({displayName: 'Assets',
    getInitialState: function(){
        return {data: []};
    },
    componentDidMount: function(){
        var promise = vimondApi.assets.get();
        promise.then(function(data){
            this.setState({data: data});
        }.bind(this));
    },
    assetClick: function(event){
        console.log('click: ', event);
    },
    render: function(){
        return React.DOM.div({className: 'assets'},
                this.state.data.map(function(e){
                    console.log('map: ', e);
                    return Asset({key: e['@id'], data:e, onClick: this.assetClick});
                }.bind(this)));
    }
});
