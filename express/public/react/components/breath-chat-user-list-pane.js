// import components
import UserList from "./breath-chat-user-list";

// import constants
import Constants from "../constants/breath-chat-constants";

// import stores
import UserStore from "../stores/breath-chat-user-store";


// import { autobind } from "core-decorators";

let React = require( "react" );
let UnderScore = require( 'underscore' );

let EventConstants = Constants.Event;


class UserListPane extends React.Component{
	constructor( ...args ){
		super( ...args );

		this.state = {
			activeUser: UserStore.getActiveContact() ,
			users: UserStore.getCurrentUserContacts()
		};
	}

	componentDidMount(){
		let events = [
			{
				name: EventConstants.ACTIVE_CONTACT_CHANGE,
				callback: this.updateActiveUser.bind(this)
			}
		];

		UnderScore.map( events, function( evt ){
			UserStore.on( evt.name, evt.callback );
		});		
	}

	componentWillUnmount(){
		let events = [
			EventConstants.ACTIVE_CONTACT_CHANGE
		];

		UnderScore.map( events, function( evt ){
			UserStore.removeListener(  evt );	
		});
	}

	// @autobind
	updateActiveUser(){
		this.setState({
			activeUser: UserStore.getActiveContact()
		});
	}

	render(){
		let className = "breath-chat-userListPane";

		let userListProps = {
			activeUser: this.state.activeUser,
			users: this.state.users
		};

		return (
			<div className = { className } ref = "userListPane">
				<div className = "headerBar">
				</div>

				<div className = "userListArea">
					<UserList {...userListProps}/>
				</div>
			</div>
		);
	}
}

export default UserListPane;