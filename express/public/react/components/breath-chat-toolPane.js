import React from "react";
import UnderScore from "underscore";

import Icon from "./breath-chat-icon";

import Constants from "../constants/breath-chat-constants";

import ContextMenuAction from "../actions/breath-chat-contextMenuAction";

const ContextMenuType = Constants.ContextMenu;

class BreathChatToolPane extends React.Component{
	render(){
		let buttonsProps = [
			{
				className: "button add-button",
				icon: {
					icon: "icon-plus",
					fontSize: 18
				},
				onClickHandler: function( evt ){
					let type = ContextMenuType.ADD_CONTACT;
					let position = {
						x: evt.pageX,
						y: evt.pageY
					};

					ContextMenuAction.showContextMenu( type, position );
				}
			}
		];

		let buttons = UnderScore.map( buttonsProps, function( prop, index ){
			let tmpProp = {
				key: index,
				className: prop.className,
				onClick: prop.onClickHandler
			};

			return(
				<button { ...tmpProp } >
					<Icon { ...prop.icon }/>
				</button>
			);
		});

		return(
			<div className = "breath-chat-toolPane">
				{buttons}
			</div>
		);
	}
}

export default BreathChatToolPane;