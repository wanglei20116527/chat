let React = require( "react" );

class BreathChatListItem extends React.Component{
	onClickHandler( evt ){
		this.props.onClickHandler && this.props.onClickHandler( evt );
	}

	render(){
		let className = this.props.className + " breath-chat-list-item";

		return (
			<li className = { className } 
			     onClick = { this.onClickHandler.bind(this) }>
				{this.props.children}
			</li>
		);
	}
};

BreathChatListItem.propTypes = {
	className: React.PropTypes.string,
	onClickHandler: React.PropTypes.func
};

BreathChatListItem.defaultProps = {
	className: ""
};

export default BreathChatListItem;