import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { profilePageType } from './../../redux/state';
//
export type indexTypeProps = {
	profilePage: profilePageType;
	dispatch:(v:any) => void
	
};
//

const Profile = (props: indexTypeProps) => {


	return (
		<div>
			<ProfileInfo />
			<MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
		</div>
	);
};
export default Profile;
