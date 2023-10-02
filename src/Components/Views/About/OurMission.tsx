import Button from '@/Components/Common/Button'
import Container from '@/Components/Common/Layout/Container'
import Image from 'next/image'
import React from 'react'

const OurMission = () => {

    return (
        <header>
            <div>
                <Container>
                    <div className='flex flex-wrap md:flex-nowrap justify-between items-center pb-10 '>
                        <div className=''>
                            <h1 className='text-3xl sm:text-6xl font-semibold max-w-[500px] sm:leading-[60px] pb-5'>Our <span className=' text-tertiary'> Mission </span></h1>
                            <h2 className=' max-w-[450px] pb-5 leading-6'>Our mission is simple: to demystify the makeup world and make it accessible to everyone. We are committed to providing the knowledge and inspiration you need to become your makeup artist. Makeup should enhance your unique features and reflect your style.</h2>
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
                        <div className='md:flex hidden'>
                            <Image loading='lazy' src={'/our-mission.jpg'} className='pointer-events-none' alt='her0-img' width={600} height={600} />
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default OurMission