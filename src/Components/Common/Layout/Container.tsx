import React from 'react'

const Container = ({ children }: any) => {
    return (
        <section className='max-w-[1180px] mx-auto px-5 '>
            {children}
        </section>
    )
}

export default Container;