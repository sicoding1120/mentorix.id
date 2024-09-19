import React from "react";
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
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/frontends/lib/util";
import { DarkMode } from "@chakra-ui/react";
import { Textarea } from "@nextui-org/react";
import Navbar from "@/frontends/components/navbar";
import Footer from "@/frontends/components/footer";
import axios from "axios";

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
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Kelas",
      href: "/courses",
      icon: (
        <IconPaperclip className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Profil",
      href: "/dashboard/profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Pengaturan",
      href: "/dashboard/setting",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Keluar",
      href: "/logout",
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [file, setFile] = useState("");
  const [alamatEmail, setAlamatEmail] = useState("");
  const [bio, setBio] = useState("");

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files[0]);
    } else if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "alamatEmail") {
      setAlamatEmail(value);
    } else if (name === "bio") {
      setBio(value);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mentorixid.vercel.app/api/auth/profile",
        { firstName, lastName, alamatEmail, bio }
      );
      console.log("ok");
    } catch (err) {
      if (err) throw err;
    }
  };
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex flex-col gap-4 skeleton rounded-md w-full h-full p-8 overflow-scroll scrollbar-hide">
          <h2 className="text-3xl font-bold">Pengaturan</h2>
          <div className="flex gap-4 justify-between py-8">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-lg">Bahasa</p>
              <select className="select select-secondary w-full max-w-xs">
                <option disabled selected>
                  Pilih Bahasa
                </option>
                <option>Indonesia</option>
                <option>English</option>
                <option>Sunda</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Jenis Font</p>
              <div className="flex justify-between gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-start items-center gap-2">
                    <input
                      type="radio"
                      id="Poppins"
                      name="font"
                      value="Poppins"
                      className="radio"
                    />
                    <label className="label cursor-pointer" htmlFor="Poppins">
                      <span className="label-text font-medium">Poppins</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-start items-center gap-2">
                    <input
                      type="radio"
                      id="Lato"
                      name="font"
                      value="Lato"
                      className="radio"
                    />
                    <label className="label cursor-pointer" htmlFor="Lato">
                      <span className="label-text font-medium">Lato</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-start items-center gap-2">
                    <input
                      type="radio"
                      id="Sans Serif"
                      name="font"
                      value="Sans Serif"
                      className="radio"
                    />
                    <label
                      className="label cursor-pointer"
                      htmlFor="Sans Serif"
                    >
                      <span className="label-text font-medium">Sans Serif</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-lg">Tema</p>
              <label className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="dark"
                  className="toggle theme-controller"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">Preview</h2>
            <div className="w-full h-screen rounded-xl skeleton bg-primary-300">
              {/* Nanti dalemnya iframe landing page */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
