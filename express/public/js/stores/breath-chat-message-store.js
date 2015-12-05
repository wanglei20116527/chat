"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _dispatchersBreathChatDispatcher = require("../dispatchers/breath-chat-dispatcher");

var _dispatchersBreathChatDispatcher2 = _interopRequireDefault(_dispatchersBreathChatDispatcher);

var _constantsBreathChatConstants = require("../constants/breath-chat-constants");

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

var _breathChatUserStore = require("./breath-chat-user-store");

var _breathChatUserStore2 = _interopRequireDefault(_breathChatUserStore);

var Underscore = require('underscore');
var EventEmitter = require('events').EventEmitter;

var EventConstants = _constantsBreathChatConstants2["default"].Event;
var ActionConstants = _constantsBreathChatConstants2["default"].Action;

var _message = {
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
		}, {
			id: 2,
			senderId: 1,
			recieverId: 2,
			content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
			datetime: 1449306630860
		}, {
			id: 3,
			senderId: 2,
			recieverId: 1,
			content: "小伙伴消消气",
			datetime: 1449306630956
		}, {
			id: 4,
			senderId: 1,
			recieverId: 2,
			content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
			datetime: 1449306631056
		}, {
			id: 5,
			senderId: 2,
			recieverId: 1,
			content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
			datetime: 1449306631256
		}],

		3: [],

		4: [],

		5: []
	},

	group: {}
};

var _dispatchToken = _dispatchersBreathChatDispatcher2["default"].register(function (action) {
	switch (action.type) {
		case ActionConstants.ACTIVE_CONTACT_CHANGE:
			_dispatchersBreathChatDispatcher2["default"].waitFor([_breathChatUserStore2["default"].dispatchToken]);

			messageStore.emit(EventConstants.ACTIVE_CONTACT_CHANGE);
			break;
	}
});

var BreathChatMessageStore = (function (_EventEmitter) {
	_inherits(BreathChatMessageStore, _EventEmitter);

	function BreathChatMessageStore() {
		_classCallCheck(this, BreathChatMessageStore);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_get(Object.getPrototypeOf(BreathChatMessageStore.prototype), "constructor", this).apply(this, args);

		this.dispatchToken = _dispatchToken;
	}

	_createClass(BreathChatMessageStore, [{
		key: "getMessagesByContactId",
		value: function getMessagesByContactId(contactId) {
			return {
				amount: 100,
				data: _message.contact[contactId]
			};
		}
	}]);

	return BreathChatMessageStore;
})(EventEmitter);

var messageStore = new BreathChatMessageStore();

exports["default"] = messageStore;
module.exports = exports["default"];