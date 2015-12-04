let React = require( "react" );
let ReactDOM = require( "react-dom" );

import ToolPane from "./breath-chat-toolPane";
import UserListPane from "./breath-chat-user-list-pane";
import CommunicatePane from "./breath-chat-communicatePane";

class BreathChat extends React.Component{
	componentDidMount(){
		let chatNode =  ReactDOM.findDOMNode( this.refs.chat );
		let toolPaneNode = ReactDOM.findDOMNode( this.refs.toolPane );
		let userListPaneNode = ReactDOM.findDOMNode( this.refs.userListPane );
		let communicatePaneNode = ReactDOM.findDOMNode( this.refs.communicatePane );

		let communicatePaneStyle = document.defaultView.getComputedStyle( communicatePaneNode, null );
		
		chatNode.style.height = communicatePaneStyle.height;
		toolPaneNode.style.height = communicatePaneStyle.height;
		userListPaneNode.style.height = communicatePaneStyle.height;
	}

	render(){
		return (
			<div className = "breath-chat" ref = "chat">
				<ToolPane ref = "toolPane" />
				<UserListPane ref = "userListPane"/>
				<CommunicatePane ref = "communicatePane" />
			</div>
		)
	}
};

export default BreathChat;
