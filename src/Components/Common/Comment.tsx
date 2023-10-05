import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Image from 'next/image';
import Container from './Layout/Container';
import { HiCalendarDays } from 'react-icons/hi2';

interface Comment {
    name: string;
    commentText: string;
    email: string;
    date: string;
    rating: number;
    replies: Reply[];
    adminReplyInput?: string;
}

interface Reply {
    adminReply: string;
    date: string;
}


const Comment = () => {
    const [rating, setRating] = useState<number>(0);
    const [comments, setComments] = useState<Comment[]>([]);
    const [openMenuIndex, setOpenMenuIndex] = useState<number>(-1);
    const [replyingTo, setReplyingTo] = useState<number>(-1);
    const [editingCommentIndex, setEditingCommentIndex] = useState<number>(-1);


    const handleStarClick = (index: any) => {
        if (index === rating) {
            setRating(0);
        } else {
            setRating(index);
        }
    };

    const handleCommentSubmit = (e: any) => {
        e.preventDefault();

        // Get the values from the form inputs
        const name = e.target.name.value;
        const commentText = e.target.message.value;
        const email = e.target.email.value;

        if (!name || !commentText) {
            // Display an error message and apply red borders
            if (!name) {
                e.target.name.style.border = '1px solid red';
            } else {
                e.target.name.style.border = '1px solid #ccc';
            }
            if (!commentText) {
                e.target.message.style.border = '1px solid red';
            } else {
                e.target.message.style.border = '1px solid #ccc';
            }
            if (!email) {
                e.target.email.style.border = '1px solid red';
            } else {
                e.target.email.style.border = '1px solid #ccc';
            }
            return;
        }

        const newComment = {
            name,
            commentText,
            email,
            date: new Date().toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
            rating, // Use the rating state here
            replies: [],
        };
        setComments([...comments, newComment]);

        // Clear the form inputs and reset the borders
        e.target.reset();
        e.target.name.style.border = '1px solid #ccc';
        e.target.message.style.border = '1px solid #ccc';
        e.target.email.style.border = '1px solid #ccc';
    };

    const handleReplySubmit = (e: any, commentIndex: any) => {
        e.preventDefault();
        const replyText = comments[commentIndex].adminReplyInput;

        if (!replyText) {

            return;
        }

        const newComments = [...comments];
        newComments[commentIndex].replies.push({
            adminReply: replyText,
            date: new Date().toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
        });
        newComments[commentIndex].adminReplyInput = '';
        setComments(newComments);
    };

    const handleReplyInputChange = (commentIndex: any, value: any) => {
        const newComments = [...comments];
        newComments[commentIndex].adminReplyInput = value;
        setComments(newComments);
    };

    const handleReplyButtonClick = (commentIndex: any) => {
        // Toggle the reply form visibility for the clicked comment
        setReplyingTo(replyingTo === commentIndex ? -1 : commentIndex);
    };

    const selectedReviews = reviewData.filter((review) => review.rating === rating);


    const handleEditComment = (commentIndex: number) => {
        setEditingCommentIndex(commentIndex);
    };

    const handleCommentEdit = (commentIndex: number, newText: string) => {
        const newComments = [...comments];
        newComments[commentIndex].commentText = newText;
        setComments(newComments);
    };

    const handleCommentSave = (commentIndex: number) => {
        setEditingCommentIndex(-1); // Exit edit mode
    };

    const handleDeleteComment = (commentIndex: number) => {
        const newComments = [...comments];
        newComments.splice(commentIndex, 1);
        setComments(newComments);
    };

    const userEmail = 'abdullahpadhana503@gmail.com'; // Replace with the actual user's email



    return (
        <section>
            <Container>
                <div className='max-w-[970px] pl-[180px]'>
                    <div>
                        <p className='text-3xl  pb-2'>Leave a <span className='text-tertiary'>Comment</span> </p>
                        <div className='flex gap-2 items-center'>
                            <span>
                                Article   Rating
                            </span>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <span
                                        key={index}
                                        className={`text-[#fee86d] cursor-pointer ${index <= rating ? 'text-yellow-500' : ''
                                            }`}
                                        onClick={() => handleStarClick(index)}
                                    >
                                        {index <= rating ? <AiFillStar /> : <AiOutlineStar />}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <form className="pt-6 pb-8 mb-4 " onSubmit={handleCommentSubmit}>
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
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-[#2F2F2F] text-white py-3.5 px-10 text-sm rounded focus:outline-none focus:shadow-outline uppercase"
                                    type="submit"
                                >
                                    Post Comment
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        {/* Display user comments */}
                        {comments.map((comment, commentIndex) => (
                            <div className='mb-8' key={commentIndex}>
                                <div className=' border-b border-b-tertiary pb-10 mb-5'>
                                    <div className="flex items-center justify-between border-b border-b-tertiary pb-2 mb-4">
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src={'/padhana.jpg'}
                                                className="rounded-full border-2 border-white p-0.5 cursor-pointer"
                                                alt="icon"
                                                width={60}
                                                height={60}
                                            />
                                            <div className="text-black text-xl font-medium">
                                                {comment.name}
                                                <div className="text-black flex gap-2 items-center">
                                                    <span className=' text-tertiary'>
                                                        <HiCalendarDays />
                                                    </span>
                                                    <p className="text-sm sm:text-base">{comment.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="">
                                                Rating: {comment.rating}/5
                                            </span>
                                        </div>
                                    </div>
                                    {editingCommentIndex === commentIndex ? (
                                        <div>
                                            {/* Edit mode */}
                                            <textarea
                                                className="w-full p-2 outline-none border border-gray-300 rounded"
                                                placeholder="Edit Your Comment"
                                                value={comment.commentText}
                                                onChange={(e) => handleCommentEdit(commentIndex, e.target.value)}
                                            />
                                            <button
                                                className="bg-[#2F2F2F] text-white py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline uppercase mt-2"
                                                onClick={() => handleCommentSave(commentIndex)}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    ) : (

                                        <div className='pb-4'>
                                            {comment.email === userEmail && (
                                                <div>
                                                    <button
                                                        className="bg-[#2F2F2F] text-white py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline uppercase"
                                                        onClick={() => handleEditComment(commentIndex)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="bg-red-500 text-white py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline uppercase ml-2"
                                                        onClick={() => handleDeleteComment(commentIndex)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    <p className='text-xl mont'>{comment.commentText}</p>


                                </div>
                                <div className=''>
                                    <button
                                        className={`bg-[#2F2F2F] text-white py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline uppercase ${replyingTo === commentIndex ? 'hidden' : 'block'}`} // Change the condition here
                                        onClick={() => setReplyingTo(replyingTo === commentIndex ? -1 : commentIndex)}
                                    >
                                        Reply
                                    </button>
                                    <div className=' ml-10 pl-3 border-l-[4px] border-l-tertiary'>
                                        {comment.replies.map((reply: any, replyIndex: any) => (
                                            <div className='mt-2' key={replyIndex}>
                                                <div className='flex items-center gap-3 border-b border-b-tertiary pb-2 mb-4'>
                                                    <Image
                                                        src={'/logo.svg'}
                                                        className=" border-2 border-white p-0.5 cursor-pointer"
                                                        alt="icon"
                                                        width={80}
                                                        height={80}
                                                    />
                                                    <div>
                                                        <h3 className='text-black text-xl '>Team</h3>
                                                        <div className="text-black flex gap-2 items-center">
                                                            <span className=' text-tertiary'>
                                                                <HiCalendarDays />
                                                            </span>
                                                            <p className="text-sm sm:text-base">{comment.date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='text-xl mont'>{reply.adminReply}</p>
                                            </div>
                                        ))}
                                        {commentIndex === replyingTo && (
                                            <form className='' onSubmit={(e) => handleReplySubmit(e, commentIndex)}> {/* Pass the commentIndex as the second argument */}
                                                <textarea
                                                    className="w-full p-2 outline-none border border-gray-300 rounded"
                                                    placeholder="Admin's Reply"
                                                    name={`adminReply-${commentIndex}`} // Use the correct comment index
                                                    value={comment.adminReplyInput} // Correct the value
                                                    onChange={(e) => handleReplyInputChange(commentIndex, e.target.value)}
                                                />
                                                <button
                                                    className="bg-[#2F2F2F] text-white py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline uppercase mt-2"
                                                    type='submit'
                                                >
                                                    Submit Reply
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section >
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


const reviewData = [
    {
        rating: 1,
        reviewText: 'Terrible',
    },
    {
        rating: 2,
        reviewText: 'Poor',
    },
    {
        rating: 3,
        reviewText: 'Average',
    },
    {
        rating: 4,
        reviewText: 'Good',
    },
    {
        rating: 5,
        reviewText: 'Excellent',
    },
];