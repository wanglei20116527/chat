"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

var IScroll = require("iscroll");

var Constants = require("../constants/breath-chat-constants");
var Label = require("./breath-chat-label");
var Thumbnail = require("./breath-chat-thumbnail");
var LeftMessage = require("./breath-chat-message-left");
var RightMessage = require("./breath-chat-message-right");

module.exports = React.createClass({
	displayName: "exports",

	getDefaultProps: function getDefaultProps() {
		return {
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
	},

	componentDidMount: function componentDidMount() {
		new IScroll(ReactDOM.findDOMNode(this.refs.outerContainer), {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			fadeScrollbars: true
		});
	},

	render: function render() {
		var messagesWrappers = this.props.messages.map(function (message) {
			var messageWrapper = undefined;
			var props = undefined;

			switch (message.type) {
				case Constants.MessageType.TIMESTAMP:
					props = {
						width: message.width,
						content: message.content,
						align: message.align
					};
					messageWrapper = React.createElement(
						"li",
						{ key: message.id },
						" ",
						React.createElement(Label, props),
						" "
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
							React.createElement(Thumbnail, null),
							React.createElement(LeftMessage, props)
						);
					} else {
						messageWrapper = React.createElement(
							"li",
							{ className: "breath-chat-message-container right", key: message.id },
							React.createElement(Thumbnail, null),
							React.createElement(RightMessage, props)
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
			{ className: "breath-chat-messages-container", ref: "outerContainer" },
			React.createElement(
				"ul",
				{ className: "breath-chat-messages-inner-container" },
				messagesWrappers
			)
		);
	}
});