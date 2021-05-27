import React from 'react';
import { NavLink } from 'react-router-dom';
import AsideStyle from './Aside.module.css';

const asideItem: asideItemType = {
	profile: 'Profile',
	message: 'Message',
	news: 'News',
	music: 'Music',
	settings: 'Settings',
};
type asideItemType = {
	profile: string;
	message: string;
	news: string;
	music: string;
	settings: string;
};

const Aside = () => {
	return (
		
		<nav className={AsideStyle.nav}>
			<ul>
				<li className={AsideStyle.nav_li}>
					<NavLink
						activeClassName={AsideStyle.active}
						to='/profile'
						className={`${AsideStyle.nav_a}`}
					>
						{asideItem.profile}
					</NavLink>
				</li>
				<li className={AsideStyle.nav_li}>
					<NavLink
						to='/dialogs'
						activeClassName={AsideStyle.active}
						className={AsideStyle.nav_a}
					>
						{asideItem.message}
					</NavLink>
				</li>
				<li className={AsideStyle.nav_li}>
					<NavLink
						to='/news'
						activeClassName={AsideStyle.active}
						className={AsideStyle.nav_a}
					>
						{asideItem.news}
					</NavLink>
				</li>
				<li className={AsideStyle.nav_li}>
					<NavLink
						to='/music'
						activeClassName={AsideStyle.active}
						className={AsideStyle.nav_a}
					>
						{asideItem.music}
					</NavLink>
				</li>
				<li className={AsideStyle.nav_li}>
					<NavLink
						to='/setings'
						activeClassName={AsideStyle.active}
						className={AsideStyle.nav_a}
					>
						{asideItem.settings}
					</NavLink>
				</li>
				
			</ul>
			<div className={AsideStyle.asideF}>
		<p className={`${AsideStyle.nav_a} `}>Friends</p>
		<div className={AsideStyle.box_img}>
			<img
				className={AsideStyle.img}
				src='https://drdavidrosner.com/files/2020/02/shutterstock_315520139_1582769031_i10290565351.jpg'
				alt=''
			/>
			<img
				className={AsideStyle.img}
				src='https://im0-tub-by.yandex.net/i?id=bb5e269dd03519c061c618c3a8bcc5e2&n=13'
				alt=''
			/>
			<img
				className={AsideStyle.img}
				src='https://www.atitudemais.com.br/_media/af879_vendedor---atitudemais.jpg'
				alt=''
			/>
		</div>
	</div>
		</nav>
		

	);
};
export default Aside;
