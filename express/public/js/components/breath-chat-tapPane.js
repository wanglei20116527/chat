"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

var Constants = require("../constants/breath-chat-constants");

module.exports = React.createClass({
	displayName: "exports",

	onTouchStartHandler: function onTouchStartHandler(evt) {
		if (evt.targetTouches.length == 1) {
			var menu = ReactDOM.findDOMNode(this.refs.tapPane);
			var _top = parseInt(menu.style.top);
			var left = parseInt(menu.style.left);

			menuOriginPoint = {
				x: left ? left : 0,
				y: _top ? _top : 0
			};

			touchStartPoint = {
				x: evt.targetTouches[0].pageX,
				y: evt.targetTouches[0].pageY
			};

			touchStartDate = Date.now();
		}
	},

	onTouchMoveHandler: function onTouchMoveHandler(evt) {},

	onTouchEndHandler: function onTouchEndHandler(evt) {},

	render: function render() {
		return React.createElement(
			"div",
			{ ref: "tapPane",
				className: "breath-chat-tapPane",
				onTouchStart: this.onTouchStartHandler,
				onTouchMove: this.onTouchMoveHandler,
				onTouchEnd: this.onTouchEndHandler },
			this.props.children
		);
	}
});