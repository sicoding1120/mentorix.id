import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/frontends/components/ui/sidebar";
import {
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
import Footer from "@/frontends/components/footer";
import axios from "axios";
import Cookies from "js-cookie";
import { FaSearch } from "react-icons/fa";
import CardUser from "@/frontends/components/cardUSer";

const Search = () => {
  return (
    <div>
      <SidebarProfile />
      <Footer />
    </div>
  );
};

export default Search;

const SidebarProfile = () => {
  const [id_us, setIdUs] = useState("");
  const id_user = Cookies.get(`user_id`);
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIdUs(id_user as never);
  }, [id_user]);

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
      <Dashboard />
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
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src={isDarkMode ? "/assets/logo/mentorix.png" : "/assets/logo/mentorix2.png"}
        alt="logo"
        width={50}
        height={50}
      />
    </Link>
  );
};


const Dashboard = () => {
  return (
    <div className="flex flex-1 min-h-screen">
      <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-base-200 dark:bg-color-abu flex flex-col gap-2 flex-1 w-full h-full">
        <SettingView />
      </div>
    </div>
  );
};

const SettingView = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [datas, setDatas] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://mentorixid.vercel.app/api/users");
      const users = await res.json();
      setDatas(users);
    };
    fetchData();
  }, []);

  const handleFollow = async (id: string) => {
    const idUserFollowing = Cookies.get("user_id");

    try {
      await axios.post("https://mentorixid.vercel.app/api/follower", {
        idUser: id,
        followerId: idUserFollowing,
      });

      await axios.post("https://mentorixid.vercel.app/api/following", {
        idUser: idUserFollowing,
        followingId: id,
      });
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  const handleUnFollow = async (id: string) => {
    const idUserFollowing = Cookies.get("user_id");

    try {
      await axios.delete("https://mentorixid.vercel.app/api/follower", {
        data: {
          idUser: id,
          followerId: idUserFollowing,
        },
      });

      await axios.delete("https://mentorixid.vercel.app/api/following", {
        data: {
          idUser: idUserFollowing,
          followingId: id,
        },
      });
    } catch (error) {
      console.error("Error unfollowing user:", error);
    }
  };

  const handleSearch = () => {
    console.log("cari seseorang di mentorix id .");
  };

  return (
    <section className="h-screen md:p-8 p-8 flex flex-col gap-8 rounded-xl shadow-md mx-auto w-full bg-gray-300 dark:text-white dark:bg-color-primary overflow-scroll scrollbar-hide">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-2xl capitalize text-center text-color-primary font-semibold dark:text-color-background">
          cari seseorang di mentorix id.
        </h3>
        <div className="flex border-2 gap-4 px-4 py-2 w-2/3 h-full border-black dark:border-color-background rounded-lg">
          <input
            type="text"
            className="w-full outline-none bg-transparent"
            placeholder="Cari seseorang di mentorix id."
          />
          <button className="btn bg-color-primary border-none px-8 hover:bg-color-primary/80 dark:bg-color-abu dark:hover:bg-color-abu/80 text-white">
            <FaSearch /> Cari
          </button>
        </div>
      </div>
      <div className="w-full md:px-6 px-2 grid grid-cols-2 md:grid-cols-4 gap-4">
        {datas?.data?.datas?.map((data: any, index: number) => (
          <CardUser
            follower={data.following.length}
            following={data.followers.length}
            userName={data.username}
            id={data.id}
            key={index}
            handleFollow={() => handleFollow(data.id)}
            handleUnFollow={() => handleUnFollow(data.id)}
          />
        ))}
      </div>
    </section>
  );
};
