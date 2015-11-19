"use strict";

var React = require("react");

var Textarea = require("./breath-chat-textarea");

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "breath-chat-interactivePane" },
			React.createElement(Textarea, null)
		);
	}
});