import { FaSearch } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import { MdWindow } from "react-icons/md";

export const useIcons = () => {
  return {
    icons: {
      window: MdWindow,
      search: FaSearch,
      book: IoMdBook,
      timer: IoTimerOutline,
    },
  };
};
