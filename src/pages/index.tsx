import React from "react";
import { Kanit } from "next/font/google";
// import { useRouter } from "next/router";
import Home from "@/frontends/templates/home";

// const kanit = Kanit({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600"],
// });

const Index = () => {
  // const { pathname } = useRouter();
  // console.log(pathname);
  return (
    <main className={`dark:bg-color-c7 bg-color-c4`}>
      <Home />
    </main>
  );
};

export default Index;
