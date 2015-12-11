import React from "react";
import Underscore from "underscore";

class BreathChatThumbnail extends React.Component{
	onClickHandler( evt ){
		this.props.onClickHandler && this.props.onClickHandler( evt );
	}

	render(){
 		let className = "breath-chat-thumbnail "  + ( this.props.className || "" );

		return (
			<figure className = { className } >
				<img  className = "image" 
				            src = { this.props.url } 
				            onClick = { this.onClickHandler.bind(this) }/>
			</figure>
		);
	}
}

BreathChatThumbnail.propTypes = {
	url: React.PropTypes.string.isRequired, 

	onClickHandler: React.PropTypes.func
};

BreathChatThumbnail.defaultProps = {
	url: "images/cd3ed493551d79846b19dc2a50de3cad.png"
};

export default BreathChatThumbnail;