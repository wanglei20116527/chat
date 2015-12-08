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

var _breathChatIcon = require("./breath-chat-icon");

var _breathChatIcon2 = _interopRequireDefault(_breathChatIcon);

var _breathChatTextarea = require("./breath-chat-textarea");

var _breathChatTextarea2 = _interopRequireDefault(_breathChatTextarea);

var _actionsBreathChatMessageAction = require("../actions/breath-chat-message-action");

var _actionsBreathChatMessageAction2 = _interopRequireDefault(_actionsBreathChatMessageAction);

var React = require("react");

var ICON_WIDTH = 20;
var ICON_HEIGHT = 20;

var InteractivePane = (function (_React$Component) {
	_inherits(InteractivePane, _React$Component);

	function InteractivePane() {
		_classCallCheck(this, InteractivePane);

		_get(Object.getPrototypeOf(InteractivePane.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(InteractivePane, [{
		key: "render",
		value: function render() {
			var expressionIconProps = {
				icon: "icon-picture"
			};

			var fileIconProps = {
				icon: "icon-file-alt"
			};

			var textareaProps = {
				onKeyUpHandler: function onKeyUpHandler(evt) {
					evt.preventDefault();

					var message = evt.target.value.trim();

					// enter key is pressed
					if (evt.keyCode == 13 && message) {
						evt.target.value = "";
						_actionsBreathChatMessageAction2["default"].createMessage(message);
					}
				}
			};

			return React.createElement(
				"div",
				{ className: "breath-chat-interactivePane" },
				React.createElement(
					"ul",
					{ className: "toolBar" },
					React.createElement(
						"li",
						{ className: "iconWrapper" },
						" ",
						React.createElement(_breathChatIcon2["default"], expressionIconProps),
						" "
					),
					React.createElement(
						"li",
						{ className: "iconWrapper" },
						" ",
						React.createElement(_breathChatIcon2["default"], fileIconProps),
						" "
					)
				),
				React.createElement(
					"div",
					{ className: "textareaWrapper" },
					React.createElement(_breathChatTextarea2["default"], textareaProps)
				)
			);
		}
	}]);

	return InteractivePane;
})(React.Component);

exports["default"] = InteractivePane;
module.exports = exports["default"];