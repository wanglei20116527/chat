import React from "react";
import UnderScore from "underscore";

// import components
import ContextMenu from "./breath-chat-contextMenu";
import ContextMenuItem from "./breath-chat-contextMenuItem";

import DialogAction from '../actions/breath-chat-dialogAction';
import ContextMenuAction from '../actions/breath-chat-contextMenuAction';

import Constants from '../constants/breath-chat-constants';

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
			DialogAction.showDialog( Constants.Dialog.ADD_USER_DIALOG,{
				x: evt.pageX ,
				y: evt.pageY
			});
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
			console.log( 'houna is cute' );
		}
	}
];

class BreathChatAddContactContextMenu extends React.Component{
	hideContextMenu(){
		ContextMenuAction.showContextMenu( Constants.ContextMenu.NONE, null );
	}

	render(){
		let menuItems = UnderScore.map( _configuration, function( itemProp, index ){
			return <ContextMenuItem {...itemProp} key = {index} />;
		});

		let contentMenuProps = {
			x: this.props.x,
			y: this.props.y,

			autoFocus: true,

			onBlurHandler: function( evt ){
				this.hideContextMenu();
			}.bind(this),

			onClickHandler: function( evt ){
				this.hideContextMenu();
			}.bind( this )
		};

		return (
			<ContextMenu { ...this.props } { ...contentMenuProps } ref = "contextMenu">
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