let React = require("react");

class BreathChatLabel extends React.Component{
	onClickHandler( evt ){
		this.props.onClickHandler && this.props.onClickHandler.call(this, evt);
	}

	render(){
		let className = "breath-chat-label " + ( this.props.className || "" );

		return (
			<p className =  { className }  
			      onClick = { this.onClickHandler.bind(this) }>
			      
				{this.props.content}
			</p>
		);
	}
}

BreathChatLabel.propTypes = {
	onClickHandler: React.PropTypes.func
};

BreathChatLabel.defaultProps = {
};

export default BreathChatLabel;