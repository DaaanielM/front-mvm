import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Title from '../Content/Title';
import styles from '../../styles/Admin.module.css';
import {
	getSolicitud,
	deleteSolicitud,
	updateSolicitud,
} from '../../services/FormAxios';
import Button from '@mui/material/Button';
import Row from './Row';

function Admin() {
	const [list, setList] = useState([]);
	const loadSolicitud = async () => {
		const datos = await getSolicitud();
		console.log(datos.data[0]);
		setList(datos.data[0]);
	};

	// useEffect es un hook que se ejecuta cuando el componente se renderiza
	useEffect(() => {
		loadSolicitud();
	}, []);

	return (
		<>
			<Nav title='Cerrar Sesión' />

			<Title title='Administrador de solicitudes' />
			<div className={styles.container}>
				<table className={styles.table}>
					<thead className={styles.fields}>
						<tr>
							<th>Radicado</th>
							<th>Mensaje</th>
							<th>Fecha Solicitud</th>
							<th>Fecha Respuesta</th>
							<th>Responsable</th>
							<th>Correo</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Télefono</th>
							<th>Empresa</th>
							<th>Tipo de Solicitud</th>
							<th>Estado</th>
							<th>Acciones</th>
						</tr>
					</thead>

					<tbody className={styles.data}>
						{list.map((item) => (
							<Row
								item={item}
								key={item.IDSolicitud}
								reloadData={loadSolicitud}
							/>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default Admin;
