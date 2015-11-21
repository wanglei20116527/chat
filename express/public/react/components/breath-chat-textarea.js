let React = require("react");

module.exports = React.createClass({
	propTypes: {
		row: React.PropTypes.number,
		column: React.PropTypes.number,
		value: React.PropTypes.string,
		onChangeHandler: React.PropTypes.func,
		onKeyUpHandler: React.PropTypes.func,
		onBlurHandler: React.PropTypes.func
	},

	getDefaultProps: function(){
		return {
			row: 1
		};
	},

	onKeyUpHandler: function( evt ){
		this.props.onKeyUpHandler && this.props.onKeyUpHandler( evt );
	},

	onChangeHandler: function( evt ){
		this.props.onChangeHandler && this.props.onChangeHandler( evt );
	},

	onBlurHandler: function( evt ){
		this.props.onBlurHandler && this.props.onBlurHandler( evt );
	},

	render: function(){
		return (
			<textarea  className = "breath-chat-textarea"
				     rows = {this.props.row} 
				     columns = {this.props.column}
				     onKeyUp   = {this.onKeyUpHandler} 
				     onChange = {this.onChangeHandler} 
				     onBlur = {this.onBlurHandler}>
			</textarea>
		);
	}
});