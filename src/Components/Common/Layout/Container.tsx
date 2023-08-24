import React from 'react'

const Container = ({ children }: any) => {
    return (
        <section className='max-w-[1180px] lg:max-w-[1200px]  mx-auto px-5  max-2xl:px-10'>
            {children}
        </section>
    )
}

export default Container;