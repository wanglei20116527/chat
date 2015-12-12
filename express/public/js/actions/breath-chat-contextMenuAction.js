"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _dispatchersBreathChatDispatcher = require("../dispatchers/breath-chat-dispatcher");

var _dispatchersBreathChatDispatcher2 = _interopRequireDefault(_dispatchersBreathChatDispatcher);

var _constantsBreathChatConstants = require("../constants/breath-chat-constants");

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

var Action = _constantsBreathChatConstants2["default"].Action;

var ContextMenuAction = (function () {
	function ContextMenuAction() {
		_classCallCheck(this, ContextMenuAction);
	}

	_createClass(ContextMenuAction, [{
		key: "showContextMenu",
		value: function showContextMenu(type, position) {
			_dispatchersBreathChatDispatcher2["default"].dispatch({
				type: Action.SHOW_CONTEXT_MENU,
				data: {
					type: type,
					position: position
				}
			});
		}
	}]);

	return ContextMenuAction;
})();

var action = new ContextMenuAction();

exports["default"] = action;
module.exports = exports["default"];