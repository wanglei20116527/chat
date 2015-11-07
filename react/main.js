let React = require("react");
let ReactDOM = require( "react-dom" );

let BreathChatMessageRight = require("./components/breath-chat-message-right");
let BreathChatMessageLeft = require("./components/breath-chat-message-left");

ReactDOM.render(
	<BreathChatMessageLeft /*key = "wanglei"*/ content = "主人，在你的呵护和陪伴下" />,
	document.getElementById( "breath-chat" )
);