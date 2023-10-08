import Layout from '@/Components/Common/Layout'
import React from 'react'

const Disclaimer = () => {
    return (
        <main>
            <Layout>
                <header className={'pt-36'}>
                    <h1 className='text-center text-3xl sm:text-5xl font-semibold pb-10'>Discl<span className=' text-tertiary'>aimer </span> </h1>
                </header>
                <section className='pb-20'>
                    <div className='max-w-[1100px] mx-auto'>
                        {data.map((item, index) => {
                            return (
                                <div className='pb-7' key={index}>
                                    <h2 className='text-xl font-semibold pb-3'>{item.heading}</h2>
                                    <div className=''>{item.para}</div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </Layout>
        </main>
    )
}

export default Disclaimer;


const data = [
    {
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: `Welcome to Evoce Beauty This Disclaimer outlines the terms and conditions governing your use of our website.`
    },
    {
        heading: `Content Accuracy`,
        isList: true,
        islistTwo: true,
        islistThree: true,
        islistFour: false,
        para: `The content provided on Evoce Beauty is for informational and educational purposes only. While we strive to provide accurate and up-to-date information, we do not make any warranties or representations regarding the completeness, accuracy, reliability, or suitability of the information contained on our website. Any reliance you place on such information is at your own risk.`,

    },
    {
        heading: `Professional Advice`,
        isList: true,
        islistTwo: true,
        islistThree: true,
        islistFour: true,
        para: (<p>
            Evoce Beauty is not a substitute for professional beauty, makeup, or skincare advice. The content on our website should not be considered as professional advice or a replacement for consultations with qualified beauty professionals or medical practitioners. Always seek the advice of professionals when making beauty-related decisions.
        </p>),
    },
    {
        heading: `Product Recommendations`,
        isList: true,
        islistTwo: true,
        islistThree: true,
        islistFour: false,
        para: (<p>
            Any product recommendations or reviews provided on Evoce Beauty are based on our personal opinions and experiences. The suitability of a product for your specific needs may vary. We recommend conducting your research and consulting with professionals before making any purchase decisions.
        </p>),
    },
    {
        heading: `Third-Party Links`,
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: (<p>
            Evoce Beauty may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these websites. Accessing these third-party links is at your own discretion and risk.
        </p>),
    },
    {
        heading: `No Guarantees`,
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: (<p>
            We make no guarantees regarding the outcomes or results that may be achieved through the use of the information, products, or services provided on our website. Individual experiences may vary.
        </p>),
    },
    {
        heading: `Changes to Content`,
        isList: false,
        islistTwo: false,
        islistThree: false,
        islistFour: false,
        para: (<p>
            We reserve the right to modify or remove content on Evoce Beauty at any time without notice. We are not obligated to update outdated information or correct errors.
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
            These Terms and Conditions are governed by and construed in accordance with the laws of United States, without regard to its conflict of law principles.
        </p>),
    },
]