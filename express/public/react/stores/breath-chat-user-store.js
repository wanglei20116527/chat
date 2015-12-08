import BreathChatDispatcher from "../dispatchers/breath-chat-dispatcher";
import BreathChatConstants from "../constants/breath-chat-constants";

let Underscore = require( 'underscore' );
let EventEmitter = require('events').EventEmitter;

let EventConstants   = BreathChatConstants.Event;
let ActionConstants = BreathChatConstants.Action;

const Users = {
	1:
	 {
		id: 1,
		nickname: "wanglei",
		thumbnail: "images/cd3ed493551d79846b19dc2a50de3cad.png"
	},

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
};

let _user = {
	currentUserId: 1,
	activeContactId: 2,
	contantIds: [ 2, 3, 4, 5 ]
};

let _dispatchToken =  BreathChatDispatcher.register(function( action ){
	switch(  action.type ){
		case ActionConstants.CHANGE_ACTIVE_CONTACT :
			_user.activeContactId = action.data.id;

			userStore.emit(  EventConstants.CHANGE_ACTIVE_CONTACT );
			break;
	}
});

class BreathChatUserStore extends EventEmitter {
	constructor( ...args ){
		super( ...args );

		this.dispatchToken = _dispatchToken;
	}

	getUserById( id ){
		return Users[ id ];
	}

	getCurrentUser(){
		return this.getUserById( _user.currentUserId );
	}

	getActiveContact() {
		return this.getUserById( _user.activeContactId );
	}

	getCurrentUserContacts(){
		return Underscore.map( _user.contantIds, function( contantId ){
			return this.getUserById( contantId ); 	
		}.bind(this) );
	}
}

let userStore = new BreathChatUserStore(); 

export default userStore;