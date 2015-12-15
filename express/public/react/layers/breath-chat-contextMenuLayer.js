import React from "react";
import ReactDOM from 'react-dom';
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

	getLayerAbsolutePosition(){
		let layerNode = ReactDOM.findDOMNode( this.refs.menuLayer );

		let position = {
			x: layerNode.offsetLeft,
			y: layerNode.offsetTop
		};

		let parentNode = layerNode.offsetParent;

		while( parentNode ){
			position.x += parentNode.offsetLeft;
			position.y += parentNode.offsetTop;

			parentNode = parentNode.offsetParent;
		}

		return position;
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
		let position =  ContextMenuStore.getPosition();
		let layerPosition = this.getLayerAbsolutePosition();

		this.setState({
			type: ContextMenuStore.getContextMenuType(),
			position: {
				x: position.x - layerPosition.x ,
				y: position.y - layerPosition.y
			} 
		});
	}

	render(){
		let contextMenu = null;
		let contextMenuPosition = {
			x: this.state.position.x ,
			y: this.state.position.y
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