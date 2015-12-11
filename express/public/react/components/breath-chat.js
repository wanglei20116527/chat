let React = require( "react" );
let ReactDOM = require( "react-dom" );

import Navigator from "./breath-chat-navigator";
import ContactPane from "./breath-chat-contact-pane";
import CommunicatePane from "./breath-chat-communicatePane";

class BreathChat extends React.Component{
	componentDidMount(){
		// let chatNode =  ReactDOM.findDOMNode( this.refs.chat );
		// let sideBarNode = ReactDOM.findDOMNode( this.refs.sideBar );
		// let contactPaneNode = ReactDOM.findDOMNode( this.refs.contactPane );
		// let communicatePaneNode = ReactDOM.findDOMNode( this.refs.communicatePane );

		// let communicatePaneStyle = document.defaultView.getComputedStyle( communicatePaneNode, null );
		
		// chatNode.style.height = communicatePaneStyle.height;
		// sideBarNode.style.height = communicatePaneStyle.height;
		// contactPaneNode.style.height = communicatePaneStyle.height;
	}

	render(){
		return (
			<div className = "breath-chat" ref = "chat">
				<div className = "side-bar" ref = "sideBar">
					<Navigator />
				</div>

				<div className = "content-area">
					{this.props.children}
				</div>
			</div>
		)
	}
};

export default BreathChat;
