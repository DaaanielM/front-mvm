import React from 'react';
import { useState } from 'react';
import styles from '../../styles/Form.module.css';
import { getTipoSolicitud, addSolicitud } from '../../services/FormAxios';
import { useEffect } from 'react';
import swal from 'sweetalert';

function Form() {
	// Alerta cuando envíe la solicitud
	// const mostrarAlerta = () => {
	// 	swall({
	// 		title: 'Solicitud enviada',
	// 		text: 'Su solicitud ha sido enviada con éxito',
	// 		icon: 'success',
	// 		button: 'Aceptar',
	// 	});
	// };

	const [tipoSolicitud, setTipoSolicitud] = useState([]);

	const [form, setForm] = useState({
		NombreSolicitante: '',
		ApellidoSolicitante: '',
		CorreoSolicitante: '',
		TelefonoSolicitante: '',
		NombreEmpresa: '',
		Descripcion: '',
		IdTipoSolicitud: 0,
	});

	//useEffect es un hook que se ejecuta cuando el componente se renderiza
	useEffect(() => {
		//loadTipoSolicitud es una función que se ejecuta cuando el componente se renderiza
		const loadTipoSolicitud = async () => {
			const datos = await getTipoSolicitud();
			console.log(datos);
			if (datos.status === 200) {
				setTipoSolicitud(datos.data[0]);
			}
		};
		loadTipoSolicitud();
	}, []);

	//changeForm es una función que se ejecuta cuando se cambia el valor de un input del formulario y se encarga de actualizar el estado del formulario
	// [field] es una variable que se crea dinámicamente y que toma el valor del atributo name del input que se está modificando y value es el valor que se está ingresando en el input
	const changeForm = (field, value) => {
		setForm({
			...form, //se copia el estado actual del formulario
			[field]: value, //se actualiza el valor del campo que se está modificando
		});
	};
	// Submit es una función que se ejecuta cuando se hace click en el botón de enviar y se encarga de enviar el formulario
	const submit = async (e) => {
		e.preventDefault();
		await addSolicitud(form);
		console.log(form);
		alert('Solicitud enviada');
		e.target.reset();
	};
	return (
		<main className={styles.main}>
			<form className={styles.formBody} onSubmit={submit}>
				<h2 className={styles.type}>Tipo de solicitud</h2>
				<span className={styles.line}></span>
				<select
					// value es el valor que se va a mostrar en el select
					value={form.IdTipoSolicitud}
					className={styles.select}
					id='Solicitud'
					onChange={(e) =>
						//e.target.value es el valor que se está ingresando en el input
						changeForm('IdTipoSolicitud', e.target.value)
					}>
					<option>Asunto</option>
					{tipoSolicitud.map((item) => (
						<option key={item.IDTipo} value={item.IDTipo}>
							{item.TipoSolicitud}
						</option>
					))}
				</select>

				<h2 className={styles.type}>Datos generales</h2>
				<span className={styles.line}></span>
				<div className={styles.mainBoxInput}>
					<div className={styles.boxInput}>
						<label className={styles.formLabel} htmlFor='Nombre'>
							Nombres
						</label>
						<input
							className={styles.formInput}
							type='text'
							id='Nombre'
							//onChange es un evento que se ejecuta cuando se cambia el valor de un input
							onChange={(e) =>
								//e.target.value es el valor que se está ingresando en el input
								changeForm('NombreSolicitante', e.target.value)
							}
						/>
					</div>
					<div className={styles.boxInput}>
						<label className={styles.formLabel} htmlFor='Apellidos'>
							Apellidos
						</label>
						<input
							className={styles.formInput}
							type='text'
							id='Apellidos'
							onChange={(e) =>
								//e.target.value es el valor que se está ingresando en el input
								changeForm(
									'ApellidoSolicitante',
									e.target.value
								)
							}
						/>
					</div>
					<div className={styles.boxInput}>
						<label className={styles.formLabel} htmlFor='Correo'>
							Correo electrónico
						</label>
						<input
							className={styles.formInput}
							type='email'
							id='Correo'
							required
							onChange={(e) =>
								//e.target.value es el valor que se está ingresando en el input
								changeForm('CorreoSolicitante', e.target.value)
							}
						/>
					</div>
					<div className={styles.boxInput}>
						<label className={styles.formLabel} htmlFor='Numero'>
							Número de contacto
						</label>
						<input
							className={styles.formInput}
							type='number'
							id='Numero'
							onChange={(e) =>
								//e.target.value es el valor que se está ingresando en el input
								changeForm(
									'TelefonoSolicitante',
									e.target.value
								)
							}
						/>
					</div>
				</div>
				<label className={styles.formLabel} htmlFor='Empresa'>
					Nombre de la empresa
				</label>
				<input
					className={styles.formInput}
					type='text'
					id='Empresa'
					onChange={(e) =>
						//e.target.value es el valor que se está ingresando en el input
						changeForm('NombreEmpresa', e.target.value)
					}
				/>
				<label className={styles.formLabel} htmlFor='Text'>
					¡Cuéntanos tu necesidad!
				</label>
				<textarea
					className={styles.text}
					id='Text'
					onChange={(e) =>
						//e.target.value es el valor que se está ingresando en el input
						changeForm('Descripcion', e.target.value)
					}></textarea>
				<button className={styles.btn} type='submit'>
					Enviar
				</button>
			</form>
		</main>
	);
}

export default Form;
