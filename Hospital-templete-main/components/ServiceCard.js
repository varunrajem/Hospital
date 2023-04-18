import React from "react";

function ServiceCard(props) {
  return (
    <div className="m-5">
      <div className='rounded-md text-black bg-[#184E61] max-w-xs pt-10 pr-12 pb-10'>
        <div className='grid grid-cols-2'>
          <div>
            <div className='flex justify-around'>{props.children}</div>
          </div>
          <div
            className='justify-start flex-wrap text-[#FFFFFF]'
          >
            <h1 className='font-bold'>{props.title}</h1>
            <p className='flex flex-wrap'>{props.subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
