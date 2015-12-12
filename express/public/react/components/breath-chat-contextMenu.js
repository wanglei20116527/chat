import React from "react";

class BreathChatContextMenu extends React.Component{
	render(){
		let style = {
			top: this.props.y ? this.props.y + "px" : 0,
			left: this.props.x ? this.props.x + "px" : 0
		};

		return (
			<ul className = "breath-chat-context-menu" style = {style}>
				{this.props.children}
			</ul>
		);
	}
}

BreathChatContextMenu.propTypes = {
	x: React.PropTypes.number.isRequired,
	y: React.PropTypes.number.isRequired
};

export default BreathChatContextMenu;