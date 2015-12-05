let React = require( "react" );

class BreathChatListItem extends React.Component{
	onClickHandler( evt ){
		this.props.onClickHandler && this.props.onClickHandler( evt );
	}

	render(){
		let props = {
			onClick: this.onClickHandler.bind(this),
			className: "breath-chat-list-item " + ( this.props.className || "" ),
		};

		return (
			<li {...props}>
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