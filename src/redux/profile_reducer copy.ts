import { v1 } from 'uuid';
import { stateType } from './state';
const ADD_POST = 'ADD-POST';
//
export const addPostActionCreater = (outSpace: string) => {
	return {
		type: ADD_POST,
		postMessage: outSpace,
	};
};
//
const profileReducer = (state: stateType, action: any) => {
	if (action.type === ADD_POST) {
		let newPost = {
			id: v1(),
			message: action.postMessage,
			likeCount: ' like 0',
		};
		state.profilePage.posts.unshift(newPost);
	}
	return state;
};
export default profileReducer;
