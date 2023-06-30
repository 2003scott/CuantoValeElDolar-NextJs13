"use client";
import React from "react";

function Dia({titulo,valor,fecha}) {
  // const router = useRouter();

  return (
    <div className="stats shadow w-full h-full p-6 m-2" >
      <div className="stat">
        <div className="stat-title">{titulo}</div>
        <div className="stat-value">{valor}</div>
        <div className="stat-desc">{fecha}</div>
      </div>
    </div>
  );
}

export default Dia;
