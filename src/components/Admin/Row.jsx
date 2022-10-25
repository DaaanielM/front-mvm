import React, { useState } from 'react';
import styles from '../../styles/Admin.module.css';

import { deleteSolicitud, updateSolicitud } from '../../services/FormAxios';
import { Button } from '@mui/material';
import { format, parse, parseISO } from 'date-fns';

function Row({ item, reloadData }) {
	const [form, setForm] = useState({
		FechaRespuesta: item.FechaRespuesta
			? format(new Date(item.FechaRespuesta), 'yyyy-MM-dd')
			: '',
		IDResponsable: item.IDResponsable ? item.IDResponsable : '',
		IDEstado: item.IDEstado,
	});

	const changeForm = (field, value) => {
		setForm({
			...form, //se copia el estado actual del formulario
			[field]: value, //se actualiza el valor del campo que se está modificando
		});
	};

	const submit = async (id) => {
		await updateSolicitud(form, id);
		alert('Solicitud actualizada');
	};

	const handleDelete = async (id) => {
		await deleteSolicitud(id);
		await reloadData();
	};

	return (
		<tr>
			<th>{item.Radicado}</th>
			<td className={styles.mensaje}>{item.Descripcion}</td>
			<td>{item.FechaSolicitud}</td>
			<td>
				<input
					type='date'
					className={styles.date}
					onChange={(e) =>
						changeForm('FechaRespuesta', e.target.value)
					}
					value={form.FechaRespuesta}
				/>
			</td>
			<td>
				<input
					type='text'
					className={styles.input}
					value={form.IDResponsable}
					placeholder='ID Responsable'
					onChange={(e) =>
						changeForm('IDResponsable', e.target.value)
					}
				/>
			</td>
			<td className={styles.mensaje}>{item.CorreoSolicitante}</td>
			<td>{item.NombreSolicitante}</td>
			<td>{item.ApellidoSolicitante}</td>
			<td>{item.TelefonoSolicitante}</td>
			<td>{item.NombreEmpresa}</td>
			<td>{item.IdTipoSolicitud}</td>
			<td>
				<input
					type='text'
					placeholder='ID Estado'
					value={form.IDEstado}
					// value={item.IDEstado}
					className={styles.input}
					onChange={(e) => changeForm('IDEstado', e.target.value)}
				/>
			</td>
			<td className={styles.actions}>
				<Button variant='text' onClick={() => submit(item.IDSolicitud)}>
					Editar
				</Button>
				<Button
					variant='text'
					color='error'
					onClick={() => handleDelete(item.IDSolicitud)}>
					Eliminar
				</Button>
			</td>
		</tr>
	);
}

export default Row;
