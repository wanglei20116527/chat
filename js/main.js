"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

var MessageContainer = require("./components/breath-chat-message-container");

// let Thumbnail = require("./components/breath-chat-thumbnail");

ReactDOM.render(React.createElement(MessageContainer, null), document.getElementById("breath-chat"));