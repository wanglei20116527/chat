import Events from "events";

import Constants from "../constants/breath-chat-constants";
import Dispatcher from "../dispatchers/breath-chat-dispatcher";

const EventEmitter = Events.EventEmitter; 

const EventConstants = Constants.Event;
const ContextMenuConstants = Constants.ContextMenu;

let _$$_ = {

};

const _dispatchToken = Dispatcher.register(function( action ){
	switch( action.type ){
		case ContextMenuConstants.ADD_CONTACT:
			layerStore.emit( EventConstants.SHOW_CONTEXT_MENU  );
			break;
	}
});

class BreathChatLayerStore extends EventEmitter {
	constructor( ...args ){
		super( ...args );

		this.dispatchToken = _dispatchToken;
	}
}

let layerStore = new BreathChatLayerStore();

export default layerStore;