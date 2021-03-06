import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { addMessagesActionCreater } from '../../redux/messages_reducer';
import { messagespagesType } from './../../redux/state';
import d from './../Dialogs/dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
//
type messagesTypeProps = {
	state: messagespagesType;
	dispatch: (mes: any) => void;
};
//
const Dialogs = (props: messagesTypeProps) => {
	let dialogsElements = props.state.dialogs.map((dialog) => {
		return <DialogItem name={dialog.name} id={dialog.id} />;
	});
	//

	let messagesElements = props.state.messages.map((mes) => {
		return <Message message={mes.message} />;
	});

	//
	const [value, setValue] = useState('');
	const noSpace = value.trim();
	const addMes = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setValue(e.currentTarget.value);
	const onKeyPressValue = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter' && noSpace) {
			props.dispatch(addMessagesActionCreater(value));
			setValue('');
		}
	};
	//
	return (
		<div className={d.dialogs}>
			<div className={d.dialogs_item}>
				<div className={d.dialogs_items}>{dialogsElements}</div>
				<div className={d.messages}>{messagesElements}</div>
			</div>
			<div className={d.send}>
				<textarea
					value={value}
					onChange={addMes}
					className={d.area}
					onKeyPress={onKeyPressValue}
					placeholder={'Enter your message...'}
				></textarea>
				<button
					onClick={() => {
						props.dispatch(addMessagesActionCreater(value));
						setValue('');
					}}
					className={d.btn}
				>
					Send
				</button>
			</div>
		</div>
	);
};
export default Dialogs;
