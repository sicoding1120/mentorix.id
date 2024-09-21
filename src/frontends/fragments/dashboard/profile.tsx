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
  IconX,
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
import Cookies from "js-cookie";

const Profile = () => {
  return (
    <div>
      <SidebarProfile></SidebarProfile>
      {/* <Footer /> */}
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
  const [bio, setBio] = useState("");

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files[0]);
    } else if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "bio") {
      setBio(value);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
      const id_user = Cookies.get("id_user");
      const response = await axios.put(
        "https://mentorixid.vercel.app/api/profile",
        { id_user,firstName, lastName, bio }
      );
      console.log("ok");
  };
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex flex-col gap-4 bg-blue-100 rounded-md w-full h-full md:p-24 p-8 overflow-scroll scrollbar-hide">
          <h2 className="text-3xl font-bold text-center">Detail Profil</h2>
          <div className="flex gap-6 md:flex-row flex-col justify-center items-center md:justify-start">
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
          <p className="text-slate-500 font-medium md:text-start text-center md:text-base text-xs">
            Foto profil kamu disarankan memiliki rasio 1 : 1 atau berukuran
            tidak lebih dari 2MB
          </p>
          <form
            action="#"
            className="flex flex-col gap-4 py-4 justify-between"
            onSubmit={handleSubmit}
          >
            <div className="flex md:flex-row flex-col gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="namaDepan">Nama Depan *</label>
                <input
                  type="text"
                  id="namaDepan"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  className="input input-bordered flex items-center"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="namaBelakang">Nama Belakang *</label>
                <input
                  type="text"
                  id="namaBelakang"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  className="input input-bordered flex items-center"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email">Alamat Email *</label>
              <input
                type="email"
                id="email"
                name="alamatEmail"
                onChange={handleChange}
                className="input input-bordered flex items-center"
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="md:w-5 w-4 md:h-5 h-4 bg-error flex justify-center items-center text-white rounded-full">
                  <IconX width={14} height={14} />
                </div>
                <p className="text-slate-500 md:text-base text-sm">
                  Email belum terverifikasi
                </p>
              </div>
              <Link
                href={"/dashboard/verify"}
                className="text-primary font-medium md:text-base text-sm"
              >
                Verifikasi Email
              </Link>
            </div>

            <div className="flex flex-col gap-2 w-full py-4">
              <label htmlFor="bio">Biografi</label>
              <textarea
                id="bio"
                name="bio"
                value={bio}
                onChange={handleChange}
                className="input input-bordered flex items-center h-32 py-4"
              />
            </div>

            <div className="flex items-center gap-4">
              <select
                title={"Jenis Kelamin"}
                className="select select-primary w-full max-w-xs"
              >
                <option disabled selected></option>
              </select>
              <select title="Jenjang" className="select select-primary w-full max-w-xs">
                <option className="md:text-base text-xs" disabled selected>
                  Jenis Kelamin
                </option>
                <option className="md:text-base text-xs">Laki - Laki</option>
                <option className="md:text-base text-xs">Perempuan</option>
                <option className="md:text-base text-xs">Tidak Beritahu</option>
              </select>
              <select
                className="select select-primary w-full max-w-xs"
                title="Jenjang"
              >
                <option disabled selected>
                  Jenjang
                </option>
                <option className="md:text-base text-xs">SMP</option>
                <option className="md:text-base text-xs">SMA / SMK</option>
                <option className="md:text-base text-xs">Mahasiswa</option>
              </select>
            </div>

            <div className="flex md:justify-end">
              <button
                className="btn btn-success text-white md:w-56 w-full"
                type="submit"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
