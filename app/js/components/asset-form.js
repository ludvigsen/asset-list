var React = require('react');
var vimondApi = require('../vimond-api');


module.exports = React.createClass({displayName: 'AssetForm',
    getInitialState: function(){
        return {data: {title: 'loading..'}};
    },
    componentDidMount: function(){
        var promise = vimondApi.asset.get(this.props.data.id);
        promise.then(function(data){
            this.setState({data: data});
        }.bind(this));
    },
    render: function(){
        return React.DOM.div(
            {className: 'asset-form'}, 
            React.DOM.a({href: '#', onClick: function(){this.props.router.navigate("", {trigger: true});}}, "« Tilbake"),
            React.DOM.img({
                onError: function(event){
                    event.currentTarget.style.display = "none";
                }, 
                src: this.state.data.imageUrl}),
            React.DOM.form(
                null,
                React.DOM.div(
                    {className: 'input-group'},
                    React.DOM.label({htmlFor: 'title'},"Tittel"),
                    React.DOM.input({id: 'title', value: this.state.data.title, onChange: function(){}}, null)
                ),
                React.DOM.div(
                    {className: 'input-group'},
                    React.DOM.label({htmlFor: 'description'},"Beskrivelse"),
                    React.DOM.textarea({id: 'title', value: this.state.data.title, onChange: function(){}}, null)
                )
            )
        );
    }
});
