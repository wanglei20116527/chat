import Events from "events";
import Underscore from "underscore";

import Constants  from "../constants/breath-chat-constants";
import Dispatcher from "../dispatchers/breath-chat-dispatcher";

const EventEmitter = Events.EventEmitter;

const EventConstants   = Constants.Event;
const ActionConstants = Constants.Action;
const ContactType = Constants.Contact.Type;

let _$$_ = {
	activeContactId: 2 ,
	activeContactType: ContactType.USER,

	contacts: {
		users: {
			2: 
			{
				id: 2,
				nickname: "houna",
				thumbnail: "images/b13b56fb52e7042cfc41c22c1feef3a5.png"
			},

			3:
			{
				id: 3,
				nickname: "kang",
				thumbnail: "images/dba53bd217e5eb33d4334a56c4b790d9.jpg"
			},

			4: 
			{
				id: 4,
				nickname: "houna",
				thumbnail: "images/b13b56fb52e7042cfc41c22c1feef3a5.png"
			},

			5:
			{
				id: 5,
				nickname: "kang",
				thumbnail: "images/dba53bd217e5eb33d4334a56c4b790d9.jpg"
			}
		},
		
		groups:{
		}
	}
};

let _dispatchToken =  Dispatcher.register(function( action ){
	switch(  action.type ){
		case ActionConstants.CHANGE_ACTIVE_CONTACT :
			_$$_.activeContactId = action.data.id;
			_$$_.activeContactType = action.type;

			contactStore.emit(  EventConstants.CHANGE_ACTIVE_CONTACT );
			break;
	}
});

class BreathChatContactStore extends EventEmitter {
	constructor( ...args ){
		super( ...args );

		this.dispatchToken = _dispatchToken;
	}

	getContactByIdAndType( id, type ){
		let contact = null;

		switch( type ){
			case ContactType.USER:
				contact = _$$_ .contacts.users[ id ];
				break;

			case ContactType.GROUP:
				contact = _$$_ .contacts.groups[ id ];
				break;
		}

		return contact;
	}

	getActiveContact() {
		return this.getContactByIdAndType(  _$$_.activeContactId, _$$_.activeContactType ) || null;
	}

	getActiveContactType(){
		return _$$_.activeContactType;
	}

	getContacts(){
		return _$$_.contacts;
	}
}

let contactStore = new BreathChatContactStore(); 

export default contactStore;