import Theme from "@/components/Theme";
import React from "react";

function page() {
  return (
    <div className="container mx-auto min-h-screen">
      <h2 id="">
        <a aria-hidden="true" tabindex="-1" href="#">
          <span className="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">
            #
          </span>
        </a>
        Lista de Temas
      </h2>
      Pruébalos:
      <div className="rounded-box grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {/* Hilera 1 */}
        <Theme tema="light"></Theme>
        <Theme tema="dark"></Theme>
        <Theme tema="cupcake"></Theme>
        <Theme tema="bumblebee"></Theme>
        <Theme tema="bumblebee"></Theme>
        {/* Hilera 2 */}
        <Theme tema="corporate"></Theme>
        <Theme tema="synthwave"></Theme>
        <Theme tema="retro"></Theme>
        <Theme tema="cyberpunk"></Theme>
        <Theme tema="valentine"></Theme>
        {/* Hilera 3 */}
        <Theme tema="halloween"></Theme>
        <Theme tema="garden"></Theme>
        <Theme tema="forest"></Theme>
        <Theme tema="aqua"></Theme>
        <Theme tema="lofi"></Theme>
        {/* Hilera 4 */}
        <Theme tema="pastel"></Theme>
        <Theme tema="fantasy"></Theme>
        <Theme tema="wireframe"></Theme>
        <Theme tema="black"></Theme>
        <Theme tema="luxury"></Theme>
        {/* Hilera 5 */}
        <Theme tema="dracula"></Theme>
        <Theme tema="cmyk"></Theme>
        <Theme tema="autumn"></Theme>
        <Theme tema="business"></Theme>
        <Theme tema="acid"></Theme>
        {/* Hilera 6 */}
        <Theme tema="lemonade"></Theme>
        <Theme tema="night"></Theme>
        <Theme tema="coffee"></Theme>
        <Theme tema="winter"></Theme>
      </div>
    </div>
  );
}

export default page;
