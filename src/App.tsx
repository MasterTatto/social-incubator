import React from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';

import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Settings/Setings';
import { stateType } from './redux/state';
//
export type indexTypeProps = {
	appState: stateType;
	// addPost: (s: string) => void;
	// addMessages: (mes: string) => void;
	dispatch: (d: any) => void;
};
//
const App = (props: indexTypeProps) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Aside />
			<div className='app-wrapper-content'>
				<Route
					path='/dialogs'
					render={() => {
						return (
							<Dialogs
								state={props.appState.messagesPage}
								// addMessages={props.addMessages}
								dispatch={props.dispatch}
								// messages={props.appState.messagesPage.messages}
								// dialogs={props.appState.messagesPage.dialogs}
							/>
						);
					}}
				/>
				<Route
					path='/profile'
					render={() => {
						return (
							<Profile
								profilePage={props.appState.profilePage}
								// addPost={props.addPost}
								dispatch={props.dispatch}
							/>
						);
					}}
				/>
				<Route path='/news' component={News} />
				<Route path='/music' component={Music} />
				<Route path='/setings' component={Setings} />
			</div>
		</div>
	);
};
export default App;
