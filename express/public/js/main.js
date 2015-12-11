"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _routersBreathChatRouter = require("./routers/breath-chat-router");

var _routersBreathChatRouter2 = _interopRequireDefault(_routersBreathChatRouter);

(0, _reactDom.render)(_react2["default"].createElement(_routersBreathChatRouter2["default"], null), document.getElementById("breath-chat"));