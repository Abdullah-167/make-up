// pages/categories/[category].js

import { useRouter } from 'next/router';
import { foundationCatData } from '../../lib/foundationCat';
import Layout from '@/Components/Common/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Seo from '@/Components/Common/Seo';


const EyesCatPage = ({ pageData }: any) => {


    const [searchQuery, setSearchQuery] = useState("");
    const [isInputVisible, setInputVisible] = useState(true);
    const [scrollDown, setScrollDown] = useState<boolean>(false);
    const [numCardsToShow, setNumCardsToShow] = useState(10); // Number of cards to initially show
    const [isLoading, setIsLoading] = useState(false); // Add isLoading state


    const handleSearch = (query: any) => {
        setSearchQuery(query);
    };

    const toggleInputVisibility = () => {
        setInputVisible(!isInputVisible);
    };

    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }


    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate: string = currentDate.toLocaleDateString(undefined, options);



    const loadMoreCards = () => {
        setIsLoading(true); // Set loading state to true when loading more cards
        setTimeout(() => {
            if (numCardsToShow + 4 >= pageData.secondaryCards.length) {
                // If there are no more cards to load
                setNumCardsToShow(pageData.secondaryCards.length);
            } else {
                // Load 4 more cards
                setNumCardsToShow(numCardsToShow + 4);
            }
            setIsLoading(false); // Set loading state to false when done loading cards
        }, 1000); // Simulating a loading delay (replace with actual card loading logic)
    };

    return (
        <main className=' overflow-hidden'>
            <Layout>
                <div>
                    <Seo title={pageData.seoTitle} descritipn={pageData.seoDescritipn} />
                </div>
                <section className=' '>
                    <form className="pt-32 pb-10 sm:pb-14">
                        <div className='flex items-center max-w-[500px] mx-auto px-5'>
                            <label className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className={`w-4 h-4 text-tertiary dark:text-tertiary`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="voice-search"
                                    className={`text-gray-900 text-sm rounded-lg outline-none border-[1.5px]  block w-full pl-10 p-2.5  dark:text-black placeholder:text-tertiary focus:ring-tertiary focus:border-tertiary border-tertiary`}
                                    placeholder="Search Articles Here..."
                                    onChange={(e) => handleSearch(e.target.value)}
                                    required />
                            </div>
                            <button type="submit" className={`inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-tertiary rounded-lg border border-tertiary`}>
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>Search
                            </button>
                        </div>
                    </form>
                    <div className='max-w-[1250px] mx-auto'>
                        <div className=' pb-10 sm:pb-20 px-5 '>
                            <div key={pageData.url}>
                                {!searchQuery && (
                                    <div>
                                        <p className='text-3xl sm:text-5xl font-semibold text-center sm:pb-5'>{pageData.mainHeading}</p>
                                        <div className='flex gap-2 items-center justify-center pb-9'>
                                            <p className='bg-[#4DA1F4] h-[1px] w-14 my-8 '></p>
                                            <h2 className='text-gray-500 whitespace-nowrap'>{pageData.catHeading} </h2>
                                            <p className='bg-[#4DA1F4] h-[1px] w-14 my-8 '></p>
                                        </div>
                                    </div>
                                )}
                                <div className='sec-main-cards grid gap-x-5 gap-y-8 sm:gap-y-16 w-full'>
                                    {pageData.secondaryCards
                                        .filter((secCard: any) =>
                                            secCard.heading.toLowerCase().includes(searchQuery.toLowerCase())
                                        )
                                        .slice(0, numCardsToShow)
                                        .map((secCard: any, secIdx: any) => (
                                            <div className='flex gap-3 w-full' key={secIdx}>
                                                <div
                                                    className={`cursor-pointer rounded-md w-full sm:max-w-[280px] min-w-[280px] `}
                                                    key={secIdx}
                                                >
                                                    <div className={`overflow-hidden pb-2 `}>
                                                        <Image
                                                            className={`rounded-md transition-all duration-500 min-h-[300px] max-h-[300px]  sm:max-w-[300px] hover:scale-105 w-full h-full object-cover`}
                                                            src={secCard.img}
                                                            alt={'lifehack-img'}
                                                            width={500}
                                                            height={500}
                                                        />
                                                    </div>
                                                    <Link href={'/'}>
                                                        <span className='text-sm pb-1 text-[#D48D78] hover:text-[#35155D] block'>{secCard.category}</span>
                                                    </Link>
                                                    <h1 className="text-xl pb-2">
                                                        {secCard.heading}
                                                    </h1>
                                                    <span className='text-sm pb-1 text-gray-500'>By {secCard.author} <span className='pl-2'> - </span> <span className='pl-2'> {formattedDate} </span></span>
                                                </div>
                                                {isLoading && secIdx === numCardsToShow - 1 && (
                                                    <div className="min-w-[280px] movie--isloading mx-auto">
                                                        <div className="loading-image"></div>
                                                        <div className="loading-content">
                                                            <div className="loading-text-container">
                                                                <div className="loading-category"></div>
                                                                <div className="loading-main-text"></div>
                                                                <div className="loading-sub-text"></div>
                                                                <div className='flex gap-2 items-center'>
                                                                    <div className="loading-author-name"></div>
                                                                    <div className='loading-qoma'></div>
                                                                    <div className="loading-date"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    {pageData.secondaryCards
                                        .filter((secCard: any) =>
                                            secCard.heading.toLowerCase().includes(searchQuery.toLowerCase())
                                        )
                                        .length === 0 ? (
                                        <p className="text-xl">Nothing found related to your search</p>
                                    ) : null}
                                </div>
                            </div>
                            {numCardsToShow >= pageData.secondaryCards.length ? (
                                <span
                                    className='px-3 bg-black border-[1.5px] border-black bg-transparent  cursor-pointer transition-all duration-300 py-2 rounded-md flex max-w-[130px] text-center justify-center mx-auto'>
                                    No More Data
                                </span>
                            ) : (
                                <span
                                    onClick={loadMoreCards}
                                    className='px-3 bg-black border-[1.5px] border-transparent hover:border-black hover:bg-transparent hover:text-black text-white cursor-pointer transition-all duration-300 py-2 rounded-md flex max-w-[130px] text-center justify-center mx-auto'>
                                    Load More
                                </span>
                            )}
                        </div>
                    </div>
                </section>
            </Layout>
        </main >
    );
};


export async function getStaticPaths() {
    const paths = foundationCatData.map((page) => ({
        params: { category: page.url },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const pageData = foundationCatData.find((page) => page.url === params.category);

    return {
        props: { pageData },
    };
}

export default EyesCatPage;