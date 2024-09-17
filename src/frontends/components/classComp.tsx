import React from "react";
import CardDemo from "./card";
import useSWR from "swr";
import { Tabs, Tab } from "@nextui-org/react";
import { useIcons } from "@/hook/useIcons";
import { useData } from "@/hook/useData";
import PaginationElement from "./pagination";
import { useRouter } from "next/router";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Class = () => {
  const { icons } = useIcons();
  const { menu } = useData();
  const { data, error, isLoading } = useSWR(
    "https://my-app-one-pi-53.vercel.app/api/class",
    fetcher
  );
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const [category, setCategory] = React.useState("All categories");
  return (
    <main className="w-full h-full">
      <section className="w-full h-1/3 bg-white flex flex-col gap-6 justify-between items-center">
        <div className="w-full h-2/3 py-8 flex justify-center items-center">
          <h2 className="text-6xl font-semibold ">Courses</h2>
        </div>
        <div className="w-full flex justify-between items-center px-16">
          <div className="flex gap-3 justify-center items-center ">
            <div className=" border-slate-200 flex  items-center">
              <icons.search />
            </div>
          </div>
          <Tabs
            variant={"underlined"}
            aria-label="Tabs variants"
            onSelectionChange={(title) => {
              setCategory(title as string);
              setPage(1);
              router.push(
                `?page=${page - page + 1}&pageSize=10&category=${title}`
              );
            }}
          >
            {menu.courses.map((items, index) => (
              <Tab
                key={items.title}
                title={items.title}
                className="text-md font-semibold"
              />
            ))}
          </Tabs>
          <div className="flex gap-8 ">
            <div className="flex ">
              <icons.window size={20} />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full bg-color-coursesTopic flex flex-col gap-16 items-center p-8">
        <div className="w-full h-full grid grid-cols-4 gap-8">
          {isLoading && <div>Loading...</div>}
          {data &&
            data.data.classes.map((items: any, index: number) => (
              <CardDemo
                key={index}
                title={items.title}
                level={items.difficultyLevel}
                lesson={items.lesson}
                time={items.time}
                price={items.price}
                discountPrice={items.discountPrice}
              />
            ))}
        </div>
        <PaginationElement
          page={page}
          onchange={(newpage: number) => {
            setPage(newpage);
            router.push(`?page=${newpage}&pageSize=10&category=${category}`);
          }}
        />
      </section>
    </main>
  );
};

export default Class;
