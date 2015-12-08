const BreathChatConstants = {
	Message:{
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

	Contact:{
		Type: {
			USER: 1,
			GROUP: 2
		}
	},

	Event:{
		CHANGE_ACTIVE_CONTACT: 1,
		MESSAGE_CAHNGE: 2
	},

	Action: {
		CHANGE_ACTIVE_CONTACT: 1,
		CREATE_MESSAGE: 2
	}
};

export default BreathChatConstants;