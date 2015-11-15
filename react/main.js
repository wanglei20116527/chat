let React = require("react");
let ReactDOM = require( "react-dom" );

let MessageContainer = require("./components/breath-chat-message-container");

// let Thumbnail = require("./components/breath-chat-thumbnail");


ReactDOM.render(
	<MessageContainer/>,
	document.getElementById( "breath-chat" )
);