import Container from '@/Components/Common/Layout/Container'
import Image from 'next/image'
import React from 'react'

const PostDetail = () => {
    return (
        <section>
            <div>
                <div className='relative mt-[100px] max-h-[500px]'>
                    <Image className='max-h-[500px] object-cover w-full rounded-md my-2' src={'/womenmakeup.webp'} alt={''} width={1000} height={1000} />
                    <div className=' bg-black bg-opacity-70 absolute w-full h-full top-0'></div>
                    <Container>
                        <div className='z-[200] absolute top-0 pt-20 left-[5%] max-w-screen-lg mx-auto'>
                            <div className='flex justify-center items-center'>
                                <h1 className=' text-white text-5xl tracking-tighter font-semibold '>How to clean the inside of a lip gloss tube</h1>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default PostDetail