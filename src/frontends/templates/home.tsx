"use client";
import React from "react";
import HeroSection from "@/frontends/fragments/home/heroSection";
import Sponsor from "@/frontends/fragments/home/sponsor";
import About from "@/frontends/fragments/home/about";
import Instructor from "@/frontends/fragments/home/instructure";
import Mentor from "@/frontends/fragments/home/mentor";
import Testimonial from "@/frontends/fragments/home/testimonial.";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <div className="bg-bgLanding bg-cover bg-center bg-no-repeat">
          <HeroSection />
        </div>
        <div>
          <Sponsor />
        </div>
        <About />
        <div className="bg-color-primary">
          <Instructor />
        </div>
        <div className="py-24">
          <Mentor />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
