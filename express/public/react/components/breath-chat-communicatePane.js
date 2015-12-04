let React = require("react");

import InteractivePane from "./breath-chat-interactivePane";
import MessageContainer from "./breath-chat-message-container";

class BreathChatCommunicatePane extends React.Component{
	componentDidMount(){
	}

	onMouseMovehandler( evt ){

	}

	onMouseDownHandler( evt ){

		// if( window.captureEvents ){
		// 	window.captureEvents( Event.MOUSEMOVE | Event.MOUSEUP );
		// }
	}

	onMouseUpHandler( evt ){
		// console.log( "houna is cute" );

		// if( window.releaseCapture ){
		// 	window.releaseEvents( Event.MOUSEMOVE | Event.MOUSEUP );
		// }
		// evt.currentTarget.releaseCapture();
		// 
	}

	render(){
		return (
			<div className = "breath-chat-communicatePane">
				<div className = "headerBar">
					<span>wanglei is cool and houna is cute</span>
				</div>

				<div className = "messageArea">
					<MessageContainer />
				</div>

				<div className = "interactiveArea">
					<InteractivePane />
				</div>
			</div>
		);
	}
}

export default BreathChatCommunicatePane;