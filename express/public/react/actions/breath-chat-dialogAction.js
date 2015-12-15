import Dispatcher from "../dispatchers/breath-chat-dispatcher";

import Constants from "../constants/breath-chat-constants";

const Action = Constants.Action;

class BreathChatDialogAction{
	showDialog( type, position ){
		Dispatcher.dispatch({
			type: Action.SHOW_DIALOG ,
			data: {
				type: type,
				position: position
			}
		})
	}
}

let dialogAction = new BreathChatDialogAction();

export default dialogAction;