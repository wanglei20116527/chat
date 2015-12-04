"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _breathChatPath = require("./breath-chat-path");

var _breathChatPath2 = _interopRequireDefault(_breathChatPath);

var React = require("react");

var BreathChatArrow = (function (_React$Component) {
	_inherits(BreathChatArrow, _React$Component);

	function BreathChatArrow() {
		_classCallCheck(this, BreathChatArrow);

		_get(Object.getPrototypeOf(BreathChatArrow.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(BreathChatArrow, [{
		key: "render",
		value: function render() {
			var props = {
				className: this.props.className || "",
				width: this.props.width + "px",
				height: this.props.height + "px",
				xmlns: "http://www.w3.org/2000/svg"
			};

			return React.createElement(
				"svg",
				props,
				React.createElement(_breathChatPath2["default"], { fill: this.props.fill, d: this.props.d })
			);
		}
	}]);

	return BreathChatArrow;
})(React.Component);

BreathChatArrow.propTypes = {
	width: React.PropTypes.number.isRequired,
	height: React.PropTypes.number.isRequired,
	d: React.PropTypes.string.isRequired,
	fill: React.PropTypes.string
};

BreathChatArrow.defaultProps = {
	width: 7,
	height: 12,
	fill: "#F4F4F4",
	d: "M9,1c0,0-9-0.188-9,0.047s0,1.875,0,1.875L9,11"
};

exports["default"] = BreathChatArrow;
module.exports = exports["default"];