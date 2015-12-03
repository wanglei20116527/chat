let React = require( "react" );

import CommunicatePane from "./breath-chat-communicatePane";

class BreathChat extends React.Component{
	render(){
		return (
			<div className = "breath-chat">
				<CommunicatePane />
			</div>
		)
	}
};

export default BreathChat;
