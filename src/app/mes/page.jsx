import Meses from "@/components/Meses";
import React from "react";
import axios from "axios";

const fechaActual = new Date();

// obtener fecha de peru actual formato

const formatofecha = { timeZone: "America/Lima" };
const mes = fechaActual.toLocaleDateString("es-PE", {
  month: "2-digit",
  ...formatofecha,
});
const anio = fechaActual.toLocaleDateString("es-PE", {
  year: "numeric",
  ...formatofecha,
});

async function dolarMes() {
  try {
    const res = await axios.get(
      `https://api.apis.net.pe/v1/tipo-cambio-sunat?year=${anio}&month=${mes}`
    );
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

async function MesPage() {
  const meses = await dolarMes();

  return (
    <div className="container mx-auto block pt-3 pb-5">
      <Meses meses={meses} />
    </div>
  );
}

export default MesPage;
