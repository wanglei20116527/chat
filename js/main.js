"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

var BreathChatMessageRight = require("./components/breath-chat-message-right");
var BreathChatMessageLeft = require("./components/breath-chat-message-left");

ReactDOM.render(React.createElement(BreathChatMessageLeft, /*key = "wanglei"*/{ content: "主人，在你的呵护和陪伴下" }), document.getElementById("breath-chat"));