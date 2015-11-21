"use strict";

var React = require("react");

var Icon = require("./breath-chat-icon");
var Textarea = require("./breath-chat-textarea");
var GesturePane = require("./breath-chat-gesturePane");

var ICON_WIDTH = 30;
var ICON_HEIGHT = 30;

module.exports = React.createClass({
	displayName: "exports",

	onExpressionButtonTapHandler: function onExpressionButtonTapHandler(evt) {
		alert("wanglei is cool and kang is wanglei best friend");
	},

	onAddtionalButtonTapHandler: function onAddtionalButtonTapHandler(evt) {
		alert("wanglei is cool and houna is cute");
	},

	render: function render() {
		var expressionButtonProps = {
			width: ICON_WIDTH,
			height: ICON_HEIGHT,
			icon: "images/icon/iconfont-arrow02add.png"
		};

		var additionalButtonProps = {
			width: ICON_WIDTH,
			height: ICON_HEIGHT,
			icon: "images/icon/iconfont-iconfontuntitled92.png"
		};

		return React.createElement(
			"div",
			{ className: "breath-chat-interactivePane" },
			React.createElement(
				"div",
				{ className: "toolBar" },
				React.createElement(Textarea, null),
				React.createElement(
					GesturePane,
					{ onTapHandler: this.onExpressionButtonTapHandler },
					React.createElement(Icon, expressionButtonProps)
				),
				React.createElement(
					GesturePane,
					{ onTapHandler: this.onAddtionalButtonTapHandler },
					React.createElement(Icon, additionalButtonProps)
				)
			),
			React.createElement(
				"div",
				{ className: "contentPane" },
				React.createElement(
					"h1",
					null,
					"wanglei is cool"
				)
			)
		);
	}
});