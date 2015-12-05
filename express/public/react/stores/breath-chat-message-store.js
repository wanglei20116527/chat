import Dispatcher from "../dispatchers/breath-chat-dispatcher";
import Constants from "../constants/breath-chat-constants";

import UserStore from "./breath-chat-user-store";

let Underscore = require( 'underscore' );
let EventEmitter = require('events').EventEmitter;

let EventConstants   = Constants.Event;
let ActionConstants = Constants.Action;

let _message = {
	contact: {
		// key user id
		2: [
			// messages
			{
				id: 1,
				senderId: 1,
				recieverId: 2,
				content: "小伙伴消消气",
				datetime: 1449306630856
			},

			{
				id: 2,
				senderId: 1,
				recieverId: 2,
				content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
				datetime: 1449306630860
			},

			{
				id: 3,
				senderId: 2,
				recieverId: 1,
				content: "小伙伴消消气",
				datetime: 1449306630956
			},

			{
				id: 4,
				senderId: 1,
				recieverId: 2,
				content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
				datetime: 1449306631056
			},

			{
				id: 5,
				senderId: 2,
				recieverId: 1,
				content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
				datetime: 1449306631256
			}
		],

		3: [
		],

		4: [
		],

		5: [
		]
	},

	group: {

	}
};

let _dispatchToken = Dispatcher.register(function( action ){
	switch( action.type ){
		case ActionConstants.ACTIVE_CONTACT_CHANGE:
			Dispatcher.waitFor([
				UserStore.dispatchToken
			] );
			
			messageStore.emit( EventConstants.ACTIVE_CONTACT_CHANGE );
			break;
	}
});

class BreathChatMessageStore extends EventEmitter{
	constructor( ...args ){
		super(...args);

		this.dispatchToken = _dispatchToken;
	}

	getMessagesByContactId( contactId ){
		return {
			amount: 100 ,
			data:  _message.contact[ contactId ]
		};
	}
}

let messageStore = new BreathChatMessageStore();

export default messageStore;