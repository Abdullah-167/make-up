import React, { useState, useEffect, useRef } from 'react';
import 'intersection-observer';

import Button from '@/Components/Common/Button';
import Container from '@/Components/Common/Layout/Container';
import Image from 'next/image';

interface DataItem {
    type: string;
    btn: string;
    img: string;
}

const data: DataItem[] = [
    {
        type: 'Massage',
        btn: 'Details',
        img: '/women2.webp',
    },
    {
        type: 'Cosmetology',
        btn: 'Details',
        img: '/women3.webp',
    },
    {
        type: 'Haircut & Coloring',
        btn: 'Details',
        img: '/womenmakeup.webp',
    },
    {
        type: 'Make up & Nails',
        btn: 'Details',
        img: '/phithree.webp',
    },
];

interface OurTopicProps {}

const OurTopic: React.FC<OurTopicProps> = () => {
    const [activeType, setActiveType] = useState<string>(data[0].type);
    const [defaultImage, setDefaultImage] = useState<string>(data[0].img);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Function to handle scroll event
    const handleScroll = () => {
        const section = sectionRef.current;
        const headings = section?.querySelectorAll('.heading-item');

        headings?.forEach((heading) => {
            const rect = heading.getBoundingClientRect();
            if (rect.top >= 100 && rect.bottom <= window.innerHeight - 100) {
                setActiveType(heading.getAttribute('data-type') || '');
            }
        });
    };

    // Attach scroll event listener on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle hover event
    const handleMouseEnter = (type: string) => {
        setActiveType(type);
    };

    return (
        <section ref={sectionRef}>
            <div className='bg-[#EBEEF6] py-12 sm:py-20'>
                <Container>
                    <div>
                        <h2 className='text-3xl sm:text-5xl text-black pb-10'>Our Latest Topics</h2>
                        <div className='grid md:grid-cols-2 gap-10 items-center'>
                            <div className=''>
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`btn-visible cursor-pointer flex justify-between  items-end border-b border-b-[#cfd1d7] pb-3 mb-4 heading-item`}
                                        data-type={item.type}
                                        onMouseEnter={() => handleMouseEnter(item.type)}
                                    >
                                        <p
                                            className={`text-2xl sm:text-3xl md:text-5xl whitespace-nowrap transition-all duration-500 cursor-pointer font-light ${
                                                activeType === item.type ? 'text-black' : 'text-[#CFD1D7]'
                                            }`}
                                        >
                                            {item.type}
                                        </p>
                                        {activeType === item.type && (
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
                                src={getImageForType(activeType) || defaultImage}
                                alt={'category-img'}
                                className='pointer-events-none md:flex hidden'
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

export default OurTopic;

function getImageForType(type: string): string {
    const selectedItem = data.find((item) => item.type === type);
    return selectedItem ? selectedItem.img : '';
}
