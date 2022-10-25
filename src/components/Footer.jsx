import React from 'react';
import LogoFooter from '../assets/mvm-footer.png';
import Fb from '../assets/facebook.png';
import Tw from '../assets/twitter.png';
import Lk from '../assets/linkedin.png';
import styles from '../styles/Footer.module.css';

function Footer() {
	return (
		<footer className={styles.mainFooter}>
			<div className={styles.logo}>
				<img src={LogoFooter} alt='logo' />
			</div>
			<div className={styles.copy}>
				<p>
					MVM Ingeniería de Software &copy; 2022. Todos los derechos
					reservados
				</p>
			</div>
			<div className={styles.redes}>
				<a
					href={'https://www.facebook.com/MVMingenieria'}
					target='_blank'>
					<img src={Fb} alt='' />
				</a>
				<a href={'https://twitter.com/MVMIngenieria'} target='_blank'>
					<img src={Tw} alt='' />
				</a>

				<a
					href={'https://www.linkedin.com/company/mvmingsoftware/'}
					target='_blank'>
					<img src={Lk} alt='' />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
