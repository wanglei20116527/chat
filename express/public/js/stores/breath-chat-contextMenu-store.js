"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _events = require("events");

var _events2 = _interopRequireDefault(_events);

var _constantsBreathChatConstants = require("../constants/breath-chat-constants");

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

var _dispatchersBreathChatDispatcher = require("../dispatchers/breath-chat-dispatcher");

var _dispatchersBreathChatDispatcher2 = _interopRequireDefault(_dispatchersBreathChatDispatcher);

var EventEmitter = _events2["default"].EventEmitter;

var EventConstants = _constantsBreathChatConstants2["default"].Event;
var ActionContants = _constantsBreathChatConstants2["default"].Action;
var ContextMenuConstants = _constantsBreathChatConstants2["default"].ContextMenu;

var _$$_ = {
	contextMenuType: ContextMenuConstants.NONE,
	position: {
		x: 0,
		y: 0
	}
};

var _dispatchToken = _dispatchersBreathChatDispatcher2["default"].register(function (action) {
	switch (action.type) {
		case ActionContants.SHOW_CONTEXT_MENU:
			var type = action.data.type || ContextMenuConstants.NONE;
			var position = action.data.position || { x: 0, y: 0 };

			_$$_.contextMenuType = type;
			_$$_.position = {
				x: position.x || 0,
				y: position.y || 0
			};

			layerStore.emit(EventConstants.SHOW_CONTEXT_MENU);
			break;
	}
});

var BreathChatLayerStore = (function (_EventEmitter) {
	_inherits(BreathChatLayerStore, _EventEmitter);

	function BreathChatLayerStore() {
		_classCallCheck(this, BreathChatLayerStore);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_get(Object.getPrototypeOf(BreathChatLayerStore.prototype), "constructor", this).apply(this, args);

		this.dispatchToken = _dispatchToken;
	}

	_createClass(BreathChatLayerStore, [{
		key: "getContextMenuType",
		value: function getContextMenuType() {
			return _$$_.contextMenuType;
		}
	}, {
		key: "getPosition",
		value: function getPosition() {
			return _$$_.position;
		}
	}]);

	return BreathChatLayerStore;
})(EventEmitter);

var layerStore = new BreathChatLayerStore();

exports["default"] = layerStore;
module.exports = exports["default"];