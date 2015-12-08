let React = require( "react" );
let ReactDOM = require( "react-dom" );

import ToolPane from "./breath-chat-toolPane";
import ContactPane from "./breath-chat-contact-pane";
import CommunicatePane from "./breath-chat-communicatePane";

class BreathChat extends React.Component{
	componentDidMount(){
		let chatNode =  ReactDOM.findDOMNode( this.refs.chat );
		let toolPaneNode = ReactDOM.findDOMNode( this.refs.toolPane );
		let contactPaneNode = ReactDOM.findDOMNode( this.refs.contactPane );
		let communicatePaneNode = ReactDOM.findDOMNode( this.refs.communicatePane );

		let communicatePaneStyle = document.defaultView.getComputedStyle( communicatePaneNode, null );
		
		chatNode.style.height = communicatePaneStyle.height;
		toolPaneNode.style.height = communicatePaneStyle.height;
		contactPaneNode.style.height = communicatePaneStyle.height;
	}

	render(){
		return (
			<div className = "breath-chat" ref = "chat">
				<ToolPane ref = "toolPane" />
				<ContactPane ref = "contactPane"/>
				<CommunicatePane ref = "communicatePane" />
			</div>
		)
	}
};

export default BreathChat;
