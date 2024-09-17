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

const Profile = () => {
  return (
    <div>
      <SidebarProfile></SidebarProfile>
    </div>
  );
};

export default Profile;

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
      href: "class",
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
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex flex-col gap-4 skeleton rounded-md w-full h-full p-8 overflow-scroll scrollbar-hide">
          <h2 className="text-3xl font-bold">Detail Profil</h2>
          <div className="flex gap-6">
            <div className="rounded-full w-28 h-w-28 overflow-hidden">
              <Image
                src={"/assets/logo/favicon.png"}
                alt={"profil-image"}
                width={112}
                height={112}
              />
            </div>
            <div className="flex flex-col gap-2">
              <button className="btn btn-success px-12 text-white">
                Unggah Foto
              </button>
              <Link href={"/dashboard/avatar"}>Gunakan Karakter Avatar</Link>
            </div>
          </div>
          <p className="text-slate-500 font-medium">
            Foto profil kamu disarankan memiliki rasio 1 : 1 atau berukuran
            tidak lebih dari 2MB
          </p>
          <form action="#" className="flex flex-col gap-2 py-4 justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="namaDepan">Nama Depan *</label>
                <input
                  type="text"
                  id="namaDepan"
                  className="input input-bordered flex items-center"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="namaBelakang">Nama Belakang *</label>
                <input
                  type="text"
                  id="namaBelakang"
                  className="input input-bordered flex items-center"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="Emaik">Alamat Email *</label>
              <input
                type="email"
                id="namaBelakang"
                className="input input-bordered flex items-center"
              />
            </div>

            <div className="flex flex-col gap-2 w-full py-4">
              <label htmlFor="Biografi">Biografi</label>
              <Textarea></Textarea>
            </div>
            
            <div className="flex justify-end">
              <button className="btn btn-success text-white">Simpan Perubahan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
