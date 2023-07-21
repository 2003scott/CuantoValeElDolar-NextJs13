import Link from "next/link";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://www.enter.co/wp-content/uploads/2022/12/dolar-digital-768x432.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">EL DOLAR SEGUN SUNAT</h1>
          <p className="mb-5">
            Valor de dia y de todo el mes del tipo de compra y venta del dolar
            en el Peru segun Sunat
          </p>
          <Link href="/dia">
            <button className="btn btn-primary">Ver el Precio de hoy</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
