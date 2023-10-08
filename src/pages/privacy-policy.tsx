import Layout from '@/Components/Common/Layout'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <main>
            <Layout>
                <header className={'pt-36'}>
                    <h1 className='text-center text-3xl sm:text-5xl font-semibold pb-10'>Privacy  <span className=' text-tertiary'> Policy </span> </h1>
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

export default PrivacyPolicy;


const data = [
    {
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: `Evoce Beauty is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you access or use our website (the "Service").`
    },
    {
        heading: `Information We Collect`,
        isList: true,
        islistTwo: true,
        islistThree: true,
        islistFour: false,
        para: `We may collect the following types of information when you use Evoce Beauty:`,
        listOne: (<li> <strong>Personal Information:</strong> This may include your name, email address, postal address, and other identifying information when provided voluntarily. </li>),
        listTwo: (<li> <strong>Usage Information:</strong> We collect data about how you use our website, including your IP address, browser type, device information, and usage patterns. </li>),
        listThree: (<li> <strong>Cookies:</strong>  We use cookies to track user interactions with our website. You can manage cookie preferences through your browser settings. </li>),

    },
    {
        heading: ` How We Use Your Information`,
        isList: true,
        islistTwo: true,
        islistThree: true,
        islistFour: true,
        para: (<p>
            We use your information for the following purposes:
        </p>),
        listOne: 'To provide and improve our services.',
        listTwo: 'To respond to your inquiries or requests.',
        listThree: 'To send you promotional emails or newsletters if you have opted in.',
        listFour: 'To analyze and optimize the performance of our website.',
    },
    {
        heading: `Your Choices`,
        isList: true,
        islistTwo: true,
        islistThree: true,
        islistFour: false,
        para: (<p>
            You have the following choices regarding your personal information:
        </p>),
        listOne: 'You can access, update, or delete your personal information by contacting us.',
        listTwo: 'You can opt-out of receiving promotional emails at any time.',
        listThree: 'You can disable cookies through your browser settings.',
    },
    {
        heading: `  Data Security`,
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: (<p>
            We employ reasonable security measures to protect your personal information. However, no method of data transmission over the internet is completely secure.
        </p>),
    },
    {
        heading: ` Children's Privacy`,
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: (<p>
            Evoce Beauty is not intended for children under the age of 13. We do not knowingly collect personal information from children.
        </p>),
    },
    {
        heading: ` Third-Party Links`,
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: (<p>
            Evoce Beauty may contain links to third-party websites. We are not responsible for the content or practices of these websites. Accessing these third-party links is at your own risk.
        </p>),
    },
    {
        heading: `Changes to this Privacy Policy`,
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: (<p>
            We may update this Privacy Policy from time to time. The revised policy will be posted on our website, and the date of the latest update will be indicated at the top of the policy.
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
            These Privcay Policy are governed by and construed in accordance with the laws of United States, without regard to its conflict of law principles.
        </p>),
    },
]