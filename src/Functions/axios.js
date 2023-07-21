import axios from "axios"

const fechaActual  = new Date();

// obtener fecha de peru actual formato

const formatofecha = { timeZone: 'America/Lima' };
const hoy = fechaActual.toLocaleDateString('es-PE', { day: '2-digit', ...formatofecha });
const mes = fechaActual.toLocaleDateString('es-PE', { month: '2-digit', ...formatofecha });
const anio = fechaActual.toLocaleDateString('es-PE', { year: 'numeric', ...formatofecha });

const axiosDias = async (state) => {
    const peticion = await axios.get(`https://api.apis.net.pe/v1/tipo-cambio-sunat?fecha=${anio}-${mes}-${hoy}`)
    state(peticion.data.results)
} 

export {
    axiosDias
}