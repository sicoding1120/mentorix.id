"use client";
import React from "react";
import HeroSection from "@/frontends/fragments/home/heroSection";
import Sponsor from "@/frontends/fragments/home/sponsor";
import Mentor from "@/frontends/fragments/home/mentor";
import Testimonial from "@/frontends/fragments/home/testimonial.";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import LearningPage from "../fragments/home/learnigPage";
import AboutPage from "../fragments/home/about";
import PopularClass from "../fragments/home/popularClass";
import NavbarEl from "../components/navbar";

const Home = () => {
  return (
    <div>
      <NavbarEl />
      <div className="flex flex-col">
        <div className="bg-bgLanding bg-fixed bg-cover bg-center bg-no-repeat">
          <HeroSection />
        </div>
        <div className="dark:bg-color-background bg-white">
          <Sponsor />
        </div>
        <LearningPage />
        <div className="">
        <AboutPage />
        </div>
        <PopularClass/>
        <div className="py-24">
          <Mentor />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
