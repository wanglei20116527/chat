let React = require( "react" );

let Icon = require( "./breath-chat-icon" );
let Textarea = require( "./breath-chat-textarea" );
let GesturePane = require( "./breath-chat-gesturePane" );

const ICON_WIDTH  = 30;
const ICON_HEIGHT = 30;

module.exports = React.createClass({

	onExpressionButtonTapHandler: function( evt ){
		alert( "wanglei is cool and kang is wanglei best friend" );
	},	

	onAddtionalButtonTapHandler: function( evt ){
		alert( "wanglei is cool and houna is cute" );
	},

	render: function(){
		let expressionButtonProps = {
			width: ICON_WIDTH,
			height: ICON_HEIGHT,
			icon: "images/icon/iconfont-arrow02add.png"
		};

		let additionalButtonProps = {
			width: ICON_WIDTH,
			height: ICON_HEIGHT,
			icon: "images/icon/iconfont-iconfontuntitled92.png"
		};

		return (
			<div className = "breath-chat-interactivePane">
				<div className = "toolBar">
					<Textarea />

					<GesturePane onTapHandler = {this.onExpressionButtonTapHandler} >
						<Icon {...expressionButtonProps} />
					</GesturePane>

					<GesturePane onTapHandler = {this.onAddtionalButtonTapHandler}>
						<Icon  {...additionalButtonProps}/>
					</GesturePane>
				</div>

				<div className = "contentPane">
					<h1>wanglei is cool</h1>
				</div>
			</div>
		);
	}	
});