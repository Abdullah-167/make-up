import Button from '@/Components/Common/Button'
import Container from '@/Components/Common/Layout/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {

    return (
        <header>
            <div className='max-w-[1355px] mx-auto'>
                <div className='flex flex-wrap md:flex-nowrap justify-between items-center pb-10 sm:pb-20 pt-20'>
                    <div className=' contact-header pb-20 md:pt-0 pt-10'>
                        <h1 className='font-semibold  pb-4 text-tertiary'>Contact Us</h1>
                        <h2 className='text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl max-w-[500px] 2xl:max-w-[600px] pb-4 md:pb-8 lora font-semibold sm:font-medium'>Get in touch with us </h2>
                        <p className='pb-5 text-xl max-w-[600px]'> {`Have you encountered any problems or issues with our content? Do you have any copyright concerns? Please don't hesitate to contact us.`}</p>
                        <Link href={'/blogs'}>
                            <Button
                                btnText={`Let's Explore`}
                                borderRadius={'10px'}
                                padding={'10px 20px '}
                                backgroundColor={'black'}
                                hoverBackgroundColor={'transparent'}
                                color={'white'}
                                hoverColor={'black'}
                                border={'2px solid black'}
                            />
                        </Link>
                    </div>
                    <div >
                        <Image loading='lazy'  src={'/contact.webp'} className='pointer-events-none' alt='her0-img' width={500} height={700} />
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Hero