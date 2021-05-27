import React from 'react';
import p from './profileInfo.module.css';
const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img
					className={p.content_logo}
					src='https://sfccapital.com/public/post-banner/banner_1513593687.jpg'
					alt=''
				/>
			</div>
			<div className={p.profile}>
				<img
					className={p.profile_img}
					src='https://fito-center.ru/uploads/posts/2020-02/thumbs/1580789991_kitty-photo-1152x864.jpg'
					alt=''
				/>
				+ discription
			</div>
		</div>
	);
};

export default ProfileInfo;
