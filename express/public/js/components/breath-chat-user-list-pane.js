// import components
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _breathChatUserList = require("./breath-chat-user-list");

var _breathChatUserList2 = _interopRequireDefault(_breathChatUserList);

// import constants

var _constantsBreathChatConstants = require("../constants/breath-chat-constants");

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

// import stores

var _storesBreathChatUserStore = require("../stores/breath-chat-user-store");

var _storesBreathChatUserStore2 = _interopRequireDefault(_storesBreathChatUserStore);

// import { autobind } from "core-decorators";

var React = require("react");
var UnderScore = require('underscore');

var EventConstants = _constantsBreathChatConstants2["default"].Event;

var UserListPane = (function (_React$Component) {
	_inherits(UserListPane, _React$Component);

	function UserListPane() {
		_classCallCheck(this, UserListPane);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_get(Object.getPrototypeOf(UserListPane.prototype), "constructor", this).apply(this, args);

		this.state = {
			activeUser: _storesBreathChatUserStore2["default"].getActiveContact(),
			users: _storesBreathChatUserStore2["default"].getCurrentUserContacts()
		};
	}

	_createClass(UserListPane, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var events = [{
				name: EventConstants.ACTIVE_CONTACT_CHANGE,
				callback: this.updateActiveUser.bind(this)
			}];

			UnderScore.map(events, function (evt) {
				_storesBreathChatUserStore2["default"].on(evt.name, evt.callback);
			});
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			var events = [EventConstants.ACTIVE_CONTACT_CHANGE];

			UnderScore.map(events, function (evt) {
				_storesBreathChatUserStore2["default"].removeListener(evt);
			});
		}

		// @autobind
	}, {
		key: "updateActiveUser",
		value: function updateActiveUser() {
			this.setState({
				activeUser: _storesBreathChatUserStore2["default"].getActiveContact()
			});
		}
	}, {
		key: "render",
		value: function render() {
			var className = "breath-chat-userListPane";

			var userListProps = {
				activeUser: this.state.activeUser,
				users: this.state.users
			};

			return React.createElement(
				"div",
				{ className: className, ref: "userListPane" },
				React.createElement("div", { className: "headerBar" }),
				React.createElement(
					"div",
					{ className: "userListArea" },
					React.createElement(_breathChatUserList2["default"], userListProps)
				)
			);
		}
	}]);

	return UserListPane;
})(React.Component);

exports["default"] = UserListPane;
module.exports = exports["default"];