import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useState } from "react"
import { SlLocationPin } from 'react-icons/sl';
import { BsTelephone } from 'react-icons/bs';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Button from "@/Components/Common/Button"
import Container from "@/Components/Common/Layout/Container"


const LatestBlog = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3, spacing: 10 },
            },
        },
        slides: {
            perView: 1,
            spacing: 10,
        },

        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },

    })

    return (
        <section className="mx-auto relative sm:py-8  overflow-hidden">
            <Container>
                <div className='flex gap-2 items-center justify-center'>
                    <p className='bg-[#4DA1F4] h-[1px] w-14 my-10'></p>
                    <h2 className='text-gray-500'>Latest Articles </h2>
                    <p className='bg-[#4DA1F4] h-[1px] w-14 my-10'></p>
                </div>
                <p className='text-3xl sm:text-5xl font-semibold text-center pb-5 sm:pb-10'>{`Read What's New`}</p>
                <div ref={sliderRef} className="keen-slider relative py-10 sm:py-20">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className=" shadow-md keen-slider__slide cursor-pointer rounded-md my-2">
                                <div className="relative slide-scale">
                                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md z-[100]"></div>
                                    <Image
                                        className="flex max-h-[468px] min-h-[468px] object-cover justify-center mx-auto rounded-md transform transition-transform hover:scale-75 z-[1000]"
                                        src={item.img}
                                        alt={"slider-images"}
                                        width={700}
                                        height={500}
                                    />
                                    <div className="effect bg-[#F8F0E5] absolute top-0 w-2 h-full blur-md z-[100]"></div>
                                    <div className="effect bg-[#F8F0E5] absolute top-0 left-4 w-2 h-full blur-md z-[100]"></div>
                                </div>

                                <div className="absolute bottom-9 px-5 z-[1000]">
                                    <p className="font-medium text-2xl sm:text-3xl pb-2 text-white">{item.heading}</p>
                                    <p className="font-medium text-sm text-white pb-4">{item.des}</p>
                                    <div className=" flex gap-2 flex-wrap items-center text-ellipsis">
                                                                            <Button
                                            btnText={item.readNow}
                                            borderRadius={'10px'}
                                            padding={'3px 15px '}
                                            backgroundColor={'transparent'}
                                            hoverBackgroundColor={'transparent'}
                                            color={'white'}
                                            hoverColor={'white'}
                                            border={'2px solid white'}
                                        />
                                        <Button
                                            btnText={item.allBlogs}
                                            borderRadius={'10px'}
                                            padding={'3px 22px '}
                                            backgroundColor={'#F8F0E5'}
                                            hoverBackgroundColor={'transparent'}
                                            color={'black'}
                                            hoverColor={'white'}
                                            border={'2px solid #F8F0E5'}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {loaded && instanceRef.current && (
                        <div className="">
                            <span className="">
                                <Arrow
                                    left
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                />
                            </span>

                            <Arrow
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </div>
                    )}
                </div>

            </Container>
        </section>
    )
}

export default LatestBlog;



const data = [
    {
        img: '/style.jpg',
        heading: "Planet Museum",
        des: 'Best relaxtion facilities with welcome',
        readNow: 'Read Now',
        allBlogs: 'All Blogs'
    },
    {
        img: '/imgfour.png',
        heading: "Planet Museum",
        des: 'Best relaxtion facilities with welcome',
        readNow: 'Read Now',
        allBlogs: 'All Blogs'
    },
    {
        img: '/womenmakeup.webp',
        heading: "Planet Museum",
        des: 'Best relaxtion facilities with welcome',
        readNow: 'Read Now',
        allBlogs: 'All Blogs'
    },
    {
        img: '/phithree.webp',
        heading: "Planet Museum",
        des: 'Best relaxtion facilities with welcome',
        readNow: 'Read Now',
        allBlogs: 'All Blogs'
    },
    {
        img: '/women3.webp',
        heading: "Planet Museum",
        des: 'Best relaxtion facilities with welcome',
        readNow: 'Read Now',
        allBlogs: 'All Blogs'
    },
    {
        img: '/phione.webp',
        heading: "Planet Museum",
        des: 'Best relaxtion facilities with welcome',
        readNow: 'Read Now',
        allBlogs: 'All Blogs'
    },
    {
        img: '/beautifullgirl.jpg',
        heading: "Planet Museum",
        des: 'Best relaxtion facilities with welcome',
        readNow: 'Read Now',
        allBlogs: 'All Blogs'
    },
    {
        img: '/aunt.jpg',
        heading: "Planet Museum",
        des: 'Best relaxtion facilities with welcome',
        readNow: 'Read Now',
        allBlogs: 'All Blogs'
    },
]



function Arrow(props: any) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <div
            onClick={props.onClick}
            className={` text-lg sm:text-3xl mx-auto bg-black text-white rounded-full p-3 cursor-pointer absolute z-[100] ${props.left ? "arrow--left -top-0 right-[50px] sm:right-24  z-[1000]" : "arrow--right -top-0  right-0 sm:right-6 z-[1000]"
                } ${disabeld}`}

        >
            {props.left && (
                <BsArrowLeft />
            )}
            {!props.left && (
                <BsArrowRight />
            )}
        </div>
    )
}