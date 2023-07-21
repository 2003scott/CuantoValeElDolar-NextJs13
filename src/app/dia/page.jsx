import Dia from "@/components/Dia";
import React from "react";
import axios from "axios";

const fechaActual = new Date();

// obtener fecha de peru actual formato

const formatofecha = { timeZone: "America/Lima" };
const hoy = fechaActual.toLocaleDateString("es-PE", {
  day: "2-digit",
  ...formatofecha,
});
const mes = fechaActual.toLocaleDateString("es-PE", {
  month: "2-digit",
  ...formatofecha,
});
const anio = fechaActual.toLocaleDateString("es-PE", {
  year: "numeric",
  ...formatofecha,
});

async function dolarDia() {
  try {
    const res = await axios.get(
      `https://api.apis.net.pe/v1/tipo-cambio-sunat?fecha=${anio}-${mes}-${hoy}`
    );
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

async function DiaPage() {
  const dias = await dolarDia();

  return (
    <div className="container mx-auto text-center pt-28 ">
      {dias !== null ? (
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
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
          </div>
        </div>
      ) : (
        <span className="text-white bg-black p-5">No hay Datos</span>
      )}
    </div>
  );
}

export default DiaPage;
