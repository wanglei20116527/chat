let React = require("react");
let ReactDOM = require( "react-dom" );

// let MessageContainer = require("./components/breath-chat-message-container");

// let Thumbnail = require("./components/breath-chat-thumbnail");

// let Textarea = require("./components/breath-chat-textarea");

let CommunicatePane  = require("./components/breath-chat-communicatePane");

let MovableMenu = require("./components/breath-chat-movableMenu");


ReactDOM.render(
	<MovableMenu />,
	document.getElementById( "breath-chat" )
);