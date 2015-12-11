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

var _reactRouter = require("react-router");

var _breathChatThumbnail = require("./breath-chat-thumbnail");

var _breathChatThumbnail2 = _interopRequireDefault(_breathChatThumbnail);

var _storesBreathChatUserStore = require("../stores/breath-chat-user-store");

var _storesBreathChatUserStore2 = _interopRequireDefault(_storesBreathChatUserStore);

var BreathChatNavigator = (function (_React$Component) {
	_inherits(BreathChatNavigator, _React$Component);

	function BreathChatNavigator() {
		_classCallCheck(this, BreathChatNavigator);

		_get(Object.getPrototypeOf(BreathChatNavigator.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChatNavigator, [{
		key: "render",
		value: function render() {
			var userInfor = _storesBreathChatUserStore2["default"].getCurrentUser();
			var userThumbnailProps = {
				url: userInfor.thumbnail
			};
			var userThumbnail = _react2["default"].createElement(_breathChatThumbnail2["default"], userThumbnailProps);

			var navItemsInfors = [{
				prop: {
					className: "user-link",
					to: ""
				},
				content: userThumbnail
			}, {
				prop: {
					className: "communicate-link icon-comment",
					to: "communicate"
				}
			}, {
				prop: {
					className: "contact-link icon-user",
					to: ""
				}
			}, {
				prop: {
					className: "group-link icon-group",
					to: ""
				}
			}];

			var navItems = _underscore2["default"].map(navItemsInfors, function (infor, index) {
				return _react2["default"].createElement(
					"li",
					{ key: index },
					_react2["default"].createElement(
						_reactRouter.Link,
						infor.prop,
						" ",
						infor.content || "",
						" "
					)
				);
			});

			return _react2["default"].createElement(
				"nav",
				{ className: "breath-chat-navigator" },
				navItems
			);
		}
	}]);

	return BreathChatNavigator;
})(_react2["default"].Component);

exports["default"] = BreathChatNavigator;
module.exports = exports["default"];