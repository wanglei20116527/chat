"use strict";

var React = require("react");

module.exports = React.createClass({
	displayName: "exports",

	propTypes: {
		// width  : React.PropTypes.number ,
		// height : React.PropTypes.number ,
		fill: React.PropTypes.string,
		d: React.PropTypes.string
	},

	render: function render() {
		return(
			// <svg width={this.props.width + "px"} height={this.props.height} xmlns="http://www.w3.org/2000/svg">
			React.createElement("path", { fill: this.props.fill, d: this.props.d })
			// </svg>

		);
	}
});