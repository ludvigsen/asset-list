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
    assetClick: function(id){
        this.props.router.navigate('asset/'+id, {trigger: true});
    },
    render: function(){
        return React.DOM.div({className: 'assets'},
                this.state.data.map(function(e){
                    console.log('map: ', e);
                    return Asset({key: e['@id'], data:e, clickHandler: this.assetClick});
                }.bind(this)));
    }
});
