import React, { KeyboardEvent, useState } from 'react';
import { indexTypeProps } from '../Profile';

import ProfileStyle from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props: indexTypeProps) => {
	//

	let postElements = props.profilePage.posts.map((post) => {
		return (
			<Post message={post.message} likeCount={post.likeCount} key={post.id} />
		);
	});

	let [value, setValue] = useState('');
	//
	const outSpace = value.trim();
	//
	const onKeyPressInput = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter' && outSpace) {
			props.dispatch({ type: 'ADD-POST', postMessage: outSpace });
			setValue('');
		}
	};

	return (
		<div className={ProfileStyle.posts}>
			<div className={ProfileStyle.nav_a}>
				<h3>My post</h3>
			</div>
			<div>New post</div>
			<div>
				<div>
					<textarea
						onKeyPress={onKeyPressInput}
						value={value}
						onChange={(e) => setValue(e.currentTarget.value)}
					></textarea>
				</div>
				<button
					onClick={() => {
						if (outSpace) {
							props.dispatch({ type: 'ADD-POST', postMessage: outSpace });
							setValue('');
						}
					}}
				>
					Add post
				</button>
			</div>
			{postElements}
		</div>
	);
};
export default MyPosts;
