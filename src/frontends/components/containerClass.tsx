import React, { useEffect } from "react";
import CardDemo from "./card";

const ContainerClass = ({id}:any) => {
    const [user, setUser] = React.useState<any>();

  useEffect(() => {
    const fetchDataUser = async () => {
      const res = await fetch(`https://mentorixid.vercel.app/api/users/`);
      const data = await res.json();
      setUser(data);
    };
    fetchDataUser();
  }, []);
  
  const findUser = user?.data?.datas.find((item: any) => item.id == id);
  // console.log(findUser.enrolledClasses);
  return (
    <div className="w-full h-full px-6 py-4">
      <div className="bg-base-300 dark:bg-slate-500 rounded-md flex flex-col gap-4 py-4 px-4">
        <h2 className="text-xl font-semibold dark:text-white">Kelas Saya</h2>
        <div className="flex md:flex-row flex-col md:gap-4 gap-4 items-center w-full">
          {findUser?.enrolledClasses?.map((item: any) => (
            <CardDemo
              key={item as never}
              title={item.title}
              level={item.difficultyLevel}
              lesson={item.lesson}
              time={item.time}
              price={item.price}
              discountPrice={item.discountPrice}
            />
          ))}
        </div>
        <div className="flex items-center justify-end gap-2">
          <button className="rounded-full w-12 h-12 bg-success flex justify-center items-center text-white font-bold text-xl">
            {" "}
            {"<"}{" "}
          </button>
          <button className="rounded-full w-12 h-12 bg-success flex justify-center items-center text-white font-bold text-xl">
            {" "}
            {">"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerClass;
