import React from "react";
import { FaChartPie, FaMedal, FaSearch } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";

const LearningPage = () => {
  return (
    <section className="w-full md:h-[110vh] h-full flex justify-center bg-black/5 px-14 py-36">
      <div className="flex flex-col gap-14 items-center">
        <div className="md:w-1/2 w-full flex flex-col gap-8 justify-center items-center">
          <h2 className="text-4xl font-bold">Learning Process</h2>
          <p className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            soluta, dolorum tempore quod a, magnam unde temporibus provident,
            deleniti itaque exercitationem.
          </p>
        </div>
        <div className="flex gap-8 md:flex-row flex-col ">
          <div className="w-[300px] h-[350px] bg-white rounded-2xl flex flex-col gap-6 p-6 hover:border-2 hover:border-color-accent hover:scale-110 transition-all">
            <div className="w-14 h-14 bg-color-accent rounded-xl flex justify-center items-center">
              <FaSearch size={24} className="text-white" />
            </div>
            <h5 className="text-2xl capitalize font-bold">cari kelas</h5>
            <p className="text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis impedit culpa quaerat odio ratione voluptas fugiat
              excepturi corporis! Obcaecati blanditiis est{" "}
            </p>
          </div>
          <div className="w-[300px] h-[350px] bg-white rounded-2xl flex flex-col gap-6 p-6 hover:border-2 hover:border-color-accent hover:scale-110 transition-all">
            <div className="w-14 h-14 bg-color-accent rounded-xl flex justify-center items-center">
              <IoVideocamOutline size={30} className="text-white" />
            </div>
            <h5 className="text-2xl capitalize font-bold">tonton video</h5>
            <p className="text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis impedit culpa quaerat odio ratione voluptas fugiat
              excepturi corporis! Obcaecati blanditiis est{" "}
            </p>
          </div>
          <div className="w-[300px] h-[350px] bg-white rounded-2xl flex flex-col gap-6 p-6 hover:border-2 hover:border-color-accent hover:scale-110 transition-all">
            <div className="w-14 h-14 bg-color-accent rounded-xl flex justify-center items-center">
              <FaChartPie size={24} className="text-white" />
            </div>
            <h5 className="text-2xl capitalize font-bold">ujian online</h5>
            <p className="text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis impedit culpa quaerat odio ratione voluptas fugiat
              excepturi corporis! Obcaecati blanditiis est{" "}
            </p>
          </div>
          <div className="w-[300px] h-[350px] bg-white rounded-2xl flex flex-col gap-6 p-6 hover:border-2 hover:border-color-accent hover:scale-110 transition-all">
            <div className="w-14 h-14 bg-color-accent rounded-xl flex justify-center items-center">
              <FaMedal size={24} className="text-white" />
            </div>
            <h5 className="text-2xl capitalize font-bold">sertifikasi</h5>
            <p className="text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis impedit culpa quaerat odio ratione voluptas fugiat
              excepturi corporis! Obcaecati blanditiis est{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPage;
