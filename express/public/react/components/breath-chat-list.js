let React = require( 'react' );

import ListItem from "./breath-chat-list-item";

class BreathChatList extends React.Component{
	render(){
		let className = this.props.className +  " breath-chat-list";
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

BreathChatList.defaultProps  = {
	className: ""
};

export default BreathChatList;