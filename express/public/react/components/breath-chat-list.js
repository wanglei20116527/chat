let React = require( 'react' );

import ListItem from "./breath-chat-list-item";

class BreathChatList extends React.Component{
	render(){
		let className =   "breath-chat-list " + ( this.props.className || "");
		return (
			<ul className = { className }>
				{this.props.children}
			</ul>
		);
	}
}

BreathChatList.propTypes = {
	className: React.PropTypes.string
};

export default BreathChatList;