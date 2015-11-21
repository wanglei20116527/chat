let React = require( 'react' );
let ReactDOM = require('react-dom');

const MAX_TAP_INTERVAL = 250; // ms

let menuOriginPoint = null; // menu origin point
let touchStartPoint = null;
let touchStartDate  = null;

let tapCount = 0;
let timeoutID = null;

module.exports= React.createClass({
	onTouchStartHandler: function( evt ){
		evt.preventDefault();
		evt.stopPropagation();

		if( evt.targetTouches.length == 1 ){
			let menu = ReactDOM.findDOMNode( this.refs.movableMenu );
			let top = parseInt( menu.style.top );
			let left = parseInt( menu.style.left );

			menuOriginPoint = {
				x: left ? left : 0,
				y: top ? top: 0
			};

			touchStartPoint = {
				x: evt.targetTouches[0].pageX,
				y: evt.targetTouches[0].pageY
			};

			touchStartDate  = Date.now();
		}
	},

	onTouchMoveHandler: function( evt ){
		evt.preventDefault();
		evt.stopPropagation();

		if( evt.targetTouches.length == 1 ){
			let touchCurtPoint = {
				x: evt.targetTouches[0].pageX,
				y: evt.targetTouches[0].pageY
			};

			let menu = ReactDOM.findDOMNode( this.refs.movableMenu );

			menu.style.top =  ( touchCurtPoint.y - touchStartPoint.y + menuOriginPoint.y ) + "px" ;
			menu.style.left  = ( touchCurtPoint.x - touchStartPoint.x  + menuOriginPoint.x ) + "px";
		}
	},

	onTouchEndHandler: function( evt ){
		evt.preventDefault();
		evt.stopPropagation();

		if( evt.changedTouches.length == 1 ){
			let touchEndPoint = {
				x: evt.changedTouches[0].pageX,
				y: evt.changedTouches[0].pageY
			};

			let menu = ReactDOM.findDOMNode( this.refs.movableMenu );

			menu.style.top =  ( touchEndPoint.y - touchStartPoint.y + menuOriginPoint.y ) + "px" ;
			menu.style.left  = ( touchEndPoint.x - touchStartPoint.x  + menuOriginPoint.x ) + "px";

			let touchMoveOffset =Math.sqrt( Math.pow( touchEndPoint.x - touchStartPoint.x , 2)  + Math.pow( touchEndPoint.y - touchStartPoint.y,  2)  )  ;

			if( Date.now() - touchStartDate <= MAX_TAP_INTERVAL  && touchMoveOffset <= 10 ){
				tapCount++;

				if( tapCount == 1 ){
					timeoutID = setTimeout(function(){
						this.onTapHandler();
						tapCount = 0;
						timeoutID = null;
					}.bind(this), MAX_TAP_INTERVAL);
				}else if( tapCount == 2 ){
					clearTimeout( timeoutID );
					timeoutID = setTimeout(function(){
						this.onDoubleTapHandler();
						tapCount = 0;
						timeoutID = null;
					}.bind(this), MAX_TAP_INTERVAL);
				}else{
					clearTimeout( timeoutID );
					timeoutID = setTimeout(function(){
						tapCount = 0;
						timeoutID = null;
					}.bind(this), MAX_TAP_INTERVAL);
				}

			}else{
				timeoutID != null && clearTimeout( timeoutID );
				tapCount = 0;
			}
		}
	},

	onTapHandler: function( evt ){
		if( document.documentElement.webkitRequestFullScreen ){
			document.documentElement.webkitRequestFullScreen();
			alert(1);
		}else{
			alert(2);
		}
	},

	onDoubleTapHandler: function( evt ){
		if( document.body.requestFullScreen ){
			alert( "houna is cute" );
			document.body.webkitRequestFullScreen();
		}else{
			alert( "houna is cute1");
		}
	},

	render: function(){
		return (
			<div        ref = "movableMenu"
			                className = "breath-chat-movableMenu"
				onTouchStart   = {this.onTouchStartHandler}
				onTouchMove = {this.onTouchMoveHandler}
				onTouchEnd    = {this.onTouchEndHandler} >

				<div className = "">
					<i className = "icon"></i>
				</div>
				
				<navigator>
					<ul>
						<li>
							<a href = "#">full screen</a>
						</li>
					</ul>
				</navigator>
			</div>
		)
	}
});