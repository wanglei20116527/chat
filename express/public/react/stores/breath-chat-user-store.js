import { EventEmitter } from "events";

import Dispatcher from "../dispatchers/breath-chat-dispatcher";

let _$$_ = {
	isLogin: true,

	infor: {
		id: 1,
		thumbnail: "images/cd3ed493551d79846b19dc2a50de3cad.png",
		nickname: "wanglei",
	}
};

class BreathChatUserStore  extends EventEmitter {
	constructor( ...args ){
		super( ...args );
	}

	getCurrentUser(){
		return _$$_.infor;
	}
};

export default  ( new BreathChatUserStore() );


