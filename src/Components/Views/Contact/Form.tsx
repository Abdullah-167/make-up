import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';


interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}


const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubjectChange = (e: any) => {
        setFormData({ ...formData, subject: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const errors: FormErrors = {};
        // Validate form fields
        if (!formData.name) {
            errors.name = 'Name is required';
        }

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formData.message) {
            errors.message = 'Message is required';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            // Submit the form data to your backend or handle it as needed
            console.log('Form submitted:', formData);
            // Clear form data
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                message: '',
            });
            // Clear form errors
            setFormErrors({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
            // Display success message
            setFormSubmitted(true);
        }
    };

    const isValidEmail = (email: any) => {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <section className='px-5'>
            <div className="max-w-[800px] mx-auto bg-white p-6 rounded-md shadow-md my-10">
                <h2 className="text-3xl text-center font-semibold mb-4 text-tertiary lora">Contact Us</h2>
                <p className=' text-center pb-4'>  {`Have you encountered any problems or issues with our content? Do you have any copyright concerns? Please don't hesitate to contact us.`}</p>
                {formSubmitted ? (
                    <div className="bg-tertiary bg-opacity-50 rounded-md p-6">
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-16 h-16 mx-auto mb-2 animate-bounce"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <p className="text-2xl font-semibold mb-2">Message Sent!</p>
                        </div>
                        <p className="text-lg mb-4">
                            Your message has been successfully sent. We appreciate your interest in our services.
                        </p>
                        <p className="text-lg mb-4">
                            Our Evoc Beauty Team will review your message and get back to you as soon as possible.
                        </p>
                        <p className="text-lg">
                            In the meantime, feel free to explore our social media profiles for the latest updates and inspirations:
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="You Name"
                                className={`w-full px-3 py-2 border outline-none ${formErrors.name ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md ${formErrors.name ? '' : ''
                                    }`}
                                onChange={handleInputChange}
                                value={formData.name}
                            />
                            {formErrors.name && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Active Email"
                                className={`w-full px-3 py-2 border outline-none ${formErrors.email ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md ${formErrors.email ? '' : ''
                                    }`}
                                onChange={handleInputChange}
                                value={formData.email}
                            />
                            {formErrors.email && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                                Phone Number <span className='text-[10px]'>(Optional*)</span>
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="123-456-7890"
                                className={`w-full px-3 py-2 border outline-none ${formErrors.phone ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md ${formErrors.phone ? '' : ''
                                    }`}
                                onChange={handleInputChange}
                                value={formData.phone}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                                Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                className="w-full px-3 py-2 border outline-none border-gray-300 rounded-md focus:"
                                onChange={handleSubjectChange}
                                value={formData.subject}
                            >
                                <option value="General Inquiry">Content Issue</option>
                                <option value="Product Support">Copyright Issue</option>
                                <option value="Billing Issue">Collab With Us</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message here"
                                className={`w-full px-3 py-2 border outline-none ${formErrors.message ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md ${formErrors.message ? '' : ''
                                    }`}
                                onChange={handleInputChange}
                                value={formData.message}
                            />
                            {formErrors.message && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                            )}
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-black border-[1.5px] border-transparent hover:border-tertiary text-white hover:text-tertiary font-semibold rounded-md hover:bg-transparent transition duration-300 ease-in-out"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setFormData({
                                        name: '',
                                        email: '',
                                        phone: '',
                                        subject: 'General Inquiry',
                                        message: '',
                                    });
                                    setFormErrors({
                                        name: '',
                                        email: '',
                                        phone: '',
                                        message: '',
                                    });
                                    setFormSubmitted(false);
                                }}
                                className="ml-2 px-4 py-2 bg-gray-300 text-gray-600 font-semibold rounded-md hover:bg-gray-400 transition duration-300 ease-in-out"
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                )}
                <div className="mt-4 text-center">
                    <p className="text-gray-600 pb-5">You can also reach us on social media:</p>
                    <div className="flex gap-3 justify-center items-center">
                        {iconData.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={item.url}
                                    className={` font-bold text-xl w-10 h-10 rounded-full transition-all duration-500 p-3 flex justify-center items-center cursor-pointer  bg-[#F6E6D3] bg-opacity-100 text-black ${index == 0 ? 'hover:bg-blue-500 hover:text-white' : index >= 0 && index < 3 ? 'hover:bg-red-500 hover:text-white' : 'hover:bg-blue-500 hover:text-white'}`}
                                    target="_blank"
                                >
                                    {item.icon}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;



const iconData = [
    {
        url: "https://www.facebook.com/Rafiky-103256367862244/",
        icon: <FaFacebook />,
    },
    {
        url: "https://www.facebook.com/Rafiky-103256367862244/",
        icon: <FaPinterest />,
    },
    {
        url: "https://www.instagram.com/rafikynet/",
        icon: <IoLogoInstagram />,
    },
    {
        url: "https://www.instagram.com/rafikynet/",
        icon: <FaTwitter />,
    },
];
