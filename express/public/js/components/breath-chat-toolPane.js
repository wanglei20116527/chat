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

var _breathChatIcon = require("./breath-chat-icon");

var _breathChatIcon2 = _interopRequireDefault(_breathChatIcon);

var _constantsBreathChatConstants = require("../constants/breath-chat-constants");

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

var _actionsBreathChatContextMenuAction = require("../actions/breath-chat-contextMenuAction");

var _actionsBreathChatContextMenuAction2 = _interopRequireDefault(_actionsBreathChatContextMenuAction);

var ContextMenuType = _constantsBreathChatConstants2["default"].ContextMenu;

var BreathChatToolPane = (function (_React$Component) {
	_inherits(BreathChatToolPane, _React$Component);

	function BreathChatToolPane() {
		_classCallCheck(this, BreathChatToolPane);

		_get(Object.getPrototypeOf(BreathChatToolPane.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChatToolPane, [{
		key: "render",
		value: function render() {
			var buttonsProps = [{
				className: "button add-button",
				icon: {
					icon: "icon-plus",
					fontSize: 18
				},
				onClickHandler: function onClickHandler(evt) {
					var type = ContextMenuType.ADD_CONTACT;
					var position = {
						x: evt.pageX,
						y: evt.pageY
					};

					_actionsBreathChatContextMenuAction2["default"].showContextMenu(type, position);
				}
			}];

			var buttons = _underscore2["default"].map(buttonsProps, function (prop, index) {
				var tmpProp = {
					key: index,
					className: prop.className,
					onClick: prop.onClickHandler
				};

				return _react2["default"].createElement(
					"button",
					tmpProp,
					_react2["default"].createElement(_breathChatIcon2["default"], prop.icon)
				);
			});

			return _react2["default"].createElement(
				"div",
				{ className: "breath-chat-toolPane" },
				buttons
			);
		}
	}]);

	return BreathChatToolPane;
})(_react2["default"].Component);

exports["default"] = BreathChatToolPane;
module.exports = exports["default"];