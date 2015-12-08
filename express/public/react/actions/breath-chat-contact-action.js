import Constants from "../constants/breath-chat-constants";
import Dispatcher from "../dispatchers/breath-chat-dispatcher";

const ActionConstants = Constants.Action;

class BreathChatContactAction{
	changeActiveContact(  contactId, type ){
		Dispatcher.dispatch({
			type: ActionConstants.CHANGE_ACTIVE_CONTACT ,
			data: {
				id: contactId,
				type: type
			}
		});
	}
}

let contactAction = new BreathChatContactAction;

export default contactAction;