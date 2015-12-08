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

var _breathChatContactList = require("./breath-chat-contact-list");

var _breathChatContactList2 = _interopRequireDefault(_breathChatContactList);

// import constants

var _constantsBreathChatConstants = require("../constants/breath-chat-constants");

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

// import stores

var _storesBreathChatContactStore = require("../stores/breath-chat-contact-store");

var _storesBreathChatContactStore2 = _interopRequireDefault(_storesBreathChatContactStore);

var React = require("react");
var UnderScore = require('underscore');

var EventConstants = _constantsBreathChatConstants2["default"].Event;

var BreathChatContactPane = (function (_React$Component) {
	_inherits(BreathChatContactPane, _React$Component);

	function BreathChatContactPane() {
		_classCallCheck(this, BreathChatContactPane);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_get(Object.getPrototypeOf(BreathChatContactPane.prototype), "constructor", this).apply(this, args);

		this.state = {
			activeContact: _storesBreathChatContactStore2["default"].getActiveContact(),
			contacts: _storesBreathChatContactStore2["default"].getContacts()
		};
	}

	_createClass(BreathChatContactPane, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var events = [{
				name: EventConstants.CHANGE_ACTIVE_CONTACT,
				callback: this.updateActiveContact.bind(this)
			}];

			UnderScore.map(events, function (evt) {
				_storesBreathChatContactStore2["default"].on(evt.name, evt.callback);
			});
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			var events = [EventConstants.CHANGE_ACTIVE_CONTACT];

			UnderScore.map(events, function (evt) {
				_storesBreathChatContactStore2["default"].removeListener(evt);
			});
		}

		// @autobind
	}, {
		key: "updateActiveContact",
		value: function updateActiveContact() {
			this.setState({
				activeContact: _storesBreathChatContactStore2["default"].getActiveContact()
			});
		}
	}, {
		key: "render",
		value: function render() {
			var className = "breath-chat-contactPane";

			var contactListProps = {
				activeContact: this.state.activeContact,
				contacts: this.state.contacts
			};

			return React.createElement(
				"div",
				{ className: className },
				React.createElement("div", { className: "headerBar" }),
				React.createElement(
					"div",
					{ className: "contactListArea" },
					React.createElement(_breathChatContactList2["default"], contactListProps)
				)
			);
		}
	}]);

	return BreathChatContactPane;
})(React.Component);

exports["default"] = BreathChatContactPane;
module.exports = exports["default"];