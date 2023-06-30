import Meses from '@/Components/Meses';
import React from 'react';

const fechaActual  = new Date();

// obtener fecha de peru actual formato

const formatofecha = { timeZone: 'America/Lima' };
const mes = fechaActual.toLocaleDateString('es-PE', { month: '2-digit', ...formatofecha });
const anio = fechaActual.toLocaleDateString('es-PE', { year: 'numeric', ...formatofecha });

async function DolarMes() {
        const  res = await fetch(`https://api.apis.net.pe/v1/tipo-cambio-sunat?year=${anio}&month=${mes}`)
        console.log(res.ok,res.status) 
        const data = await res.json()
        return data

    // console.log(data)

}


async function MesPage() {

    const meses = await DolarMes()
    // console.log(meses)

    return (
        <div className='container mx-auto block pt-3 pb-5'>
            <Meses meses={meses} />
            {/* {JSON.stringify(meses)}  */}
            
        </div>
    );
}

export default MesPage;