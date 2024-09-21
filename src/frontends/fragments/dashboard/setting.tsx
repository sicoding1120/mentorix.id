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
  IconCheck,
  IconPaperclip,
  IconSearch,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/frontends/lib/util";
import { DarkMode } from "@chakra-ui/react";
import { CheckboxIcon, Textarea } from "@nextui-org/react";
import Navbar from "@/frontends/components/navbar";
import Footer from "@/frontends/components/footer";
import axios from "axios";
import Cookies from "js-cookie";

const Setting = () => {
  return (
    <div>
      <SidebarProfile></SidebarProfile>
      <Footer />
    </div>
  );
};

export default Setting;

const SidebarProfile = () => {
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
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
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
      <Dashboard />
    </div>
  );
};
const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        // isikan argument darkmode
        src={"/assets/logo/MENTORIX.png"}
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
const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src={"/assets/logo/MENTORIX.png"}
        alt="logo"
        width={50}
        height={50}
      />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1 min-h-screen">
      <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <SettingView />
      </div>
    </div>
  );
};

const SettingView = () => {
  const [theme, setTheme] = useState("Hangat");
  const [fontType, setFontType] = useState("Serif");
  const [fontSize, setFontSize] = useState("Besar");

  const isSelected = (current: any, selected: any) => current === selected;

  return (
    <div className="md:p-24 p-8 rounded-xl shadow-md mx-auto w-full bg-blue-100 overflow-scroll scrollbar-hide">
      <h2 className="text-3xl font-bold mb-6">Pengaturan</h2>

      <div className="flex flex-col gap-8">
        {/* Tema */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Tema</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:justify-between items-center">
            {["Default", "Hangat", "Gelap", "Terang"].map((value, idx) => (
              <div className="relative" key={idx}>
                <button
                  className={`relative py-4 px-2 rounded-lg border md:w-64 w-36 md:h-40 h-28 flex justify-center items-center transition-all duration-300 ease-in-out hover:shadow-md ${
                    isSelected(value, theme)
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300 bg-white"
                  }`}
                  onClick={() => setTheme(value)}
                >
                  {isSelected(value, theme) && (
                    <IconCheck className="absolute top-2 left-2 h-6 w-6 text-white bg-success rounded-full" />
                  )}
                  <div className="text-center">
                    <div
                      className={`h-14 md:w-full w-24 mb-2 flex justify-center items-center rounded-md ${
                        value === "Terang"
                          ? "bg-white"
                          : value === "Hangat"
                          ? "bg-yellow-100"
                          : "bg-gray-800 text-white"
                      } border`}
                    >
                      <span className="block overflow-hidden whitespace-nowrap text-ellipsis px-4">
                        Belajar di Mentorix
                      </span>
                    </div>
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Jenis Font */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Jenis Font</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:justify-between items-center">
            {["Default", "Serif", "Poppins", "Dyslexic"].map((value, idx) => (
              <div className="relative" key={idx}>
                <button
                  className={`relative py-4 px-2 rounded-lg border md:w-64 w-36 md:h-40 h-28 flex justify-center items-center transition-all duration-300 ease-in-out hover:shadow-md ${
                    isSelected(value, fontType)
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300 bg-white"
                  }`}
                  onClick={() => setFontType(value)}
                >
                  {isSelected(value, fontType) && (
                    <IconCheck className="absolute top-2 left-2 h-6 w-6 text-white bg-success rounded-full" />
                  )}
                  <div className="text-center">
                    <div
                      className={`h-14 w-full mb-2 flex justify-center items-center ${
                        value === "Default"
                          ? "font-sans"
                          : value === "Serif"
                          ? "font-serif"
                          : "font-dyslexic"
                      } border`}
                    >
                      <span className="block overflow-hidden whitespace-nowrap text-ellipsis">
                        {value}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Ukuran Font */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ukuran Font</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 md:justify-between items-center gap-4">
            {["Default", "Besar", "Sedang", "Kecil"].map((value, idx) => (
              <div className="relative" key={idx}>
                <button
                  className={`relative py-4 px-2 rounded-lg border md:w-64 w-36 md:h-40 h-28 flex justify-center items-center transition-all duration-300 ease-in-out hover:shadow-md ${
                    isSelected(value, fontSize)
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300 bg-white"
                  }`}
                  onClick={() => setFontSize(value)}
                >
                  {isSelected(value, fontSize) && (
                    <IconCheck className="absolute top-2 left-2 h-6 w-6 text-white bg-success rounded-full" />
                  )}
                  <div className="text-center">
                    <div
                      className={`h-14 w-full mb-2 flex justify-center items-center ${
                        value === "Besar"
                          ? "text-xl"
                          : value === "Sedang"
                          ? "text-lg"
                          : "text-sm"
                      } border`}
                    >
                      <span>Aa</span>
                    </div>
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bahasa */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bahasa</h3>
          <select title="ok" className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Pilih Bahasa
            </option>
            <option>Indonesia</option>
            <option>English</option>
            <option>Sunda</option>
            <option>Jawa</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-success text-white md:w-56 w-full">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};

