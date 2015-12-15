'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _storesBreathChatDialogStore = require('../stores/breath-chat-dialog-store');

var _storesBreathChatDialogStore2 = _interopRequireDefault(_storesBreathChatDialogStore);

var _constantsBreathChatConstants = require('../constants/breath-chat-constants');

var _constantsBreathChatConstants2 = _interopRequireDefault(_constantsBreathChatConstants);

//import dialog

var _componentsBreathChatAddUserDialog = require('../components/breath-chat-addUserDialog');

var _componentsBreathChatAddUserDialog2 = _interopRequireDefault(_componentsBreathChatAddUserDialog);

var EventConstants = _constantsBreathChatConstants2['default'].Event;

var DialogTypes = _constantsBreathChatConstants2['default'].Dialog;

var BreathChatDialogLayer = (function (_React$Component) {
	_inherits(BreathChatDialogLayer, _React$Component);

	function BreathChatDialogLayer() {
		_classCallCheck(this, BreathChatDialogLayer);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_get(Object.getPrototypeOf(BreathChatDialogLayer.prototype), 'constructor', this).apply(this, args);

		this.state = {
			type: DialogTypes.NONE,
			position: {
				x: 0,
				y: 0
			}
		};
	}

	_createClass(BreathChatDialogLayer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var events = [{
				store: _storesBreathChatDialogStore2['default'],
				name: EventConstants.SHOW_DIALOG,
				callback: this.updateDialog.bind(this)
			}];

			_underscore2['default'].each(events, function (evt) {
				evt.store.on(evt.name, evt.callback);
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			var events = [{
				store: _storesBreathChatDialogStore2['default'],
				name: EventConstants.SHOW_DIALOG
			}];

			_underscore2['default'].each(events, function (evt) {
				evt.store.removeListener(evt.name);
			});
		}
	}, {
		key: 'updateDialog',
		value: function updateDialog() {
			this.setState({
				type: _storesBreathChatDialogStore2['default'].getDialogType(),
				position: _storesBreathChatDialogStore2['default'].getPosition()
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var dialog = null;
			var show = true;

			switch (this.state.type) {
				case DialogTypes.ADD_USER_DIALOG:
					dialog = _react2['default'].createElement(
						_reactAddonsCssTransitionGroup2['default'],
						{ transitionName: 'stretch', transitionAppear: true,
							transitionAppearTimeout: 500,
							transitionEnterTimeout: 500,
							transitionLeaveTimeout: 300 },
						_react2['default'].createElement(_componentsBreathChatAddUserDialog2['default'], { key: '1' })
					);
					break;

				default:
					show = false;
			}

			var layerProps = {
				className: 'breath-chat-layer dialog-layer',
				style: {
					width: show ? '100%' : 0,
					height: show ? '100%' : 0
				}
			};

			return _react2['default'].createElement(
				'div',
				layerProps,
				dialog || ""
			);
		}
	}]);

	return BreathChatDialogLayer;
})(_react2['default'].Component);

exports['default'] = BreathChatDialogLayer;
module.exports = exports['default'];