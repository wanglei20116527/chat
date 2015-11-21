"use strict";

var React = require("react");

module.exports = React.createClass({
	displayName: "exports",

	propTypes: {
		row: React.PropTypes.number,
		column: React.PropTypes.number,
		value: React.PropTypes.string,
		onChangeHandler: React.PropTypes.func,
		onKeyUpHandler: React.PropTypes.func,
		onBlurHandler: React.PropTypes.func
	},

	getDefaultProps: function getDefaultProps() {
		return {
			row: 1
		};
	},

	onKeyUpHandler: function onKeyUpHandler(evt) {
		this.props.onKeyUpHandler && this.props.onKeyUpHandler(evt);
	},

	onChangeHandler: function onChangeHandler(evt) {
		this.props.onChangeHandler && this.props.onChangeHandler(evt);
	},

	onBlurHandler: function onBlurHandler(evt) {
		this.props.onBlurHandler && this.props.onBlurHandler(evt);
	},

	render: function render() {
		return React.createElement("textarea", { className: "breath-chat-textarea",
			rows: this.props.row,
			columns: this.props.column,
			onKeyUp: this.onKeyUpHandler,
			onChange: this.onChangeHandler,
			onBlur: this.onBlurHandler });
	}
});