let React = require( "react" );
let ReactDOM = require( "react-dom" );

let MAX_SINGLE_TAP_INTERVAL = 320; // ms
let MAX_SINGLE_TAP_OFFSET = 10;

module.exports= React.createClass({
	propTypes: {
		onTapHandler: function( props, propName, componentName ){
		},

		onDoubleTapHandler: function( props, propName, componentName ){

		},
	},

	touchInfor: {
		touchStartPoint: null,
		touchStartDate: null,
		tap: {
			count: 0,
			timeoutID: null
		}
	},

	onTapHandler: function( evt ){
		this.props.onTapHandler && this.props.onTapHandler( evt );
	},

	onDoubleTapHandler: function( evt ){
		this.props.onDoubleTapHandler && this.props.onDoubleTapHandler( evt );
	},

	onTouchStartHandler: function( evt ){
		this.touchInfor.touchStartPoint = {
			x: evt.targetTouches[0].pageX,
			y: evt.targetTouches[0].pageY
		};

		this.touchInfor.touchStartDate  = Date.now();
	},

	onTouchMoveHandler: function( evt ){
	},

	onTouchEndHandler: function( evt ){
		// deal with tap events , such as single tap event and double tap event
		if( evt.changedTouches.length == 1 ){
			let touchEndPoint = {
				x: evt.changedTouches[0].pageX,
				y: evt.changedTouches[0].pageY
			};

			let touchOffset = Math.sqrt( Math.pow( touchEndPoint.x - this.touchInfor.touchStartPoint.x, 2 ) + 
							Math.pow( touchEndPoint.y - this.touchInfor.touchStartPoint.y, 2 ));
			if(  Date.now() - this.touchInfor.touchStartDate <= MAX_SINGLE_TAP_INTERVAL &&
				touchOffset <= MAX_SINGLE_TAP_OFFSET ){

				tapEventDispatch.call( this, ++this.touchInfor.tap.count, evt );
			}else{
				clearTimeout( this.touchInfor.tap.timeoutID );
				resetTapEvent.call(this);
			}
		}

		function tapEventDispatch( tapCount, evt ){
			clearTimeout( this.touchInfor.tap.timeoutID );
			switch( tapCount ){
				case 1:
					this.touchInfor.tap.timeoutID = setTimeout(function(){
						this.onTapHandler( evt );
						resetTapEvent.call(this);
					}.bind(this), MAX_SINGLE_TAP_INTERVAL );
					break;

				case 2: 
					this.touchInfor.tap.timeoutID = setTimeout(function(){
						this.onDoubleTapHandler( evt );
						resetTapEvent.call(this);
					}.bind(this), MAX_SINGLE_TAP_INTERVAL );
					break;

				default:
					this.touchInfor.tap.timeoutID = setTimeout(function(){
						resetTapEvent.call(this);
					}.bind(this), MAX_SINGLE_TAP_INTERVAL );
			}
		}

		function resetTapEvent(){
			this.touchInfor.tap = {
				count: 0,
				timeoutID: null
			};
		}
	},

	render: function(){
		return (
			<div 	className = "breath-chat-gesturePane"
				onTouchStart = {this.onTouchStartHandler}
				onTouchMove = {this.onTouchMoveHandler}
				onTouchEnd = {this.onTouchEndHandler} >

				{this.props.children}
			</div>
		);
	}
});