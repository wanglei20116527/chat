let React = require("react");

import InteractivePane from "./breath-chat-interactivePane";
let MessageContainer = require("./breath-chat-message-container");

class BreathChatCommunicatePane extends React.Component{
	componentDidMount(){
		console.log( "wanglei is cool and houna is cute" );
	}

	onMouseMovehandler( evt ){

	}

	onMouseDownHandler( evt ){
		// console.log( "wanglei is cool" );

		console.log( evt.currentTarget );

		if( window.captureEvents ){
			window.captureEvents( Event.MOUSEMOVE | Event.MOUSEUP );
		}
	}

	onMouseUpHandler( evt ){
		// console.log( "houna is cute" );

		if( window.releaseCapture ){
			window.releaseEvents( Event.MOUSEMOVE | Event.MOUSEUP );
		}
		// evt.currentTarget.releaseCapture();
		// 
	}

	render(){
		return (
			<div 	className = "breath-chat-communicatePane"
				/*onMouseMove = {this.onMouseMovehandler.bind(this) } 
				onMouseDown = {this.onMouseDownHandler.bind(this) }
				onMouseUp = {this.onMouseUpHandler.bind(this) }*/>

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