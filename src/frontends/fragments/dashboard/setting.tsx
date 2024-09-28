import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/frontends/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconCheck,
  IconPaperclip,
  IconSearch,
  IconSettings,
  IconTable,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/frontends/lib/util";
import Cookies from "js-cookie";
import Footer from "@/frontends/components/footer";

const Setting = ({ id }: { id: string | any }) => {
  return (
    <div>
      <SidebarProfile id={id as never} />
      <Footer />
    </div>
  );
};

export default Setting;

const SidebarProfile = ({ id }: { id: string | any }) => {
  const [id_us, setIdUs] = useState("");
  const id_user = Cookies.get(`user_id`);
  
  useEffect(() => {
    setIdUs(id_user as never);
  }, [id_user]);

  const links = [
    {
      label: "Dashboard",
      href: `/dashboard/${id_user}`,
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Mentors",
      href: `/dashboard/${id_user}/Mentors`,
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Blogs",
      href: `/dashboard/${id_user}/blogs`,
      icon: (
        <IconTable className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Kelas",
      href: `/dashboard/${id_user}/class`,
      icon: (
        <IconPaperclip className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Profil",
      href: `/dashboard/${id_user}/profile`,
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Search",
      href: `/dashboard/${id_user}/Search`,
      icon: (
        <IconSearch className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Pengaturan",
      href: `/dashboard/${id_user}/setting`,
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Keluar",
      href: "/auth/logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = document.body.classList.contains("dark");
    setIsDarkMode(darkMode);
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-300 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-white dark:bg-color-primary">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo isDarkMode={isDarkMode} /> : <LogoIcon isDarkMode={isDarkMode} />}
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
      <Dashboard id={id as string} isDarkMode={false} />
    </div>
  );
};

const Logo = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src={isDarkMode ? "/assets/logo/MENTORIX2.png" : "/assets/logo/MENTORIX.png"}
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
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src={isDarkMode ? "/assets/logo/MENTORIX2.png" : "/assets/logo/MENTORIX.png"}
        alt="logo"
        width={50}
        height={50}
      />
    </Link>
  );
};

const Dashboard = ({ id, isDarkMode }: { id: string | any, isDarkMode: boolean }) => {
  return (
    <div className="flex flex-1 min-h-screen">
      <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-base-200 dark:bg-color-abu flex flex-col gap-2 flex-1 w-full h-full">
        <SettingView />
      </div>
    </div>
  );
};

const SettingView = () => {
  const [theme, setTheme] = useState<string>("Default");
  const [fontType, setFontType] = useState<string>("Serif");

  const isSelected = (current: string, selected: string) => current === selected;

  useEffect(() => {
    if (theme === "Gelap") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]); 

  return (
    <div className="md:p-24 p-8 rounded-xl shadow-md mx-auto w-full bg-base-300 dark:bg-color-primary dark:text-white overflow-scroll scrollbar-hide">
      <h2 className="text-3xl font-bold mb-6 dark:text-gray-300">Pengaturan</h2>

      <div className="flex flex-col gap-8">
        {/* Tema */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Tema</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:justify-between items-center">
            {["Default", "Gelap"].map((value, idx) => (
              <div className="relative" key={idx}>
                <button
                  className={`relative py-4 px-2 rounded-lg border grid-cols-1 md:w-full md:h-48 h-32 flex justify-center items-center transition-all duration-300 ease-in-out hover:shadow-md ${
                    isSelected(value, theme)
                      ? "border-green-500 bg-green-100 dark:bg-green-200"
                      : "border-gray-300 bg-white dark:bg-color-background"
                  }`}
                  onClick={() => setTheme(value)}
                >
                  {isSelected(value, theme) && (
                    <span className="absolute top-2 left-2 h-6 w-6 text-white bg-success rounded-full">
                      ✓
                    </span>
                  )}
                  <div className="text-center">
                    <div
                      className={`h-14 w-full mb-2 flex justify-center items-center rounded-md ${
                        value === "Gelap"
                          ? "bg-color-primary text-white"
                          : "bg-white"
                      } border`}
                    >
                      <span className="block overflow-hidden whitespace-nowrap text-ellipsis px-4">
                        Tema {value}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Font Type */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Jenis Font</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:justify-between items-center">
            {["Serif", "Sans-serif", "Monospace"].map((value, idx) => (
              <div className="relative" key={idx}>
                <button
                  className={`relative py-4 px-2 grid-cols-1 rounded-lg border md:w-full w-36 md:h-40 h-28 flex justify-center items-center transition-all duration-300 ease-in-out hover:shadow-md ${
                    isSelected(value, fontType)
                      ? "border-green-500 bg-green-100 dark:bg-green-200"
                      : "border-gray-300 bg-white dark:bg-color-background"
                  }`}
                  onClick={() => setFontType(value)}
                >
                  {isSelected(value, fontType) && (
                    <span className="absolute top-2 left-2 h-6 w-6 text-white bg-success rounded-full">
                      ✓
                    </span>
                  )}
                  <div className="text-center">
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol simpan */}
        <div className="flex justify-end">
          <button className="btn bg-color-primary border-none hover:bg-color-primary/80 dark:bg-color-abu dark:hover:bg-color-abu/80 px-12 text-white md:w-56 w-full">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};
