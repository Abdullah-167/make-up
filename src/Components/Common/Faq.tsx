// components/FaqSection.js
import { useState } from 'react';

const FaqSection = ({ faqData }: any) => {
    const [isOpen, setIsOpen] = useState(null);

    const toggleFaq = (index: any) => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto mt-8">
            {faqData.map((item: any, index: any) => (
                <div key={index} className={`mb-4 border-b-[1.5px] border-b-gray-200 pb-2 ${index === 0 ? 'border-t-[1.5px] border-t-gray-200 pt-3' : ''}`}>
                    <div
                        className="flex justify-between items-center cursor-pointer transition-all duration-500 pb-4"
                        onClick={() => toggleFaq(index)}
                    >
                        <h3 className="text-2xl font-medium">{item.question}</h3>
                        {isOpen === index  ?  (
                            <span className='text-xl'>-</span>
                        ) :
                            (
                                <span className='text-xl'>+</span>
                            )
                        }
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ${isOpen === index ? 'max-h-[300px]' : 'max-h-0'
                            }`}
                    >
                        <p className={`text-lg mt-2 text-gray-600 transition-all duration-500 ${isOpen === index ? ' opacity-100' : ' opacity-0'}`}>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqSection;
