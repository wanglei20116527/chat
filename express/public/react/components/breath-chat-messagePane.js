import React from "react";
import ReactDOM from "react-dom";
import Underscore from "underscore";

// import components
import InteractivePane from "./breath-chat-interactivePane";
import MessageContainer from "./breath-chat-message-container";

// import constants
import Constants from "../constants/breath-chat-constants";

// import stores
import UserStore from "../stores/breath-chat-user-store";
import ContactStore from "../stores/breath-chat-contact-store";
import MessageStore from "../stores/breath-chat-message-store";

const EventConstants = Constants.Event;

class BreathChatMessagePane extends React.Component{
	constructor( ...args ){
		super( ...args );

		let currentUser     = UserStore.getCurrentUser() ;
		let activeContact = ContactStore.getActiveContact();
		let messages = MessageStore.getActiveContactMessages();

		this.state = {
			currentUser: currentUser,
			activeContact: activeContact,
			messages: messages
		};
	}

	componentDidMount(){
		let events = [
			{
				store: MessageStore,
				name: EventConstants.CHANGE_ACTIVE_CONTACT,
				callback: this.updateActiveContact.bind( this )
			},

			{
				store: MessageStore,
				name: EventConstants.MESSAGE_CAHNGE ,
				callback: this.updateMessages.bind( this )
			}
		];

		Underscore.map( events, function( evt ){
			evt.store.on( evt.name, evt.callback );
		});

		this.scrollMessageContainerToBottom();
	}

	componentWillUnmount(){
		let events = [
			{
				store: ContactStore,
				name: EventConstants.CHANGE_ACTIVE_CONTACT
			},

			{
				store: MessageStore,
				name: EventConstants.MESSAGE_CAHNGE 
			}
		];

		Underscore.map( events, function( evt ){
			evt.store.removeListener( evt.name );		
		});
	}

	componentDidUpdate(){
		this.scrollMessageContainerToBottom();
	}

	onMouseMovehandler( evt ){
	}

	onMouseDownHandler( evt ){

		// if( window.captureEvents ){
		// 	window.captureEvents( Event.MOUSEMOVE | Event.MOUSEUP );
		// }
	}

	onMouseUpHandler( evt ){
		// console.log( "houna is cute" );

		// if( window.releaseCapture ){
		// 	window.releaseEvents( Event.MOUSEMOVE | Event.MOUSEUP );
		// }
		// evt.currentTarget.releaseCapture();
		// 
	}

	updateActiveContact(){
		let activeContact = ContactStore.getActiveContact();
		let messages  = MessageStore.getActiveContactMessages();

		this.setState({
			activeContact: activeContact,
			messages: messages
		});
	}

	updateMessages(){
		this.setState({
			messages: MessageStore.getActiveContactMessages()
		});
	}

	scrollMessageContainerToBottom(){
		let messageContainerWrapperNode = ReactDOM.findDOMNode( this.refs.messageContainerWrapper );

		messageContainerWrapperNode.scrollTop = messageContainerWrapperNode.scrollHeight;
	}

	render(){
		let activeContactName = this.state.activeContact.nickname;

		let messageAreaProps = {
			currentUser: this.state.currentUser,
			activeContact: this.state.activeContact,
			messages: this.state.messages
		};
		
		return (
			<div className = "breath-chat-messagePane">
				<div className = "headerBar">
					<span>{activeContactName}</span>
				</div>

				<div className = "messageArea">
					<div className = "messageContainerWrapper" ref = "messageContainerWrapper">
						<MessageContainer ref = "messageContainer " {...messageAreaProps} />
					</div>
				</div>

				<div className = "interactiveArea">
					<InteractivePane />
				</div>
			</div>
		);
	}
}

export default BreathChatMessagePane;