import Container from '@/Components/Common/Layout/Container';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SideBar from './SideBar';
import { FiFilter } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';


const BlogCards = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [toggelSidebar, setToggelSidebar] = useState(false);

    const handleSidebar = () => {
        setToggelSidebar(!toggelSidebar)
    }

    const handleSearch = (query: any) => {
        setSearchQuery(query);
    };

    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate: string = currentDate.toLocaleDateString(undefined, options);

    return (
        <section>
            <Container>
                <div className='pb-20'>
                    {data.map((item, index) => {
                        return (
                            <div     key={index}>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 pb-16'
                                >
                                    {item.mainCards.map((mainCard, mainIdx) => {
                                        return (
                                            <div
                                                className={`blog-heading cursor-pointer ${mainIdx === 0 ? ' md:block hidden md:row-span-2 lg:row-span-3' : 'max-h-[]'
                                                    }`}
                                                key={mainIdx}
                                            >
                                                <div className={` pb-2 ${mainIdx === 0 ? 'md:w-full md:h-full md:max-h-[545px] lg:max-h-[498px] xl:max-h-[589px]' : ''}`}>
                                                    <Image className={`rounded-md transition-all duration-500 hover:scale-105 w-full h-full object-cover  ${mainIdx > 0 ? 'max-h-[300px] md:max-h-[236px]' : 'min-w- lg:max-h-[460px] xl:max-h-[590px]'}`} src={mainCard.img} alt={'lifehack-img'} width={500} height={500} />
                                                </div>
                                                <Link href={'/'}>
                                                    <span className='text-sm pb-1 text-[#D48D78] hover:text-[#35155D] block'>{mainCard.category}</span>
                                                </Link>
                                                <h1 className="text-xl pb-2">
                                                    {mainCard.heading}
                                                </h1>
                                                <span className='text-sm pb-1 text-gray-500'>By {mainCard.author} <span className='pl-2'> - </span> <span className='pl-2'> {formattedDate} </span></span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className='text-3xl sm:text-5xl font-semibold sm:text-center pb-12'>Our Featured <span className='text-tertiary'> {`Artile's`} </span></p>
                                <div className='lg:flex gap-10 justify-between w-full relative'>
                                    <div className='lg:flex hidden'>
                                        <SideBar />
                                    </div>
                                    <div className={` w-full  max-w-[300px]  bg-white fixed top-0 z-[2700] lg:z-[100] py-5 h-full transition-all duration-700 shadow-md  right-0 ${toggelSidebar ? ' left-0 block z-[400]' : '  -left-[400px]  opacity-0 h-0'}`}>
                                        {toggelSidebar && (
                                            <div className=' relative  max-w-[300px] '>
                                                <SideBar />
                                                <span className='text-2xl cursor-pointer absolute pt-1 top-0 right-1' onClick={handleSidebar}><RxCross2 /></span>
                                            </div>
                                        )}

                                    </div>
                                    <div className='px-2 mb-5 lg:hidden block'>
                                        <div className='text-xl font-semibold flex items-center gap-1' onClick={handleSidebar}>
                                            <p className='cursor-pointer'>Filter By</p>
                                            <span className='cursor-pointer'>
                                                <FiFilter />{' '}
                                            </span>
                                        </div>
                                        <div className=' bg-black w-28 h-[2px]'></div>
                                    </div>
                                    <div className='lg:flex-grow'>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-y-16'>
                                            {item.secondarCardsData
                                                .filter((secCard: any) =>
                                                    secCard.heading.toLowerCase().includes(searchQuery.toLowerCase())
                                                )
                                                .length === 0 ? (
                                                <p className="text-xl">Nothing found related to your search</p>
                                            ) : (
                                                item.secondarCardsData
                                                    .filter((secCard: any) =>
                                                        secCard.heading.toLowerCase().includes(searchQuery.toLowerCase())
                                                    )
                                                    .map((secCard: any, secIdx: any) => (
                                                        <div
                                                            className={`cursor-pointer rounded-md mx-2`}
                                                            key={secIdx}
                                                        >
                                                            <div className={`overflow-hidden pb-2 `}>
                                                                <Image
                                                                    className={`rounded-md transition-all duration-500 min-h-[300px] max-h-[300px]  md:max-w-[300px] hover:scale-105 w-full h-full object-cover`}
                                                                    src={secCard.img}
                                                                    alt={'lifehack-img'}
                                                                    width={500}
                                                                    height={500}
                                                                />
                                                            </div>
                                                            <Link href={'/'}>
                                                                <span className='text-sm pb-1 text-[#D48D78] hover:text-[#35155D] block'>{secCard.category}</span>
                                                            </Link>
                                                            <h1 className="text-xl pb-2">
                                                                {secCard.heading}
                                                            </h1>
                                                            <span className='text-sm pb-1 text-gray-500'>By {secCard.author} <span className='pl-2'> - </span> <span className='pl-2'> {formattedDate} </span></span>
                                                        </div>
                                                    )
                                                    ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </Container>
        </section>
    )
}

export default BlogCards


const data = [
    {
        mainCards: [
            {
                img: '/aunt.jpg',
                category: 'Fondation',
                author: 'Padhana',
                heading: 'Cosmetic procedures for aging skin'
            },
            {
                img: '/aunt.jpg',
                category: 'Fondation',
                author: 'Padhana',
                heading: 'Cosmetic procedures for aging skin'
            },
            {
                img: '/aunt.jpg',
                category: 'Fondation',
                author: 'Padhana',
                heading: 'Cosmetic procedures for aging skin'
            },
            {
                img: '/aunt.jpg',
                category: 'Fondation',
                author: 'Padhana',
                heading: 'Cosmetic procedures for aging skin'
            },
            {
                img: '/aunt.jpg',
                category: 'Fondation',
                author: 'Padhana',
                heading: 'Cosmetic procedures for aging skin'
            },
        ],
        secondarCardsData: [
            {
                img: '/style.jpg',
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
                img: '/style.jpg',
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
                img: '/style.jpg',
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
                img: '/style.jpg',
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
                img: '/style.jpg',
                category: 'Fondation',
                author: 'Padhana',
                heading: 'Cosmetic procedures for aging skin'
            },

        ]
    }
]