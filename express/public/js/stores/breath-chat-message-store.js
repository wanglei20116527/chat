"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _events = require("events");

var _events2 = _interopRequireDefault(_events);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _constantsBreathChatConstants = require("../constants/breath-chat-constants");

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

var _dispatchersBreathChatDispatcher = require("../dispatchers/breath-chat-dispatcher");

var _dispatchersBreathChatDispatcher2 = _interopRequireDefault(_dispatchersBreathChatDispatcher);

var _breathChatUserStore = require("./breath-chat-user-store");

var _breathChatUserStore2 = _interopRequireDefault(_breathChatUserStore);

var _breathChatContactStore = require("./breath-chat-contact-store");

var _breathChatContactStore2 = _interopRequireDefault(_breathChatContactStore);

var EventEmitter = _events2["default"].EventEmitter;

var EventConstants = _constantsBreathChatConstants2["default"].Event;
var ActionConstants = _constantsBreathChatConstants2["default"].Action;
var ContactType = _constantsBreathChatConstants2["default"].Contact.Type;
var MessageType = _constantsBreathChatConstants2["default"].Message.Type;

var _$$_ = {
	user: {
		// key user id
		2: {
			amount: 100,
			datas: [{
				id: 1,
				senderId: 1,
				recieverId: 2,
				recieverType: ContactType.USER,
				content: "小伙伴消消气",
				contentType: MessageType.TEXT,
				datetime: 1449306630856,
				isRead: true
			}, {
				id: 2,
				senderId: 1,
				recieverId: 2,
				recieverType: ContactType.USER,
				content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
				contentType: MessageType.TEXT,
				datetime: 1449306630860,
				isRead: true
			}, {
				id: 3,
				senderId: 2,
				recieverId: 1,
				recieverType: ContactType.USER,
				content: "小伙伴消消气",
				contentType: MessageType.TEXT,
				datetime: 1449306630956,
				isRead: true
			}, {
				id: 4,
				senderId: 1,
				recieverId: 2,
				recieverType: ContactType.USER,
				content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
				contentType: MessageType.TEXT,
				datetime: 1449306631056,
				isRead: true
			}, {
				id: 5,
				senderId: 2,
				recieverId: 1,
				recieverType: ContactType.USER,
				content: "小伙伴消消气，小度做错啥让你不开心啦，要不让我给你讲个笑话抵罪吧!",
				contentType: MessageType.TEXT,
				datetime: 1449306631256,
				isRead: true
			}]
		},

		3: {
			amount: 11,
			datas: [{
				id: 1,
				senderId: 1,
				recieverId: 3,
				recieverType: ContactType.USER,
				content: "1",
				contentType: MessageType.TEXT,
				datetime: 1449306630856,
				isRead: true
			}, {
				id: 2,
				senderId: 1,
				recieverId: 3,
				recieverType: ContactType.USER,
				content: "1",
				contentType: MessageType.TEXT,
				datetime: 1449306630860,
				isRead: true
			}, {
				id: 3,
				senderId: 3,
				recieverId: 1,
				recieverType: ContactType.USER,
				content: "3",
				contentType: MessageType.TEXT,
				datetime: 1449306630956,
				isRead: true
			}, {
				id: 4,
				senderId: 1,
				recieverId: 3,
				recieverType: ContactType.USER,
				content: "1",
				contentType: MessageType.TEXT,
				datetime: 1449306631056,
				isRead: true
			}, {
				id: 5,
				senderId: 3,
				recieverId: 1,
				recieverType: ContactType.USER,
				content: "3",
				contentType: MessageType.TEXT,
				datetime: 1449306631256,
				isRead: true
			}]
		},

		4: {},

		5: {}
	},

	group: {}
};

var _dispatchToken = _dispatchersBreathChatDispatcher2["default"].register(function (action) {
	var contact = null;
	var contactType = null;

	switch (action.type) {
		case ActionConstants.CHANGE_ACTIVE_CONTACT:
			_dispatchersBreathChatDispatcher2["default"].waitFor([_breathChatContactStore2["default"].dispatchToken]);

			contact = _breathChatContactStore2["default"].getActiveContact();
			contactType = _breathChatContactStore2["default"].getActiveContactType();

			makeAllMessagesReaded(contact.id, contactType);

			messageStore.emit(EventConstants.CHANGE_ACTIVE_CONTACT);
			break;

		case ActionConstants.CREATE_MESSAGE:
			contact = _breathChatContactStore2["default"].getActiveContact();
			contactType = _breathChatContactStore2["default"].getActiveContactType();

			var message = action.data.message;
			pushEndMessages(contact.id, contactType, [message]);

			messageStore.emit(EventConstants.MESSAGE_CAHNGE);
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
		key: "getActiveContactMessages",
		value: function getActiveContactMessages() {
			var contact = _breathChatContactStore2["default"].getActiveContact();
			if (contact) {
				var contactType = _breathChatContactStore2["default"].getActiveContactType();

				return this.getMessagesByContactIdAndType(contact.id, contactType);
			}

			return null;
		}
	}, {
		key: "getMessagesByContactIdAndType",
		value: function getMessagesByContactIdAndType(contactId, type) {
			var messages = null;

			switch (type) {
				case ContactType.USER:
					messages = {
						amount: _$$_.user[contactId].amount
					};

					messages.datas = _underscore2["default"].map(_$$_.user[contactId].datas, function (data) {
						return {
							id: data.recieverType + " " + data.senderId + " " + data.recieverId + data.datetime,
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
					messages = _$$_.group[contactId];
					break;
			};

			return messages;
		}
	}]);

	return BreathChatMessageStore;
})(EventEmitter);

var messageStore = new BreathChatMessageStore();

exports["default"] = messageStore;

function makeAllMessagesReaded(contactId, contactType) {
	switch (contactType) {
		case ContactType.USER:
			_$$_.user[contactId].datas = _underscore2["default"].map(_$$_.user[contactId].datas, function (data) {
				data.isRead = true;
				return data;
			});
			break;

		case ContactType.GROUP:
			console.log("make group %d all message readed", contactId);
			break;
	}
}

function getMessageType(message) {
	return MessageType.TEXT;
}

function pushEndMessages(contactId, contactType, messages) {
	var currentUser = _breathChatUserStore2["default"].getCurrentUser();
	var activeContact = _breathChatContactStore2["default"].getActiveContact();
	var activeContactType = _breathChatContactStore2["default"].getActiveContactType();

	switch (contactType) {
		case ContactType.USER:
			_$$_.user[contactId].datas || (_$$_.user[contactId].datas = []);

			_underscore2["default"].each(messages, function (message) {
				var newMessage = {
					senderId: currentUser.id,
					recieverId: activeContact.id,
					recieverType: activeContactType,
					content: message,
					contentType: getMessageType(message),
					datetime: Date.now(),
					isRead: true
				};

				_$$_.user[contactId].datas.push(newMessage);
			});
			break;

		case ContactType.GROUP:
			break;
	}
}

function pushBeginMessages(contactId, contactType, messages) {}
module.exports = exports["default"];