import React from "react";
import UnderScore from "underscore";

// import components
import Thumbnail from "./breath-chat-thumbnail";
import List from "./breath-chat-list";
import ListItem from "./breath-chat-list-item";
import Label from "./breath-chat-label";

import Constants from "../constants/breath-chat-constants";
import ContactAction from "../actions/breath-chat-contact-action";

const ActionConstants =Constants.Action;
const ContactType = Constants.Contact.Type;

class BreathChatContactList extends React.Component {
	render(){
		let userListItems = UnderScore.map( this.props.contacts.users, function(  contact ){
			let listItemProps = {
				className: "contact-list-item",
				onClickHandler: function(){
					ContactAction.changeActiveContact( contact.id, ContactType.USER );
				}
			};

			if( contact.id == this.props.activeContact.id ){
				listItemProps.className += " active"; 
			}

			let thumbnailProps = {
				className: "contact-thumbnail",
				url: contact.thumbnail
			};

			let nicknameLabelProps = {
				className: "contact-nickname",
				content: contact.nickname
			};

			// let numberCircleLabelProps = {
			// 	className: "number-message-to-read circle",
			// 	content: user.numberOfMessageUnread
			// };

			return (
				<ListItem key = { contact.id } {...listItemProps}>
					<Thumbnail {...thumbnailProps}/>
					<Label {...nicknameLabelProps}/>
				</ListItem>
			);
		}.bind(this) );

		let contactListItems = [ ...userListItems ];

		return (
			<List className = "breath-chat-contact-list">
				{contactListItems}
			</List>
		);
	}
}

BreathChatContactList.defaultProps = {
};

export default BreathChatContactList;