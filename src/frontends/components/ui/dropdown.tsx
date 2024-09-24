import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { IconArrowDown } from "@tabler/icons-react";

export default function DropDownSelect() {
 return (
   <div className="dropdown dropdown-bottom dropdown-end">
     <div tabIndex={0} role="button" className="m-1 px-2 py-1  btn flex items-center gap-2">
             <p>10</p>
     </div>
     <ul
       tabIndex={0}
       className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
     >
       <li>
         <a>10</a>
       </li>
       <li>
         <a>20</a>
       </li>
       <li>
         <a>30</a>
       </li>
       <li>
         <a>40</a>
       </li>
     </ul>
   </div>
 );
}
