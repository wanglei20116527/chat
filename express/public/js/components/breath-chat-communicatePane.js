"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _breathChatInteractivePane = require("./breath-chat-interactivePane");

var _breathChatInteractivePane2 = _interopRequireDefault(_breathChatInteractivePane);

var React = require("react");

var MessageContainer = require("./breath-chat-message-container");

var BreathChatCommunicatePane = (function (_React$Component) {
	_inherits(BreathChatCommunicatePane, _React$Component);

	function BreathChatCommunicatePane() {
		_classCallCheck(this, BreathChatCommunicatePane);

		_get(Object.getPrototypeOf(BreathChatCommunicatePane.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChatCommunicatePane, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			console.log("wanglei is cool and houna is cute");
		}
	}, {
		key: "onMouseMovehandler",
		value: function onMouseMovehandler(evt) {}
	}, {
		key: "onMouseDownHandler",
		value: function onMouseDownHandler(evt) {
			// console.log( "wanglei is cool" );

			console.log(evt.currentTarget);

			if (window.captureEvents) {
				window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
			}
		}
	}, {
		key: "onMouseUpHandler",
		value: function onMouseUpHandler(evt) {
			// console.log( "houna is cute" );

			if (window.releaseCapture) {
				window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP);
			}
			// evt.currentTarget.releaseCapture();
			//
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "breath-chat-communicatePane"
					/*onMouseMove = {this.onMouseMovehandler.bind(this) } 
     onMouseDown = {this.onMouseDownHandler.bind(this) }
     onMouseUp = {this.onMouseUpHandler.bind(this) }*/ },
				React.createElement(
					"div",
					{ className: "headerBar" },
					React.createElement(
						"span",
						null,
						"wanglei is cool and houna is cute"
					)
				),
				React.createElement(
					"div",
					{ className: "messageArea" },
					React.createElement(MessageContainer, null)
				),
				React.createElement(
					"div",
					{ className: "interactiveArea" },
					React.createElement(_breathChatInteractivePane2["default"], null)
				)
			);
		}
	}]);

	return BreathChatCommunicatePane;
})(React.Component);

exports["default"] = BreathChatCommunicatePane;
module.exports = exports["default"];