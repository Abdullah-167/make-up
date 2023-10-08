import Layout from '@/Components/Common/Layout'
import React from 'react'

const CookiePolicy = () => {
    return (
        <main>
            <Layout>
                <header className={'pt-36'}>
                    <h1 className='text-center text-3xl sm:text-5xl font-semibold pb-10'>Cookie  <span className=' text-tertiary'> Policy </span> </h1>
                </header>
                <section className='pb-20'>
                    <div className='max-w-[1100px] mx-auto'>
                        {data.map((item, index) => {
                            return (
                                <div className='pb-7' key={index}>
                                    <h2 className='text-xl font-semibold pb-3'>{item.heading}</h2>
                                    <div className=''>{item.para}</div>
                                    {item.isList && (
                                        <ul className='pt-3 ml-4 text-black'>
                                            {item.listOne && (
                                                <li className=' list-disc'>{item.listOne}</li>
                                            )}
                                            {item.listTwo && (
                                                <li className=' list-disc'>{item.listTwo}</li>
                                            )}
                                            {item.listThree && (
                                                <li className=' list-disc'>{item.listThree}</li>
                                            )}
                                            {item.listFour && (
                                                <li className=' list-disc'>{item.listFour}</li>
                                            )}
                                        </ul>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </section>
            </Layout>
        </main>
    )
}

export default CookiePolicy;


const data = [
    {
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: `Welcome to Evoce Beauty. This Cookie Policy explains how we use cookies and similar tracking technologies on our website. By using our website, you consent to the use of cookies as described in this policy.`
    },
    {
        heading: `What Are Cookies?`,
        isList: true,
        islistTwo: true,
        islistThree: true,
        islistFour: false,
        para: `Cookies are small text files that are placed on your device when you visit a website. They are commonly used to enhance the user experience and collect information about user behavior and preferences.`,

    },
    {
        heading: `Types of Cookies We Use`,
        isList: true,
        islistTwo: true,
        islistThree: true,
        islistFour: false,
        para: `We may use the following types of cookies on Evoce Beauty:`,
        listOne: (<li> <strong>Essential Cookies:</strong> These are necessary for the website to function correctly. They enable basic functionalities like page navigation and access to secure areas of the website.</li>),
        listTwo: (<li> <strong>Analytical/Performance Cookies:</strong>These cookies help us analyze how users interact with our website. They collect information such as the number of visitors, the pages visited, and the source of traffic. </li>),
        listThree: (<li> <strong>Functional Cookies:</strong> These cookies allow the website to remember choices you make (e.g., language preferences) and provide enhanced features and personalization.</li>),
        listFour: (<li> <strong>Advertising/Marketing Cookies: </strong> These cookies are used to track and display advertisements that are relevant to your interests. They may also be used to limit the number of times you see an ad and measure the effectiveness of advertising campaigns.</li>),

    },
    {
        heading: `How to Manage Cookies`,
        isList: true,
        islistTwo: true,
        islistThree: true,
        islistFour: false,
        para: (<p>
            You can manage your cookie preferences by adjusting the settings in your web browser. Most web browsers allow you to block or delete cookies. Please note that if you choose to disable cookies, some parts of our website may not function correctly.
        </p>),
    },
    {
        heading: `  Third-Party Cookies`,
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: (<p>
            We may also use third-party cookies provided by external services, such as Google Analytics, to help us understand how our website is used and improve our services. These third-party cookies are subject to their respective privacy policies.
        </p>),
    },
    {
        heading: `Changes to this Cookie Policy`,
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: (<p>
            We reserve the right to update this Cookie Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on our website, and the date of the latest update will be indicated at the top of the policy.
        </p>),
    },
    {
        heading: `Contact Us`,
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: (<p>
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at contact@email.com.
        </p>),
    },
    {
        heading: ` Governing Law`,
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: (<p>
            This Cookie Policy is governed by and construed in accordance with the laws of United States, without regard to its conflict of law principles.
        </p>),
    },
]