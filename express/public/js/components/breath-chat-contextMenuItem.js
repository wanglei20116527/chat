"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _breathChatIcon = require("./breath-chat-icon");

var _breathChatIcon2 = _interopRequireDefault(_breathChatIcon);

var BreathChatContextMenuItem = (function (_React$Component) {
	_inherits(BreathChatContextMenuItem, _React$Component);

	function BreathChatContextMenuItem() {
		_classCallCheck(this, BreathChatContextMenuItem);

		_get(Object.getPrototypeOf(BreathChatContextMenuItem.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChatContextMenuItem, [{
		key: "onClickHandler",
		value: function onClickHandler(evt) {
			this.props.onClickHandler && this.props.onClickHandler(evt);
		}
	}, {
		key: "render",
		value: function render() {
			var icon = null;
			if (this.props.showIcon) {
				var iconProps = {
					icon: this.props.icon.icon,
					fontSize: this.props.icon.fontSize
				};

				icon = _react2["default"].createElement(
					"span",
					{ className: "icon" },
					_react2["default"].createElement(_breathChatIcon2["default"], iconProps)
				);
			}

			var text = null;
			if (this.props.showText) {
				text = _react2["default"].createElement(
					"span",
					{ className: "text" },
					this.props.text
				);
			}

			return _react2["default"].createElement(
				"li",
				{ className: "breath-chat-context-menu-item",
					onClick: this.onClickHandler.bind(this) },
				_react2["default"].createElement(
					"a",
					{ className: "innerWrapper" },
					icon ? icon : "",
					text ? text : ""
				)
			);
		}
	}]);

	return BreathChatContextMenuItem;
})(_react2["default"].Component);

BreathChatContextMenuItem.propTypes = {
	showText: _react2["default"].PropTypes.bool,
	showIcon: _react2["default"].PropTypes.bool,

	text: _react2["default"].PropTypes.string,

	icon: _react2["default"].PropTypes.shape({
		icon: _react2["default"].PropTypes.string.isRequired,
		fontSize: _react2["default"].PropTypes.number
	}),

	onClickHandler: _react2["default"].PropTypes.func
};

BreathChatContextMenuItem.defaultProps = {
	showText: true,
	showIcon: true
};

exports["default"] = BreathChatContextMenuItem;
module.exports = exports["default"];