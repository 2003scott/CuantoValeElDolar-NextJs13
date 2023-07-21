"use client";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function Meses({ meses }) {
  //   const router = useRouter();

  const conponenPDF = useRef();

  const generatePDF= useReactToPrint({
    content : ()=>conponenPDF.current,
    documentTitle: "Dolarmes",
    onAfterPrint:() =>alert("PDF GENERADO")
  })

  return (
    <>
    <div ref={conponenPDF} style={{width:"100%"}}>
      <div className="overflow-x-auto">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr> 
              <th className="font-bold">Compra</th>
              <th>Venta</th>
              <th>Origen</th>
              <th>Moneda</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {meses !== null ? meses.map((mes) => (
                  <tr className="hover" key={mes.fecha}>
                    <td>{mes.compra}</td>
                    <td>{mes.venta}</td>
                    <td>{mes.origen}</td>
                    <td>{mes.moneda}</td>
                    <td>{mes.fecha}</td>
                  </tr>
                ))
              : ("No hay datos para cargar")}
          </tbody>
        </table>
      </div>
      </div>
      <div className="pt-5">
          <button className="btn btn-block" onClick={generatePDF}>Imprimir Datos</button>
        </div>
      </>

      
      
  );
}

export default Meses;
