import Container from '@/Components/Common/Layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const LifeHack = () => {

    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate: string = currentDate.toLocaleDateString(undefined, options);

    return (
        <section>
            <Container>
                <div className='py-6 md:py-12 lg:py-20'>
                    <div className='flex  justify-between items-center pb-4 md:pb-8 lg:pb-12'>
                        <h2 className=' font-medium sm:font-semibold text-xl md:text-3xl lg:text-4xl mb-2 md:mb-0 md:mr-4'>
                            Essential <span className='text-tertiary'> Makeup </span> Life Hacks
                        </h2>
                        <span className='bg-[#EBEEF6] hover:bg-[#b6c0d8] transition-all duration-500 px-2 md:px-3 py-1 text-xs md:text-sm font-thin cursor-pointer'>
                            See All
                        </span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
                        {data.map((item, index) => (
                            <div
                                className={`blog-heading cursor-pointer ${index === 0 ? ' md:block hidden md:row-span-2 lg:row-span-3' : 'max-h-[]'
                                    }`}
                                key={index}
                            >
                                <div className={`overflow-hidden pb-2 ${index === 0 ? 'md:w-full md:h-full md:max-h-[545px] lg:max-h-[498px] xl:max-h-[589px]' : ''}`}>
                                    <Image className={`rounded-md transition-all duration-500 hover:scale-105 w-full h-full object-cover  ${index > 0 ? 'max-h-[300px] md:max-h-[236px]' : ' lg:max-h-[460px] xl:max-h-[590px]'}`} src={item.img} alt={'lifehack-img'} width={500} height={500} />
                                </div>
                                <Link href={'/'}> <span className='text-sm pb-1 text-[#D48D78] hover:text-[#35155D]'>{item.category}</span></Link>
                                <div className='flex justify-between items-center pb-1 text-gray-500'>
                                    <p className='text-sm'>By {item.author}</p>
                                    <p className='text-sm'>  {formattedDate} </p>
                                </div>
                                <h2 className='text-base md:text-lg lg:text-xl'>
                                    {item.heading}
                                </h2>
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
        category: 'Fondation',
        author: 'Padhana',
        heading: 'Cosmetic procedures for aging skin'
    },
    {
        img: '/style.jpg',
        category: 'Fondation',
        author: 'Padhana',
        heading: 'Cosmetic procedures for aging skin'
    },
    {
        img: '/imgfour.png',
        category: 'Fondation',
        author: 'Padhana',
        heading: 'Cosmetic procedures for aging skin'
    },
    {
        img: '/womenmakeup.webp',
        category: 'Fondation',
        author: 'Padhana',
        heading: 'Cosmetic procedures for aging skin'
    },
    {
        img: '/phithree.webp',
        category: 'Fondation',
        author: 'Padhana',
        heading: 'Cosmetic procedures for aging skin'
    },
]