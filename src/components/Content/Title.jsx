import React from 'react';
import styles from '../../styles/Title.module.css';
function Title(props) {
	const { title } = props;
	return (
		<div className={styles.box}>
			<h1 className={styles.title}>{title}</h1>
		</div>
	);
}

export default Title;
