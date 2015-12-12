import React from "react";
import UnderScore from "underscore";

import Contants from "../constants/breath-chat-constants"; 

import ContextMenuStore from "../stores/breath-chat-contextMenu-store";

import AddContanctContextMenu from "../components/breath-chat-addContact-contextMenu";

const Actions = Contants.Action;
const Events = Contants.Event;
const ContextMenuType = Contants.ContextMenu;

class BreathChatContextMenuLayer extends React.Component{
	constructor( ...args ){
		super( ...args );

		this.state = {
			type: ContextMenuStore.getContextMenuType(),
			position: ContextMenuStore.getPosition()
		}
	}

	componentDidMount(){
		let events = [
			{
				store: ContextMenuStore,
				name: Events.SHOW_CONTEXT_MENU,
				callback: this.updateContextMenu.bind( this )
			}
		];

		UnderScore.each( events, function( evt ){
			evt.store.on( evt.name, evt.callback );
		});
	}

	componentWillUnmount(){
		let events = [
			{
				store: ContextMenuStore,
				name: Events.SHOW_CONTEXT_MENU
			}
		];

		UnderScore.each( events, function( evt ){
			evt.store.removeListener( evt.name );
		});

	}

	updateContextMenu(){
		this.setState({
			type: ContextMenuStore.getContextMenuType(),
			position: ContextMenuStore.getPosition()
		});
	}

	render(){
		let contextMenu = null;
		let contextMenuPosition = {
			x: 0,
			y: 0
		};
		
		switch( this.state.type ){
			case ContextMenuType.ADD_CONTACT:
				contextMenu = <AddContanctContextMenu { ...contextMenuPosition }/>
				break;
		}

		return (
			<div className = "breath-chat-layer context-menu-layer" ref = "menuLayer">
				{ contextMenu || "" }
			</div>
		);
	}
}

export default BreathChatContextMenuLayer;