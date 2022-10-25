import React from 'react';
import styles from '../../styles/Header.module.css';
import Logo from '../../assets/tarjeta-madre.png';
import { Link } from 'react-router-dom';

function Header(props) {
	const { title } = props;
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<a href='#' className={styles.navlogo}>
					<img src={Logo} className={styles.image} />
				</a>
				<ul className={styles.navmenu}>
					<li className={styles.navitem}>
						<Link to='/' className={styles.navlink}>
							<span>{title}</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
