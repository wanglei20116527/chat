let React = require("react");

let BreathChatPath = require("./breath-chat-path");

module.exports =  React.createClass({
	propTypes:{
		width  : React.PropTypes.number.isRequired ,
		height : React.PropTypes.number.isRequired ,
		d           : React.PropTypes.string.isRequired     ,
		fill         : React.PropTypes.string      	
	},

	getDefaultProps: function(){
		return {
			width : 7,
			height: 12,
			fill : "#F4F4F4",
			d : "M9,1c0,0-9-0.188-9,0.047s0,1.875,0,1.875L9,11"
		};
	},

	render: function(){
		return (
			<svg className = {this.props.className} width = {this.props.width + "px"} height = {this.props.height + "px"} xmlns="http://www.w3.org/2000/svg">
				<BreathChatPath fill = {this.props.fill} d = {this.props.d} />
			</svg>
		);
	}
})