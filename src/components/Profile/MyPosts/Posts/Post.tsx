import React from 'react';
import post from './Post.module.css';

type MyPostsType = {
	message: string;
	likeCount: string;
};
const Post = (props: MyPostsType) => {
	return (
		<div className={post.item}>
			<img className={post.img} src='https://wallpapercave.com/wp/wp3175844.jpg' alt='' />
			<p className={post.p}>{props.message}</p>
			<span className={post.like}>{props.likeCount}</span>
		</div>
	);
};
export default Post;
