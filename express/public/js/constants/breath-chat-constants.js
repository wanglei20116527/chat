"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var BreathChatConstants = {
	Message: {
		Type: {
			TEXT: 1,
			IMAGE: 2
		},

		Align: {
			LEFT: "BreathChatMessageAlignLeft",
			RIGHT: "BreathChatMessageAlignRight",
			CENTER: "BreathChatMessageAlignCenter"
		}
	},

	Contact: {
		Type: {
			USER: 1,
			GROUP: 2
		}
	},

	Event: {
		CHANGE_ACTIVE_CONTACT: 1,
		MESSAGE_CAHNGE: 2,

		SHOW_CONTEXT_MENU: 3
	},

	Action: {
		CHANGE_ACTIVE_CONTACT: 1,
		CREATE_MESSAGE: 2,

		SHOW_CONTEXT_MENU: 3
	},

	ContextMenu: {
		NONE: 1,
		ADD_CONTACT: 2
	}
};

exports["default"] = BreathChatConstants;
module.exports = exports["default"];