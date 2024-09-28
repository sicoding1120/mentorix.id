import React from "react";
import CardDemo from "./card";

const ContainerClass = () => {
  return (
    <div className="w-full h-full px-6 py-4">
      <div className="bg-base-300 dark:bg-slate-500 rounded-md flex flex-col gap-4 py-4 px-4">
        <h2 className="text-xl font-semibold dark:text-white">Kelas Saya</h2>
        <div className="flex md:flex-row flex-col md:gap-4 gap-4 items-center w-full">
          <CardDemo
            title="Frontend Developer"
            level="Beginner"
            lesson="10 Lesson"
            time={120}
            price={20000}
            discountPrice={10}
          />
          <CardDemo
            title="Backend Developer"
            level="Beginner"
            lesson="10 Lesson"
            time={120}
            price={20000}
            discountPrice={10}
          />
          <CardDemo
            title="Fullstack Developer"
            level="Beginner"
            lesson="10 Lesson"
            time={120}
            price={20000}
            discountPrice={10}
          />
        </div>
        <div className="flex items-center justify-end gap-2">
          <button className="rounded-full w-12 h-12 bg-success flex justify-center items-center text-white font-bold text-xl">
            {" "}
            {"<"}{" "}
          </button>
          <button className="rounded-full w-12 h-12 bg-success flex justify-center items-center text-white font-bold text-xl">
            {" "}
            {">"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerClass;
