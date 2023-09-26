import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiRightArrow } from 'react-icons/bi'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebook, FaFacebookF, FaPinterest } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import { IoLogoInstagram } from 'react-icons/io5'
import { FiSend } from 'react-icons/fi'
import Container from './Container'



const NewFooter = () => {
    const colors = ["#F9F1E6", "#F6E6D3", "#F7E7DF", "#F5E5D8", "#F8E8E0"];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [colors.length]);

    const currentColor = colors[currentColorIndex];

    return (
        <footer>
            <div className=' bg-[#F9F1E6] bg-opacity-50'>
                <Container>
                    <div className=' '>
                        <div className='flex flex-wrap md:flex-nowrap justify-between items-center gap-16 py-10'>
                            <div className="max-w-[300px] mx-auto">
                                <Link href={"/"}>
                                    <Image
                                        src={'/logo.svg'}
                                        alt={'logo'}
                                        width={150}
                                        height={150}

                                    />
                                </Link>
                            </div>
                            <div className='grid  grid-cols-2 lg:flex flex-wrap sm:flex-nowrap justify-between gap-16 md:max-w-full max-w-[400px] mx-auto'>
                                {data.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p className=' font-semibold text-lg pb-2'>  {item.mainHeading} </p>
                                            {item.innerSec.map((newitem, idx) => {
                                                return (
                                                    <div key={idx}>
                                                        <span className=' font-light flex flex-col cursor-pointer pb-2' key={idx}>
                                                            {newitem.text}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-opacity-90" style={{ backgroundColor: currentColor }}>
                <Container>
                    <div className="text-xs flex items-center flex-wrap sm:flex-nowrap justify-between  mx-auto py-3 px-5">
                        <p className="">@2023 AryzeTech </p>
                        <span className="hidden sm:block">
                            <Link href={"/terms-conditions"}>
                                <span className="px-1">Terms&conditions ||</span>
                            </Link>
                            <Link href={"/terms-conditions/privacy-policy"}>
                                <span className="px-1">Privacy Policy ||</span>
                            </Link>
                            <Link href={"/terms-conditions/cookies-policy"}>
                                <span className="px-1"> Cookie Policy </span>
                            </Link>
                        </span>
                        <div className="flex gap-3 items-center">
                            {iconData.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={item.url}
                                        className={` font-bold text-xl w-10 h-10 rounded-full transition-all duration-500 p-3 flex justify-center items-center cursor-pointer  bg-[#F6E6D3] bg-opacity-100 text-black ${index == 0 ? 'hover:bg-blue-500 hover:text-white' : index > 0 ? 'hover:bg-red-500 hover:text-white' : ''}`}
                                        target="_blank"
                                    >
                                        {item.icon}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </div>
        </footer >
    )
}

export default NewFooter


const data = [
    {
        mainHeading: 'Menu',
        innerSec: [
            {
                text: 'About Us'
            },
            {
                text: 'Blogs '
            },
            {
                text: 'Buying Guide'
            },
            {
                text: 'Contact '
            },
        ]
    },
    {
        mainHeading: 'Menu 2',
        innerSec: [
            {
                text: 'Lips'
            },
            {
                text: 'Lip Gloss '
            },
            {
                text: 'Lip liner'
            },
            {
                text: 'Lip Mask '
            },
        ]
    },
    {
        mainHeading: 'Menu 2',
        innerSec: [
            {
                text: 'Eyes'
            },
            {
                text: '  Kajal '
            },
            {
                text: ' Mascara'
            },
            {
                text: ' Eye Primer '
            },
        ]
    },
    {
        mainHeading: 'Menu 3',
        innerSec: [
            {
                text: 'Fundation'
            },
            {
                text: 'Liquid foundation '
            },
            {
                text: 'Cream foundation'
            },
            {
                text: 'Powder foundation '
            },
        ]
    },
]



const iconData = [
    {
        url: "https://www.facebook.com/Rafiky-103256367862244/",
        icon: <FaFacebook />,
    },
    {
        url: "https://www.facebook.com/Rafiky-103256367862244/",
        icon: <FaPinterest />,
    },
    {
        url: "https://www.instagram.com/rafikynet/",
        icon: <IoLogoInstagram />,
    },
];
