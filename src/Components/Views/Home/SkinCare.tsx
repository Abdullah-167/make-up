import Container from '@/Components/Common/Layout/Container';
import Image from 'next/image';
import React from 'react'

const SkinCare = () => {
    return (
        <section>
            <Container>
                <div className='py-28'>
                    <h2 className='text-5xl text-center font-semibold pb-14'>Skincare routine in 4 steps</h2>
                    <div className='grid grid-cols-4 gap-9 '>
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p className='text-white px-4 py-1.5 max-w-[93px] mx-auto text-center rounded-xl font-semibold mb-4'
                                        style={{
                                            backgroundColor: item.stepColor
                                        }}
                                    >{item.step}</p>
                                    <Image className={'flex justify-center items-center mx-auto mb-6 max-h-[80px] min-h-[80px] object-contain'} src={item.img} alt={'skincare-routine-img'} width={55} height={55} />
                                    <h3 className='text-[22px] font-semibold text-center'>{item.heading}</h3>
                                    <p className='text-center'>{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SkinCare;


const data = [
    {
        img: '/skinone.png',
        step: 'Step 01.',
        stepColor: '#AFA492',
        heading: 'Wash with Cleanser',
        description: 'The first step in any skincare routine should be to cleanse the face.'
    },
    {
        img: '/skintwo.png',
        step: 'Step 02.',
        stepColor: '#D48D78',
        heading: 'Apply Serum',
        description: `A serum tailored to your skin's needs can treat as well as protect.`
    },
    {
        img: '/skinthree.png',
        step: 'Step 03.',
        stepColor: '#A06857',
        heading: 'Never skip Moisturizer',
        description: `Next are heavier formulas, such as moisturizer, to keep the skin hydrated.`
    },
    {
        img: '/skinfour.png',
        step: 'Step 04.',
        stepColor: '#DDD8D1',
        heading: 'Finish with Sunscreen',
        description: `It’s the most important step in any skincare routine, regardless of skin type or age.`
    },
]