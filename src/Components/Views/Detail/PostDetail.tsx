import Container from '@/Components/Common/Layout/Container'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs'
import { HiOutlineShare } from 'react-icons/hi'
import { TfiAlarmClock } from 'react-icons/tfi'
import { HiCalendarDays } from 'react-icons/hi2'
import { FacebookShareButton, TwitterShareButton, PinterestShareButton } from 'react-share'

const PostDetail = () => {

    const [activeIconsIdx, setActiveIconsIdx] = useState(false);

    const toggleIcons = () => {
        setActiveIconsIdx(!activeIconsIdx)
    };

    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate: string = currentDate.toLocaleDateString(undefined, options);

    return (
        <section>
            <div className='mb-14' onMouseLeave={() => setActiveIconsIdx(false)}>
                <div className='relative max-h-[500px]'>
                    <Image className='max-h-[500px] object-cover w-full rounded-md my-2' src={'/women3.webp'} alt={''} width={1000} height={1000} />
                    <div className=' bg-black bg-opacity-70 absolute w-full h-full top-0'></div>
                </div>
                <Container>
                    <div className='z-[200] absolute top-0 pt-[170px] sm:pt-[170px] md:pt-[240px] inset-x-0 xl:inset-x-[5%] 2xl:inset-x-[15%] max-w-screen-lg mx-auto px-5'>
                        <div className='flex justify-center items-center relative'>
                            <div>
                                <h1 className='text-white text-3xl sm:text-5xl tracking-tighter font-semibold pb-4 leading-10'>How to clean the inside of a lip gloss tube</h1>
                                <div className='text-white flex gap-3 sm:gap-5 items-center pb-14'>
                                    <div className='text-white flex gap-2 items-center'>
                                        <span className='sm:text-xl'>  <TfiAlarmClock /> </span>
                                        <span>•</span>
                                        <p className=' text-white text-sm sm:text-base'>5 Minutes Read</p>
                                    </div>
                                    -
                                    <div className='text-white flex gap-2 items-center'>
                                        <span><HiCalendarDays /></span>
                                        <p className='text-sm sm:text-base'>{formattedDate}</p>
                                    </div>
                                </div>
                                <div className='flex gap-20 items-center'>
                                    <div>
                                        <h2 className='text-white text-xl font-semibold pb-3'>
                                            Author :
                                        </h2>
                                        <div className='flex gap-5 sm:gap-20 items-center'>
                                            <div className='flex items-center gap-4'>
                                                <Image src={'/padhana.jpg'} className=' rounded-full border-2 border-white p-0.5 cursor-pointer' alt='icon' width={60} height={60} />
                                                <div className='text-white text-xl font-medium'>
                                                    Abdullah Padhana
                                                </div>
                                            </div>
                                            <div className='bg-gray-100 flex justify-center items-center rounded-full w-10 h-10 cursor-pointer' onClick={toggleIcons}>
                                                <span className='text-xl opacity-50 cursor-pointer'>
                                                    <HiOutlineShare />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`bg-white px-2 py-2 rounded-md absolute left-[70%] sm:left-[37%] transform translate-x-[-50%] bottom-10 transition-all duration-200 ${activeIconsIdx ? 'opacity-100 bottom-[70px]' : 'opacity-0 invisible bottom-12'}`}>
                                        <div>
                                            <p className="text-xs pb-1 block">Share On:</p>
                                            <div className="flex gap-2">
                                                {social.map((item, index) => (
                                                    <div key={index}>
                                                        {item.platform === 'facebook' && (
                                                            <FacebookShareButton url={'post heaindd'}>
                                                                <span className="text-blue-500">  <BsFacebook size={23} round /> </span>
                                                            </FacebookShareButton>
                                                        )}
                                                        {item.platform === 'twitter' && (
                                                            <TwitterShareButton url={'post heaindd'}>
                                                                <span className="text-blue-500"> <BsTwitter size={23} round /> </span>
                                                            </TwitterShareButton>
                                                        )}
                                                        {item.platform === 'pinterest' && (
                                                            <PinterestShareButton url={'post heaindd'} media={'post heaindd'}>
                                                                <span className="text-red-500">  <BsPinterest size={23} round /> </span>
                                                            </PinterestShareButton>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div >
        </section >
    )
}

export default PostDetail


const social = [
    {
        platform: 'facebook',
    },
    {
        platform: 'twitter',
    },
    {
        platform: 'pinterest',
    },
];