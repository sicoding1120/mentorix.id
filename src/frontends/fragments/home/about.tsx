"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CardElement from "@/frontends/components/card";
import DataCard from "@/data/card.json";
import dataRandom from "@/data/dataRandom.json";

const About = () => {
  return (
    <section className="w-full md:h-screen h-full flex justify-center items-center md:px-14 px-4 bg-color-primary bg-opacity-80 text-white">
      <Flex gap={24} flexDirection={"column"} className="">
        <Box>
          <Flex flexDirection={"column"} gap={12}>
            <Text className="md:text-5xl text-4xl text-center font-semibold">
              MENTORIX
            </Text>
            <Box>
              {dataRandom.id.Text.data.type.textAbout.map((items, index) => (
                <Text
                  className="md:text-xl text-sm md:text-center text-justify text-color-background md:px-32 px-6"
                  key={index}
                >
                  {items.text}
                </Text>
              ))}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </section>
  );
};

export default About;
