import React from "react";
import { render } from "react-dom";

import Router from "./routers/breath-chat-router";

render(
	<Router />,
	document.getElementById( "breath-chat" )
);
