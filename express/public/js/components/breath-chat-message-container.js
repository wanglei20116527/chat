"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import components

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

var Constants = require("../constants/breath-chat-constants");
var BreathChatMessageContainer = (function (_React$Component) {
	_inherits(BreathChatMessageContainer, _React$Component);

	function BreathChatMessageContainer() {
		_classCallCheck(this, BreathChatMessageContainer);

		_get(Object.getPrototypeOf(BreathChatMessageContainer.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChatMessageContainer, [{
		key: "componentDidMount",
		value: function componentDidMount() {}
	}, {
		key: "render",
		value: function render() {
			var messagesWrappers = this.props.messages.map(function (message) {
				var messageWrapper = undefined;
				var props = undefined;

				switch (message.type) {
					case Constants.MessageType.TIMESTAMP:
						props = {
							// width: message.width,
							content: message.content,
							align: message.align
						};
						messageWrapper = React.createElement(
							"li",
							{ className: "breath-chat-date-message-container", key: message.id },
							React.createElement(_breathChatLabel2["default"], props)
						);
						break;

					case Constants.MessageType.MESSAGE:
						props = {
							content: message.content
						};
						if (message.align == Constants.MessageAlign.LEFT) {
							messageWrapper = React.createElement(
								"li",
								{ className: "breath-chat-message-container left", key: message.id },
								React.createElement(_breathChatThumbnail2["default"], null),
								React.createElement(_breathChatMessageLeft2["default"], props)
							);
						} else {
							messageWrapper = React.createElement(
								"li",
								{ className: "breath-chat-message-container right", key: message.id },
								React.createElement(_breathChatThumbnail2["default"], null),
								React.createElement(_breathChatMessageRight2["default"], props)
							);
						}
						break;

					default:
						throw new Error("message type " + message.type + " is not recognized");
				}

				return messageWrapper;
			});

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
	messages: [{
		id: Date.now(),
		type: Constants.MessageType.TIMESTAMP,
		content: "11月1日 20:12",
		align: "center",
		width: "100%"
	}, {
		id: Date.now() + 1,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气"
	}, {
		id: Date.now() + 2,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool "
	}, {
		id: Date.now() + 3,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 4,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 5,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 6,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 7,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 8,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 9,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 10,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 11,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 12,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 111,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 112,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 113,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 114,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 115,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 116,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 117,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 118,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 119,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 1110,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 1111,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 1112,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 121,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 222,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 223,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 224,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 225,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 226,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 227,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 228,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 229,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 2210,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 2211,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 2212,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 331,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 332,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 333,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 334,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 335,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 336,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 337,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 338,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 339,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 3310,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}, {
		id: Date.now() + 3311,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.LEFT,
		content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!"
	}, {
		id: Date.now() + 3312,
		type: Constants.MessageType.MESSAGE,
		align: Constants.MessageAlign.RIGHT,
		content: "wanglei is cool and kang is wanglei best and houna is cute"
	}]
};

exports["default"] = BreathChatMessageContainer;
module.exports = exports["default"];