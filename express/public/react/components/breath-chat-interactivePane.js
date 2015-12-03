let React = require( "react" );

import Icon from "./breath-chat-icon";
import Textarea from "./breath-chat-textarea";

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

		return (
			<div className = "breath-chat-interactivePane">
				<ul className = "toolBar">
					<li className = "iconWrapper"> <Icon {...expressionIconProps}/> </li>
					<li className = "iconWrapper"> <Icon {...fileIconProps}/> </li>
				</ul>

				<div className = "textareaWrapper">
					<Textarea />
				</div>
			</div>
		);
	}
}

export default InteractivePane;