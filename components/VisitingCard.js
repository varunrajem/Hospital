import React from "react";
import Image from "next/image";

function VisitingCard(props) {
  return (
    <>
      <div className='max-w-sm p-2 shadow-md'>
        <h1>{props.title}</h1>
        <div className='flex w-auto'>
          <div>
            <Image
              src={props.image}
              alt='logo'
              height={45}
              width={45}
              className='rounded-full'
            />
          </div>
          <div className='relative top-2'>
            <p className='flex px-2'>
              By<span className='font-bold'>{props.imageName}</span>{" "}
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
        <div className='mt-3 mb-2'>
          <button className='my-2 border-2 px-2 py-0.5 font-medium text-base text-blue-600 border-blue-600 rounded uppercase'>
            VIEW MORE
          </button>
        </div>
      </div>
    </>
  );
}

export default VisitingCard;
