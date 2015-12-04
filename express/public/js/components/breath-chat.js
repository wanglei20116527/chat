"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _breathChatToolPane = require("./breath-chat-toolPane");

var _breathChatToolPane2 = _interopRequireDefault(_breathChatToolPane);

var _breathChatUserListPane = require("./breath-chat-user-list-pane");

var _breathChatUserListPane2 = _interopRequireDefault(_breathChatUserListPane);

var _breathChatCommunicatePane = require("./breath-chat-communicatePane");

var _breathChatCommunicatePane2 = _interopRequireDefault(_breathChatCommunicatePane);

var React = require("react");
var ReactDOM = require("react-dom");

var BreathChat = (function (_React$Component) {
	_inherits(BreathChat, _React$Component);

	function BreathChat() {
		_classCallCheck(this, BreathChat);

		_get(Object.getPrototypeOf(BreathChat.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChat, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var chatNode = ReactDOM.findDOMNode(this.refs.chat);
			var toolPaneNode = ReactDOM.findDOMNode(this.refs.toolPane);
			var userListPaneNode = ReactDOM.findDOMNode(this.refs.userListPane);
			var communicatePaneNode = ReactDOM.findDOMNode(this.refs.communicatePane);

			var communicatePaneStyle = document.defaultView.getComputedStyle(communicatePaneNode, null);

			chatNode.style.height = communicatePaneStyle.height;
			toolPaneNode.style.height = communicatePaneStyle.height;
			userListPaneNode.style.height = communicatePaneStyle.height;
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "breath-chat", ref: "chat" },
				React.createElement(_breathChatToolPane2["default"], { ref: "toolPane" }),
				React.createElement(_breathChatUserListPane2["default"], { ref: "userListPane" }),
				React.createElement(_breathChatCommunicatePane2["default"], { ref: "communicatePane" })
			);
		}
	}]);

	return BreathChat;
})(React.Component);

;

exports["default"] = BreathChat;
module.exports = exports["default"];