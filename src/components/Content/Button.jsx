import React from 'react';
import styles from '../../styles/Form.module.css';

function Button() {
	return (
		<>
			<Button type='submit' className={styles.btn}>
				Enviar
			</Button>
		</>
	);
}

export default Button;
