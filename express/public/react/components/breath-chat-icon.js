let React = require("react");

module.exports = React.createClass({
	propTypes: {
		icon:  React.PropTypes.string.isRequired
	},

	getDefaultProps: function(){
		return {
			width: "auto",
			height: "auto"
		};
	},	

	render: function(){
		let style = {
			width: this.props.width,
			height: this.props.height,
			backgroundImage: "url(" + this.props.icon + ")"
		};

		return (
			<i	className = "breath-chat-icon" 
				style = { style }>
			</i>
		);
	}
});