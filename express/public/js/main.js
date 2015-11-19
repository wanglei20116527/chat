"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

// let MessageContainer = require("./components/breath-chat-message-container");

// let Thumbnail = require("./components/breath-chat-thumbnail");

// let Textarea = require("./components/breath-chat-textarea");

var CommunicatePane = require("./components/breath-chat-communicatePane");

var MovableMenu = require("./components/breath-chat-movableMenu");

ReactDOM.render(React.createElement(MovableMenu, null), document.getElementById("breath-chat"));