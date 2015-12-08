// import components
import ContactList from "./breath-chat-contact-list";

// import constants
import Constants from "../constants/breath-chat-constants";

// import stores
import ContactStore from "../stores/breath-chat-contact-store";

let React = require( "react" );
let UnderScore = require( 'underscore' );

let EventConstants = Constants.Event;

class BreathChatContactPane extends React.Component {
	constructor( ...args ){
		super( ...args );

		this.state = {
			activeContact: ContactStore.getActiveContact() ,
			contacts: ContactStore.getContacts()
		};
	}

	componentDidMount(){
		let events = [
			{
				name: EventConstants.CHANGE_ACTIVE_CONTACT,
				callback: this.updateActiveContact.bind(this)
			}
		];

		UnderScore.map( events, function( evt ){
			ContactStore.on( evt.name, evt.callback );
		});		
	}

	componentWillUnmount(){
		let events = [
			EventConstants.CHANGE_ACTIVE_CONTACT
		];

		UnderScore.map( events, function( evt ){
			ContactStore.removeListener(  evt );	
		});
	}

	// @autobind
	updateActiveContact(){
		this.setState({
			activeContact: ContactStore.getActiveContact()
		});
	}

	render(){
		let className = "breath-chat-contactPane";

		let contactListProps = {
			activeContact: this.state.activeContact,
			contacts: this.state.contacts
		};

		return (
			<div className = { className }>
				<div className = "headerBar">
				</div>

				<div className = "contactListArea">
					<ContactList {...contactListProps}/>
				</div>
			</div>
		);
	}
}

export default BreathChatContactPane;