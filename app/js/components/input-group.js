var React = require('react');

module.exports = React.createClass({displayName: 'InputGroup',
    render: function(){
        var inputData = {id: this.props.id, value: this.props.value, onChange: this.props.handleChange};
        return React.DOM.div(
            {className: 'input-group'},
            React.DOM.label({htmlFor: this.props.id}, this.props.name),
            this.props.textarea ? React.DOM.textarea(inputData, null) : React.DOM.input(inputData, null),
            this.props.error ? React.DOM.p({className: "error"}, this.props.error) : ""
        );
    }
});

