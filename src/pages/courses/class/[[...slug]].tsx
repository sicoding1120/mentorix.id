import DetailClasses from "@/frontends/components/detailClasses";
import MateriClass from "@/frontends/components/materiClass";
import { Card, SkeletonCircle } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


const Class = ({ data }: { data: any }) => {
  return (
    <div>
      {data ? (
        data?.map((data: any, index: any) => (
          <DetailClasses
            id={data.id_credential}
            key={index}
            desc={data.aboutClass}
            title={data.title}
            time={data.time}
            lesson={data.lesson}
            stepClass={data.StepClass}
            prepareToLearn={data.prepareToLearn}
            level={data.difficultyLevel}
            mentorixPoin={data.mentorixPoin}
            materiList={data.materiList}
          />
        ))
      ) : (
        <div className="">loading....</div>
      )}
    </div>
  );
};

export const ClassRouter = () => {
  const [datas,setDatas] = useState<any>()
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://mentorixid.vercel.app/api/class");
      const data = await res.json();
      setDatas(data);
    }
    fetchData();
  }, [])


  const { query } = useRouter();
  const path = query.slug;

  const filterData = datas?.data?.datas.filter((data: any) => data.title == path?.at(0));
  const findClass = filterData?.find((data: any) => data.title == path?.at(0));
  return (
    <div>
      {path?.at(0) ? (
        path?.at(1) ? (
          <MateriClass data={findClass} id={query.slug?.at(2)}title={findClass?.title} />
        ) : (
          <Class data={filterData} />
        )
      ) :null}
    </div>
  );
};

export default ClassRouter;
