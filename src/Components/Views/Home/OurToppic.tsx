import Button from '@/Components/Common/Button';
import Container from '@/Components/Common/Layout/Container';
import Image from 'next/image';
import React, { useState } from 'react';

const OurToppic = () => {
    const [hoveredType, setHoveredType] = useState(data[0].type);
    const [defaultImage, setDefaultImage] = useState(data[0].img);

    const handleMouseEnter = (type: any) => {
        setHoveredType(type);
    };

    return (
        <section>
            <div className='bg-[#EBEEF6] py-12 sm:py-20'>
                <Container>
                    <div>
                        <h2 className=' text-3xl sm:text-5xl text-black pb-10'>Our Latest Topics</h2>
                        <div className='grid md:grid-cols-2 gap-10 items-center'>
                            <div className=''>
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`btn-visible cursor-pointer flex justify-between  items-end border-b border-b-[#cfd1d7] pb-3 mb-4`}
                                        onMouseEnter={() => handleMouseEnter(item.type)}
                                    >
                                        <p
                                            className={` text-2xl sm:text-3xl md:text-5xl whitespace-nowrap transition-all duration-500 cursor-pointer font-light ${hoveredType === item.type ? 'text-black' : 'text-[#CFD1D7]'} `}
                                        >
                                            {item.type}
                                        </p>
                                        {hoveredType === item.type && (
                                            <span>
                                                <Button
                                                    btnText={item.btn}
                                                    borderRadius={''}
                                                    padding={'3px 10px '}
                                                    backgroundColor={'black'}
                                                    hoverBackgroundColor={'black'}
                                                    color={'white'}
                                                    hoverColor={'white'}
                                                    border={'2px solid white'}
                                                />
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <Image
                                src={getImageForType(hoveredType) || defaultImage}
                                alt={'category-img'}
                                className=' pointer-events-none md:flex hidden'
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default OurToppic;

const data = [
    {
        type: 'Massage',
        btn: 'Details',
        img: '/women2.webp'
    },
    {
        type: 'Cosmetology',
        btn: 'Details',
        img: '/women3.webp'
    },
    {
        type: 'Haircut & Coloring',
        btn: 'Details',
        img: '/womenmakeup.webp'
    },
    {
        type: 'Make up & Nails',
        btn: 'Details',
        img: '/phithree.webp'
    },
];

function getImageForType(type: any) {
    const selectedItem = data.find(item => item.type === type);
    return selectedItem ? selectedItem.img : '';
}
