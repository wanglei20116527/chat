let React = require("react");

module.exports = React.createClass({
	propTypes: {
		// properties
		color: React.PropTypes.string,
		fontSize: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
		fontFamily: React.PropTypes.string,
		fontWeight: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
		width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
		height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]) , 
		align: React.PropTypes.oneOf(["left", "right", "center", "justify"]),
		background: React.PropTypes.string,
		content: React.PropTypes.string,

		// action
		onClickHandler: React.PropTypes.func
	},

	getDefaultProps: function(){
		return {
			color: "#bdbdbd",
			fontSize: "13px",
			fontFamily: "Times New Roman",
			fontWeight: "normal",
			width: "auto",
			height: "1em",
			align: "left",
			background: "white"
		};
	},

	onClickHandler: function(evt){
		console.log("wanglei is cool and kang is wanglei best friend");
		console.log("houna is cute");
		this.props.onClickHandler && this.props.onClickHandler.call(this, evt);
	},

	render: function(){
		let style = {
			width: this.props.width + " !important",
			height: this.props.height + " !important",
			color: this.props.color + " !important",
			fontSize: this.props.fontSize + " !important",
			fontWeight: this.props.fontWeight + " !important",
			fontFamily: this.props.fontFamily + " !important",
			textAlign: this.props.align + " !important",
			background: this.props.background + " !important",
			lineHeight: this.props.height + "!important"
		};

		return (
			<p className = "breath-label"  style = {style} onClick = {this.onClickHandler}>
				{this.props.content}
			</p>
		);
	}
});