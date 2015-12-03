"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// let MessageContainer = require("./components/breath-chat-message-container");

// // let Thumbnail = require("./components/breath-chat-thumbnail");

// // let Textarea = require("./components/breath-chat-textarea");

// let CommunicatePane  = require("./components/breath-chat-communicatePane");

// // let MovableMenu = require("./components/breath-chat-movableMenu");

// let InteractivePane = require('./components/breath-chat-interactivePane');

// // let GesturePane = require("./components/breath-chat-gesturePane");

// // let Icon = require("./components/breath-chat-icon");

var _componentsBreathChat = require("./components/breath-chat");

var _componentsBreathChat2 = _interopRequireDefault(_componentsBreathChat);

var _componentsBreathChatUserList = require("./components/breath-chat-user-list");

var _componentsBreathChatUserList2 = _interopRequireDefault(_componentsBreathChatUserList);

var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
// <BreathChat />,
React.createElement(_componentsBreathChatUserList2["default"], null), document.getElementById("breath-chat"));