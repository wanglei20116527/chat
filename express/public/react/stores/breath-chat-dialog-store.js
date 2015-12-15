import Events from "events";

import Constants from "../constants/breath-chat-constants";
import Dispatcher from "../dispatchers/breath-chat-dispatcher";

const EventEmitter = Events.EventEmitter; 

const EventConstants = Constants.Event;
const ActionContants = Constants.Action;

const DialogTypes = Constants.Dialog;

let _$$_ = {
	type: DialogTypes.NONE,
	position: {
		x: 0,
		y: 0
	}
};

const _dispatchToken = Dispatcher.register(function( action ){
	switch( action.type ){
		case ActionContants.SHOW_DIALOG:
			let type = action.data.type ||  DialogTypes.NONE;
			let position = action.data.position || {x: 0, y: 0};

			_$$_.type = type;
			_$$_.position = {
				x: position.x || 0,
				y: position.y || 0
			};

			dialogStore.emit( EventConstants.SHOW_DIALOG );
			break;
	}
});

class BreathChatDialogStore extends EventEmitter {
	constructor( ...args ){
		super( ...args );

		this.dispatchToken = _dispatchToken;
	}

	getDialogType(){
		return _$$_.type;
	}

	getPosition(){
		return Object.assign( {},  _$$_.position );
	}
}

let dialogStore = new  BreathChatDialogStore();

export default dialogStore;