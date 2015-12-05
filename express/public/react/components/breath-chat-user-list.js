// import components
import Thumbnail from "./breath-chat-thumbnail";
import List from "./breath-chat-list";
import ListItem from "./breath-chat-list-item";
import Label from "./breath-chat-label";

import Dispatcher from "../dispatchers/breath-chat-dispatcher";
import Constants from "../constants/breath-chat-constants";

let React = require( 'react' );
let UnderScore = require( 'underscore' );



let ActionConstants =Constants.Action;

function changeActiveUser(  id){
	Dispatcher.dispatch({
		type: ActionConstants.ACTIVE_CONTACT_CHANGE,
		data: {
			id: id
		}
	});
}

class BreathChatUserList extends React.Component {
	render(){
		let userListItems = UnderScore.map(this.props.users, function( user ){
			let listItemProps = {
				className: "user-list-item",
				onClickHandler: function(){
					changeActiveUser( user.id );
				}
			};
			if( user.id == this.props.activeUser.id ){
				listItemProps.className += " active"; 
			}

			let thumbnailProps = {
				className: "user-thumbnail",
				url: user.thumbnail
			};

			let nicknameLabelProps = {
				className: "user-nickname",
				content: user.nickname
			};

			// let numberCircleLabelProps = {
			// 	className: "number-message-to-read circle",
			// 	content: user.numberOfMessageUnread
			// };

			return (
				<ListItem key = { user.id } {...listItemProps}>
					<Thumbnail {...thumbnailProps}/>
					<Label {...nicknameLabelProps}/>
				</ListItem>
			);

		}.bind(this) );

		return (
			<List className = "breath-chat-user-list">
				{userListItems}
			</List>
		);
	}
}

BreathChatUserList.defaultProps = {
	users: [
		// {
		// 	id: "wanglei",
		// 	thumbnail: "images/cd3ed493551d79846b19dc2a50de3cad.png",
		// 	nickname: "breath",
		// 	numberOfMessageUnread: "10+"
		// }	
	]
};

export default BreathChatUserList;