import Navbar from "@/frontends/components/navbar";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

const MateriClass = ({ data, id,title }: { data: any; id?:string | number| any, title:string | any }) => {
  const judulClass = title
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-screen md:px-12 px-6 md:py-24 py-12">
        <div className="flex md:flex-row flex-col-reverse gap-8 ">
          <div className="md:w-3/4 w-full h-[85vh] overflow-scroll scrollbar-default scroll-b flex flex-col gap-12 border-2 rounded-md p-4 md:p-12">
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
          <div className="md:w-1/4 w-full flex flex-col p-4 border-2 md:h-[85vh] h-full overflow-scroll scrollbar-hide rounded-md">
            
            <Accordion defaultExpandedKeys={["1"]}>
              <AccordionItem key='1' aria-label="Accordion 1" title={"Materi Kelas"}>
                <ul className="list-disc flex flex-col gap-4 pl-6">
              {
                data?.materiList?.map((title: any) => (
                  <Link href={`/courses/class/${judulClass}/learn/${title}`} key={title} className="hover:text-blue-500 cursor-pointer">{title}</Link>
                ))
              }
            </ul>
              </AccordionItem>
              <AccordionItem aria-label="Accordion 2" title={"ujian Akhir kelas"}></AccordionItem>
              <AccordionItem aria-label="Accordion 2" title={"selesai"}>
                <ul className="list-disc flex flex-col gap-4 pl-6">
                  <li>terima sertifikat mu dari mentorix</li>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateriClass;
