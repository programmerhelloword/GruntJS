/** @jsx React.DOM */

var MenuListItemComp = React.createClass({
  handleClick: function(tag) {
      this.props.onItemClickFunc(tag);
    },
  render: function() {
      var createItem = function(itemlist) {
        return <a onClick={this.handleClick.bind(this,itemlist.name)} href="#" className="list-group-item">{itemlist.name}</a> 

    }.bind(this);
    return (
      <div> {this.props.menu.map(createItem)} </div>
    )
  },
  getInitialState: function() {
    return {value: 0}
  }
});