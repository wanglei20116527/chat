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

var EventEmitter = _events2["default"].EventEmitter;

var EventConstants = _constantsBreathChatConstants2["default"].Event;
var ActionConstants = _constantsBreathChatConstants2["default"].Action;
var ContactType = _constantsBreathChatConstants2["default"].Contact.Type;

var _$$_ = {
	activeContactId: 2,
	activeContactType: ContactType.USER,

	contacts: {
		users: {
			2: {
				id: 2,
				nickname: "houna",
				thumbnail: "images/b13b56fb52e7042cfc41c22c1feef3a5.png"
			},

			3: {
				id: 3,
				nickname: "kang",
				thumbnail: "images/dba53bd217e5eb33d4334a56c4b790d9.jpg"
			},

			4: {
				id: 4,
				nickname: "houna",
				thumbnail: "images/b13b56fb52e7042cfc41c22c1feef3a5.png"
			},

			5: {
				id: 5,
				nickname: "kang",
				thumbnail: "images/dba53bd217e5eb33d4334a56c4b790d9.jpg"
			}
		},

		groups: {}
	}
};

var _dispatchToken = _dispatchersBreathChatDispatcher2["default"].register(function (action) {
	switch (action.type) {
		case ActionConstants.CHANGE_ACTIVE_CONTACT:
			_$$_.activeContactId = action.data.id;
			_$$_.activeContactType = action.type;

			contactStore.emit(EventConstants.CHANGE_ACTIVE_CONTACT);
			break;
	}
});

var BreathChatContactStore = (function (_EventEmitter) {
	_inherits(BreathChatContactStore, _EventEmitter);

	function BreathChatContactStore() {
		_classCallCheck(this, BreathChatContactStore);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_get(Object.getPrototypeOf(BreathChatContactStore.prototype), "constructor", this).apply(this, args);

		this.dispatchToken = _dispatchToken;
	}

	_createClass(BreathChatContactStore, [{
		key: "getContactByIdAndType",
		value: function getContactByIdAndType(id, type) {
			var contact = null;

			switch (type) {
				case ContactType.USER:
					contact = _$$_.contacts.users[id];
					break;

				case ContactType.GROUP:
					contact = _$$_.contacts.groups[id];
					break;
			}

			return contact;
		}
	}, {
		key: "getActiveContact",
		value: function getActiveContact() {
			return this.getContactByIdAndType(_$$_.activeContactId, _$$_.activeContactType) || null;
		}
	}, {
		key: "getActiveContactType",
		value: function getActiveContactType() {
			return _$$_.activeContactType;
		}
	}, {
		key: "getContacts",
		value: function getContacts() {
			return _$$_.contacts;
		}
	}]);

	return BreathChatContactStore;
})(EventEmitter);

var contactStore = new BreathChatContactStore();

exports["default"] = contactStore;
module.exports = exports["default"];