import Button from '@/Components/Common/Button'
import Container from '@/Components/Common/Layout/Container'
import Image from 'next/image'
import React from 'react'

const Hero = () => {


    return (
        <header>
            <div className=' bg-[#F8F0E5]'>
                <Container>
                    <div className='flex justify-between items-center py-20'>
                        <div className=''>
                            <h1 className=' text-6xl font-semibold max-w-[500px] leading-[60px] pb-5'>Unveil The Beauty With Us:</h1>
                            <h2 className=' max-w-[450px] pb-5'>The Place Where You Know Everything About Makeup. Discover the secrets, trends, and techniques that empower you to become your own makeup artist.</h2>
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
                        </div>
                        <div>
                            <Image src={'/heroimg.svg'} className='' alt='her0-img' width={500} height={500} />
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default Hero