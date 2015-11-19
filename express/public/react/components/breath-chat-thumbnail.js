let React = require("react");

module.exports = React.createClass({
	propTypes: function(){
		// url: React.PropTypes.string.isRequired,
	},

	getDefaultProps: function(){
		return {
			url: "images/cd3ed493551d79846b19dc2a50de3cad.png",
		};
	},

	render: function(){
		return (
			<figure className = "breath-chat-thumbnail">
				<img  className = "image" src = {this.props.url}/>
			</figure>
		);
	}
});