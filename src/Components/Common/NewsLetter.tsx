import React from 'react'
import Container from './Layout/Container'

const NewsLetter = () => {
    return (
        <section>
            <div className="newsletter-bg w-full bg-[#F7F7F7] px-12 py-10 ">
                <div className='max-w-[700px] mx-auto'>
                    <h2 className="text-3xl font-secondary text-center mb-4">Never Miss A Post!</h2>
                    <p className="text-center text-gray-400 pb-8">Sign up for free and be the first to get notified about updates.</p>
                    <form className="items-center">
                        <input type="email" className="flex-grow py-3 border mb-4 px-4 outline-none w-full" placeholder="Your Email*" />
                        <button type="submit" className="bg-[#1E1E1E] text-gray-200 py-3 px-4 w-full">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter