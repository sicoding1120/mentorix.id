import { useIcons } from "@/hook/useIcons";
import React, { useEffect } from "react";
import CardDemo from "./card";
import { GiRank1 } from "react-icons/gi";
import { IoMedalOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import { useLogic } from "@/backends/logic";
import { filter } from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./footer";
import NavbarEl from "./navbar";

const logic = new useLogic();
const DetailClasses = ({
  id,
  title,
  time,
  lesson,
  desc,
  stepClass,
  prepareToLearn,
  level,
  mentorixPoin,
  materiList,
}: {
  id: string | any;
  title: string | any;
  time: number;
  lesson: number;
  desc: string;
  stepClass: string[] | any;
  prepareToLearn: string[] | any;
  level: string | any;
  mentorixPoin: string | number | any;
  materiList: String[] | any;
}) => {
  const { icons } = useIcons();
  const router = useRouter();
  const [data, setData] = React.useState<any>();
  const [user, setUser] = React.useState<any>();
  const [join, setJoin] = React.useState<any>();

  useEffect(() => {
    const fetchDataUser = async () => {
      const res = await fetch("https://mentorixid.vercel.app/api/users");
      const dt = await res.json();
      setUser(dt);
    };

    fetchDataUser();
  }, []);

  useEffect(() => {
    const fetchDataClass = async () => {
      const res = await fetch("https://mentorixid.vercel.app/api/class");
      const data = await res.json();
      setData(data);
    };
    fetchDataClass();
    const iu = Cookies.get("user_id");
    const u = user?.data?.datas.find((u: any) => u.id == iu);
    console.log(u);
    const vuc = u?.enrolledClasses.find((vuc: any) => vuc.title == title);
    if (!vuc) {
      setJoin(false);
    } else {
      setJoin(true);
    }
  }, [title, user?.data?.datas]);

  const handleJoinClass = async (id: string | any) => {
    const cookie = Cookies.get("user_id");
    const id_progress = logic.generateUUID();
    const datas = {
      id_user: cookie,
      id_class: id,
      id_progress: id_progress,
    };
    const res = await axios.post(
      "https://mentorixid.vercel.app/api/participants",
      datas
    );
    toast.success("berhasil join class");
    router.push(`/courses/class/${title}/learn/1`)
  };

  return (
    <main className="w-full h-full">
      <NavbarEl />
      <section
        id="picture of detail class"
        className="w-full h-[60vh] py-6 px-10 pb-6  "
      >
        <div className="w-full h-full bg-red-500/20 rounded-xl"></div>
        <div className="w-28 h-28 bg-blue-500 rounded-full ml-20 relative bottom-16"></div>
      </section>
      <section className="w-full h-full  pt-14 px-16 flex flex-col gap-6">
        <div className="flex flex-col gap-3 ">
          <h2 className="text-6xl font-bold capitalize">{title}</h2>
          <h6 className="text-xl font-semibold ">MENTORIX Academy</h6>
        </div>
        <div className="flex flex-col gap-4 border-b pb-12">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center text-slate-400">
              <icons.book size={20} />
              {lesson} lesson
            </div>
            <div className="flex gap-2 items-center text-slate-400">
              <icons.timer size={20} />
              {Math.floor(time / 60)} hours {time % 60} minutes
            </div>
          </div>
          <button
            className="btn w-1/4 text-lg capitalize"
            onClick={() =>
              join === true
                ? router.push(`/courses/class/${title}/learn/1`)
                : handleJoinClass(id)
            }
          >
            {join === true ? "lanjut belajar" : "gabung kelas"}
          </button>
        </div>
      </section>
      <section className="w-full h-full flex gap-8 px-16">
        <div className="w-2/3 h-full  py-8 flex flex-col gap-8 pr-6">
          <div className="w-full flex flex-col gap-6">
            <h4 className="text-2xl font-bold capitalize">tentang kelas ini</h4>
            <p>{desc}</p>
          </div>
          <div className="w-full flex flex-col gap-6">
            <h4 className="text-2xl font-bold capitalize">
              apa yang akan di pelajari ?
            </h4>
            <ul className="flex flex-col gap-3 pl-6 list-disc">
              {stepClass.map((title: string, index: number) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-col gap-6">
            <h4 className="text-2xl font-bold capitalize">persiapan kelas</h4>
            <ul className="flex flex-col gap-3 pl-6 list-disc">
              {prepareToLearn.map((title: string, index: number) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-1/3 h-[97vh] sticky top-2 px-6 py-2 flex flex-col gap-5">
          <div className="w-full h-full border-2 border-slate-200 rounded-lg p-4 flex flex-col gap-4 overflow-scroll scrollbar-hide">
            <h3 className="text-2xl font-bold capitalize">detail kelas</h3>
            <div className="px-4 flex flex-col h-3/4">
              <div className="w-full h-[60px] flex gap-4  font-semibold">
                <icons.book className="w-8 h-8" />
                {lesson} lesson
              </div>
              <div className="w-full h-[60px] flex gap-4  font-semibold">
                <GiRank1 className="w-8 h-8 font-bold" />
                {level}
              </div>
              <div className="w-full h-[60px] flex gap-4  font-semibold">
                <IoMedalOutline className="w-8 h-8" />
                {mentorixPoin} max MENTORIX poin
              </div>
            </div>
          </div>
          <div className="w-full h-full border-2 border-slate-200 rounded-lg p-4 flex flex-col gap-4 overflow-scroll scrollbar-hide">
            <h3 className="text-2xl font-bold capitalize">mentor kelas</h3>
            <div className="w-full h-[60px] flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-red-500"></div>
              <p className="font-semibold capitalize">Daffa hafizh firdaus</p>
            </div>
            <div className="w-full h-[60px] flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-red-500"></div>
              <p className="font-semibold capitalize">Daffa hafizh firdaus</p>
            </div>
            <div className="w-full h-[60px] flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-red-500"></div>
              <p className="font-semibold capitalize">Daffa hafizh firdaus</p>
            </div>
          </div>
          <div className="w-full h-full border-2 border-slate-200 rounded-lg overflow-scroll scrollbar-hide">
            <div className="flex flex-col gap-2 px-4 py-2 rounded-lg h-full ">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold capitalize ">materi</h3>
                <button className="text-blue-500 capitalize font-semibold underline">
                  lihat semua
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {materiList.slice(0, 3).map((data: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pl-7 pr-3 gap-6 bg-slate-100 w-full h-[50px] rounded-lg"
                  >
                    <ul className="list-disc">
                      <li className="font-semibold">{data}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full px-16 py-14 flex flex-col gap-14">
        <h2 className="text-4xl font-bold capitalize">
          Recommendasi kelas untuk kamu
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
        </div>
      </section>
      <Footer />
      <ToastContainer/>
    </main>
  );
};

export default DetailClasses;
