import Constants from "../constants/breath-chat-constants";
import Dispatcher from "../dispatchers/breath-chat-dispatcher";

let ActionConstants = Constants.Action;

class BreathChatMessageAction{
	createMessage( message ){
		Dispatcher.dispatch({
			type: ActionConstants.CREATE_MESSAGE,
			data: {
				message: message
			}
		});
	}
}

let messageAction = new BreathChatMessageAction();

export default  messageAction;