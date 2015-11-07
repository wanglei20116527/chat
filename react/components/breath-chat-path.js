let React = require("react");

module.exports = React.createClass({
	propTypes:{
		d    : React.PropTypes.string.isRequired,
		fill   : React.PropTypes.string  
		
	},
	
	render: function(){
		return (
			<path fill={this.props.fill} d={this.props.d}></path>
		);
	}
});