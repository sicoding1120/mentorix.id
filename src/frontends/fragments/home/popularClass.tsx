import React from 'react'

const PopularClass = () => {
  return (
      <section className='w-full md:h-screen py-14 md:px-24 px-8 flex flex-col bg-black/5'>
          <div className='flex md:flex-row flex-col gap-4 md:gap-0 justify-between items-center'>
              <h3 className='md:text-5xl text-4xl font-bold capitalize'>kelas terpopuler</h3>
              <p className='hover:underline hover:text-blue-500 text-xl capitalize'>lihat semua kelas</p>
          </div>
          <div className='grid md:grid-cols-3 md:gap-14 gap-8 mt-14'>
              <div className='w-full h-[200px] bg-white overflow-hidden rounded-xl flex flex-col-reverse group'>
                  <div className='w-full h-1/2 bg-black/10 relative top-[100px] group-hover:top-0 transition-all px-4 py-2'>
                      <h5 className='text-xl font-semibold'>UI/UX Design</h5>
                      <p>500+ student</p>
                  </div>
              </div>
              <div className='w-full h-[200px] bg-white overflow-hidden rounded-xl flex flex-col-reverse group'>
                  <div className='w-full h-1/2 bg-black/10 relative top-[100px] group-hover:top-0 transition-all px-4 py-2'>
                      <h5 className='text-xl font-semibold'>UI/UX Design</h5>
                      <p>500+ student</p>
                  </div>
              </div>
              <div className='w-full h-[200px] bg-white overflow-hidden rounded-xl flex flex-col-reverse group'>
                  <div className='w-full h-1/2 bg-black/10 relative top-[100px] group-hover:top-0 transition-all px-4 py-2'>
                      <h5 className='text-xl font-semibold'>UI/UX Design</h5>
                      <p>500+ student</p>
                  </div>
              </div>
              <div className='w-full h-[200px] bg-white overflow-hidden rounded-xl flex flex-col-reverse group'>
                  <div className='w-full h-1/2 bg-black/10 relative top-[100px] group-hover:top-0 transition-all px-4 py-2'>
                      <h5 className='text-xl font-semibold'>UI/UX Design</h5>
                      <p>500+ student</p>
                  </div>
              </div>
              <div className='w-full h-[200px] bg-white overflow-hidden rounded-xl flex flex-col-reverse group'>
                  <div className='w-full h-1/2 bg-black/10 relative top-[100px] group-hover:top-0 transition-all px-4 py-2'>
                      <h5 className='text-xl font-semibold'>UI/UX Design</h5>
                      <p>500+ student</p>
                  </div>
              </div>
              <div className='w-full h-[200px] bg-white overflow-hidden rounded-xl flex flex-col-reverse group'>
                  <div className='w-full h-1/2 bg-black/10 relative top-[100px] group-hover:top-0 transition-all px-4 py-2'>
                      <h5 className='text-xl font-semibold'>UI/UX Design</h5>
                      <p>500+ student</p>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default PopularClass