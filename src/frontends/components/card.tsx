import { useIcons } from '@/hook/useIcons';
import { Badge } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'
import { MdSignalCellular1Bar } from 'react-icons/md';

const CardDemo = ({title,level,lesson,time,price, discountPrice}: any) => {
  const { icons } = useIcons();
  const router = useRouter();
  const priceNow = price - (price * discountPrice) / 100;
  return (
    <div className="w-[300px] h-[450px] bg-white shadow-md rounded-md overflow-hidden">
      <div className="w-full h-1/2 bg-blue-50 skeleton rounded-md p-4">
        <div></div>
      </div>
      <div className="p-4 flex flex-col justify-between w-full h-1/2 ">
        <h3 className="text-xl  font-semibold capitalize w-full">{title}</h3>
        <div className="flex gap-4 items-center font-semibold capitalize">
          <MdSignalCellular1Bar />
          {level}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <icons.book size={20} />
            {lesson} lesson
          </div>
          <div className="flex gap-2 items-center">
            <icons.timer size={20} />
            {Math.floor(time / 60)} hours {time % 60} minutes
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Badge colorScheme="green" className="text-sm">
              {discountPrice}%
            </Badge>
            <p className="text-lg font-semibold line-through">{price}</p>
          </div>
          <p className="text-lg font-semibold ">{parseInt(priceNow.toString())}</p>
        </div>
        <button
          className="btn btn-success text-white w-full capitalize"
          onClick={() => router.push(`/courses/class/${title}`)}
        >
          detail kelas
        </button>
      </div>
    </div>
  );
}

export default CardDemo

