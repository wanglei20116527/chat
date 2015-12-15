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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var BreathChatContextMenu = (function (_React$Component) {
	_inherits(BreathChatContextMenu, _React$Component);

	function BreathChatContextMenu() {
		_classCallCheck(this, BreathChatContextMenu);

		_get(Object.getPrototypeOf(BreathChatContextMenu.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChatContextMenu, [{
		key: "focusContextMenu",
		value: function focusContextMenu() {
			var menuNode = _reactDom2["default"].findDOMNode(this.refs.contextMenu);
			menuNode.focus();
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.autoFocus && this.focusContextMenu();
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.props.autoFocus && this.focusContextMenu();
		}
	}, {
		key: "onBlurHandler",
		value: function onBlurHandler(evt) {
			this.props.onBlurHandler && this.props.onBlurHandler(evt);
		}
	}, {
		key: "onClickHandler",
		value: function onClickHandler(evt) {
			this.props.onClickHandler && this.props.onClickHandler(evt);
		}
	}, {
		key: "render",
		value: function render() {
			var style = {
				top: this.props.y ? this.props.y + "px" : 0,
				left: this.props.x ? this.props.x + "px" : 0
			};

			var props = {
				style: style,
				tabIndex: '-1', // hack to give the ul the ability to foucs and blur
				autoFocus: this.props.autoFocus,
				className: "breath-chat-context-menu",
				onBlur: this.onBlurHandler.bind(this),
				onClick: this.onClickHandler.bind(this)
			};

			return _react2["default"].createElement(
				"ul",
				_extends({}, props, { ref: "contextMenu" }),
				this.props.children
			);
		}
	}]);

	return BreathChatContextMenu;
})(_react2["default"].Component);

BreathChatContextMenu.propTypes = {
	onBlurHandler: _react2["default"].PropTypes.func,
	onClickHandler: _react2["default"].PropTypes.func,

	x: _react2["default"].PropTypes.number.isRequired,
	y: _react2["default"].PropTypes.number.isRequired,

	autoFocus: _react2["default"].PropTypes.bool
};

BreathChatContextMenu.defaultProps = {
	autoFocus: false
};

exports["default"] = BreathChatContextMenu;
module.exports = exports["default"];