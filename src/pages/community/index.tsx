import NavbarEl from "@/frontends/components/navbar";
import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { PiPlugChargingBold } from "react-icons/pi";

const Community = () => {
  return (
    <section className="w-full h-full">
      <NavbarEl />
      <div className="w-full h-[50vh] bg-bgblog bg-cover bg-center">
        <div className="w-full h-full bg-color-primary/50 flex justify-center items-center">
          <div className=" w-1/3 flex flex-col gap-3 text-center">
            <h1 className="text-5xl text-white font-bold capitalize ">
              komunitas sosial
            </h1>
            <p className=" text-slate-300 text-lg">
              bergabung di beberapa komunitas yang ada di mentorix untuk
              mengetahui berbagai informasi tentang dunia IT
            </p>
            <label className="input input-bordered flex items-center gap-2 w-full h-14">
              <input type="text" className="grow" placeholder="Search" />
              <FaSearch size={16} />
            </label>
          </div>
        </div>
      </div>
      <div className="w-full px-14 py-8 flex flex-col gap-14 bg-[#f9f9f9f9]">
       
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-color-primary rounded-xl flex justify-center items-center">
              <BsFillLightningChargeFill size={18} className="text-white" />
            </div>
            <p className="text-xl font-semibold capitalize">komunitas sosial</p>
          </div>
          <div className="w-full h-full grid grid-cols-4 gap-4">
            <CardCom />
            <CardCom />
            <CardCom />
            <CardCom />
            <CardCom />
            <CardCom />
            <CardCom />
            <CardCom />
            <CardCom />
          </div>
        </div>
      </div>
    </section>
  );
};

const CardCom = () => {
  return (
    <div className="w-full flex flex-col gap-4 h-[210px] border border-transparent hover:scale-105 hover:border-2 hover:border-color-primary transition-all bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center">
        <div className="w-12 h-12 bg-red-500 rounded-md"></div>
        <button className="px-2 py-1 h-10 rounded-lg border-color-primary border-2 flex gap-2 items-center capitalize font-semibold">
          <PiPlugChargingBold />
          hubungkan
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-semibold capitalize">figma</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          quasi ex eum saepe. Reprehenderit nihil voluptas
        </p>
      </div>
    </div>
  );
};

export default Community;
