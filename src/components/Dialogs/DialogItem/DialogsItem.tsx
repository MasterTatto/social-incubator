import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './../dialogs.module.css';
//
export type dialogItemTypeProps = {
	name: string;
	id: string;
};
//

//
const DialogItem = (props: dialogItemTypeProps) => {
	return (
		<div className={d.dialog}>
			<NavLink activeClassName={d.active} to={`${'/dialogs/'}${props.id}`}>
				{props.name}
			</NavLink>
		</div>
	);
};
//
export default DialogItem;
