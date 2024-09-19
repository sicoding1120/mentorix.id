import React, { useEffect, useState } from "react";
import CardDemo from "./card";
import useSWR from "swr";
import { Tabs, Tab } from "@nextui-org/react";
import { useIcons } from "@/hook/useIcons";
import { useData } from "@/hook/useData";
import PaginationElement from "./pagination";
import { useRouter } from "next/router";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const Class = () => {
  const { icons } = useIcons();
  const { menu } = useData();
  const [data, setData] = useState<any>();
  // const { data, error, isLoading } = useSWR(
  //   "/api/class",
  //   fetcher
  // );

  const router = useRouter();
  useEffect(() => {
    const ClassesData = async () => {
      const res = await fetch("/api/class");
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
      <section className="w-full h-1/3 bg-white flex flex-col gap-6 justify-between items-center">
        <div className="w-full h-2/3 py-8 flex flex-col justify-center items-center">
          <h2 className="text-6xl font-semibold ">mentorix kelas</h2>
          <p className="w-2/5 text-center text-slate-400">
            MENTORIX menyediakan berbagai macam kelas yang sudah berbasis
            industri untuk meningkatkan keterampilan digital kamu.
          </p>
        </div>
      </section>
      <section className="w-full h-full bg-color-coursesTopic flex gap-8 px-4 py-8">
        <SideBarClass />
        <div className="flex w-4/5 h-full flex-col gap-16 pl-12 justify-center">
          <div className="w-full h-full grid grid-cols-3 ">
            {data ? (
              // data?.data?.datas.map((items: any, index: number) => (
              //   <CardDemo
              //     key={index}
              //     title={items.title}
              //     level={items.difficultyLevel}
              //     lesson={items.lesson}
              //     time={items.time}
              //     price={items.price}
              //     discountPrice={items.discountPrice}
              //   />
              // ))
              <>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
              </>
            ) : (
              <>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
                <div className="flex w-[300px] h-[450px] flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/2"></div>
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
    <div className="sticky top-3 w-1/5 h-full py-4 px-4 bg-white border-2 rounded-md ">
      <Accordion>
        <AccordionItem title="Filter Class">
          <div className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <p>Javascript</p>
          </div>
        </AccordionItem>
        <AccordionItem title="Menu Class">
          <div className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <p>Javascript</p>
          </div>
        </AccordionItem>
        <AccordionItem title="Level Class">
          <div className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <p>Basic</p>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <p>Intermediate</p>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <p>Advance</p>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <p>Expert</p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Class;
