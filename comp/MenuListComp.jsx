/** @jsx React.DOM */
var MenuListComp = React.createClass({
  render: function() {
    return (
    	<div className="list-group">
			<a href="#" className="list-group-item active"> News </a>
			<MenuListItemComp menu={this.props.menu} onItemClickFunc={this.props.onItemClickFunc} />
		</div>
    );
  }
});
