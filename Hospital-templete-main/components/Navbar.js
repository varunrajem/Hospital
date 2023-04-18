import React from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'

function Navbar() {
  return (
    <>
      <div className='bg-[#0d3956] text-[#FFFFFF]'>
        <div className='container mx-auto max-w-[1440px] px-5'>
          <div className='text-xs hidden sm:flex justify-center items-center lg:justify-end gap-5 py-5'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 mx-2'
              >
                <path d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              Time (6AM-9PM)
            </div>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 mx-2'
              >
                <path d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' />
              </svg>
              +91 8173078981 +91 8002826695
            </div>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 mx-2'
              >
                <path d='M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z' />
              </svg>
              admin@sbhospital.org
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#174A6D] text-[#FFFFFF] w-full sticky top-0 z-30'>
        <div className='max-w-[1440px] container mx-auto py-2 px-5'>
          <div className='flex justify-between items-center'>
            <div className='font-bold text-white'>
              <Image src={logo} alt="logo" height={60} />
            </div>
            <div className='hidden md:flex justify-between'>
              <ul className='flex gap-5 text-sm items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Doctor</li>
                <li>Schedule</li>
                <li className='px-4 py-1.5 border border-white rounded-md'>Contact Us</li>
              </ul>
            </div>
            <div className='block text-right md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar