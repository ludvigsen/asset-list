var React = require('react');

module.exports = React.createClass({displayName: 'Asset',
    click: function(event){this.props.clickHandler(this.props.data["@id"]);},
    render: function(){
        console.log('rendering asset: ', this.props);
        return React.DOM.div({className: 'asset', onClick: this.click}, 
                React.DOM.img({
                    onError: function(event){
                        event.currentTarget.style.display = "none";
                    }, 
                    src: this.props.data.imageUrl}),
                React.DOM.p(null, this.props.data.title));
    }
});
