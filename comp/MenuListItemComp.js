/** @jsx React.DOM */

var MenuListItemComp = React.createClass({displayName: 'MenuListItemComp',
  handleClick: function(tag) {
      this.props.onItemClickFunc(tag);
    },
  render: function() {
      var createItem = function(itemlist) {
        return React.DOM.a( {onClick:this.handleClick.bind(this,itemlist.name), href:"#", className:"list-group-item"}, itemlist.name) 

    }.bind(this);
    return (
      React.DOM.div(null,  this.props.menu.map(createItem) )
    )
  },
  getInitialState: function() {
    return {value: 0}
  }
});