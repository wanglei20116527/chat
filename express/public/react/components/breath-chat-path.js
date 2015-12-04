let React = require("react");

class BreathChatPath extends React.Component{
	render(){
		return (
			<path fill={this.props.fill} d={this.props.d}></path>
		);
	}
}

BreathChatPath.propTypes = {
	d  : React.PropTypes.string.isRequired,
	fill: React.PropTypes.string  
};

export default BreathChatPath;