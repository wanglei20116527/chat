"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

// import components

var _breathChatInteractivePane = require("./breath-chat-interactivePane");

var _breathChatInteractivePane2 = _interopRequireDefault(_breathChatInteractivePane);

var _breathChatMessageContainer = require("./breath-chat-message-container");

var _breathChatMessageContainer2 = _interopRequireDefault(_breathChatMessageContainer);

// import constants

var _constantsBreathChatConstants = require("../constants/breath-chat-constants");

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

// import stores

var _storesBreathChatUserStore = require("../stores/breath-chat-user-store");

var _storesBreathChatUserStore2 = _interopRequireDefault(_storesBreathChatUserStore);

var _storesBreathChatContactStore = require("../stores/breath-chat-contact-store");

var _storesBreathChatContactStore2 = _interopRequireDefault(_storesBreathChatContactStore);

var _storesBreathChatMessageStore = require("../stores/breath-chat-message-store");

var _storesBreathChatMessageStore2 = _interopRequireDefault(_storesBreathChatMessageStore);

var EventConstants = _constantsBreathChatConstants2["default"].Event;

var BreathChatMessagePane = (function (_React$Component) {
	_inherits(BreathChatMessagePane, _React$Component);

	function BreathChatMessagePane() {
		_classCallCheck(this, BreathChatMessagePane);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_get(Object.getPrototypeOf(BreathChatMessagePane.prototype), "constructor", this).apply(this, args);

		var currentUser = _storesBreathChatUserStore2["default"].getCurrentUser();
		var activeContact = _storesBreathChatContactStore2["default"].getActiveContact();
		var messages = _storesBreathChatMessageStore2["default"].getActiveContactMessages();

		this.state = {
			currentUser: currentUser,
			activeContact: activeContact,
			messages: messages
		};
	}

	_createClass(BreathChatMessagePane, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var events = [{
				store: _storesBreathChatMessageStore2["default"],
				name: EventConstants.CHANGE_ACTIVE_CONTACT,
				callback: this.updateActiveContact.bind(this)
			}, {
				store: _storesBreathChatMessageStore2["default"],
				name: EventConstants.MESSAGE_CAHNGE,
				callback: this.updateMessages.bind(this)
			}];

			_underscore2["default"].map(events, function (evt) {
				evt.store.on(evt.name, evt.callback);
			});

			this.scrollMessageContainerToBottom();
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			var events = [{
				store: _storesBreathChatContactStore2["default"],
				name: EventConstants.CHANGE_ACTIVE_CONTACT
			}, {
				store: _storesBreathChatMessageStore2["default"],
				name: EventConstants.MESSAGE_CAHNGE
			}];

			_underscore2["default"].map(events, function (evt) {
				evt.store.removeListener(evt.name);
			});
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.scrollMessageContainerToBottom();
		}
	}, {
		key: "onMouseMovehandler",
		value: function onMouseMovehandler(evt) {}
	}, {
		key: "onMouseDownHandler",
		value: function onMouseDownHandler(evt) {

			// if( window.captureEvents ){
			// 	window.captureEvents( Event.MOUSEMOVE | Event.MOUSEUP );
			// }
		}
	}, {
		key: "onMouseUpHandler",
		value: function onMouseUpHandler(evt) {
			// console.log( "houna is cute" );

			// if( window.releaseCapture ){
			// 	window.releaseEvents( Event.MOUSEMOVE | Event.MOUSEUP );
			// }
			// evt.currentTarget.releaseCapture();
			//
		}
	}, {
		key: "updateActiveContact",
		value: function updateActiveContact() {
			var activeContact = _storesBreathChatContactStore2["default"].getActiveContact();
			var messages = _storesBreathChatMessageStore2["default"].getActiveContactMessages();

			this.setState({
				activeContact: activeContact,
				messages: messages
			});
		}
	}, {
		key: "updateMessages",
		value: function updateMessages() {
			this.setState({
				messages: _storesBreathChatMessageStore2["default"].getActiveContactMessages()
			});
		}
	}, {
		key: "scrollMessageContainerToBottom",
		value: function scrollMessageContainerToBottom() {
			var messageContainerWrapperNode = _reactDom2["default"].findDOMNode(this.refs.messageContainerWrapper);

			messageContainerWrapperNode.scrollTop = messageContainerWrapperNode.scrollHeight;
		}
	}, {
		key: "render",
		value: function render() {
			var activeContactName = this.state.activeContact.nickname;

			var messageAreaProps = {
				currentUser: this.state.currentUser,
				activeContact: this.state.activeContact,
				messages: this.state.messages
			};

			return _react2["default"].createElement(
				"div",
				{ className: "breath-chat-messagePane" },
				_react2["default"].createElement(
					"div",
					{ className: "headerBar" },
					_react2["default"].createElement(
						"span",
						null,
						activeContactName
					)
				),
				_react2["default"].createElement(
					"div",
					{ className: "messageArea" },
					_react2["default"].createElement(
						"div",
						{ className: "messageContainerWrapper", ref: "messageContainerWrapper" },
						_react2["default"].createElement(_breathChatMessageContainer2["default"], _extends({ ref: "messageContainer " }, messageAreaProps))
					)
				),
				_react2["default"].createElement(
					"div",
					{ className: "interactiveArea" },
					_react2["default"].createElement(_breathChatInteractivePane2["default"], null)
				)
			);
		}
	}]);

	return BreathChatMessagePane;
})(_react2["default"].Component);

exports["default"] = BreathChatMessagePane;
module.exports = exports["default"];