// import components
import InteractivePane from "./breath-chat-interactivePane";
import MessageContainer from "./breath-chat-message-container";

// import constants
import Constants from "../constants/breath-chat-constants";

// import stores
import UserStore from "../stores/breath-chat-user-store";
import MessageStore from "../stores/breath-chat-message-store";

let React = require("react");
let Underscore = require( "underscore" );

let EventConstants = Constants.Event;

class BreathChatCommunicatePane extends React.Component{
	constructor( ...args ){
		super( ...args );

		let currentUser     = UserStore.getCurrentUser()  ;
		let activeContact = UserStore.getActiveContact();
		let messages = MessageStore.getMessagesByContactId( activeContact.id );

		this.state = {
			currentUser: currentUser,
			activeContact: activeContact,
			messages: messages
		};
	}

	componentDidMount(){
		let events = [
			{
				name: EventConstants.ACTIVE_CONTACT_CHANGE,
				callback: this.updateActiveContact.bind( this )
			}
		];

		Underscore.map( events, function( evt ){
			MessageStore.on( evt.name, evt.callback );
		});
	}

	componentWillUnmount(){
		let events = [
			EventConstants.ACTIVE_CONTACT_CHANGE
		];

		Underscore.map( events, function( evt ){
			UserStore.removeListener( evt );		
		});
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
		let activeContact = UserStore.getActiveContact();
		let messages  = MessageStore.getMessagesByContactId( activeContact.id );

		this.setState({
			activeContact: activeContact,
			messages: messages
		});
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

				<div className = "messageArea">
					<MessageContainer {...messageAreaProps} />
				</div>

				<div className = "interactiveArea">
					<InteractivePane />
				</div>
			</div>
		);
	}
}

export default BreathChatCommunicatePane;