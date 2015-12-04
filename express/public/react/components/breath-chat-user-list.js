let React = require( 'react' );
let UnderScore = require( 'underscore' );

import Thumbnail from "./breath-chat-thumbnail";
import List from "./breath-chat-list";
import ListItem from "./breath-chat-list-item";
import Label from "./breath-chat-label";

class BreathChatUserList extends React.Component{
	render(){
		let userListItems = UnderScore.map(this.props.userInfors, function( userInfor ){
			let listItemProps = {
				className: "user-list-item"
			};

			let thumbnailProps = {
				className: "user-thumbnail",
				url: userInfor.Thumbnail
			};

			let nicknameLabelProps = {
				className: "user-nickname",
				content: userInfor.nickname
			};

			let numberCircleLabelProps = {
				className: "number-message-to-read circle",
				content: userInfor.numberOfMessageUnread
			};

			return (
				<ListItem key = { userInfor.id } {...listItemProps}>
					<Thumbnail {...thumbnailProps}/>
					<Label {...nicknameLabelProps}/>
					<Label {...numberCircleLabelProps}/>
				</ListItem>
			);
		});

		return (
			<List className = "breath-chat-user-list">
				{userListItems}
			</List>
		);
	}
}

BreathChatUserList.defaultProps = {
	userInfors: [
		{
			id: "wanglei",
			thumbnail: "images/cd3ed493551d79846b19dc2a50de3cad.png",
			nickname: "breath",
			numberOfMessageUnread: "10+"
		},

		{
			id: "wanglei1",
			thumbnail: "images/cd3ed493551d79846b19dc2a50de3cad.png",
			nickname: "breath",
			numberOfMessageUnread: "10+"
		},

		{
			id: "wanglei2",
			thumbnail: "images/cd3ed493551d79846b19dc2a50de3cad.png",
			nickname: "breath",
			numberOfMessageUnread: "10+"
		},

		{
			id: "wanglei3",
			thumbnail: "images/cd3ed493551d79846b19dc2a50de3cad.png",
			nickname: "breath",
			numberOfMessageUnread: "10+"
		},

		{
			id: "wanglei4",
			thumbnail: "images/cd3ed493551d79846b19dc2a50de3cad.png",
			nickname: "breath",
			numberOfMessageUnread: "10+"
		},

		{
			id: "wanglei5",
			thumbnail: "images/cd3ed493551d79846b19dc2a50de3cad.png",
			nickname: "breath",
			numberOfMessageUnread: "10+"
		}

	]
};

export default BreathChatUserList;