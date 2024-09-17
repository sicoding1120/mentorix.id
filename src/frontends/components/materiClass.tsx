import Navbar from "@/frontends/components/navbar";
import React from "react";

const MateriClass = ({ data }: { data: any }) => {
  const materi = data.data.classes.map((data: any) => data);
  console.log(materi);
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-screen px-12 pt-24">
        <div className="flex gap-8 ">
          <div className="w-3/4 h-[85vh] overflow-scroll scrollbar-default scroll-b flex flex-col gap-12 border-2 rounded-md p-12">
            <h1 className="text-3xl font-bold">Pengantar Kelas</h1>
            <p className="text-lg text-slate-500">
              Dikelas ini, Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Incidunt odit exercitationem corporis sapiente, voluptatum
              accusamus expedita sunt voluptatem illo voluptas laborum est
              consectetur neque, blanditiis quam inventore perferendis modi
              optio?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              eius officiis quisquam dolorum quae quasi vel dicta nesciunt
              obcaecati inventore fuga unde? Minus commodi aut adipisci,
              exercitationem, doloremque eius id officiis delectus laborum quae
              similique blanditiis corporis esse, magnam vero distinctio?
              Maxime!
            </p>
            <ul className="list-disc font-semibold px-4">
              <li>materi 1</li>
              <li>materi 2</li>
              <li>materi 3</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              rerum. Ea neque architecto non nihil. Excepturi eveniet nam,
              ducimus impedit expedita ipsum natus repudiandae rem id at dicta
              suscipit a autem deserunt.
            </p>
            <p>
              Sudah siap? Yuk, kencangkan sabuk Anda untuk lanjut ke materi
              selanjutnya!
            </p>
            <button className="btn btn-success text-white w-48">
              lihat materi
            </button>
          </div>
          {/* bikin sidebar */}
          <div className="w-1/4 flex flex-col p-4 border-2 h-[85vh] overflow-scroll scrollbar-hide rounded-md">
            <ul className="list-disc flex flex-col gap-4 pl-6">
              {materi.map((data: any) =>
                data.materiList.map((title: any) => (
                  <li key={title}>{title}</li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateriClass;
