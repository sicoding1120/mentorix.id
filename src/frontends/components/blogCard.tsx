import React from 'react'

const BlogCard = () => {
  return (
      <div className='w-[250px] h-[350px] flex flex-col gap-2'>
          <div className='w-full h-1/2 rounded-xl bg-blue-500'></div>
          <div className='flex flex-col gap-2 rounded-xl py-2'>
              <div className='w-1/3 h-8 text-center flex justify-center items-center rounded-xl bg-blue-300/50 text-blue-500/90 capitalize'>pro</div>
              <h2 className='text-xl font-bold'>
                  How To Learn Coding In 2024 at mentorix
              </h2>
              <p className='text-sm text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex gap-2 items-center'>
              <div className='w-10 rounded-full h-10 bg-slate-500'></div>
              <div className='flex flex-col'>
                  <h4 className='text-lg font-bold'>Nama Orang</h4>
                  <p className='text-sm font-semibold capitalize text-slate-400'>24 sep 2024</p>
              </div>
          </div>
    </div>
  )
}

export default BlogCard