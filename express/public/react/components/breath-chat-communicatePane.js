// import components
import InteractivePane from "./breath-chat-interactivePane";
import MessageContainer from "./breath-chat-message-container";

// import constants
import Constants from "../constants/breath-chat-constants";

// import stores
import ContactStore from "../stores/breath-chat-contact-store";
import MessageStore from "../stores/breath-chat-message-store";

let React = require("react");
let ReactDOM = require( "react-dom" );
let Underscore = require( "underscore" );

let EventConstants = Constants.Event;

class BreathChatCommunicatePane extends React.Component{
	constructor( ...args ){
		super( ...args );

		let currentUser     = ContactStore.getCurrentUser() ;
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

		this.scrollMessageAreaToBottom();
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
		this.scrollMessageAreaToBottom();
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

	scrollMessageAreaToBottom(){
		let messageAreaNode = ReactDOM.findDOMNode( this.refs.messageArea );

		messageAreaNode.scrollTop = messageAreaNode.scrollHeight;
	}

	render(){
		let activeContactName = this.state.activeContact.nickname;

		let messageAreaProps = {
			currentUser: this.state.currentUser,
			activeContact: this.state.activeContact,
			messages: this.state.messages
		};
		
		return (
			<div className = "breath-chat-communicatePane">
				<div className = "headerBar">
					<span>{activeContactName}</span>
				</div>

				<div className = "messageArea" ref = "messageArea">
					<MessageContainer ref = "messageContainer " {...messageAreaProps} />
				</div>

				<div className = "interactiveArea">
					<InteractivePane />
				</div>
			</div>
		);
	}
}

export default BreathChatCommunicatePane;