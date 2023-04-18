import Head from "next/head";
import { Inter } from "@next/font/google";
import ServiceCard from "../components/ServiceCard";
import ImageCard from "../components/ImageCard";
import doctor from "../public/doctor.jpg";
import doctor2 from "../public/doctor2.jpg";
import ImageCardTitle from "../components/ImageCardTitle";
import Image from "next/image";
import dna from "../public/dna.jpg";
// import Carousel from '../components/Carousel';
import VisitingCard from '../components/VisitingCard'
import LatestDoctors from "../components/LatestDoctors";
import operation from '../public/operation.png'
import banner from '../public/banner.jpg'


export default function Home() {
  return (
    <>
      <Head>
        <title>S. B. Multispeciality Hospital</title>
        <meta name='description' content='S.B. Multispeciality Hospital' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='relative h-screen w-full -mt-1'>
          <Image
            alt='banner'
            src={banner}
            className='w-full h-full object-cover'
          />
          <div className='absolute top-10 sm:top-20 md:top-28 left-10 text-[#F1F2F4]'>
            <div>
              <h6 className='uppercase font-bold text-sm pb-2'>
                LOVE YOUR SOUL
              </h6>
              <h3 className='text-4xl'>We pour love</h3>
              <h3 className='text-5xl'>and care in every</h3>
              <span className='text-5xl flex underline pb-5'>Patient.</span>
            </div>
            <button className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
              </svg>
              <span className='px-4 pb-5'>We make you never lose hope.</span>
            </button>
            <p className='pb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Eos cupiditate reprehenderit eligendi sit quibusdam itaque?
            </p>
            <div className='flex items-center gap-5'>
              <button className='my-2 border-2 px-3 py-2 font-medium text-base rounded'>
                get Appointment
              </button>
              <button className='flex'>
                <span className='px-1.5'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    <path d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z' />
                  </svg>
                </span>
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-3xl font-bold text-center pb-8 pt-10'>
            Provides our best services
          </h1>
          <p className='flex-wrap text-center pb-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            cum quasi recusandae velit.
            <br />
            fugiat distinctio laborum consequuntur dolor molestias sunt tenetur
            commodi est!
          </p>
          {/* - ------------- Service card --------------------- */}
          <div className='flex justify-center container mx-auto px-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              <ServiceCard title='ICU' subTitle='Patient centric high quality care'>
                <svg
                  width='64'
                  height='64'
                  viewBox='0 0 283 64'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z'
                    fill='#FFFFFF'
                  />
                </svg>
              </ServiceCard>
              <ServiceCard title='NICU' subTitle='subTitle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='.02c'
                  stroke='currentColor'
                  className='w-16 h-16'
                >
                  <path
                    fill='#FFFFFF'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </ServiceCard>
              <ServiceCard title='ECG' subTitle='subTitle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='.02c'
                  stroke='currentColor'
                  className='w-16 h-16'
                >
                  <path
                    fill='#FFFFFF'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </ServiceCard>
              <ServiceCard title='Ultrasound' subTitle='subTitle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='.02c'
                  stroke='currentColor'
                  className='w-16 h-16'
                >
                  <path
                    fill='#FFFFFF'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </ServiceCard>
              <ServiceCard title='X-Ray' subTitle='subTitle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='.02c'
                  stroke='currentColor'
                  className='w-16 h-16'
                >
                  <path
                    fill='#FFFFFF'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </ServiceCard>
              <ServiceCard title='Pathology' subTitle='subtitle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='.02c'
                  stroke='currentColor'
                  className='w-16 h-16'
                >
                  <path
                    fill='#FFFFFF'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </ServiceCard>
              <ServiceCard title='Pharmacy' subTitle='subtitle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='.02c'
                  stroke='currentColor'
                  className='w-16 h-16'
                >
                  <path
                    fill='#FFFFFF'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </ServiceCard>
              <ServiceCard title='All Types of operations' subTitle='subtitle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='.02c'
                  stroke='currentColor'
                  className='w-16 h-16'
                >
                  <path
                    fill='#FFFFFF'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </ServiceCard>
            </div>
          </div>
          {/* - -------------Top doctors --------------------- */}
          <h1 className='text-3xl font-bold text-center pb-8 pt-10'>
            Have Top Specialist Doctors
          </h1>
          <p className='flex-wrap text-center pb-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            cum quasi recusandae velit.
            <br />
            fugiat distinctio laborum consequuntur dolor molestias sunt tenetur
            commodi est!
          </p>
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
              <ImageCard image={doctor} />
              <ImageCard image={doctor2} />
              <ImageCard image={doctor} />
              <ImageCard image={doctor2} />
            </div>
          </div>
          {/* - -------------weekly Doctors --------------------- */}
          <div className='mt-10 bg-[#1B477D] text-[#FFFFFF] pb-4'>
            <h1 className='text-3xl font-bold text-center pb-8 pt-10'>
              Available to weekly Doctors
            </h1>
            <p className='flex-wrap text-center pb-8'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus cum quasi recusandae velit.
              <br />
              fugiat distinctio laborum consequuntur dolor molestias sunt
              tenetur commodi est!
            </p>
            <div className='flex justify-center'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <ImageCardTitle
                  image={doctor2}
                  title='Dr. Atul Yadav'
                  subTitle='M.B.B.S. (NMCH) FICM, FCCM General Physician, Critical Care and Diabetologist'
                />
                <ImageCardTitle
                  image={doctor}
                  title='Dr. Pooja'
                  subTitle='M.B.B.S. M.S. (Obs & Gyne)'
                />
                <ImageCardTitle
                  image={doctor2}
                  title='Dr. Karishma'
                  subTitle='BAMS Gynecologist'
                />
                <ImageCardTitle
                  image={doctor}
                  title='Dr. Priyanka'
                  subTitle='M.B.B.S. M.S. General Surgeon'
                />
                <ImageCardTitle
                  image={doctor}
                  title='Dr. K. Tripathi'
                  subTitle='M.B.B.S. M.D. (Medicine) '
                />
                <ImageCardTitle
                  image={doctor2}
                  title='Dr. Amit Tripathi'
                  subTitle='M.B.B.S. M.D. (Mch) Urologint'
                />
                <ImageCardTitle
                  image={doctor2}
                  title='Dr. R. P. Pandey'
                  subTitle='M.B.B.S. M.D. (Mch) Neurologist'
                />
                <ImageCardTitle
                  image={doctor2}
                  title='Dr. Mritunjay'
                  subTitle='M.B.B.S. Ortho'
                />
                <ImageCardTitle
                  image={doctor2}
                  title='Dr. V. Shukla'
                  subTitle='M.B.B.S. M.S. Ortho'
                />
                <ImageCardTitle
                  image={doctor2}
                  title='Dr. Manoj'
                  subTitle='BDS MDS, Dentist'
                />
                <ImageCardTitle
                  image={doctor2}
                  title='Dr. Santosh Gupta'
                  subTitle='M.B.B.S. M.D. Pediatrics'
                />
              </div>
            </div>
          </div>
          <div>{/* <Carousel/> */}</div>
          {/* - ------------- DNA --------------------- */}
          <div className='relative'>
            <Image src={dna} alt='DNA image' width={1550} />
            <div className='absolute top-5 sm:top-14 md:top-20 lg:top-32  w-full'>
              <div className='flex justify-around text-red-500 w-full'>
                <div>
                  <h1 className='text-xl md:text-3xl sm:text-2xl lg:text-3xl font-bold'>
                    500+
                  </h1>
                  <p>sunTitle</p>
                </div>
                <div>
                  <h1 className='text-xl md:text-3xl sm:text-2xl lg:text-3xl font-bold'>
                    1500+
                  </h1>
                  <p>sunTitle</p>
                </div>
                <div>
                  <h1 className='text-xl md:text-3xl sm:text-2xl lg:text-3xl font-bold'>
                    200+
                  </h1>
                  <p>sunTitle</p>
                </div>
                <div>
                  <h1 className='text-xl md:text-3xl sm:text-2xl lg:text-3xl font-bold'>
                    15+
                  </h1>
                  <p>sunTitle</p>
                </div>
              </div>
            </div>
          </div>
          {/* - ------------- News & Events --------------------- */}
          <h1 className='text-3xl font-bold text-center pb-8'>
            See our latest News & Events
          </h1>
          <p className='flex-wrap text-center pb-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            cum quasi recusandae velit.
            <br />
            fugiat distinctio laborum consequuntur dolor molestias sunt tenetur
            commodi est!
          </p>
          <div className='flex justify-center flex-col lg:flex-row gap-5'>
            {/* <div className='w-auto grid grid-cols-2'> */}
            <div className='w-full lg:w-1/2'>
              <LatestDoctors
                image={operation}
                title='Some title'
                profileImage={doctor2}
                profileName='operation doctor'
                date='10-12-2023'
                subTitle='Lorem molestiae dolorem similique cumque accusamus
                 provident explicabo corrupti sunt?'
                profileTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                profileSunTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugit natus blanditiis impedit voluptatem libero sequi, molestiae dolorem similique cumque accusamus facilis! Dicta itaque praesentium repellat provident explicabo corrupti sunt?'
              />
            </div>
            <div>
              <VisitingCard
                image={doctor}
                imageName='Doctor'
                date='01-01-2023'
              />
              <VisitingCard
                image={doctor}
                imageName='Doctor'
                date='02-02-2023'
              />
              <VisitingCard
                image={doctor}
                imageName='Doctor'
                date='03-03-2023'
              />
              <VisitingCard
                image={doctor}
                imageName='Doctor'
                date='04-04-2023'
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
