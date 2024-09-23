"use client";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import dataRandom from "@/data/dataRandom.json";

const Sponsor = () => {
  return (
    <section className="w-full h-1/2 flex justify-center items-center md:mt-0 mt-24 md:px-14 px-4 py-24 bg-color-background">
      <Flex flexDirection={"column"} gap={8}>
        <Text className="md:text-5xl text-3xl text-center text-color-primary">
          Sudah Berkolaborasi Dengan +32 Lembaga
        </Text>
        <Flex gap={4} className="text-center md:flex-row flex-col items-center">
          {dataRandom.id.sponsor.data.map((items, index) => (
            <Image
              src={items.urlLogo}
              alt={""}
              width={300}
              height={200}
              key={index}
              className="opacity-30 dark:opacity-70 dark:hover:opacity-100 bg-white hover:opacity-100 transition-all"
            />
          ))}
        </Flex>
      </Flex>
    </section>
  );
};

export default Sponsor;
