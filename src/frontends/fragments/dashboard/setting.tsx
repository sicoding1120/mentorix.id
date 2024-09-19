import React from "react";
import { useState } from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
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
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/frontends/lib/util";
import { DarkMode } from "@chakra-ui/react";
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
        {/* <SettingView /> */}
      </div>
    </div>
  );
};

// const SettingView = () => {
//   const [theme, setTheme] = useState('Hangat');
//   const [fontType, setFontType] = useState('Serif');
//   const [fontSize, setFontSize] = useState('Besar');
//   const [value, setValue] = React.useState("");
//   const [touched, setTouched] = React.useState(false);
//   const animals = 

//   // const isValid = value === "cat";

//   // const isSelected = (current : any, selected : any) => current === selected;

//   return (
//     // <div className="p-24 rounded-xl shadow-md mx-auto w-full skeleton overflow-scroll scrollbar-hide">
//     //   <h2 className="text-3xl font-bold mb-6">Pengaturan</h2>

//     //   {/* Bahasa */}
//     //   <Autocomplete
//     //   label="Favorite Animal"
//     //   variant="bordered"
//     //   placeholder="Search an animal"
//     //   description="The second most popular pet in the world"
//     //   errorMessage={isValid || !touched ? "" : "You must select a cat"}
//     //   isInvalid={isValid || !touched ? false : true}
//     //   defaultItems={animals}
//     //   selectedKey={value}
//     //   className="max-w-xs"
//     //   onSelectionChange={setValue}
//     //   onClose={() => setTouched(true)}
//     // >
//     //   {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
//     // </Autocomplete>

//     //   {/* Tema */}
//     //   <div className="mb-8">
//     //     <h3 className="text-lg font-semibold mb-4">Tema</h3>
//     //     <div className="flex justify-between items-center">
//     //       {['Terang', 'Hangat', 'Gelap'].map((value, idx) => (
//     //         <div className="relative" key={idx}>
//     //           <button 
//     //             className={`relative py-4 px-2 rounded-lg border w-64 h-40 flex justify-center items-center transition-all duration-300 ease-in-out hover:shadow-md ${isSelected(value, theme) ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'}`} 
//     //             onClick={() => setTheme(value)}
//     //           >
//     //             {isSelected(value, theme) && (
//     //               <IconCheck className="absolute top-2 left-2 h-6 w-6 text-white bg-success rounded-full" />
//     //             )}
//     //             <div className="text-center">
//     //               <div className={`h-14 w-full mb-2 flex justify-center items-center rounded-md ${value === 'Terang' ? 'bg-white' : value === 'Hangat' ? 'bg-yellow-100' : 'bg-gray-800 text-white'} border`}>
//     //                 <span className="block overflow-hidden whitespace-nowrap text-ellipsis px-4">Belajar dengan Dicoding</span>
//     //               </div>
//     //               <span className="text-sm font-medium">{value}</span>
//     //             </div>
//     //           </button>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>

//     //   {/* Jenis Font */}
//     //   <div className="mb-8">
//     //     <h3 className="text-lg font-semibold mb-4">Jenis Font</h3>
//     //     <div className="flex justify-between items-center">
//     //       {['Default', 'Serif', 'Poppins'].map((value, idx) => (
//     //         <div className="relative" key={idx}>
//     //           <button 
//     //             className={`relative py-4 px-2 rounded-lg border w-64 h-40 flex justify-center items-center transition-all duration-300 ease-in-out hover:shadow-md ${isSelected(value, fontType) ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'}`} 
//     //             onClick={() => setFontType(value)}
//     //           >
//     //             {isSelected(value, fontType) && (
//     //               <IconCheck className="absolute top-2 left-2 h-6 w-6 text-white bg-success rounded-full" />
//     //             )}
//     //             <div className="text-center">
//     //               <div className={`h-14 w-full mb-2 flex justify-center items-center ${value === 'Default' ? 'font-sans' : value === 'Serif' ? 'font-serif' : 'font-dyslexic'} border`}>
//     //                 <span className="block overflow-hidden whitespace-nowrap text-ellipsis">{value}</span>
//     //               </div>
//     //               <span className="text-sm font-medium">{value}</span>
//     //             </div>
//     //           </button>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>

//     //   {/* Ukuran Font */}
//     //   <div>
//     //     <h3 className="text-lg font-semibold mb-4">Ukuran Font</h3>
//     //     <div className="flex justify-between items-center">
//     //       {['Besar', 'Sedang', 'Kecil'].map((value, idx) => (
//     //         <div className="relative" key={idx}>
//     //           <button 
//     //             className={`relative py-4 px-2 rounded-lg border w-64 h-40 flex justify-center items-center transition-all duration-300 ease-in-out hover:shadow-md ${isSelected(value, fontSize) ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'}`} 
//     //             onClick={() => setFontSize(value)}
//     //           >
//     //             {isSelected(value, fontSize) && (
//     //               <IconCheck className="absolute top-2 left-2 h-6 w-6 text-white bg-success rounded-full" />
//     //             )}
//     //             <div className="text-center">
//     //               <div className={`h-14 w-full mb-2 flex justify-center items-center ${value === 'Besar' ? 'text-xl' : value === 'Sedang' ? 'text-lg' : 'text-sm'} border`}>
//     //                 <span>Aa</span>
//     //               </div>
//     //               <span className="text-sm font-medium">{value}</span>
//     //             </div>
//     //           </button>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </div>
//     <></>
//   );
// };