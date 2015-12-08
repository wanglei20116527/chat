// import components
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _breathChatThumbnail = require("./breath-chat-thumbnail");

var _breathChatThumbnail2 = _interopRequireDefault(_breathChatThumbnail);

var _breathChatList = require("./breath-chat-list");

var _breathChatList2 = _interopRequireDefault(_breathChatList);

var _breathChatListItem = require("./breath-chat-list-item");

var _breathChatListItem2 = _interopRequireDefault(_breathChatListItem);

var _breathChatLabel = require("./breath-chat-label");

var _breathChatLabel2 = _interopRequireDefault(_breathChatLabel);

// import UserAction from "../actions/breath-chat-user-action";

var _constantsBreathChatConstants = require("../constants/breath-chat-constants");

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

var _actionsBreathChatContactAction = require("../actions/breath-chat-contact-action");

var _actionsBreathChatContactAction2 = _interopRequireDefault(_actionsBreathChatContactAction);

var React = require('react');
var UnderScore = require('underscore');

var ActionConstants = _constantsBreathChatConstants2["default"].Action;
var ContactType = _constantsBreathChatConstants2["default"].Contact.Type;

var BreathChatContactList = (function (_React$Component) {
	_inherits(BreathChatContactList, _React$Component);

	function BreathChatContactList() {
		_classCallCheck(this, BreathChatContactList);

		_get(Object.getPrototypeOf(BreathChatContactList.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChatContactList, [{
		key: "render",
		value: function render() {
			var userListItems = UnderScore.map(this.props.contacts.users, (function (contact) {
				var listItemProps = {
					className: "contact-list-item",
					onClickHandler: function onClickHandler() {
						_actionsBreathChatContactAction2["default"].changeActiveContact(contact.id, ContactType.USER);
					}
				};

				if (contact.id == this.props.activeContact.id) {
					listItemProps.className += " active";
				}

				var thumbnailProps = {
					className: "contact-thumbnail",
					url: contact.thumbnail
				};

				var nicknameLabelProps = {
					className: "contact-nickname",
					content: contact.nickname
				};

				// let numberCircleLabelProps = {
				// 	className: "number-message-to-read circle",
				// 	content: user.numberOfMessageUnread
				// };

				return React.createElement(
					_breathChatListItem2["default"],
					_extends({ key: contact.id }, listItemProps),
					React.createElement(_breathChatThumbnail2["default"], thumbnailProps),
					React.createElement(_breathChatLabel2["default"], nicknameLabelProps)
				);
			}).bind(this));

			var contactListItems = [].concat(_toConsumableArray(userListItems));

			return React.createElement(
				_breathChatList2["default"],
				{ className: "breath-chat-contact-list" },
				contactListItems
			);
		}
	}]);

	return BreathChatContactList;
})(React.Component);

BreathChatContactList.defaultProps = {};

exports["default"] = BreathChatContactList;
module.exports = exports["default"];