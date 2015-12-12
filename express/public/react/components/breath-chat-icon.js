import React from "react";
import Underscore from "underscore";

class BreathChatIcon extends React.Component{
	onClickHandler( evt ){
		this.props.onClickHandler && this.props.onClickHandler( evt );
	}

	render(){
		let style = {
			fontSize: this.props.fontSize + "px"
		};

		let className = "breath-chat-icon " + this.props.icon;

		return (
			<i	style = { style }
				className = { className }
				onClick = { this.onClickHandler.bind(this) }>
			</i>
		);
	}
}

BreathChatIcon.propTypes = {
	fontSize: React.PropTypes.number,
	onClickHandler: React.PropTypes.func
};

BreathChatIcon.defaultProps = {
	fontSize: 18
};

export default BreathChatIcon;
