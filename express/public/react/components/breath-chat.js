import React from "react";

// import components
import Navigator from "./breath-chat-navigator";
import TooPane from "./breath-chat-toolPane";
import ContactPane from "./breath-chat-contact-pane";
import CommunicatePane from "./breath-chat-communicatePane";

// import  layers
import DialogLayer from  "../layers/breath-chat-dialogLayer";
import ContextMenuLayer from "../layers/breath-chat-contextMenuLayer";

class BreathChat extends React.Component{
	render(){
		return (
			<div className = "breath-chat">
				<div className = "main-layer breath-chat-layer">
					<div className = "side-bar" >
						<Navigator />
						<TooPane />
					</div>

					<div className = "content-area">
						{this.props.children}
					</div>
				</div>

				<ContextMenuLayer />
				<DialogLayer />
			</div>
		)
	}
};

export default BreathChat;
