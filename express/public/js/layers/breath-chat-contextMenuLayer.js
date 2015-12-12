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

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _constantsBreathChatConstants = require("../constants/breath-chat-constants");

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

var _storesBreathChatContextMenuStore = require("../stores/breath-chat-contextMenu-store");

var _storesBreathChatContextMenuStore2 = _interopRequireDefault(_storesBreathChatContextMenuStore);

var _componentsBreathChatAddContactContextMenu = require("../components/breath-chat-addContact-contextMenu");

var _componentsBreathChatAddContactContextMenu2 = _interopRequireDefault(_componentsBreathChatAddContactContextMenu);

var Actions = _constantsBreathChatConstants2["default"].Action;
var Events = _constantsBreathChatConstants2["default"].Event;
var ContextMenuType = _constantsBreathChatConstants2["default"].ContextMenu;

var BreathChatContextMenuLayer = (function (_React$Component) {
	_inherits(BreathChatContextMenuLayer, _React$Component);

	function BreathChatContextMenuLayer() {
		_classCallCheck(this, BreathChatContextMenuLayer);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_get(Object.getPrototypeOf(BreathChatContextMenuLayer.prototype), "constructor", this).apply(this, args);

		this.state = {
			type: _storesBreathChatContextMenuStore2["default"].getContextMenuType(),
			position: _storesBreathChatContextMenuStore2["default"].getPosition()
		};
	}

	_createClass(BreathChatContextMenuLayer, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var events = [{
				store: _storesBreathChatContextMenuStore2["default"],
				name: Events.SHOW_CONTEXT_MENU,
				callback: this.updateContextMenu.bind(this)
			}];

			_underscore2["default"].each(events, function (evt) {
				evt.store.on(evt.name, evt.callback);
			});
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			var events = [{
				store: _storesBreathChatContextMenuStore2["default"],
				name: Events.SHOW_CONTEXT_MENU
			}];

			_underscore2["default"].each(events, function (evt) {
				evt.store.removeListener(evt.name);
			});
		}
	}, {
		key: "updateContextMenu",
		value: function updateContextMenu() {
			this.setState({
				type: _storesBreathChatContextMenuStore2["default"].getContextMenuType(),
				position: _storesBreathChatContextMenuStore2["default"].getPosition()
			});
		}
	}, {
		key: "render",
		value: function render() {
			var contextMenu = null;
			var contextMenuPosition = {
				x: 0,
				y: 0
			};

			switch (this.state.type) {
				case ContextMenuType.ADD_CONTACT:
					contextMenu = _react2["default"].createElement(_componentsBreathChatAddContactContextMenu2["default"], contextMenuPosition);
					break;
			}

			return _react2["default"].createElement(
				"div",
				{ className: "breath-chat-layer context-menu-layer", ref: "menuLayer" },
				contextMenu || ""
			);
		}
	}]);

	return BreathChatContextMenuLayer;
})(_react2["default"].Component);

exports["default"] = BreathChatContextMenuLayer;
module.exports = exports["default"];