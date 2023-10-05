import Image from 'next/image';
import { useState } from 'react';
import { BsPinterest } from 'react-icons/bs';
import Container from './Layout/Container';

const Instagram = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleHover = (index: any) => {
        setHoveredIndex(index);
    };

    return (
        <section>
            <Container>
                <div className='pb-20'>
                    <div className='flex justify-between items-center'>
                        <span className='text-3xl md:text-[42px] text-center sm:text-left'>
                            Visit Our <span className=' text-tertiary'> Pins </span>
                        </span>
                        <div className="relative cursor-pointer inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden  text-[#D48D78] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-500 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-[#D48D78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-500">
                                <svg className="w-5 h-5 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-500 ease-in-out group-hover:text-tertiary">Pinterest</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-0 gap-5 pt-10 sm:px-5">
                        {images.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="relative overflow-hidden cursor-pointer max-h-[300px] min-h-[300px]  sm:py-0"
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={() => handleHover(null)}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.alt}
                                        className="w-full h-auto max-h-[300px] min-h-[300px]  object-cover"
                                        width={500}
                                        height={500}
                                    />
                                    <div className="max-h-[300px] min-h-[300px] absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 hover:transition-all hover:duration-500 ease-in-out"></div>
                                    {hoveredIndex === index && (
                                        <div className="max-h-[300px] min-h-[300px] absolute inset-0 flex justify-center items-center hover:bg-black hover:bg-opacity-60 hover:transition-all hover:duration-500 ease-in-out">
                                            <div className="transition-all  duration-500 text-tertiary opacity-60">
                                                <BsPinterest size={50} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Instagram;

const images = [
    {
        img: '/womenmakeup.webp',
        alt: 'laptop',
    },
    {
        img: '/style.jpg',
        alt: 'mercedes',
    },
    {
        img: '/women3.webp',
        alt: 'mobile',
    },
    {
        img: '/imgfour.png',
        alt: 'hand',
    },
];