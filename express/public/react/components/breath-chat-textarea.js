let React = require("react");

class BreathChatTextarea extends React.Component{
	onKeyUpHandler( evt ){
		this.props.onKeyUpHandler && this.props.onKeyUpHandler( evt );
	}

	onChangeHandler( evt ){
		this.props.onChangeHandler && this.props.onChangeHandler( evt );
	}

	onBlurHandler( evt ){
		this.props.onBlurHandler && this.props.onBlurHandler( evt );
	}

	render(){
		return (
			<textarea  className = "breath-chat-textarea"
				     onKeyUp   = { this.onKeyUpHandler.bind(this) } 
				     onChange = { this.onChangeHandler.bind(this) } 
			 	     onBlur = { this.onBlurHandler.bind(this) }>
			</textarea>
		);
	}	
}

BreathChatTextarea.propTypes = {
	value: React.PropTypes.string,
	onBlurHandler: React.PropTypes.func,
	onKeyUpHandler: React.PropTypes.func,
	onChangeHandler: React.PropTypes.func	
};

export default BreathChatTextarea;