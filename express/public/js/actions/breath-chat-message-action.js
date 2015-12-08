"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _constantsBreathChatConstants = require("../constants/breath-chat-constants");

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

var _dispatchersBreathChatDispatcher = require("../dispatchers/breath-chat-dispatcher");

var _dispatchersBreathChatDispatcher2 = _interopRequireDefault(_dispatchersBreathChatDispatcher);

var ActionConstants = _constantsBreathChatConstants2["default"].Action;

var BreathChatMessageAction = (function () {
	function BreathChatMessageAction() {
		_classCallCheck(this, BreathChatMessageAction);
	}

	_createClass(BreathChatMessageAction, [{
		key: "createMessage",
		value: function createMessage(message) {
			_dispatchersBreathChatDispatcher2["default"].dispatch({
				type: ActionConstants.CREATE_MESSAGE,
				data: {
					message: message
				}
			});
		}
	}]);

	return BreathChatMessageAction;
})();

var messageAction = new BreathChatMessageAction();

exports["default"] = messageAction;
module.exports = exports["default"];