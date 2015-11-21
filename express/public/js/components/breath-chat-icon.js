"use strict";

var React = require("react");

module.exports = React.createClass({
	displayName: "exports",

	propTypes: {
		icon: React.PropTypes.string.isRequired
	},

	getDefaultProps: function getDefaultProps() {
		return {
			width: "auto",
			height: "auto"
		};
	},

	render: function render() {
		var style = {
			width: this.props.width,
			height: this.props.height,
			backgroundImage: "url(" + this.props.icon + ")"
		};

		return React.createElement("i", { className: "breath-chat-icon",
			style: style });
	}
});