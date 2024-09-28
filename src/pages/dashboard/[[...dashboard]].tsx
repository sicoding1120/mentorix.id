import { SidebarDemo } from "@/frontends/components/sidebar";
import Profile from "@/frontends/fragments/dashboard/profile";
import Setting from "@/frontends/fragments/dashboard/setting";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Dashboard from '../../frontends/templates/dashboard';
import Search from "@/frontends/fragments/dashboard/search";
import Blogs from "@/frontends/fragments/dashboard/blogs";
import Classes from "@/frontends/fragments/dashboard/classes";

const Dynamic = () => {
  const { query } = useRouter();
  let content: any;
  console.log(query.Dashboard?.at(1));
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
    case "class":
      content = <Classes />;
      break;
    case "blogs":
      content = <Blogs id={query.dashboard?.at(0)} />;
      break;
    default:
      content = <SidebarDemo />;
  }
  return content;
};

export default Dynamic;
