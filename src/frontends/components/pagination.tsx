import React from "react";
import { Pagination } from "@nextui-org/react";

export default function PaginationElement({ onchange,page }: { page:number,onchange: any }) {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Pagination
        total={10}
              initialPage={1}
              page={page}
        size={"lg"}
        color="default"
        onChange={onchange}
      />
    </div>
  );
}
