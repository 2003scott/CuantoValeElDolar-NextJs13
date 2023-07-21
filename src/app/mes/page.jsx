"use client";
import Meses from '@/components/Meses';
import React from 'react';

const fechaActual  = new Date();

// obtener fecha de peru actual formato

const formatofecha = { timeZone: 'America/Lima' };
const mes = fechaActual.toLocaleDateString('es-PE', { month: '2-digit', ...formatofecha });
const anio = fechaActual.toLocaleDateString('es-PE', { year: 'numeric', ...formatofecha });

async function DolarMes() {
        try{
        const  res = await fetch(`https://api.apis.net.pe/v1/tipo-cambio-sunat?year=${anio}&month=${mes}`)
        const textdata = await res.text()
        console.log(textdata)
        console.log("hola bebesita")
        const data = JSON.parse(textdata);
        return data;
        }

    // console.log(data)

    catch(e){
        console.log(e.message)
        return 
      }

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