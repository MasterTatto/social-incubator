import { v1 } from 'uuid';

export type StoreType = {
	_state: stateType;
	getState: () => void;
	_callSubscriber: (state: stateType) => void;
	_addPost: (postMessage: string) => void;
	_addMessages: (mes: string) => void;
	subscribe: (observer: (state: stateType) => void) => void;
	dispatch: (action: any) => void;
};

let store: StoreType = {
	_state: {
		profilePage: {
			posts: [
				{ id: v1(), message: 'Hi, how are you?', likeCount: ' like 192' },
				{ id: v1(), message: "It's me first post", likeCount: ' like 13' },
				{ id: v1(), message: 'NULL', likeCount: ' like 23' },
				{ id: v1(), message: 'Yes Yes', likeCount: ' like 123' },
				{ id: v1(), message: 'No No', likeCount: ' like 3' },
			],
		},
		messagesPage: {
			dialogs: [
				{ name: 'Alex', id: v1() },
				{ name: 'Andry', id: v1() },
				{ name: 'Nastya', id: v1() },
				{ name: 'Artem', id: v1() },
				{ name: 'Bob', id: v1() },
			],
			messages: [
				{ id: v1(), message: 'hi' },
				{ id: v1(), message: 'How is your learning react?' },
				{ id: v1(), message: 'Yo' },
				{ id: v1(), message: 'Yo bro' },
				{ id: v1(), message: 'You wanna to go walk' },
			],
		},
	},
	//
	subscribe(observer: (state: stateType) => void) {
		this._callSubscriber = observer;
		this._callSubscriber(this._state);
	},
	//
	_callSubscriber(state: stateType) {},
	//
	getState() {
		return this._state;
	},
	//
	_addPost(postMessage: string) {
		let newPost = { id: v1(), message: postMessage, likeCount: ' like 0' };
		this._state.profilePage.posts.unshift(newPost);
		this._callSubscriber(this._state);
	},
	//
	_addMessages(mes: string) {
		let newMessage = { id: v1(), message: mes };
		this._state.messagesPage.messages.push(newMessage);
		this._callSubscriber(this._state);
	},
	dispatch(action: any) {
		if (action.type === 'ADD-POST') {
			this._addPost(action.postMessage);
			// let newPost = { id: v1(), message: postMessage, likeCount: ' like 0' };
			// this._state.profilePage.posts.unshift(newPost);
			// this._callSubscriber(this._state);
		} else if (action.type === 'ADD-MESSAGES') {
			let newMessage = { id: v1(), message: action.mes };
			this._state.messagesPage.messages.push(newMessage);
			this._callSubscriber(this._state);
		}
	},
};
//
// let rerenderEntireTree = (state: stateType) => {};
// //
// export let subscribe = (observer: (state: stateType) => void) => {
// 	rerenderEntireTree = observer;
// 	rerenderEntireTree(state);
// };
//
export type PostsType = {
	id: string;
	message: string;
	likeCount: string;
};
//
export type MessagesType = {
	id: string;
	message: string;
};
//
export type DialogsType = {
	name: string;
	id: string;
};
//
export type profilePageType = {
	posts: Array<PostsType>;
};
//
export type messagespagesType = {
	dialogs: Array<DialogsType>;
	messages: Array<MessagesType>;
};
//
export type stateType = {
	profilePage: profilePageType;
	messagesPage: messagespagesType;
};
//
// let state: stateType = {
// 	profilePage: {
// 		posts: [
// 			{ id: v1(), message: 'Hi, how are you?', likeCount: ' like 192' },
// 			{ id: v1(), message: "It's me first post", likeCount: ' like 13' },
// 			{ id: v1(), message: 'NULL', likeCount: ' like 23' },
// 			{ id: v1(), message: 'Yes Yes', likeCount: ' like 123' },
// 			{ id: v1(), message: 'No No', likeCount: ' like 3' },
// 		],
// 	},
// 	messagesPage: {
// 		dialogs: [
// 			{ name: 'Alex', id: v1() },
// 			{ name: 'Andry', id: v1() },
// 			{ name: 'Nastya', id: v1() },
// 			{ name: 'Artem', id: v1() },
// 			{ name: 'Bob', id: v1() },
// 		],
// 		messages: [
// 			{ id: v1(), message: 'hi' },
// 			{ id: v1(), message: 'How is your learning react?' },
// 			{ id: v1(), message: 'Yo' },
// 			{ id: v1(), message: 'Yo bro' },
// 			{ id: v1(), message: 'You wanna to go walk' },
// 		],
// 	},
// };
//
// export let addMessages = (mes: string) => {
// 	let newMessage = { id: v1(), message: mes };
// 	state.messagesPage.messages.push(newMessage);
// 	rerenderEntireTree(state);
// };
// //
// export let addPost = (postMessage: string) => {
// 	let newPost = { id: v1(), message: postMessage, likeCount: ' like 0' };
// 	state.profilePage.posts.unshift(newPost);
// 	rerenderEntireTree(state);
// };
//

//

// export let updateNewPostText = (newText: string) => {
// 	state.profilePage.newPostText = newText;
// 	rerenderEntireTree(state);
// };
// export default state;
export default store;
