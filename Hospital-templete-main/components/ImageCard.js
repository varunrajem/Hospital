import React from 'react'
import Image from 'next/image'

function ImageCard(props) {
  return (
    <>
      <div className='bg-[#F1F2F4]'>
        <Image src={props.image} alt='image'></Image>
      </div>
    </>
  );
}

export default ImageCard