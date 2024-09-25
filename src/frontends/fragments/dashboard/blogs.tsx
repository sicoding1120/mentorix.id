import React, { useEffect } from "react";
import { useState } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/frontends/components/ui/sidebar";
import {
  Icon24Hours,
  IconArrowLeft,
  IconBrandTabler,
  IconPaperclip,
  IconSearch,
  IconSettings,
  IconTable,
  IconUserBolt,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/frontends/lib/util";
import BlogCard from "@/frontends/components/blogCard";
import DropDownSelect from "@/frontends/components/ui/dropdown";
import BlogForm from "@/frontends/components/ui/BlogsForm";
import Cookies from "js-cookie";

const Blogs = ({ id }: { id: string | any }) => {
  return (
    <div>
      <SidebarBlogs id={id as string}></SidebarBlogs>
    </div>
  );
};

export default Blogs;

const SidebarBlogs = ({ id }: { id: string | any }) => {
  const [id_us, setIdUs] = useState("");
  const id_user = Cookies.get(`user_id`);
  useEffect(() => {
    setIdUs(id_user as never);
  }, [id_user]);

  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const links = [
    {
      label: "Dashboard",
      href: `/dashboard/${id_user}`,
      icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />,
    },
    {
      label: "Blogs",
      href: `/dashboard/${id_user}/blogs`,
      icon: <IconTable className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />,
    },
    {
      label: "Kelas",
      href: `/dashboard/${id_user}/class`,
      icon: <IconPaperclip className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />,
    },
    {
      label: "Profil",
      href: `/dashboard/${id_user}/profile`,
      icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />,
    },
    {
      label: "Search",
      href: `/dashboard/${id_user}/Search`,
      icon: <IconSearch className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />,
    },
    {
      label: "Pengaturan",
      href: `/dashboard/${id_user}/setting`,
      icon: <IconSettings className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />,
    },
    {
      label: "Keluar",
      href: "/auth/logout",
      icon: <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />,
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-base-200 dark:bg-color-primary">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? (
              <Logo isDarkMode={isDarkMode} />
            ) : (
              <LogoIcon isDarkMode={isDarkMode} />
            )}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} className="font-medium" />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Faqih Abqory",
                href: "#",
                icon: (
                  <Image
                    src="/assets/logo/favicon.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard id={id as string} isDarkMode={isDarkMode} />
    </div>
  );
};

const Logo = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <Image
        // Change the image source based on dark mode
        src={isDarkMode ? "/assets/logo/mentorix.png" : "/assets/logo/mentorix2.png"}
        alt="logo"
        width={50}
        height={50}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-black dark:text-white whitespace-pre text-xl font-bold"
      >
        MENTORIX
      </motion.span>
    </Link>
  );
};

const LogoIcon = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <Image
        // Change the image source based on dark mode
        src={isDarkMode ? "/assets/logo/mentorix.png" : "/assets/logo/mentorix2.png"}
        alt="logo"
        width={50}
        height={50}
      />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = ({ id, isDarkMode }: { id: string | any, isDarkMode: boolean }) => {
  return (
    <div className="flex flex-col w-full md:p-12 p-4 bg-white dark:bg-slate-500 dark:text-white">
      <div className="w-full md:h-full h-2/3 flex flex-col p-4 gap-8 md:overflow-scroll md:scrollbar-hide">
        <div className="flex justify-between px-4 mb-2 items-center">
          <h3 className="md:text-3xl font-semibold capitalize">your Blogs</h3>
          <div className="flex gap-4 items-center">
            lihat
            <DropDownSelect />
            <BlogForm />
          </div>
        </div>
        <div className="w-full overflow-x-auto rounded-xl grid md:grid-cols-4 md:gap-14 gap-24 px-8 bg-base-200 dark:bg-color-primary py-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};
