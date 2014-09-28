/*global localStorage*/
var React = require('react');
var vimondApi = require('../utils/vimond-api');
var InputGroup = require('./input-group');

//If this had been a bigger app, I would probably put this in a Util file
function handleChange(field, message){
    return function(event){
        var value = event.currentTarget.value;
        var newState = this.state;
        newState.data[field] = value;

        if(value.length === 0){
            newState.errors[field] = message;
        }else{
            newState.errors[field] = undefined;
        }
        this.setState(newState);
    };
}

module.exports = React.createClass({displayName: 'AssetForm',
    getInitialState: function(){
        return {data: {title: 'loading..'}, errors: {}};
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
            React.DOM.a({href: '#', onClick: function(){this.props.router.navigate("", {trigger: true});}.bind(this)}, "« Tilbake"),
            React.DOM.img({
                onError: function(event){
                    event.currentTarget.style.display = "none";
                }, 
                src: this.state.data.imageUrl}),
            React.DOM.form(
                null,
                InputGroup({id: 'title', name: 'Title', value: this.state.data.title, error: this.state.errors.title,
                      handleChange: handleChange("title", "Tittel kan ikke være tom").bind(this)}, null),
                InputGroup({id: 'description', name: 'Beskrivelse', value: this.state.data.description, error: this.state.errors.description,
                           textarea: true,
                      handleChange: handleChange("description", "Beskrivelsen kan ikke være tom").bind(this)}, null),
                React.DOM.button(
                    {
                        className: "submit", 
                        onClick: function(){
                            console.log('submit');
                            if(localStorage){
                                localStorage.setItem('asset'+this.state.data["@id"], JSON.stringify(this.state.data));
                            }
                        }.bind(this)
                    }, "Lagre")
            )
        );
    }
});
