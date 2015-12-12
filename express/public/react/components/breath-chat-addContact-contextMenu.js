import React from "react";
import UnderScore from "underscore";

import ContextMenu from "./breath-chat-contextMenu";
import ContextMenuItem from "./breath-chat-contextMenuItem";

const _configuration = [
	{
		showText: true,
		showIcon: true,
		text: "add user",
		icon: {
			icon: "icon-user",
			fontSize: 20
		},
		onClickHandler: function( evt ){
			alert( 'wanglei is cool' );
		}
	},

	{
		showText: true,
		showIcon: true,
		text: "add group",
		icon: {
			icon: "icon-group",
			fontSize: 16
		},
		onClickHandler: function( evt ){
			alert( 'houna is cute' );
		}
	}
];

class BreathChatAddContactContextMenu extends React.Component{
	render(){
		let menuItems = UnderScore.map( _configuration, function( itemProp, index ){
			return <ContextMenuItem {...itemProp} key = {index} />;
		});

		let contextMenuProps = {
			tabindex: "-1", // hack to have the ability to focus and blur
			onBlur: function( evt ){
				console.log( '*********************' );
			}
		};

		return (
			<ContextMenu { ...this.props } { ...contextMenuProps }  ref = "contextMenu">
				{ menuItems }
			</ContextMenu>
		);
	}
}

BreathChatAddContactContextMenu.propTypes = {
	x: React.PropTypes.number.isRequired,
	y: React.PropTypes.number.isRequired
}

export default BreathChatAddContactContextMenu;