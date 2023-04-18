import React from 'react'
import Image from 'next/image';

function ImageCardTitle(props) {
  return (
    <>
      <div className='rounded-lg m-0 relative'>
        <Image src={props.image} alt='image' className='rounded-lg' />
        <div className='px-5 absolute bottom-0'>
          <h1 className='font-bold'>{props.title}</h1>
          <p>{props.subTitle}</p>
        </div>
      </div>
    </>
  );
}

export default ImageCardTitle