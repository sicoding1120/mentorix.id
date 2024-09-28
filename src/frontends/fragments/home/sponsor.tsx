"use client";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import dataRandom from "@/data/dataRandom.json";

const Sponsor = () => {
  return <SponsorEl />;
};

const SponsorEl = () => {
  return (
    <section className="w-full md:h-[20vh] h-full bg-color-primary px-14 py-8">
      <div className="md:flex grid grid-cols-2 justify-center md:gap-36 gap-14">
        <div className="flex flex-col gap-1 items-center ">
          <h3 className="text-white text-5xl font-bold">200K+</h3>
          <span className="text-white text-md ">active student</span>
        </div>

        <div className="flex flex-col gap-1 items-center ">
          <h3 className="text-white text-5xl font-bold">200K+</h3>
          <span className="text-white text-md ">active student</span>
        </div>

        <div className="flex flex-col gap-1 items-center ">
          <h3 className="text-white text-5xl font-bold">200K+</h3>
          <span className="text-white text-md ">active student</span>
        </div>

        <div className="flex flex-col gap-1 items-center ">
          <h3 className="text-white text-5xl font-bold">200K+</h3>
          <span className="text-white text-md ">active student</span>
        </div>

        
      </div>
    </section>
  );
};
export default Sponsor;
