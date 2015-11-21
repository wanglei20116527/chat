"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

var MAX_SINGLE_TAP_INTERVAL = 320; // ms
var MAX_SINGLE_TAP_OFFSET = 10;

module.exports = React.createClass({
	displayName: "exports",

	propTypes: {
		onTapHandler: function onTapHandler(props, propName, componentName) {},

		onDoubleTapHandler: function onDoubleTapHandler(props, propName, componentName) {}
	},

	touchInfor: {
		touchStartPoint: null,
		touchStartDate: null,
		tap: {
			count: 0,
			timeoutID: null
		}
	},

	onTapHandler: function onTapHandler(evt) {
		this.props.onTapHandler && this.props.onTapHandler(evt);
	},

	onDoubleTapHandler: function onDoubleTapHandler(evt) {
		this.props.onDoubleTapHandler && this.props.onDoubleTapHandler(evt);
	},

	onTouchStartHandler: function onTouchStartHandler(evt) {
		this.touchInfor.touchStartPoint = {
			x: evt.targetTouches[0].pageX,
			y: evt.targetTouches[0].pageY
		};

		this.touchInfor.touchStartDate = Date.now();
	},

	onTouchMoveHandler: function onTouchMoveHandler(evt) {},

	onTouchEndHandler: function onTouchEndHandler(evt) {
		// deal with tap events , such as single tap event and double tap event
		if (evt.changedTouches.length == 1) {
			var touchEndPoint = {
				x: evt.changedTouches[0].pageX,
				y: evt.changedTouches[0].pageY
			};

			var touchOffset = Math.sqrt(Math.pow(touchEndPoint.x - this.touchInfor.touchStartPoint.x, 2) + Math.pow(touchEndPoint.y - this.touchInfor.touchStartPoint.y, 2));
			if (Date.now() - this.touchInfor.touchStartDate <= MAX_SINGLE_TAP_INTERVAL && touchOffset <= MAX_SINGLE_TAP_OFFSET) {

				tapEventDispatch.call(this, ++this.touchInfor.tap.count, evt);
			} else {
				clearTimeout(this.touchInfor.tap.timeoutID);
				resetTapEvent.call(this);
			}
		}

		function tapEventDispatch(tapCount, evt) {
			clearTimeout(this.touchInfor.tap.timeoutID);
			switch (tapCount) {
				case 1:
					this.touchInfor.tap.timeoutID = setTimeout((function () {
						this.onTapHandler(evt);
						resetTapEvent.call(this);
					}).bind(this), MAX_SINGLE_TAP_INTERVAL);
					break;

				case 2:
					this.touchInfor.tap.timeoutID = setTimeout((function () {
						this.onDoubleTapHandler(evt);
						resetTapEvent.call(this);
					}).bind(this), MAX_SINGLE_TAP_INTERVAL);
					break;

				default:
					this.touchInfor.tap.timeoutID = setTimeout((function () {
						resetTapEvent.call(this);
					}).bind(this), MAX_SINGLE_TAP_INTERVAL);
			}
		}

		function resetTapEvent() {
			this.touchInfor.tap = {
				count: 0,
				timeoutID: null
			};
		}
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "breath-chat-gesturePane",
				onTouchStart: this.onTouchStartHandler,
				onTouchMove: this.onTouchMoveHandler,
				onTouchEnd: this.onTouchEndHandler },
			this.props.children
		);
	}
});