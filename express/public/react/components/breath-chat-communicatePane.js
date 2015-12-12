import React from "react";

// import components
import ContactPane from "./breath-chat-contact-pane";
import MessagePane from "./breath-chat-messagePane";

import UserStore from "../stores/breath-chat-user-store";

class BreathChatCommunicatePane extends React.Component{
	render(){
		return (
			<div className = "breath-chat-communicatePane">
				<ContactPane />
				<div className = "message-pane-wrapper">
					<MessagePane />
				</div>
			</div>
		);
	}
}

export default BreathChatCommunicatePane;