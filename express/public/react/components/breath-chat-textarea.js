let React = require("react");

module.exports = React.createClass({
	propTypes: function(){
		return {
			row: React.PropTypes.number,
			value: React.PropTypes.string,
			onChangeHandler: React.PropTypes.func,
			onKeyUpHandler: React.PropTypes.func,
			onBlurHandler: React.PropTypes.func
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
				     row = {this.props.row} 
				     onKeyUp   = {this.onKeyUpHandler} onChange = {this.onChangeHandler} onBlurHandler = {this.onBlurHandler}>
			</textarea>
		);
	}
});