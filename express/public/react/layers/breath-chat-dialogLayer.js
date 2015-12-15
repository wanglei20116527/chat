import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import UnderScore from 'underscore';

import DialogStore from '../stores/breath-chat-dialog-store';

import Constants from '../constants/breath-chat-constants';

//import dialog
import AddUserDialog from '../components/breath-chat-addUserDialog';

const EventConstants = Constants.Event;

const DialogTypes = Constants.Dialog;

class BreathChatDialogLayer extends React.Component {
	constructor( ...args ){
		super( ...args );

		this.state = {
			type: DialogTypes.NONE,
			position: {
				x: 0,
				y: 0
			}
		};
	}

	componentDidMount(){
		let events = [
			{
				store: DialogStore,
				name: EventConstants.SHOW_DIALOG,
				callback: this.updateDialog.bind( this )			
			}
		];

		UnderScore.each(events, function( evt ){
			evt.store.on( evt.name, evt.callback );
		});
	}

	componentWillUnmount(){
		let events = [
			{
				store: DialogStore,
				name: EventConstants.SHOW_DIALOG		
			}
		];

		UnderScore.each(events, function( evt ){
			evt.store.removeListener( evt.name );
		});
	}

	updateDialog(){
		this.setState({
			type: DialogStore.getDialogType() ,
			position: DialogStore.getPosition()
		});
	}

	render(){
		let dialog = null;
		let show  = true;

		switch( this.state.type ){
			case DialogTypes.ADD_USER_DIALOG :
				dialog = (
					<ReactCSSTransitionGroup transitionName = 'stretch'  	transitionAppear={true} 
												transitionAppearTimeout= {500}  
												transitionEnterTimeout={500} 
												transitionLeaveTimeout={300}>
						<AddUserDialog key = '1'/>
					</ReactCSSTransitionGroup>
				);
				break;

			default:
				show = false;
		}

		let layerProps = {
			className: 'breath-chat-layer dialog-layer',
			style: {
				width  : show ? '100%' : 0,
				height : show ? '100%' : 0
			}
		};

		return(
			<div { ...layerProps }>
				{ dialog || "" }
			</div>
		);
	}
}

export default BreathChatDialogLayer;