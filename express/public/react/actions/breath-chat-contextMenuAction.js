import Dispatcher from "../dispatchers/breath-chat-dispatcher";

import Constants from "../constants/breath-chat-constants";

const Action = Constants.Action;

class ContextMenuAction{
	showContextMenu( type, position ){
		Dispatcher.dispatch({
			type: Action.SHOW_CONTEXT_MENU,
			data: {
				type: type,
				position: position
			}
		});
	}
}

let action = new ContextMenuAction();

export default action;