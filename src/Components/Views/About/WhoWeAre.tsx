import Container from '@/Components/Common/Layout/Container'
import React from 'react'

const WhoWeAre = () => {
    return (
        <section>
            <div className=' max-w-[900px] mx-auto py-16'>
                {data.map((item, index) => {
                    return (
                        <div className='pb-10'
                            key={index}>
                            {item.isHeading && (
                                <h1 className='text-2xl sm:text-3xl font-semibold pb-5 text-center'>{item.heading}</h1>
                            )}
                            <p className='sm:text-xl font-normal text-gray-500 text-center'>{item.para}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default WhoWeAre;


const data = [
    {
        heading: (<h2>Who <span className=' text-tertiary'> We Are </span></h2>),
        para: 'At Evoc Beauty, we are more than just a makeup destination; we are your trusted beauty companion on a journey to enhance your natural allure. Our dedicated team consists of makeup lovers who share an unbridled passion for the art of makeup and the transformative power of beauty. Makeup is not just about covering imperfections but also about self-expression, creativity, and boosting confidence.',
        isHeading: true,
    },
    {
        heading: (<h2>Why Choose <span className=' text-tertiary'> Evoc Beauty </span></h2>),
        para: 'We understand that the beauty world can be overwhelming with countless products and techniques. Our commitment to simplicity, inclusivity, and authenticity sets us apart. Our content is not just about following trends mindlessly but about finding your unique style and expressing yourself through makeup.',
        isHeading: true,
    },
    {
        para: `Join us at My Evoc Beauty, and together, let's explore the limitless possibilities of makeup while celebrating your individuality. Beauty is more than skin deep; it's a form of self-expression, and we're here to help you make it your own.`,
        isHeading: false,
    },
]