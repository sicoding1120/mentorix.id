"use client";
import Link from "next/link";
import React from "react";

const HeroSection = () => (
  <section className="md:bg-bg1 bg-cover bg-center bg-no-repeat md:h-screen h-[110vh] w-full md:px-14 px-4">
    <Topic />
  </section>
);

const Topic = () => (
  <div className="w-full h-full flex justify-center items-center md:px-24">
    <div className="flex flex-col gap-8 justify-center items-center">
      <h1 className="md:text-7xl text-3xl font-bold text-green-400 text-center w-3/4">Mengubah Passion Menjadi Keahlian di Dunia Digital</h1>
      <p className="text-lg text-slate-400 w-2/3 md:text-center text-justify">MENTORIX adalah platform digital yang menyediakan mentor berpengalaman yang memudahkan anda untuk belajar serta mempercepat proses belajar.</p>
      <div className="flex md:flex-row flex-col gap-6 items-center">
        <button className="btn btn-success text-white text-lg md:w-40 w-full">Get in Touch</button>
        <div className="">|</div>
        <Link href={"/"} className="underline">Temukan paket yang cocok untuk Anda.</Link>
      </div>
    </div>
  </div>
);

export default HeroSection;