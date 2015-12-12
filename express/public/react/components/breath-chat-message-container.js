import React from "react";
import UnderScore from "underscore";

// import components
import Label from "./breath-chat-label";
import Thumbnail from "./breath-chat-thumbnail";
import LeftMessage from "./breath-chat-message-left";
import RightMessage from "./breath-chat-message-right";

function createMessageItem( currentUser, activeContact, message ){
	let thumbnailItem = null;
	let thumbnailProps = {
		url: ""
	};
	if( currentUser.id == message.senderId ){
		thumbnailProps.url = currentUser.thumbnail;
	}else{
		thumbnailProps.url = activeContact.thumbnail;
	}
	thumbnailItem = <Thumbnail {...thumbnailProps} />;	

	let messageItem = null;
	let messageProps = {
		content: message.content
	};
	if( currentUser.id == message.senderId ){
		messageItem = <RightMessage { ...messageProps } />;
	}else{
		messageItem = <LeftMessage   { ...messageProps } />;
	}

	let messageContainerItem = null;
	let messageContainerProps = {
		key: message.id,
		className: "breath-chat-message-container"
	};
	if( currentUser.id == message.senderId ){
		messageContainerProps.className += " right";	
	}else{
		messageContainerProps.className += " left";
	}
	messageContainerItem = 	<li { ...messageContainerProps }>
						{ thumbnailItem }
						{ messageItem }
					</li>
	
	return messageContainerItem;
}


class BreathChatMessageContainer extends React.Component {
	render(){
		// let messagesWrappers = this.props.messages.map(function( message ){
		// 	let messageWrapper;
		// 	let props;

		// 	switch( message.type ){
		// 		case Constants.MessageType.TIMESTAMP:
		// 			props = {
		// 				// width: message.width,
		// 				content: message.content,
		// 				align: message.align
		// 			};
		// 			messageWrapper =  <li  className = "breath-chat-date-message-container" key = { message.id }>
		// 			 			<Label {...props}  /> 
		// 			 		        </li>;
		// 			break;

		let messagesWrappers = UnderScore.map(this.props.messages.datas, function( message ){
			let currentUser     = this.props.currentUser;
			let activeContact  = this.props.activeContact;

			return createMessageItem( currentUser, activeContact, message );
		}.bind(this));

		return (
			<div ref = "outerContainer" className = "breath-chat-messages-container" >
				<ul className = "breath-chat-messages-inner-container" >
					{messagesWrappers}
				</ul>
			</div>
		);
	}
}

BreathChatMessageContainer.defaultProps = {
	messages:{}
};

export default BreathChatMessageContainer;
