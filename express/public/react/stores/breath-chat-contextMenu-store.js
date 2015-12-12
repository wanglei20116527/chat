import Events from "events";

import Constants from "../constants/breath-chat-constants";
import Dispatcher from "../dispatchers/breath-chat-dispatcher";

const EventEmitter = Events.EventEmitter; 

const EventConstants = Constants.Event;
const ActionContants = Constants.Action;
const ContextMenuConstants = Constants.ContextMenu;

let _$$_ = {
	contextMenuType:  ContextMenuConstants.NONE,
	position: {
		x: 0,
		y: 0
	}
};

const _dispatchToken = Dispatcher.register(function( action ){
	switch( action.type ){
		case ActionContants.SHOW_CONTEXT_MENU:
			_$$_.contextMenuType = action.data.type;
			_$$_.position = {
				x: action.data.position.x,
				y: action.data.position.y
			}

			layerStore.emit( EventConstants.SHOW_CONTEXT_MENU  );
			break;
	}
});

class BreathChatLayerStore extends EventEmitter {
	constructor( ...args ){
		super( ...args );

		this.dispatchToken = _dispatchToken;
	}

	getContextMenuType(){
		return _$$_.contextMenuType;
	}

	getPosition(){
		return _$$_.position;
	}
}

let layerStore = new BreathChatLayerStore();

export default layerStore;