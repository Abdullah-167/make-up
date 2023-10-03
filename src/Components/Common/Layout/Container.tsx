import React from 'react'

const Container = ({ children }: any) => {
    return (
        <section className='max-w-[1180px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-5 '>
            {children}
        </section>
    )
}

export default Container;