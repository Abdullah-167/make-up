import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { LuPrinter } from 'react-icons/lu';
import { CiBookmark } from 'react-icons/ci';
import { BsPinAngle } from 'react-icons/bs';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Image from 'next/image';

const Comment = () => {

    const [rating, setRating] = useState(0);

    const handleStarClick = (index: any) => {
        setRating(index + 1);
    };

    return (
        <div className=' container'>
            <div>
                <p className='text-2xl font-secondary pb-2'>Leave a Reply </p>
                <p className="text-gray-400 opacity-90 pb-2">
                    Your email address will not be published. Required fields are marked *
                </p>
                <div className='flex gap-2 items-center'>
                    <span>
                        Rating
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
                <form className="pt-6 pb-8 mb-4 max-w-[750px]">
                    <div className="mb-4">
                        <textarea
                            className=" appearance-none border border-gray-300 focus:border-gray-500 w-full py-5 min-h-[300px] px-5 text-gray-700 leading-tight focus:outline-none "
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
                    <div className="flex items-center mb-4">
                        <input
                            className="mr-2 leading-tight focus:ring-offset-0 focus:ring-indigo-500"
                            type="checkbox"
                            id="subscribe"
                            name="subscribe"
                        />
                        <label className="text-gray-400 opacity-90" >
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
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
        </div>
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