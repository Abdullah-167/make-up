import Container from '@/Components/Common/Layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


interface DataItem {
    isHeading: boolean;
    isImage: boolean;
    heading: string; // Ensure heading is always a string
    para: string;
    img?: string;
}

const data: DataItem[] = [
    {
        heading: '',
        isHeading: false,
        isImage: false,
        para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus harum magni officia ea error omnis architecto voluptatibus libero magnam corporis atque quod recusandae ab praesentium expedita vel necessitatibus tenetur assumenda, fuga dolorem illo commodi temporibus et? At, exercitationem! Facere, autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus harum magni officia ea error omnis architecto voluptatibus libero magnam corporis atque quod recusandae ab praesentium expedita vel necessitatibus tenetur assumenda, fuga dolorem illo commodi temporibus et? At, exercitationem! Facere, autem?`
    },
    {
        isHeading: true,
        isImage: true,
        heading: 'How to clean the inside of a lip gloss tube',
        para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus harum magni officia ea error omnis architecto voluptatibus libero magnam corporis atque quod recusandae ab praesentium expedita vel necessitatibus tenetur assumenda, fuga dolorem illo commodi temporibus et? At, exercitationem! Facere, autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus harum magni officia ea error omnis architecto voluptatibus libero magnam corporis atque quod recusandae ab praesentium expedita vel necessitatibus tenetur assumenda, fuga dolorem illo commodi temporibus et? At, exercitationem! Facere, autem?`,
        img: '/blog1.jpg'
    },
    {
        isHeading: true,
        isImage: true,
        heading: 'How to  the inside of a lip gloss tube',
        para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus harum magni officia ea error omnis architecto voluptatibus libero magnam corporis atque quod recusandae ab praesentium expedita vel necessitatibus tenetur assumenda, fuga dolorem illo commodi temporibus et? At, exercitationem! Facere, autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus harum magni officia ea error omnis architecto voluptatibus libero magnam corporis atque quod recusandae ab praesentium expedita vel necessitatibus tenetur assumenda, fuga dolorem illo commodi temporibus et? At, exercitationem! Facere, autem?`,
        img: '/blog2.jpg'
    },
    {
        isHeading: true,
        isImage: true,
        heading: 'How to clean the inside of ',
        para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus harum magni officia ea error omnis architecto voluptatibus libero magnam corporis atque quod recusandae ab praesentium expedita vel necessitatibus tenetur assumenda, fuga dolorem illo commodi temporibus et? At, exercitationem! Facere, autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus harum magni officia ea error omnis architecto voluptatibus libero magnam corporis atque quod recusandae ab praesentium expedita vel necessitatibus tenetur assumenda, fuga dolorem illo commodi temporibus et? At, exercitationem! Facere, autem?`,
        img: '/blog3.jpg'
    },

]

const Data = () => {
    const [scrollDown, setScrollDown] = useState<boolean>(false);
    const [activeHeading, setActiveHeading] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setScrollDown(true);
            } else {
                setScrollDown(false);
            }

            // Determine the active heading based on scroll position
            const headings = data
                .filter((item) => item.isHeading)
                .map((item) => item.heading);
            for (let i = headings.length - 1; i >= 0; i--) {
                const headingId = headings[i].replace(/\s+/g, '-').toLowerCase();
                const element = document.getElementById(headingId);
                if (element && element.getBoundingClientRect().top <= 100) {
                    setActiveHeading(headings[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const smoothScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };


    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate: string = currentDate.toLocaleDateString(undefined, options);

    return (
        <section>
            <Container>
                <div className='flex gap-5 justify-between pb-10'>
                    <div className='flex gap-5'>
                        <div className='relative'>
                            <div className='pl-1 pt-4 pb-7 min-w-[160px] max-w-[200px] sticky top-10'>
                                {/* Table of content */}
                                <h2 className='font-semibold pl-1 pb-4'>Table Of Content</h2>
                                <ul>
                                    {data.map((item, index) => {
                                        if (item.isHeading) {
                                            const id = item.heading.replace(/\s+/g, '-').toLowerCase();
                                            return (
                                                <p
                                                    className={`pb-4 cursor-pointer ${activeHeading === item.heading ? 'text-black' : 'text-gray-400'
                                                        }`}
                                                    onClick={() => smoothScrollTo(id)}
                                                    key={index}
                                                >
                                                    {item.heading}
                                                </p>
                                            );
                                        }
                                        return null;
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='max-w-[900px]'>
                            {data.map((item, index) => {
                                return (
                                    <div className='pb-20' key={index}>
                                        {item.isHeading && (
                                            <h2
                                                className='pb-3 text-3xl'
                                                id={item.heading.replace(/\s+/g, '-').toLowerCase()}
                                            >
                                                <strong>{item.heading}</strong>
                                            </h2>
                                        )}
                                        <p className='text-xl leading-9 pb-5'>{item.para}</p>
                                        {item.isImage && (
                                            <Image
                                                className='w-full'
                                                src={item.img || ''}
                                                alt='blog-post-image'
                                                width={700}
                                                height={700}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='max-w-[250px]'>
                        <h3 className=' text-xl font-semibold text-center pb-8'>Relevant Posts</h3>
                        {relevantPost.map((item, index) => {
                            return (
                                <div
                                    className={`cursor-pointer rounded-md mx-2 pb-6`}
                                    key={index}
                                >
                                    <div className={`overflow-hidden pb-2 `}>
                                        <Image
                                            className={`rounded-md transition-all duration-500  max-h-[300px]  md:max-w-[300px] hover:scale-105 w-full h-full object-cover`}
                                            src={item.img}
                                            alt={'lifehack-img'}
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <Link href={'/'}>
                                        <span className='text-sm pb-1 text-[#D48D78] hover:text-[#35155D] block'>{item.category}</span>
                                    </Link>
                                    <h1 className="text-xl pb-2">
                                        {item.heading}
                                    </h1>
                                    <span className='text-sm pb-1 text-gray-500'>By {item.author} <span className='pl-2'> - </span> <span className='pl-2'> {formattedDate} </span></span>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Data;


const relevantPost = [
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
]


