// pages/categories/[category].js

import { useRouter } from 'next/router';
import { lipcatData } from '../../lib/lipData';
import Layout from '@/Components/Common/Layout';
import Link from 'next/link';
import Image from 'next/image';


const CategoryPage = ({ pageData }: any) => {
    
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate: string = currentDate.toLocaleDateString(undefined, options);


    return (
        <main>
            <Layout>
                <section>
                    <div className='max-w-[1250px] mx-auto'>
                        <div className=' pb-10 sm:pb-20 px-5 pt-28 sm:pt-32'>
                            <div key={pageData.url}>
                                <p className='text-3xl sm:text-5xl font-semibold sm:text-center pb-7'>{pageData.mainHeading}</p>
                                <div className='hidden md:flex gap-2 items-center justify-center pb-9'>
                                    <p className='bg-[#4DA1F4] h-[1px] w-14 my-8 sm:block hidden'></p>
                                    <h2 className='text-gray-500'>{pageData.catHeading} </h2>
                                    <p className='bg-[#4DA1F4] h-[1px] w-14 my-8 sm:block hidden'></p>
                                </div>
                                <div className='main-cat-cards hidden md:grid grid-cols-4 gap-6 max-w-[1250px] mx-auto pb-28 '>
                                    {pageData.mainCards.map((newItem: any, idx: any) => (
                                        <div
                                            key={idx}
                                            className={`listing-show relative shadow-md flex justify-center items-center cursor-pointer ${idx < 1 ? ' md:col-span-2' : idx > 4 ? 'md:col-span-2' : ''
                                                }`}
                                        >
                                            <Image
                                                className={`object-cover rounded-md w-full max-h-[200px] min-h-[200px] md:max-h-[302px] md:min-h-[302px]`}
                                                src={newItem.img}
                                                alt={''}
                                                width={1000}
                                                height={1000}
                                            />
                                            <div className="absolute left-0 z-[100] rounded-md top-0 w-full h-full bg-gradient-to-r from-tertiary to-[#FFBFBF] opacity-0 transition-opacat duration-500 hover:opacity-70"></div>
                                            <div className="absolute left-0 rounded-md top-0 w-full h-full bg-black bg-opacity-30 transition-opacity duration-500 "></div>
                                            <p className='text-3xl text-white font-semibold bottom-10 absolute z-[300]'>{newItem.cat}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className='text-3xl sm:text-5xl font-semibold pb-10 md:block hidden'>Our Latest Articles</p>
                                <div className='sec-main-cards grid gap-x-5 gap-y-8 sm:gap-y-16'>
                                    {pageData.secondaryCards.map((secCard: any, secIdx: any) => (
                                        <div
                                            className={`cursor-pointer rounded-md`}
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
                                                <span className='text-sm pb-1 text-[#D48D78] hover:text-[#35155D]'>{secCard.category}</span>
                                            </Link>
                                            <h1 className="text-xl inline-block group">
                                                {secCard.heading}
                                            </h1>
                                            <span className='text-sm pb-1 text-gray-500'>By {secCard.author} <span className='pl-2'> - </span> <span className='pl-2'> {formattedDate} </span></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </main >
    );
};


export async function getStaticPaths() {
  const paths = lipcatData.map((page) => ({
    params: { category: page.url }, 
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params } : any) {
  const pageData = lipcatData.find((page) => page.url === params.category);

  return {
    props: { pageData },
  };
}

export default CategoryPage;