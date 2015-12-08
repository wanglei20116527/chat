import Dispatcher from "../dispatchers/breath-chat-dispatcher";
import Constants from "../constants/breath-chat-constants";

import ContactStore from "./breath-chat-contact-store";

let Underscore = require( 'underscore' );
let EventEmitter = require('events').EventEmitter;

const EventConstants   = Constants.Event;
const ActionConstants = Constants.Action;
const ContactType   = Constants.Contact.Type;
const MessageType = Constants.Message.Type;

let _$$_ = {
	user: {
		// key user id
		2: {
			amount: 100,
			datas: [
				{
					id: 1,
					senderId: 1,
					recieverId: 2,
					recieverType: ContactType.USER,
					content: "小伙伴消消气",
					contentType: MessageType.TEXT,
					datetime: 1449306630856,
					isRead: true
				},

				{
					id: 2,
					senderId: 1,
					recieverId: 2,
					recieverType: ContactType.USER,
					content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
					contentType: MessageType.TEXT,
					datetime: 1449306630860,
					isRead: true
				},

				{
					id: 3,
					senderId: 2,
					recieverId: 1,
					recieverType: ContactType.USER,
					content: "小伙伴消消气",
					contentType: MessageType.TEXT,
					datetime: 1449306630956,
					isRead: true
				},

				{
					id: 4,
					senderId: 1,
					recieverId: 2,
					recieverType: ContactType.USER,
					content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
					contentType: MessageType.TEXT,
					datetime: 1449306631056,
					isRead: true
				},

				{
					id: 5,
					senderId: 2,
					recieverId: 1,
					recieverType: ContactType.USER,
					content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
					contentType: MessageType.TEXT,
					datetime: 1449306631256,
					isRead: true
				}
			]
		},

		3:{
			amount: 11,
			datas: [
				{
					id: 1,
					senderId: 1,
					recieverId: 3,
					recieverType: ContactType.USER,
					content: "1",
					contentType: MessageType.TEXT,
					datetime: 1449306630856,
					isRead: true
				},

				{
					id: 2,
					senderId: 1,
					recieverId: 3,
					recieverType: ContactType.USER,
					content: "1",
					contentType: MessageType.TEXT,
					datetime: 1449306630860,
					isRead: true
				},

				{
					id: 3,
					senderId: 3,
					recieverId: 1,
					recieverType: ContactType.USER,
					content: "3",
					contentType: MessageType.TEXT,
					datetime: 1449306630956,
					isRead: true
				},

				{
					id: 4,
					senderId: 1,
					recieverId: 3,
					recieverType: ContactType.USER,
					content: "1",
					contentType: MessageType.TEXT,
					datetime: 1449306631056,
					isRead: true
				},

				{
					id: 5,
					senderId: 3,
					recieverId: 1,
					recieverType: ContactType.USER,
					content: "3",
					contentType: MessageType.TEXT,
					datetime: 1449306631256,
					isRead: true
				}
			]
		},

		4: {
		},

		5: {

		}
	},

	group: {

	}
};

function makeAllMessagesReaded( contactId, contactType ){
	switch( contactType ){
		case ContactType.USER:
			_$$_.user[ contactId ].datas = Underscore.map(  _$$_.user[ contactId ].datas , function( data ){
				data.isRead = true;
				return data;
			});
			break;

		case ContactType.GROUP:
			console.log( "make group %d all message readed", contactId );
			break;
	}
}

function getMessageType( message ){
	return MessageType.TEXT;
}

function pushEndMessages( contactId, contactType, messages ){
	let currentUser = ContactStore.getCurrentUser();
	let activeContact = ContactStore.getActiveContact();
	let activeContactType = ContactStore.getActiveContactType();

	switch( contactType ){
		case ContactType.USER:
			_$$_.user[ contactId ].datas || ( _$$_.user[ contactId ].datas = [] );

			Underscore.each( messages, function( message ){
				let newMessage =  {
					senderId: currentUser.id,
					recieverId: activeContact.id,
					recieverType: activeContactType,
					content: message,
					contentType: getMessageType( message ),
					datetime: Date.now(),
					isRead: true
				};

				_$$_.user[ contactId ].datas.push( newMessage );
			});
			break;

		case ContactType.GROUP:
			break;
	}
}

function pushBeginMessages( contactId, contactType, messages ){

}

let _dispatchToken = Dispatcher.register(function( action ){
	let contact = ContactStore.getActiveContact();
	let contactType = ContactStore.getActiveContactType();
	
	switch( action.type ){
		case ActionConstants.CHANGE_ACTIVE_CONTACT:
			Dispatcher.waitFor([
				ContactStore.dispatchToken
			]);

			makeAllMessagesReaded( contact.id, contactType );

			messageStore.emit( EventConstants.CHANGE_ACTIVE_CONTACT );
			break;

		case ActionConstants.CREATE_MESSAGE:
			let message  = action.data.message;
			pushEndMessages( contact.id, contactType, [message] );

			messageStore.emit( EventConstants.MESSAGE_CAHNGE );
			break;
	}
});

class BreathChatMessageStore extends EventEmitter{
	constructor( ...args ){
		super(...args);

		this.dispatchToken = _dispatchToken;
	}

	getActiveContactMessages(){
		let contact = ContactStore.getActiveContact();
		if( contact ){
			let contactType = ContactStore.getActiveContactType();

			return this.getMessagesByContactIdAndType( contact.id, contactType );
		}

		return null;
	}

	getMessagesByContactIdAndType( contactId, type ){
		let messages = null;

		switch( type ){
			case ContactType.USER:
				messages = {
					amount: _$$_.user[ contactId ].amount
				};

				messages.datas = Underscore.map( _$$_.user[ contactId ].datas, function( data ){
					return {
						id: data.recieverType + " " +  data.senderId + " " + data.recieverId + data.datetime,
						senderId: data.senderId,
						recieverId: data.recieverId,
						recieverType: data.recieverType,
						content: data.content,
						contentType: data.contentType,
						datetime: data.datetime,
						isRead: true
					};
				});
				break;

			case ContactType.GROUP:
				messages = _$$_.group[ contactId ];
				break;
		};

		return messages;
	}
}

let messageStore = new BreathChatMessageStore();

export default messageStore;