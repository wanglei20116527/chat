"use strict";

var React = require("react");

module.exports = React.createClass({
	displayName: "exports",

	propTypes: function propTypes() {
		// url: React.PropTypes.string.isRequired,
	},

	getDefaultProps: function getDefaultProps() {
		return {
			url: "images/cd3ed493551d79846b19dc2a50de3cad.png"
		};
	},

	render: function render() {
		return React.createElement(
			"figure",
			{ className: "breath-chat-thumbnail" },
			React.createElement("img", { className: "image", src: this.props.url })
		);
	}
});