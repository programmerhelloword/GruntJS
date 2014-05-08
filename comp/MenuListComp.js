/** @jsx React.DOM */
var MenuListComp = React.createClass({displayName: 'MenuListComp',
  render: function() {
    return (
    	React.DOM.div( {className:"list-group"}, 
			React.DOM.a( {href:"#", className:"list-group-item active"},  " News " ),
			MenuListItemComp( {menu:this.props.menu, onItemClickFunc:this.props.onItemClickFunc} )
		)
    );
  }
});
