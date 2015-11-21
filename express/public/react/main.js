let React = require("react");
let ReactDOM = require( "react-dom" );

// let MessageContainer = require("./components/breath-chat-message-container");

// let Thumbnail = require("./components/breath-chat-thumbnail");

// let Textarea = require("./components/breath-chat-textarea");

// let CommunicatePane  = require("./components/breath-chat-communicatePane");

// let MovableMenu = require("./components/breath-chat-movableMenu");

let InteractivePane = require('./components/breath-chat-interactivePane');

// let GesturePane = require("./components/breath-chat-gesturePane");

// let Icon = require("./components/breath-chat-icon");

ReactDOM.render(
	// <Icon width = "20px" height="20px" icon = "images/icon/iconfont-arrow02add.png" />,
	<InteractivePane />,
	document.getElementById( "breath-chat" )
);