import axios from 'axios';

export const api = `http://localhost:9000/`;

export async function getTipoSolicitud() {
	try {
		const respuesta = await axios({
			method: 'GET',
			url: api + `tipoSolicitud/listar`,
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function getSolicitud() {
	try {
		const respuesta = await axios({
			url: api + `solicitudes/listar`,
			method: 'GET',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function getObtenerSolicitud(id) {
	try {
		const respuesta = await axios({
			url: api + `solicitudes/obtenerSolicitud/` + id,
			method: 'GET',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
export async function addSolicitud(form) {
	try {
		const respuesta = await axios({
			url: api + `solicitudes/crear`,
			method: 'POST',

			data: form,
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function updateSolicitud(form, id) {
	try {
		const respuesta = await axios({
			url: api + `solicitudes/actualizar/` + id,
			method: 'PUT',
			data: form,
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}

export async function deleteSolicitud(id) {
	try {
		const respuesta = await axios({
			url: api + `solicitudes/eliminar/` + id,
			method: 'DELETE',
		});
		return respuesta;
	} catch (error) {
		console.log(error);
	}
}
