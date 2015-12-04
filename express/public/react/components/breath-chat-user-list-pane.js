let React = require( "react" );

import UserList from "./breath-chat-user-list";

class UserListPane extends React.Component{
	componentDidMount(){
		console.log( "wanglei is cool and kang is wanglei best friend " );			
	}

	componentWillUnmount(){
		console.log( "wanglei is cool and houna is cute" );
	}

	render(){
		let className = "breath-chat-userListPane";

		return (
			<div className = { className } ref = "userListPane">
				<div className = "headerBar">
					
				</div>

				<div className = "userListArea">
					<UserList />
				</div>
			</div>
		);
	}
}

export default UserListPane;