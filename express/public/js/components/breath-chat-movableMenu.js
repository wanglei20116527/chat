'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var MAX_TAP_INTERVAL = 250; // ms

var menuOriginPoint = null; // menu origin point
var touchStartPoint = null;
var touchStartDate = null;

var tapCount = 0;
var timeoutID = null;

module.exports = React.createClass({
	displayName: 'exports',

	onTouchStartHandler: function onTouchStartHandler(evt) {
		evt.preventDefault();
		evt.stopPropagation();

		if (evt.targetTouches.length == 1) {
			var menu = ReactDOM.findDOMNode(this.refs.movableMenu);
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

	onTouchMoveHandler: function onTouchMoveHandler(evt) {
		evt.preventDefault();
		evt.stopPropagation();

		if (evt.targetTouches.length == 1) {
			var touchCurtPoint = {
				x: evt.targetTouches[0].pageX,
				y: evt.targetTouches[0].pageY
			};

			var menu = ReactDOM.findDOMNode(this.refs.movableMenu);

			menu.style.top = touchCurtPoint.y - touchStartPoint.y + menuOriginPoint.y + "px";
			menu.style.left = touchCurtPoint.x - touchStartPoint.x + menuOriginPoint.x + "px";
		}
	},

	onTouchEndHandler: function onTouchEndHandler(evt) {
		evt.preventDefault();
		evt.stopPropagation();

		if (evt.changedTouches.length == 1) {
			var touchEndPoint = {
				x: evt.changedTouches[0].pageX,
				y: evt.changedTouches[0].pageY
			};

			var menu = ReactDOM.findDOMNode(this.refs.movableMenu);

			menu.style.top = touchEndPoint.y - touchStartPoint.y + menuOriginPoint.y + "px";
			menu.style.left = touchEndPoint.x - touchStartPoint.x + menuOriginPoint.x + "px";

			var touchMoveOffset = Math.sqrt(Math.pow(touchEndPoint.x - touchStartPoint.x, 2) + Math.pow(touchEndPoint.y - touchStartPoint.y, 2));

			if (Date.now() - touchStartDate <= MAX_TAP_INTERVAL && touchMoveOffset <= 10) {
				tapCount++;

				if (tapCount == 1) {
					timeoutID = setTimeout((function () {
						this.onTapHandler();
						tapCount = 0;
						timeoutID = null;
					}).bind(this), MAX_TAP_INTERVAL);
				} else if (tapCount == 2) {
					clearTimeout(timeoutID);
					timeoutID = setTimeout((function () {
						this.onDoubleTapHandler();
						tapCount = 0;
						timeoutID = null;
					}).bind(this), MAX_TAP_INTERVAL);
				} else {
					clearTimeout(timeoutID);
					timeoutID = setTimeout((function () {
						tapCount = 0;
						timeoutID = null;
					}).bind(this), MAX_TAP_INTERVAL);
				}
			} else {
				timeoutID != null && clearTimeout(timeoutID);
				tapCount = 0;
			}
		}
	},

	onTapHandler: function onTapHandler(evt) {
		alert("wanglei is cool");
	},

	onDoubleTapHandler: function onDoubleTapHandler(evt) {
		if (document.body.requestFullScreen) {
			alert("houna is cute");
			document.body.webkitRequestFullScreen();
		} else {
			alert("houna is cute1");
		}
	},

	render: function render() {
		return React.createElement(
			'div',
			{ ref: 'movableMenu',
				className: 'breath-chat-movableMenu',
				onTouchStart: this.onTouchStartHandler,
				onTouchMove: this.onTouchMoveHandler,
				onTouchEnd: this.onTouchEndHandler },
			React.createElement(
				'div',
				{ className: '' },
				React.createElement('i', { className: 'icon' })
			),
			React.createElement(
				'navigator',
				null,
				React.createElement(
					'ul',
					null,
					React.createElement(
						'li',
						null,
						React.createElement(
							'a',
							{ href: '#' },
							'full screen'
						)
					)
				)
			)
		);
	}
});