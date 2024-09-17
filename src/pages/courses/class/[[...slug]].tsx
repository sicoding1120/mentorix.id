

import DetailClasses from "@/frontends/components/detailClasses";
import MateriClass from "@/frontends/components/materiClass";
import { Card, SkeletonCircle } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// export async function getServerSideProps() {
//   const res = await fetch("https://my-app-one-pi-53.vercel.app/api/class");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

const Class = ({ data }: { data: any }) => {
  return (
    <div>
      hallo
      {data ? (
        data.data.classes.map((data: any, index: any) => (
          <DetailClasses
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

export const ClassRouter = ({ data }: { data: any }) => {
  const { query } = useRouter();
  console.log(query.slug);
  const path = query.slug;
  return (
    <div>
      {path?.at(0) ? (
        path?.at(1) ? (
          <MateriClass data={data}/>
        ) : (
          <Class data={data} />
        )
      ) :null}
    </div>
  );
};

export default ClassRouter;
