import React from 'react'
import Image from 'next/image';

function LatestDoctors(props) {
  return (
    <>
      <div>
        <Image
          height={500}
          width={500}
          className='rounded-sm'
          src={props.image}
          alt='banner'
        />
        <h2 className='font-bold text-2xl'>{props.title}</h2>
        <div className='flex'>
          <div>
            <Image
              src={props.profileImage}
              alt='logo'
              height={45}
              width={45}
              className='rounded-full'
            />
          </div>
          <div className='relative top-2'>
            <p className='flex px-2'>
              By<span className='font-bold'>{props.profileName}</span>{" "}
            </p>
          </div>
          <div className='flex mx-12 relative top-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' />
            </svg>
            <p className='px-2'>{props.date}</p>
          </div>
        </div>
        <p>{props.subTitle}</p>
        <div>
          <h1 className='font-bold text-green-500'>{props.profileTitle}</h1>
          <p>{props.profileSunTitle}</p>
        </div>
        <button className='flex my-2 border-2 px-4 py-2 font-medium text-base text-[#FFFFFF] bg-[#184E61] rounded uppercase'>
          VIEW MORE
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}

export default LatestDoctors;