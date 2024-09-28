import React from 'react'
import Image from "next/image"

const AboutPage = () => {
  return (
      <section className='w-full md:h-screen h-full flex flex-col md:flex-row bg-white pt-24 md:pt-0'>
          <div className='md:w-1/2 w-full h-full flex justify-center items-center'>
              <Image src="/assets/olther/landing_mentorix_1.png" alt="alt" width={300} height={300} className='w-[500px]' />
          </div>
          <div className='md:w-1/2 w-full h-full flex flex-col md:gap-14 gap-8 py-36 px-14 justify-center'>
              <h2 className='md:text-5xl text-3xl font-bold capitalize'>apakah kamu ingin bergabung di salah satu kelas kami ?</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsa quae eligendi voluptate nulla necessitatibus in, nihil, praesentium totam mollitia distinctio ipsam excepturi, aut animi consequatur maiores molestias corrupti ex!</p>
              <button className= 'text-white capitalize w-1/2 btn bg-color-primary hover:bg-color-accent hover:text-color-primary border-none'>gabung kelas</button>
          </div>
    </section>
  )
}

export default AboutPage