import { SidebarDemo } from "@/frontends/components/sidebar";
import Profile from "@/frontends/fragments/dashboard/profile";
import Setting from "@/frontends/fragments/dashboard/setting";
import { useRouter } from "next/router";
import React from "react";
import Dashboard from "../../frontends/templates/dashboard";
import Search from "@/frontends/fragments/dashboard/search";


const Dynamic = () => {
  const { query } = useRouter();
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
