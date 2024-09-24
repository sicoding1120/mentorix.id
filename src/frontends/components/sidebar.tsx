"use client";
import React, { useEffect, useState } from "react";
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
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/frontends/lib/util";
import { DarkMode } from "@chakra-ui/react";
import Cookie from "js-cookie";
import { Accordion, AccordionItem } from "@nextui-org/react";
import CardDemo from "./card";
import { FaSearch } from "react-icons/fa";

export function SidebarDemo() {
  const [id_us, setIdUs] = useState("");
  const id_user = Cookie.get(`user_id`);
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
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
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
      <Dashboard id={id_us} />
    </div>
  );
}
export const Logo = () => {
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
export const LogoIcon = () => {
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
const Dashboard = ({ id }: { id: string | any }) => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="w-full h-screen bg-blue-100 rounded-md flex flex-col gap-8 md:p-24 p-8 overflow-scroll scrollbar-hide">
          <div className="flex md:flex-row flex-col items-center gap-8 md:gap-12">
            <div className="rounded-full w-28 h-w-28">
              <Image
                src={"/assets/logo/favicon.png"}
                alt={"profil-image"}
                width={112}
                height={112}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex md:flex-row flex-col items-center gap-4">
                <h2 className="text-3xl font-bold">ahfary_</h2>
                <Link
                  href={`/dashboard/${id}/profile`}
                  className="btn btn-success px-12 text-white md:w-40 w-full"
                >
                  Edit Profil
                </Link>
                <Link
                  href={`/dashboard/${id}/sertifikasi`}
                  className="btn btn-success px-12 text-white md:w-40 w-full"
                >
                  Achievment
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2 items-center">
                  <p className="font-medium">0</p>
                  <p>Followers</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="font-medium">0</p>
                  <p>Following</p>
                </div>
              </div>
              <p className="md:w-2/3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat ipsa facere quis doloremque. Earum modi obcaecati optio
                molestias sequi animi!
              </p>
            </div>
          </div>
          <div className="bg-blue-200 rounded-md flex flex-col gap-2 py-2">
            <Accordion defaultExpandedKeys={["2"]}>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Lengkapi Profil"
                className="px-2"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Lanjutkan Bootcamp"
                className="px-2"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
            <Link href={"/courses"} className="flex justify-center items-center text-primary font-medium md:text-base text-sm">Lihat Semua</Link>
          </div>

          <div>
            <div className="bg-blue-200 rounded-md flex flex-col gap-4 py-4 px-4">
              <h2 className="text-xl font-semibold">Kelas Saya</h2>
              <div className="flex md:flex-row flex-col md:gap-4 gap-4 items-center w-full">
                <CardDemo
                  title="Frontend Developer"
                  level="Beginner"
                  lesson="10 Lesson"
                  time={120}
                  price={20000}
                  discountPrice={10}
                />
                <CardDemo
                  title="Backend Developer"
                  level="Beginner"
                  lesson="10 Lesson"
                  time={120}
                  price={20000}
                  discountPrice={10}
                />
                <CardDemo
                  title="Fullstack Developer"
                  level="Beginner"
                  lesson="10 Lesson"
                  time={120}
                  price={20000}
                  discountPrice={10}
                />
              </div>
              <div className="flex items-center justify-end gap-2">
              <button className="rounded-full w-12 h-12 bg-success flex justify-center items-center text-white font-bold text-xl"> {"<"} </button>
              <button className="rounded-full w-12 h-12 bg-success flex justify-center items-center text-white font-bold text-xl"> {">"} </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
