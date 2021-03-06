"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

// import components

var _breathChatNavigator = require("./breath-chat-navigator");

var _breathChatNavigator2 = _interopRequireDefault(_breathChatNavigator);

var _breathChatToolPane = require("./breath-chat-toolPane");

var _breathChatToolPane2 = _interopRequireDefault(_breathChatToolPane);

var _breathChatContactPane = require("./breath-chat-contact-pane");

var _breathChatContactPane2 = _interopRequireDefault(_breathChatContactPane);

var _breathChatCommunicatePane = require("./breath-chat-communicatePane");

var _breathChatCommunicatePane2 = _interopRequireDefault(_breathChatCommunicatePane);

// import  layers

var _layersBreathChatDialogLayer = require("../layers/breath-chat-dialogLayer");

var _layersBreathChatDialogLayer2 = _interopRequireDefault(_layersBreathChatDialogLayer);

var _layersBreathChatContextMenuLayer = require("../layers/breath-chat-contextMenuLayer");

var _layersBreathChatContextMenuLayer2 = _interopRequireDefault(_layersBreathChatContextMenuLayer);

var BreathChat = (function (_React$Component) {
	_inherits(BreathChat, _React$Component);

	function BreathChat() {
		_classCallCheck(this, BreathChat);

		_get(Object.getPrototypeOf(BreathChat.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChat, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "breath-chat" },
				_react2["default"].createElement(
					"div",
					{ className: "main-layer breath-chat-layer" },
					_react2["default"].createElement(
						"div",
						{ className: "side-bar" },
						_react2["default"].createElement(_breathChatNavigator2["default"], null),
						_react2["default"].createElement(_breathChatToolPane2["default"], null)
					),
					_react2["default"].createElement(
						"div",
						{ className: "content-area" },
						this.props.children
					)
				),
				_react2["default"].createElement(_layersBreathChatContextMenuLayer2["default"], null),
				_react2["default"].createElement(_layersBreathChatDialogLayer2["default"], null)
			);
		}
	}]);

	return BreathChat;
})(_react2["default"].Component);

;

exports["default"] = BreathChat;
module.exports = exports["default"];