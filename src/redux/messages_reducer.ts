import { v1 } from 'uuid';
import { stateType } from './state';
//
const ADD_MESSAGES = 'ADD-MESSAGES';
//
export const addMessagesActionCreater = (value: string) => {
	return {
		type: ADD_MESSAGES,
		mes: value,
	};
};
const messagesReducer = (state: stateType, action: any): stateType => {
	if (action.type === ADD_MESSAGES) {
		let newMessage = { id: v1(), message: action.mes };
		state.messagesPage.messages.push(newMessage);
	}

	return state;
};
export default messagesReducer;
