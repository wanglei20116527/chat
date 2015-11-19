"use strict";

var React = require("react");

module.exports = React.createClass({
	displayName: "exports",

	propTypes: {
		d: React.PropTypes.string.isRequired,
		fill: React.PropTypes.string

	},

	render: function render() {
		return React.createElement("path", { fill: this.props.fill, d: this.props.d });
	}
});