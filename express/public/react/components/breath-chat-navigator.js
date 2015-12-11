import React from "react";
import UnderScore from "underscore";

import { Link } from "react-router";

import Thumbnail from "./breath-chat-thumbnail";

import UserStore from "../stores/breath-chat-user-store";

class BreathChatNavigator extends React.Component {
	render(){
		let userInfor = UserStore.getCurrentUser();
		let userThumbnailProps = {
			url: userInfor.thumbnail,
		};
		let userThumbnail = <Thumbnail {...userThumbnailProps} />;

		let navItemsInfors = [
			{
				prop: {
					className: "user-link",
					to: "",
				},
				content: userThumbnail
			},

			{
				prop: {
					className: "communicate-link icon-comment",
					to: "communicate",
				},
			},

			{
				prop: {
					className: "contact-link icon-user",
					to: "",
				}
			},

			{
				prop: {
					className: "group-link icon-group",
					to: "",
				}
			}
		];

		let navItems = UnderScore.map( navItemsInfors, function( infor, index ){
			return ( 
				<li key = {index} > 
					<Link {...infor.prop}> { infor.content || "" } </Link> 
				</li> 
			);
		});

		return (
			<nav className = "breath-chat-navigator">
				{navItems}
			</nav>
		);
	}
}

export default BreathChatNavigator;


