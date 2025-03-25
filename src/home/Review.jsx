import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import profile from '../assets/profile.jpg';
import co_fonder from '../assets/co_fonder.jpg';
import president from '../assets/president.jpg';
import vice_president from '../assets/vice_president.jpg';

//react icons
import { FaStar } from 'react-icons/fa6';
//import avater
import { Avatar } from "flowbite-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
        <h3 className="text-5xl font-bold text-center mb-10 leading-snup"> Founders Company </h3>
        <div className='space-y-6'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-6 md:m:5 rounded-lg border'>

        <div>
            <div className='text-amber-500 flex gap-2'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
                    {/* text */}
                    
        <div className='mt-7'>
            <p className='mb-5'>My name is Medard, and I am the CEO of a 
              company called AMEDEC (Association of Carpentry for Economic Development). 
              It operates in Rwanda. Address: Eastern Province, Kirehe, Mahama. It was founded in 2022..</p>

                <Avatar
                alt="avatar of medard"
                img={profile}
                rounded
                className='w-10 mb-4'
                
                />
                <h5 className='text-lg font-medium'>Medard</h5>
                <p className='text-base'>CEO AMEDEC campany</p>
        </div>
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-2xl bg-white py-8 px-6 md:m:5 rounded-lg border'>
        <div className='text-amber-500 flex gap-2'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
          
            <p className='mb-5'>MY name is Gentille, and I am the Co-fonder of a 
              company called AMEDEC (Association of Carpentry for Economic Development). 
              It operates in Rwanda. Address: Eastern Province, Kirehe, Mahama. It was founded in 2022..</p>

                <Avatar
                alt="avatar of medard"
                img={co_fonder}
                rounded
                className='w-10 mb-4'
                
                />
                <h5 className='text-lg font-medium'>Gentille</h5>
                <p className='text-base'>CE-Fonder AMEDEC campany</p>
        </div>
        

        </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-2xl bg-white py-8 px-6 md:m:5 rounded-lg border'>
        <div className='text-amber-500 flex gap-2'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p className='mb-5'>My name is landry, and I am the presindent of a 
              company called AMEDEC (Association of Carpentry for Economic Development). 
              It operates in Rwanda. Address: Eastern Province, Kirehe, Mahama. It was founded in 2022..</p>

                <Avatar
                alt="avatar of medard"
                img={president}
                rounded
                className='w-10 mb-4'
                
                />
                <h5 className='text-lg font-medium'>Profeseur Landry</h5>
                <p className='text-base'>PRESIDENT AMEDEC campany</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-2xl bg-white py-8 px-6 md:m:5 rounded-lg border'>
        <div className='text-amber-500 flex gap-2'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p className='mb-5'>My name is Any Blessingi, and I am the vice_president of a 
              company called AMEDEC (Association of Carpentry for Economic Development). 
              It operates in Rwanda. Address: Eastern Province, Kirehe, Mahama. It was founded in 2022..</p>

                <Avatar
                alt="avatar of medard"
                img={vice_president}
                rounded
                className='w-10 mb-4'
                
                />
                <h5 className='text-lg font-medium'>DOCTER Any Blessing</h5>
                <p className='text-base'>vice_president AMEDEC campany</p>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className='shadow-2xl bg-white py-8 px-6 md:m:5 rounded-lg border'>
        <div className='text-amber-500 flex gap-2'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p className='mb-5'>My name is Medard, and I am the CEO of a 
              company called AMEDEC (Association of Carpentry for Economic Development). 
              It operates in Rwanda. Address: Eastern Province, Kirehe, Mahama. It was founded in 2022..</p>

                <Avatar
                alt="avatar of medard"
                img={profile}
                rounded
                className='w-10 mb-4'
                
                />
                <h5 className='text-lg font-medium'>Medard</h5>
                <p className='text-base'>CEO AMEDEC campany</p>
        </div></SwiperSlide>
        <SwiperSlide><div className='shadow-2xl bg-white py-8 px-6 md:m:5 rounded-lg border'>
        <div className='text-amber-500 flex gap-2'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p className='mb-5'>My name is Medard, and I am the CEO of a 
              company called AMEDEC (Association of Carpentry for Economic Development). 
              It operates in Rwanda. Address: Eastern Province, Kirehe, Mahama. It was founded in 2022..</p>

                <Avatar
                alt="avatar of medard"
                img={profile}
                rounded
                className='w-10 mb-4'
                
                />
                <h5 className='text-lg font-medium'>Medard</h5>
                <p className='text-base'>CEO AMEDEC campany</p>
                </div></SwiperSlide>
        
        <SwiperSlide><div className='shadow-2xl bg-white py-8 px-6 md:m:5 rounded-lg border'>
        <div className='text-amber-500 flex gap-2'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p className='mb-5'>My name is Medard, and I am the CEO of a 
              company called AMEDEC (Association of Carpentry for Economic Development). 
              It operates in Rwanda. Address: Eastern Province, Kirehe, Mahama. It was founded in 2022..</p>

                <Avatar
                alt="avatar of medard"
                img={profile}
                rounded
                className='w-10 mb-4'
                
                />
                <h5 className='text-lg font-medium'>Medard</h5>
                <p className='text-base'>CEO AMEDEC campany</p>
        </div></SwiperSlide>
      </Swiper>
        </div>

    </div>
  )
}

export default Review
