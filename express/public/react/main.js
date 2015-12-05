let React = require("react");
let ReactDOM = require( "react-dom" );

let  jquery = require( 'jquery' );
require(  'jquery.scrollbar');

debugger;

import BreathChat from "./components/breath-chat";

ReactDOM.render(
	<BreathChat />,
	document.getElementById( "breath-chat" )
);
