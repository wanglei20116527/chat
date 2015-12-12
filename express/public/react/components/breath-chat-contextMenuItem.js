import React from "react";

import Icon from "./breath-chat-icon";

class BreathChatContextMenuItem extends React.Component{
	onClickHandler( evt ){
		this.props.onClickHandler && this.props.onClickHandler( evt );  
	}

	render(){
		let icon = null;
		if( this.props.showIcon ){
			let iconProps = {
				icon: this.props.icon.icon,
				fontSize: this.props.icon.fontSize
			};

			icon = (
				<span className = "icon">
					<Icon {...iconProps } />
				</span>
			);	
		}

		let text = null;
		if( this.props.showText ){
			text = (
				<span className = "text">
					{this.props.text}
				</span>
			);
		}

		return (
			<li className = "breath-chat-context-menu-item" 
			     onClick = { this.onClickHandler.bind(this) }>
			     	<a className = "innerWrapper">
			     		{ icon ? icon : "" }
					{ text ? text : "" }
			     	</a>
			</li>
		);	
	}
}

BreathChatContextMenuItem.propTypes = {
	showText: React.PropTypes.bool,
	showIcon: React.PropTypes.bool,

	text:  React.PropTypes.string,

	icon: React.PropTypes.shape({
		icon: React.PropTypes.string.isRequired ,
		fontSize: React.PropTypes.number
	}),

	onClickHandler: React.PropTypes.func
};

BreathChatContextMenuItem.defaultProps = {
	showText: true,
	showIcon: true
};

export default BreathChatContextMenuItem;