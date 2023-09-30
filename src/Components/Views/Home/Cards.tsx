import Container from '@/Components/Common/Layout/Container';
import Image from 'next/image';
import React from 'react'
import {  FaMagic, FaStar, FaPalette, FaRegSmile, FaCamera, FaUserTie, FaKissWinkHeart, FaPaintBrush, FaRegLaughBeam  } from 'react-icons/fa';
import { GiRedCarpet } from 'react-icons/gi';

const Cards = () => {
    return (
        <section className=' pt-28 pb-20'>
            <Container>
                <div>
                    <h2 className='text-4xl font-semibold text-center pb-16'>What we cover about <span className='text-tertiary'> Makeup </span></h2>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10'>
                        {data.map((item, index) => {
                            return (
                                <div className=' gap-5 bg-tertiary bg-opacity-40 hover:bg-transparent hover:border-tertiary border-[1.5px] border-transparent px-3 py-3 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer'
                                    key={index}>
                                    <div className='text-3xl pb-2 text-tertiary'>{item.imge}</div>
                                    <div>
                                        <h3 className='text-xl font-semibold pb-2 '>{item.heading}</h3>
                                        <div className='w-20 h-[2px] bg-[#8624e1] mb-3'></div>
                                        <p className=''>{item.para}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section >
    )
}

export default Cards;


const data = [
    {
        imge: <FaMagic />,
        heading: ' Unlock Your Beauty Potential',
        para: `Discover the latest makeup hacks, expert tips, and step-by-step tutorials to enhance your makeup skills. `
    },
    {
        imge: <FaPaintBrush />,
        heading: 'Beauty Products Unveiled',
        para: `Explore honest reviews and recommendations for makeup products, skincare essentials, and tools. `
    },
    {
        imge: <FaPalette  />,
        heading: 'Trendy Styles',
        para: `Stay ahead of the makeup game with our in-depth guides on the hottest makeup trends. From natural everyday looks to bold and glamorous styles `
    },
    {
        imge: <FaRegSmile />,
        heading: ' Prepping Your Skin',
        para: `Before makeup, skincare is key. Learn how to create a smooth, flawless canvas for your makeup by diving into skincare routines. By Expert's advice `
    },
    {
        imge: <GiRedCarpet />,
        heading: 'Get Red-Carpet Ready',
        para: `Discover the makeup secrets of your favorite celebrities and recreate their iconic looks. Get the inside scoop on their go-to products and techniques `
    },
    {
        imge: <FaUserTie />,
        heading: 'Makeup Artists Speak',
        para: `Get inspired by exclusive interviews with professional makeup artists. Learn about their journey, favorite products, and top makeup tips that you can apply to your own beauty routine. `
    },
]