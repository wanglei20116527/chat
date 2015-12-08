// import components
import Icon from "./breath-chat-icon";
import Textarea from "./breath-chat-textarea";

import MessageAction from "../actions/breath-chat-message-action";

let React = require( "react" );

const ICON_WIDTH = 20;
const ICON_HEIGHT = 20;

class InteractivePane extends React.Component{
	render(){
		let expressionIconProps = {
			icon: "icon-picture"
		};

		let fileIconProps = {
			icon: "icon-file-alt"
		};

		let textareaProps = {
			onKeyUpHandler: function( evt ){
				evt.preventDefault();
				
				let message = evt.target.value.trim();

				// enter key is pressed
				if( evt.keyCode == 13 && message ){
					evt.target.value = "";
					MessageAction.createMessage( message );
				}
			}
		};

		return (
			<div className = "breath-chat-interactivePane">
				<ul className = "toolBar">
					<li className = "iconWrapper"> <Icon {...expressionIconProps}/> </li>
					<li className = "iconWrapper"> <Icon {...fileIconProps}/> </li>
				</ul>

				<div className = "textareaWrapper">
					<Textarea {...textareaProps} />
				</div>
			</div>
		);
	}
}

export default InteractivePane;