import Image from 'next/image';
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

    return (
        <section>
            <div className='flex gap-2'>
                <div className='relative'>
                    <div className='px-3 pt-4 pb-7 min-w-[200px] max-w-[200px] sticky top-10'>
                        {/* Table of content */}
                        <h2 className='font-semibold pl-4 pb-4'>Table Of Content</h2>
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
                <div className='max-w-[800px]'>
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
        </section>
    );
};

export default Data;


