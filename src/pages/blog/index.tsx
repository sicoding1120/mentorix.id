import React from "react";
import Navbar from "@/frontends/components/navbar";
import Image from "next/image";
import Footer from "@/frontends/components/footer";

const Blog = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="h-2/3 bg-bgblog bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full flex flex-col gap-4 shadow-xl p-6 justify-center items-center bg-color-primary bg-opacity-60">
          <h1 className="md:text-5xl text-3xl text-center font-bold text-white">
            Jelajahi Ilmu di Blog Mentorix
          </h1>
          <p className="md:text-lg text-base text-color-background text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            molestias.
          </p>
          <div className="flex justify-center items-center gap-2">
            <input type="search" className="input md:text-base text-sm" />
            <button className="btn btn-success text-white">Cari</button>
          </div>
        </div>
        <div className="md:px-24 py-12 flex flex-col gap-12">
          <div className="md:flex md:flex-row flex-col justify-center gap-12 items-center hidden">
            <div className="w-1/3">
              <Image
                src="/assets/background/privacy.jpg"
                alt="hero"
                width={500}
                height={500}
                 className="rounded-xl"
              />
            </div>
            <div className="w-2/3 flex-col flex gap-4">
              <button className="btn btn-primary text-white font-bold w-32">The lorem</button>
              <h1 className="md:text-3xl text-lg font-semibold">Lorem ipsum dolor sit adipisicing elit. Fugiat eligendi et consequatur nostrum, odit quidem.</h1>
              <p className="md:text-lg text-base text-color-background">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsa architecto sequi quae consequuntur, iusto dolorum provident sunt veritatis neque!
              </p>
              <div className="flex items-center gap-2">
                <Image src={"/assets/logo/favicon.png"} alt={"profile"} width={50} height={50} />
                <div className="flex flex-col">
                  <h2 className="font-medium">By: Nama Orang</h2>
                  <p className="text-color-background">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-16 md:px-0 px-4">
            <div className="flex flex-col gap-4 shadow-xl justify-center p-6">
              <Image src={"/assets/background/lndingbg.jpg"} alt={"landing"} height={350} width={350} className="rounded-md" />
              <button className="btn btn-primary text-white font-bold w-24">lorem</button>
              <h1 className="text-xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quibusdam magnam cupiditate sequi!</h1>
              <p className="text-color-background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam laudantium alias.
              </p>
              <div className="flex items-center gap-2">
                <Image src={"/assets/logo/favicon.png"} alt={"profile"} width={50} height={50} />
                <div className="flex flex-col">
                  <h2 className="font-medium">By: Nama Orang</h2>
                  <p className="text-color-background">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 shadow-xl justify-center p-6">
              <Image src={"/assets/background/lndingbg.jpg"} alt={"landing"} height={350} width={350} className="rounded-md" />
              <button className="btn btn-primary text-white font-bold w-24">lorem</button>
              <h1 className="text-xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quibusdam magnam cupiditate sequi!</h1>
              <p className="text-color-background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam laudantium alias.
              </p>
              <div className="flex items-center gap-2">
                <Image src={"/assets/logo/favicon.png"} alt={"profile"} width={50} height={50} />
                <div className="flex flex-col">
                  <h2 className="font-medium">By: Nama Orang</h2>
                  <p className="text-color-background">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 shadow-xl justify-center p-6">
              <Image src={"/assets/background/lndingbg.jpg"} alt={"landing"} height={350} width={350} className="rounded-md" />
              <button className="btn btn-primary text-white font-bold w-24">lorem</button>
              <h1 className="text-xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quibusdam magnam cupiditate sequi!</h1>
              <p className="text-color-background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam laudantium alias.
              </p>
              <div className="flex items-center gap-2">
                <Image src={"/assets/logo/favicon.png"} alt={"profile"} width={50} height={50} />
                <div className="flex flex-col">
                  <h2 className="font-medium">By: Nama Orang</h2>
                  <p className="text-color-background">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 shadow-xl justify-center p-6">
              <Image src={"/assets/background/lndingbg.jpg"} alt={"landing"} height={350} width={350} className="rounded-md" />
              <button className="btn btn-primary text-white font-bold w-24">lorem</button>
              <h1 className="text-xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quibusdam magnam cupiditate sequi!</h1>
              <p className="text-color-background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam laudantium alias.
              </p>
              <div className="flex items-center gap-2">
                <Image src={"/assets/logo/favicon.png"} alt={"profile"} width={50} height={50} />
                <div className="flex flex-col">
                  <h2 className="font-medium">By: Nama Orang</h2>
                  <p className="text-color-background">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 shadow-xl justify-center p-6">
              <Image src={"/assets/background/lndingbg.jpg"} alt={"landing"} height={350} width={350} className="rounded-md" />
              <button className="btn btn-primary text-white font-bold w-24">lorem</button>
              <h1 className="text-xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quibusdam magnam cupiditate sequi!</h1>
              <p className="text-color-background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam laudantium alias.
              </p>
              <div className="flex items-center gap-2">
                <Image src={"/assets/logo/favicon.png"} alt={"profile"} width={50} height={50} />
                <div className="flex flex-col">
                  <h2 className="font-medium">By: Nama Orang</h2>
                  <p className="text-color-background">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 shadow-xl justify-center p-6">
              <Image src={"/assets/background/lndingbg.jpg"} alt={"landing"} height={350} width={350} className="rounded-md" />
              <button className="btn btn-primary text-white font-bold w-24">lorem</button>
              <h1 className="text-xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quibusdam magnam cupiditate sequi!</h1>
              <p className="text-color-background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam laudantium alias.
              </p>
              <div className="flex items-center gap-2">
                <Image src={"/assets/logo/favicon.png"} alt={"profile"} width={50} height={50} />
                <div className="flex flex-col">
                  <h2 className="font-medium">By: Nama Orang</h2>
                  <p className="text-color-background">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 shadow-xl justify-center p-6">
              <Image src={"/assets/background/lndingbg.jpg"} alt={"landing"} height={350} width={350} className="rounded-md" />
              <button className="btn btn-primary text-white font-bold w-24">lorem</button>
              <h1 className="text-xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quibusdam magnam cupiditate sequi!</h1>
              <p className="text-color-background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam laudantium alias.
              </p>
              <div className="flex items-center gap-2">
                <Image src={"/assets/logo/favicon.png"} alt={"profile"} width={50} height={50} />
                <div className="flex flex-col">
                  <h2 className="font-medium">By: Nama Orang</h2>
                  <p className="text-color-background">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 shadow-xl justify-center p-6">
              <Image src={"/assets/background/lndingbg.jpg"} alt={"landing"} height={350} width={350} className="rounded-md" />
              <button className="btn btn-primary text-white font-bold w-24">lorem</button>
              <h1 className="text-xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quibusdam magnam cupiditate sequi!</h1>
              <p className="text-color-background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam laudantium alias.
              </p>
              <div className="flex items-center gap-2">
                <Image src={"/assets/logo/favicon.png"} alt={"profile"} width={50} height={50} />
                <div className="flex flex-col">
                  <h2 className="font-medium">By: Nama Orang</h2>
                  <p className="text-color-background">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  );
};

export default Blog;
