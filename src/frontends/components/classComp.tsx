import React, { useEffect, useState } from "react";
import CardDemo from "./card";
import { useIcons } from "@/hook/useIcons";
import { useData } from "@/hook/useData";
import PaginationElement from "./pagination";
import { useRouter } from "next/router";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Link from "next/link";

const Class = () => {
  const { icons } = useIcons();
  const { menu } = useData();
  const [data, setData] = useState<any>();
  

  const router = useRouter();
  useEffect(() => {
    const ClassesData = async () => {
      const res = await fetch("https://mentorixid.vercel.app/api/class");
      const data = await res.json();
      setData(data as Promise<any>);
    };
    ClassesData();
  }, []);

  console.log(data);

  const [page, setPage] = React.useState(1);
  const [category, setCategory] = React.useState("All categories");
  return (
    <main className="w-full h-full">
      <section className="w-full h-1/3 skeleton bg-blue-100 flex flex-col gap-6 justify-between items-center">
        <div className="w-full h-[60vh] py-8 px-4 flex flex-col gap-8 justify-center items-center">
          <h2 className="md:text-6xl text-3xl font-semibold text-center">Jelajahi Koridor Kelas!</h2>
          <p className="md:w-2/5 text-center text-slate-400 text-lg w-full">
            MENTORIX menyediakan berbagai macam kelas yang sudah berbasis
            industri untuk meningkatkan keterampilan digital kamu.
          </p>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered md:w-auto w-full"
            />
            <Link href={"#koridor"} className="btn btn-success text-white">
              jelajah
            </Link>
          </div>
        </div>
      </section>
      <section
        className="w-full h-full bg-white flex md:flex-row flex-col justify-between gap-8 md:px-24 px-4 py-8"
        id="koridor"
      >
        <SideBarClass />
        <div className="flex w-4/5 h-full flex-col gap-16 pl-8 justify-center md:py-24">
          <div className="w-full h-full grid md:grid-cols-3 gap-16 grid-cols-1">
            {data ? (
              data?.data?.datas.map((items: any, index: number) => (
                <CardDemo
                  key={index}
                  title={items.title}
                  level={items.difficultyLevel}
                  lesson={items.lesson}
                  time={items.time}
                  price={items.price}
                  discountPrice={items.discountPrice}
                />
              ))
            ) : (
              <>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton bg-blue-100 h-32 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-28"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton bg-blue-100 h-32 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-28"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton bg-blue-100 h-32 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-28"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton bg-blue-100 h-32 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-28"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton bg-blue-100 h-32 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-28"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton bg-blue-100 h-32 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-28"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton bg-blue-100 h-32 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-28"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton bg-blue-100 h-32 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-28"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-full"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                  <div className="skeleton bg-blue-100 h-4 w-1/2"></div>
                </div>
              </>
            )}
          </div>
          <div className="w-full flex justify-center">
            <PaginationElement
              page={page}
              onchange={(newpage: number) => {
                setPage(newpage);
                router.push(
                  `?page=${newpage}&pageSize=10&category=${category}`
                );
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export const SideBarClass = () => {
  return (
    <div className="sticky top-4 md:w-1/5 h-full w-full py-4 my-24 px-4 bg-blue-100 border-2 rounded-md">
      <h2 className="text-2xl font-medium px-2">Filter Kelas</h2>
      <Accordion>
        <AccordionItem title="Topik">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <input type="checkbox" id="Semua" />
              <label htmlFor="Semua">Semua</label>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" id="Web Development" />
              <label htmlFor="Web Development">Web Development</label>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" id="Mobile Development" />
              <label htmlFor="Mobile Development">Mobile Development</label>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" id="IoT" />
              <label htmlFor="IoT">IoT</label>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem title="Menu">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <input type="checkbox" id="BootCamp" />
              <label htmlFor="BootCamp">BootCamp</label>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" id="Challange" />
              <label htmlFor="Challange">Challange</label>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" id="Quiz" />
              <label htmlFor="Quiz">Quiz</label>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem title="Level">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <input type="checkbox" id="Basic" />
              <label htmlFor="Basic">Basic</label>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" id="Intermediate" />
              <label htmlFor="Intermediate">Intermediate</label>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" id="Advance" />
              <label htmlFor="Advance">Advance</label>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" id="Expert" />
              <label htmlFor="Expert">Expert</label>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Class;
