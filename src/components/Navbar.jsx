import Link from 'next/link';
import React from 'react';

function Navbar(props) {
    return (
        <div className="navbar bg-base-100 z-50" >
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/dia">Valor de Hoy</Link>
            </li>
            <li>
              <Link href="/mes">Valor de todo el mes</Link>
            </li>
            <li>
              <Link href="/themes">Configuracion</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost normal-case text-xl" href="/">¿Cuanto Vale el Dolar?</Link>
      </div>
      <div className="navbar-end">
      </div>
    </div>
    );
}

export default Navbar;