import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineShare } from "react-icons/hi";
import { CiBookmark } from "react-icons/ci";



const Blog = () => {
    const [activeTab, setActiveTab] = useState(DataA[0].id);

    const handleClick = (itemId: any) => {
        setActiveTab(itemId);
    };



    function generateSlug(str: any) {
        return str
            .toLowerCase()
            .replace(/ /g, '-')
            ;
    }

    return (
        <div className="py-12">
            <div className="max-w-6xl mx-auto relative ">
                <div className='flex gap-2 items-center justify-center'>
                    <p className='bg-[#4DA1F4] h-[1px] w-14 my-10'></p>
                    <h2 className='text-gray-500'>Latest Articles </h2>
                    <p className='bg-[#4DA1F4] h-[1px] w-14 my-10'></p>
                </div>
                <p className='text-3xl sm:text-5xl font-semibold text-center pb-5 sm:pb-10'>{`Editor's Choice`}</p>
                <div className=" pb-10 px-5">
                    <div className="flex gap-4  justify-center max-w-[500px] px-5 md:max-w-[800px] mx-auto lg:max-w-full overflow-x-scroll md:overflow-auto  pb-7 ">
                        {DataA.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`cursor-pointer border-[1.5px] relative inline-flex min-w-[154px] items-center justify-start inline-block px-5 py-1 overflow-hidden rounded-full group ${activeTab === item.id
                                        ? 'group-hover:-translate-x-8  bg-tertiary border-tertiary'
                                        : 'border-tertiary'
                                        }`}
                                    onClick={() => handleClick(item.id)}
                                >
                                    <span
                                        className={`w-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 opacity-[3%] bg-white ${activeTab ? 'bg-tertiary opacity-100' : ''
                                            }`}
                                    ></span>
                                    <span
                                        className={`absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-tertiary opacity-100 group-hover:-translate-x-8 ${activeTab ? '' : 'opacity-0'
                                            }`}
                                    ></span>
                                    <span
                                        className={`relative w-full  text-center ${activeTab ? 'text-gray-900' : 'text-white'} transition-colors duration-200 ease-in-out group-hover:text-gray-900`}
                                    >
                                        {item.btnHeading}
                                    </span>
                               
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        {DataA.map((item, index) => {
                            return (
                                <div
                                    className={`transition-all duration-1000 ${activeTab === item.id ? "opacity-100" : "opacity-0"
                                        }`}
                                    key={index}
                                >
                                    {activeTab === item.id && (
                                        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8`}>
                                            {item.data.map((newitem, idx) => {
                                                const slug = generateSlug(newitem.heading);
                                                return (
                                                    <Link
                                                        key={idx}
                                                        href={{
                                                            pathname:`/blog/${slug}`,
                                                            query: { post: JSON.stringify(newitem) },
                                                        }}
                                                    >
                                                        <div key={idx}>
                                                            <div className="relative overflow-hidden lg:max-w-[500px] ">
                                                                <Image className='transition-transform pb-3 hover:scale-105 duration-500 w-full' src={newitem.mainImg} alt={'food'} width={500} height={500} />
                                                            </div>
                                                            <div className='flex gap-1 text-gray-400 items-center pb-2'>
                                                                <AiOutlineClockCircle />
                                                                <span className='text-base'>30 Minutes</span>
                                                            </div>
                                                            <p className='text-2xl font-secondary pb-4'>{newitem.heading}</p>
                                                            <p className='text-gray-500 pb-6'>{newitem.description}</p>
                                                            <div className='flex justify-between items-center'>
                                                                <div className='flex items-center gap-4'>
                                                                    <Image src={newitem.publisherImg} alt='icon' width={50} height={50} />
                                                                    <div className='text-sm'>
                                                                        {newitem.publisherName}
                                                                        <p className='text-xs opacity-40 pt-0.5'>May 20, 2020</p>
                                                                    </div>
                                                                </div>
                                                                <div className='flex gap-3'>
                                                                    <div className='bg-gray-100 flex justify-center items-center rounded-full w-10 h-10'>
                                                                        <span className='text-xl opacity-50'>
                                                                            <HiOutlineShare />
                                                                        </span>
                                                                    </div>
                                                                    <div className='bg-gray-100 flex justify-center items-center rounded-full w-10 h-10'>
                                                                        <span className='text-xl'>
                                                                            <CiBookmark />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )
                                    }
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blog;

export const DataA = [
    {
        id: 1,
        btnHeading: "Latest Articles",
        data: [
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },

        ],
    },
    {
        id: 2,
        btnHeading: "Lips",
        data: [
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },

        ],
    },
    {
        id: 3,
        btnHeading: "Foundation",
        data: [
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },

        ],
    },
    {
        id: 4,
        btnHeading: "Skin Care",
        data: [
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },

        ],
    },
    {
        id: 5,
        btnHeading: "Kajal",
        data: [
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },

        ],
    },
    {
        id: 6,
        btnHeading: "Makeup Trends",
        data: [
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },
            {
                mainImg: '/aunt.jpg',
                heading: '40 Mother’s Day Breakfast and Brunch Recipes',
                description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
                publisherImg: '/girlicon.png',
                publisherName: 'John',
            },

        ],
    },
];
