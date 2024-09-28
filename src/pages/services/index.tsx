import Footer from "@/frontends/components/footer";
import NavbarEl from "@/frontends/components/navbar";
import Testimonial from "@/frontends/fragments/home/testimonial.";
import {
  IconAB,
  IconAccessPointOff,
  IconAd,
  IconAdjustmentsCheck,
  IconMessageCircleMinus,
  IconPaperBag,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div>
      <NavbarEl />
      <div className="h-screen skeleton w-full md:px-24 px-4">
        <div className="flex md:flex-row flex-col-reverse justify-center items-center w-full h-full gap-24">
          <div className="md:w-1/2 flex flex-col gap-4 w-full px-4">
            <h1 className="md:text-5xl text-3xl font-bold">Services</h1>
            <p className="text-xl text-slate-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eum
              ullam necessitatibus quasi, laboriosam et officia, id asperiores
              sint nisi aut animi amet quas ab?
            </p>
            <button className="btn btn-success text-white w-56">
              Lihat Semua Layanan
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              width={700}
              height={700}
              src={"/assets/logo/MENTORIX.png"}
              alt={"Mentorix"}
            />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="md:px-24 px-8 py-32 flex flex-col gap-12 md:gap-32">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl font-bold">Jenis Layanan Kami</h2>
          <p className="text-lg text-slate-400">
            Kami menyediakan berbagai layanan Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Corrupti, quod.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="flex flex-col gap-4 md:w-96 w-80 justify-center items-center">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <IconMessageCircleMinus size={36} />
                </div>
              </div>
            </div>
            <h3 className="text-center font-medium">
              Bagaimana Cara Saya Mengganti Email Akun Saya?
            </h3>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-96 w-80 justify-center items-center">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <IconPaperBag size={36} />
                </div>
              </div>
            </div>
            <h3 className="text-center font-medium">
              Bagaimana Cara Saya Mengganti Email Akun Saya?
            </h3>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-96 w-80 justify-center items-center">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <IconAB size={36} />
                </div>
              </div>
            </div>
            <h3 className="text-center font-medium">
              Bagaimana Cara Saya Mengganti Email Akun Saya?
            </h3>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-96 w-80 justify-center items-center">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <IconAdjustmentsCheck size={36} />
                </div>
              </div>
            </div>
            <h3 className="text-center font-medium">
              Bagaimana Cara Saya Mengganti Email Akun Saya?
            </h3>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-96 w-80 justify-center items-center">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <IconAd size={36} />
                </div>
              </div>
            </div>
            <h3 className="text-center font-medium">
              Bagaimana Cara Saya Mengganti Email Akun Saya?
            </h3>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-96 w-80 justify-center items-center">
            <div className="avatar">
              <div className="w-16 rounded-full skeleton">
                <div className="flex justify-center items-center w-full h-full">
                  <IconAccessPointOff size={36} />
                </div>
              </div>
            </div>
            <h3 className="text-center font-medium">
              Bagaimana Cara Saya Mengganti Email Akun Saya?
            </h3>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              itaque facere optio consequatur iusto debitis earum maxime
              provident expedita, ut amet nulla! Minus, doloremque quae?
            </p>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="py-24 skeleton">
        <Testimonial />
      </div>

      {/* section 4 */}
      <div className="md:px-24 px-8 py-24 w-full h-screen flex flex-col justify-center items-center gap-8">
        <h1 className="md:text-5xl text-3xl font-semibold">
          Siap untuk mendapatkan kelas di MENTORIX?
        </h1>
        <p className="text-slate-500 md:text-center text-justify text-lg md:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          deleniti aperiam odio, consectetur ipsam, deserunt tempore, voluptates
          assumenda explicabo nesciunt quas nisi quod ut cupiditate praesentium
          autem sequi excepturi corporis.
        </p>
        <button className="btn btn-success text-white">Bergabung</button>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
