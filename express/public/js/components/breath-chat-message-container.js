// import components
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _breathChatLabel = require("./breath-chat-label");

var _breathChatLabel2 = _interopRequireDefault(_breathChatLabel);

var _breathChatThumbnail = require("./breath-chat-thumbnail");

var _breathChatThumbnail2 = _interopRequireDefault(_breathChatThumbnail);

var _breathChatMessageLeft = require("./breath-chat-message-left");

var _breathChatMessageLeft2 = _interopRequireDefault(_breathChatMessageLeft);

var _breathChatMessageRight = require("./breath-chat-message-right");

var _breathChatMessageRight2 = _interopRequireDefault(_breathChatMessageRight);

var React = require("react");
var ReactDOM = require("react-dom");
var UnderScore = require("underscore");

function createMessageItem(currentUser, activeContact, message) {
	var thumbnailItem = null;
	var thumbnailProps = {
		url: ""
	};
	if (currentUser.id == message.senderId) {
		thumbnailProps.url = currentUser.thumbnail;
	} else {
		thumbnailProps.url = activeContact.thumbnail;
	}
	thumbnailItem = React.createElement(_breathChatThumbnail2["default"], thumbnailProps);

	var messageItem = null;
	var messageProps = {
		content: message.content
	};
	if (currentUser.id == message.senderId) {
		messageItem = React.createElement(_breathChatMessageRight2["default"], messageProps);
	} else {
		messageItem = React.createElement(_breathChatMessageLeft2["default"], messageProps);
	}

	var messageContainerItem = null;
	var messageContainerProps = {
		key: message.id,
		className: "breath-chat-message-container"
	};
	if (currentUser.id == message.senderId) {
		messageContainerProps.className += " right";
	} else {
		messageContainerProps.className += " left";
	}
	messageContainerItem = React.createElement(
		"li",
		messageContainerProps,
		thumbnailItem,
		messageItem
	);

	return messageContainerItem;
}

var BreathChatMessageContainer = (function (_React$Component) {
	_inherits(BreathChatMessageContainer, _React$Component);

	function BreathChatMessageContainer() {
		_classCallCheck(this, BreathChatMessageContainer);

		_get(Object.getPrototypeOf(BreathChatMessageContainer.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChatMessageContainer, [{
		key: "render",
		value: function render() {
			// let messagesWrappers = this.props.messages.map(function( message ){
			// 	let messageWrapper;
			// 	let props;

			// 	switch( message.type ){
			// 		case Constants.MessageType.TIMESTAMP:
			// 			props = {
			// 				// width: message.width,
			// 				content: message.content,
			// 				align: message.align
			// 			};
			// 			messageWrapper =  <li  className = "breath-chat-date-message-container" key = { message.id }>
			// 			 			<Label {...props}  />
			// 			 		        </li>;
			// 			break;

			var messagesWrappers = UnderScore.map(this.props.messages.datas, (function (message) {
				var currentUser = this.props.currentUser;
				var activeContact = this.props.activeContact;

				return createMessageItem(currentUser, activeContact, message);
			}).bind(this));

			return React.createElement(
				"div",
				{ ref: "outerContainer", className: "breath-chat-messages-container" },
				React.createElement(
					"ul",
					{ className: "breath-chat-messages-inner-container" },
					messagesWrappers
				)
			);
		}
	}]);

	return BreathChatMessageContainer;
})(React.Component);

BreathChatMessageContainer.defaultProps = {
	messages: {}
};

exports["default"] = BreathChatMessageContainer;
module.exports = exports["default"];