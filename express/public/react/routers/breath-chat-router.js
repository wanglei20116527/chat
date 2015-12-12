import React from "react";

import { Router, Route, IndexRoute } from "react-router";

import Chat from "../components/breath-chat";
import CommunicatePane from "../components/breath-chat-communicatePane";

export default class BreathChatRouter extends React.Component{
	render(){
		return (
			<Router>
				<Route path = "/" component = { Chat }>
					<IndexRoute component = { CommunicatePane }  />
					<Route path = "communicate"    component = { CommunicatePane } />
				</Route>
			</Router>
		);
	}
}