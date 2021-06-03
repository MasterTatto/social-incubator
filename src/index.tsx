import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { stateType } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
//
function rerenderEntireTree(state: stateType) {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					appState={state}
					dispatch={store.dispatch.bind(store)}
					// addPost={store.addPost.bind(store)}
					// addMessages={store.addMessages.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

//
store.subscribe(rerenderEntireTree);
//
//rerenderEntireTree(store._state);

//posts={state.posts} messages={state.messages} dialogs={state.dialogs}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
