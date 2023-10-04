import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { LuPrinter } from 'react-icons/lu';
import { CiBookmark } from 'react-icons/ci';
import { BsPinAngle } from 'react-icons/bs';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Image from 'next/image';
import Container from './Layout/Container';

const Comment = () => {

    const [rating, setRating] = useState(0);

    const handleStarClick = (index: any) => {
        setRating(index + 1);
    };

    return (
        <section>
            <Container>
                <div>
                    <p className='text-3xl  pb-2'>Leave a <span className='text-tertiary'>Comment</span> </p>
                    <div className='flex gap-2 items-center'>
                        <span>
                            Article   Rating
                        </span>
                        <div className='flex gap-1'>
                            {stars.map((item, index) => (
                                <span
                                    key={index}
                                    className='text-[#fee86d] cursor-pointer'
                                    onClick={() => handleStarClick(index)}
                                >
                                    {index < rating ? <AiFillStar /> : <AiOutlineStar />}
                                </span>
                            ))}
                        </div>
                    </div>
                    <form className="pt-6 pb-8 mb-4 ">
                        <div className="mb-4">
                            <textarea
                                className=" appearance-none border border-gray-300 focus:border-gray-500 w-full py-5 min-h-[200px] px-5 text-gray-700 leading-tight focus:outline-none "
                                id="message" name="message" placeholder="Your Comment*" />
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input
                                    className=" appearance-none border border-gray-300 focus:border-gray-500 w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none "
                                    id="name" name="name" type="text" placeholder="Your Name" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <input
                                    className=" appearance-none border border-gray-300 focus:border-gray-500 w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none "
                                    id="email" name="email" type="email" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <input
                                className=" appearance-none border border-gray-300 focus:border-gray-500 w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none "
                                id="website" name="website" type="text" placeholder="Your Website" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-[#2F2F2F] text-white py-3.5 px-10 text-sm rounded focus:outline-none focus:shadow-outline uppercase"
                                type="button"
                            >
                                Post Comment
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default Comment;




const stars = [
    {
        star: <AiOutlineStar />
    },
    {
        star: <AiOutlineStar />
    },
    {
        star: <AiOutlineStar />
    },
    {
        star: <AiOutlineStar />
    },
    {
        star: <AiOutlineStar />
    },
]