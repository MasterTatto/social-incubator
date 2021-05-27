import React from 'react';
import HeaderStyle from './Header.module.css';


// const headerItem: headerItemType = {
// 	img:
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/320px-Playstation_logo_colour.svg.png',
// };
// type headerItemType = {
// 	img: string;
// };


const Header = () => {
	return (
		<header className={HeaderStyle.header}>
			<img className={HeaderStyle.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/320px-Playstation_logo_colour.svg.png' alt='' />
		</header>
	);
};
export default Header;
