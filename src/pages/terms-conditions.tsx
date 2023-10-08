import Layout from '@/Components/Common/Layout'
import React from 'react'

const TermsConditions = () => {
    return (
        <main>
            <Layout>
                <header className={'pt-36'}>
                    <h1 className='text-center text-3xl sm:text-5xl font-semibold pb-10'>Terms <span className=' text-tertiary'> & </span> Conditions</h1>
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
                                            <li className=' list-disc'>{item.listOne}</li>
                                            <li className=' list-disc'>{item.listTwo}</li>
                                            <li className=' list-disc'>{item.listThree}</li>
                                            <li className=' list-disc'>{item.listFour}</li>
                                            <li className=' list-disc'>{item.listFive}</li>
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

export default TermsConditions;


const data = [
    {
        isList: false,
        para: `Welcome to Evoce Beauty. By accessing or using our website (the "Service"), you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our Service.`
    },
    {
        heading: `Acceptance of Terms`,
        isList: false,
        para: `By accessing or using Evoce Beauty, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website.`
    },
    {
        heading: ` Privacy Policy`,
        isList: false,
        para: (<p>
            Your use of Evoce Beauty is also governed by our Privacy Policy, which can be found [here](link to your Privacy Policy). Please review our Privacy Policy to understand how we collect, use, and protect your personal information.`
        </p>)
    },
    {
        heading: `User Conduct`,
        isList: true,
        para: (<p>
            You agree to use Evoce Beauty in accordance with all applicable laws and regulations. You shall not engage in any conduct that:
        </p>),
        listOne: 'Violates the rights of others.',
        listTwo: 'Harasses or threatens other users.',
        listThree: 'Promotes illegal activities.',
        listFour: 'Impersonates any person or entity.',
        listFive: 'Contains viruses, malware, or harmful code.',
    },
    {
        heading: ` Intellectual Property`,
        isList: false,
        para: (<p>
            All content on Evoce Beauty, including text, images, logos, and trademarks, is protected by intellectual property rights and belongs to Evoce Beauty or its licensors. You may not use, reproduce, or distribute our content without our express written consent.
        </p>),
    },
    {
        heading: `  User-Generated Content`,
        isList: false,
        para: (<p>
            If you submit or post content on Evoce Beauty, you grant us a non-exclusive, royalty-free, worldwide, perpetual license to use, reproduce, modify, adapt, and distribute your content on our website and in promotional materials.
        </p>),
    },
    {
        heading: ` Third-Party Links`,
        isList: false,
        para: (<p>
            Evoce Beauty may contain links to third-party websites. We are not responsible for the content or practices of these websites. Accessing these third-party links is at your own risk.
        </p>),
    },
    {
        heading: `Changes to Terms and Conditions`,
        isList: false,
        para: (<p>
            We reserve the right to modify these Terms and Conditions at any time. It is your responsibility to regularly review this page for updates. Your continued use of Evoce Beauty after changes have been made constitutes your acceptance of the revised terms.
        </p>),
    },
    {
        heading: `Termination`,
        isList: false,
        para: (<p>
            We reserve the right to terminate or suspend your access to Evoce Beauty at our discretion, without notice, for any violation of these Terms and Conditions or for any other reason.
        </p>),
    },
    {
        heading: `Contact Us`,
        isList: false,
        para: (<p>
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at contact@email.com.
        </p>),
    },
    {
        heading: ` Governing Law`,
        isList: false,
        para: (<p>
            These Terms and Conditions are governed by and construed in accordance with the laws of United States, without regard to its conflict of law principles.
        </p>),
    },
]