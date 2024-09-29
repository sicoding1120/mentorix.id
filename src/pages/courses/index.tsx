import React from "react";
import Class from "@/frontends/components/classComp";
import Footer from "@/frontends/components/footer";
import NavbarEl from "@/frontends/components/navbar";

const ClassPage = () => {
  return (
    <div className="w-full h-full">
      <NavbarEl/>
      <Class />
      <Footer />
    </div>
  );
};

export default ClassPage;
