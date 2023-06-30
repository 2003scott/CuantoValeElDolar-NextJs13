import Dia from "@/Components/Dia";
import React from "react";

const fechaActual  = new Date();

// obtener fecha de peru actual formato

const formatofecha = { timeZone: 'America/Lima' };
const hoy = fechaActual.toLocaleDateString('es-PE', { day: '2-digit', ...formatofecha });
const mes = fechaActual.toLocaleDateString('es-PE', { month: '2-digit', ...formatofecha });
const anio = fechaActual.toLocaleDateString('es-PE', { year: 'numeric', ...formatofecha });

async function DolarDia() {
    const res = await fetch(
      `https://api.apis.net.pe/v1/tipo-cambio-sunat?fecha=${anio}-${mes}-${hoy}`
    );
    console.log(res.ok, res.status);
    const data = await res.json();
    return data;
  // console.log(data)
}

async function DiaPage() {
  const dias = await DolarDia();

  return (
    <div className="container mx-auto text-center pt-28 ">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          {dias ? (
            <div className="artboard artboard-demo phone-1">
              <Dia
                titulo="Valor de Compra Hoy"
                valor={dias.compra}
                fecha={dias.fecha}
              ></Dia>
              {dias.origen}
              <Dia
                titulo="Valor de Venta Hoy"
                valor={dias.venta}
                fecha={dias.fecha}
              ></Dia>
            </div>
          ) : (
            "No hay Datos"
          )}
        </div>
      </div>
      {/* {JSON.stringify(dias)}  */}
    </div>
  );
}

export default DiaPage;