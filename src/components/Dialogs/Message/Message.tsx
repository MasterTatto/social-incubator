import React from 'react';
import d from './../dialogs.module.css';
//

//
export type MessageItemTypeProps = {
	message: string;
};
//

const Message = (props: MessageItemTypeProps) => {
	return <div className={d.message}>{props.message}</div>;
};
//

export default Message;
