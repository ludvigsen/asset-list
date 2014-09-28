var React = require('react');

module.exports = React.createClass({displayName: 'Asset',
    click: function(event){this.props.clickHandler(this.props.data["@id"]);},
    render: function(){
        return React.DOM.li({draggable: true, className: 'asset', onClick: this.click}, 
                React.DOM.img({
                    onError: function(event){
                        event.currentTarget.style.visibility = "hidden";
                    }, 
                    src: this.props.data.imageUrl}),
                React.DOM.p(null, this.props.data.title));
    }
});
