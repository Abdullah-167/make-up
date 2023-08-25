import Container from '@/Components/Common/Layout/Container';
import Image from 'next/image';
import React from 'react';

const LifeHack = () => {
    return (
        <section>
            <Container>
                <div className='py-6 md:py-12 lg:py-20'>
                    <div className='flex  justify-between items-center pb-4 md:pb-8 lg:pb-12'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-0 md:mr-4'>
                        Essential Makeup Life Hacks
                        </h2>
                        <span className='bg-[#EBEEF6] hover:bg-[#b6c0d8] transition-all duration-500 px-2 md:px-3 py-1 text-xs md:text-sm font-thin cursor-pointer'>
                            See All
                        </span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
                        {data.map((item, index) => (
                            <div
                                className={`hack cursor-pointer ${index === 0 ? 'md:row-span-2 lg:row-span-3' : ''
                                    }`}
                                key={index}
                            >
                                <div className={`overflow-hidden pb-2 ${index === 0 ? 'md:w-full md:h-full md:max-h-[545px] lg:max-h-[468px] xl:max-h-[532px]' : ''}`}>
                                    <Image className={`rounded-md transition-all duration-500 hover:scale-105 w-full h-full lg:max-h-[460px] xl:max-h-[530px]`} src={item.img} alt={'lifehack-img'} width={500} height={500} />
                                </div>
                                <span className='text-base md:text-lg lg:text-xl'>
                                    {item.heading}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LifeHack;


const data = [
    {
        img: '/aunt.jpg',
        heading: 'Cosmetic procedures for aging skin'
    },
    {
        img: '/aunt.jpg',
        heading: 'Cosmetic procedures for aging skin'
    },
    {
        img: '/aunt.jpg',
        heading: 'Cosmetic procedures for aging skin'
    },
    {
        img: '/aunt.jpg',
        heading: 'Cosmetic procedures for aging skin'
    },
    {
        img: '/aunt.jpg',
        heading: 'Cosmetic procedures for aging skin'
    },
]