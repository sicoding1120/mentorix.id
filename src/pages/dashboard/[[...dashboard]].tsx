import { SidebarDemo } from "@/frontends/components/sidebar";
import Profile from "@/frontends/fragments/dashboard/profile";
import Setting from "@/frontends/fragments/dashboard/setting";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Search from "@/frontends/fragments/dashboard/search";
import Blogs from "@/frontends/fragments/dashboard/blogs";
import Classes from "@/frontends/fragments/dashboard/classes";
import Mentors from "@/frontends/fragments/dashboard/mentors";

const Dynamic = () => {
  const { query } = useRouter();
  let content: any;
  switch (query.dashboard?.at(1)) {
    case "profile":
      content = <Profile id={query.dashboard?.at(0)} />;
      break;
    case "setting":
      content = <Setting id={query.dashboard?.at(0)} />;
      break;
    case "Search":
      content = <Search id={query.dashboard?.at(0)} />;
      break;
    case "class":
      content = <Classes />;
      break;
    case "Mentors":
      content = <Mentors id={query.dashboard?.at(0)} />
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
