import { SidebarDemo } from "@/frontends/components/sidebar";
import Profile from "@/frontends/fragments/dashboard/profile";
import Setting from "@/frontends/fragments/dashboard/setting";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Dashboard from "../../frontends/templates/dashboard";
import Search from "@/frontends/fragments/dashboard/search";
import Cookies from "js-cookie";


const Dynamic = () => {
  const { query } = useRouter();
  // membuat midleware agar apabila user belum login maka tidak bisa mengakses url dashboard
  // tapi kalu udah login akan langsung diarahkan ke halaman dashboard
  // necek sudah login apa belumnya di cookies
  // kalo udah login jangan direload" berulang kali
  useEffect(() => {
    if (!Cookies.get("user_id")) {
      window.location.href = "/dashboard/profile";
    } 
    window.location.href = "/login";
  }, []);
  let content: any;
  console.log(query);
  switch (query.dashboard?.at(1)) {
    case "profile":
      content = <Profile id={query.dashboard?.at(0)} />;
      break;
    case "setting":
      content = <Setting />;
      break;
    case "Search":
      content = <Search />;
      break;
    default:
      content = <SidebarDemo />;
  }
  return content;
};

export default Dynamic;
