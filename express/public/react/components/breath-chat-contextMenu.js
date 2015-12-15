import React from "react";
import ReactDOM from 'react-dom';

class BreathChatContextMenu extends React.Component{
	focusContextMenu(){
		let menuNode = ReactDOM.findDOMNode( this.refs.contextMenu );
		menuNode.focus();
	}

	componentDidMount(){
		this.props.autoFocus && this.focusContextMenu();
	}

	componentDidUpdate(){
		this.props.autoFocus && this.focusContextMenu();
	}

	onBlurHandler( evt ){
		this.props.onBlurHandler && this.props.onBlurHandler( evt );
	}

	onClickHandler( evt ){
		this.props.onClickHandler && this.props.onClickHandler( evt );
	}

	render(){
		let style = {
			top: this.props.y ? this.props.y + "px" : 0 ,
			left: this.props.x ? this.props.x + "px" : 0
		};

		let props = {
			style: style,
			tabIndex: '-1', // hack to give the ul the ability to foucs and blur
			autoFocus: this.props.autoFocus,
			className: "breath-chat-context-menu",
			onBlur: this.onBlurHandler.bind( this ),
			onClick: this.onClickHandler.bind( this ) ,
		}

		return (
			<ul { ...props } ref = 'contextMenu'>
				{this.props.children}
			</ul>
		);
	}
}

BreathChatContextMenu.propTypes = {
	onBlurHandler: React.PropTypes.func,
	onClickHandler: React.PropTypes.func,

	x: React.PropTypes.number.isRequired,
	y: React.PropTypes.number.isRequired,

	autoFocus: React.PropTypes.bool
};

BreathChatContextMenu.defaultProps = {
	autoFocus: false
};

export default BreathChatContextMenu;
