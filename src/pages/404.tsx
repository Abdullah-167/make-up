import Layout from '@/Components/Common/Layout'
import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
    return (
        <main>
            <Layout>
                <section className="flex items-center h-full p-20  dark:text-gray-400">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-md text-center">
                            <h1 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                                <span className="sr-only">Error</span>4<span className=' text-tertiary'>0</span>4
                            </h1>
                            <p className="text-2xl font-semibold md:text-3xl">{`Sorry, we couldn't find this page.`}</p>
                            <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                            <Link href={'/'}>
                                <div className="px-8 py-3 font-semibold rounded bg-tertiary cursor-pointer  dark:text-gray-900">Back to homepage</div>
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </main>
    )
}

export default ErrorPage