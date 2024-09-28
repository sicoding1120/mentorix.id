import Footer from "@/frontends/components/footer";
import Navbar from "@/frontends/components/navbar";
import React from "react";

const Privacy = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex justify-center items-center bg-bgprivacy bg-cover bg-center bg-no-repeat h-2/3">
        <h1 className="md:text-5xl text-3xl font-bold text-white">Kebijakan Privasi</h1>
      </div>
      <div className="md:px-12 px-4 py-12">
        <div className="flex flex-col gap-4 rounded-md border-2 border-color-primary w-full h-full p-8">
          <span className="text-sm">Berlaku efektif : 12 september 2024</span>
          <p className="text-lg">
            Mentorix menyadari pentingnya keamanan Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officia, similique qui iste sunt
            architecto ullam perspiciatis laudantium obcaecati provident
            accusamus repellat fugiat doloribus illo ad aut nemo maxime, porro
            possimus reprehenderit aperiam alias! Quasi, neque?
          </p>

          <h2 className="text-3xl font-semibold"> Lorem, ipsum.</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            molestiae nisi quidem totam sequi iure, alias sapiente tempora? Sed
            alias corrupti pariatur eius, iusto similique necessitatibus cumque
            qui veniam numquam nihil laboriosam libero nesciunt deserunt
            laudantium quae, recusandae commodi vel architecto odio accusamus
            culpa tempora? Quos quaerat ipsa earum maxime.
          </p>
          <ul className="list-disc px-4 text-lg">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quam possimus aperiam vel voluptas reprehenderit?
              Expedita illum debitis aliquid iste.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quam possimus aperiam vel voluptas reprehenderit?
              Expedita illum debitis aliquid iste.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quam possimus aperiam vel voluptas reprehenderit?
              Expedita illum debitis aliquid iste.
            </li>
          </ul>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            voluptatibus, quaerat blanditiis tenetur autem tempora molestias
            itaque dolor ipsum quae! Exercitationem officia eligendi labore
            pariatur aspernatur. Dicta autem unde quasi pariatur id? Sapiente,
            laudantium, molestiae modi repudiandae nesciunt dignissimos dolores
            beatae aliquam veritatis quia eius porro. Laboriosam voluptatibus
            animi modi esse repellendus.
          </p>
          <h2 className="text-3xl font-semibold">
            Lorem ipsum dolor sit.
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dicta aspernatur harum magnam aperiam ducimus, in nostrum odio exercitationem explicabo vel, minima earum, velit unde repellat eos voluptates ullam? Porro error esse iure tenetur iusto natus obcaecati magnam laborum a quod? Consectetur temporibus mollitia numquam voluptatibus reiciendis? Possimus, fugiat cumque.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
