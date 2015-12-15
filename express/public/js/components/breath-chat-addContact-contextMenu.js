"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

// import components

var _breathChatContextMenu = require("./breath-chat-contextMenu");

var _breathChatContextMenu2 = _interopRequireDefault(_breathChatContextMenu);

var _breathChatContextMenuItem = require("./breath-chat-contextMenuItem");

var _breathChatContextMenuItem2 = _interopRequireDefault(_breathChatContextMenuItem);

var _actionsBreathChatDialogAction = require('../actions/breath-chat-dialogAction');

var _actionsBreathChatDialogAction2 = _interopRequireDefault(_actionsBreathChatDialogAction);

var _actionsBreathChatContextMenuAction = require('../actions/breath-chat-contextMenuAction');

var _actionsBreathChatContextMenuAction2 = _interopRequireDefault(_actionsBreathChatContextMenuAction);

var _constantsBreathChatConstants = require('../constants/breath-chat-constants');

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

var _configuration = [{
	showText: true,
	showIcon: true,
	text: "add user",
	icon: {
		icon: "icon-user",
		fontSize: 20
	},
	onClickHandler: function onClickHandler(evt) {
		_actionsBreathChatDialogAction2["default"].showDialog(_constantsBreathChatConstants2["default"].Dialog.ADD_USER_DIALOG, {
			x: evt.pageX,
			y: evt.pageY
		});
	}
}, {
	showText: true,
	showIcon: true,
	text: "add group",
	icon: {
		icon: "icon-group",
		fontSize: 16
	},
	onClickHandler: function onClickHandler(evt) {
		console.log('houna is cute');
	}
}];

var BreathChatAddContactContextMenu = (function (_React$Component) {
	_inherits(BreathChatAddContactContextMenu, _React$Component);

	function BreathChatAddContactContextMenu() {
		_classCallCheck(this, BreathChatAddContactContextMenu);

		_get(Object.getPrototypeOf(BreathChatAddContactContextMenu.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChatAddContactContextMenu, [{
		key: "hideContextMenu",
		value: function hideContextMenu() {
			_actionsBreathChatContextMenuAction2["default"].showContextMenu(_constantsBreathChatConstants2["default"].ContextMenu.NONE, null);
		}
	}, {
		key: "render",
		value: function render() {
			var menuItems = _underscore2["default"].map(_configuration, function (itemProp, index) {
				return _react2["default"].createElement(_breathChatContextMenuItem2["default"], _extends({}, itemProp, { key: index }));
			});

			var contentMenuProps = {
				x: this.props.x,
				y: this.props.y,

				autoFocus: true,

				onBlurHandler: (function (evt) {
					this.hideContextMenu();
				}).bind(this),

				onClickHandler: (function (evt) {
					this.hideContextMenu();
				}).bind(this)
			};

			return _react2["default"].createElement(
				_breathChatContextMenu2["default"],
				_extends({}, this.props, contentMenuProps, { ref: "contextMenu" }),
				menuItems
			);
		}
	}]);

	return BreathChatAddContactContextMenu;
})(_react2["default"].Component);

BreathChatAddContactContextMenu.propTypes = {
	x: _react2["default"].PropTypes.number.isRequired,
	y: _react2["default"].PropTypes.number.isRequired
};

exports["default"] = BreathChatAddContactContextMenu;
module.exports = exports["default"];