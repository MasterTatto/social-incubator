import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { profilePageType } from './../../redux/state';
//
export type indexTypeProps = {
	profilePage: profilePageType;
	addPost:(v:string) => void
	
};
//

const Profile = (props: indexTypeProps) => {


	return (
		<div>
			<ProfileInfo />
			<MyPosts profilePage={props.profilePage} addPost={props.addPost}/>
		</div>
	);
};
export default Profile;
