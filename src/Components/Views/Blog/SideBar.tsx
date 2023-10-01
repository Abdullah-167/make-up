import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(0);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const toggleFaq = (id: any) => {
        setIsOpen(isOpen === id ? null : id);
    };

    const toggleCheckbox = (category: any) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const filterProducts = (product: any) => {
        if (selectedCategories.length === 0) {
            return true;
        }
        return product.category.some((innerCat: any) =>
            selectedCategories.includes(innerCat.catOne)
        );
    };

    return (
        <aside className='max-w-[300px] min-w-[160px]  z-[4200] lg:z-[100] bg-white'>
            <div className=''>
                <div className=' flex justify-between pr-2 pb-5 items-center'>
                    <div className='text-xl font-semibold px-2 flex items-center gap-1 '>
                        <p>Filter By</p>
                        <span>
                            <FiFilter />{' '}
                        </span>
                    </div>
                </div>
                {faqData.map((item) => (
                    <div key={item.id} className={`mb-4 border-b-[1.5px] pb-2 px-2 `}>
                        <div
                            className='flex justify-between items-center cursor-pointer transition-all duration-500 pb-2'
                            onClick={() => toggleFaq(item.id)}
                        >
                            <h3 className='font-semibold'>{item.heading}</h3>
                            {isOpen === item.id ? (
                                <span className='text-xl'>-</span>
                            ) : (
                                <span className='text-xl'>+</span>
                            )}
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-500 ${isOpen === item.id ? 'max-h-[300px]' : 'max-h-0'
                                }`}
                        >
                            {item.category.map((innerCat) => (
                                <div
                                    className={`text-sm mt-2 text-gray-600 transition-all duration-500`}
                                    key={innerCat.catOne}
                                    onClick={() => toggleCheckbox(innerCat.catOne)}
                                >
                                    <div className='flex gap-2 items-center cursor-pointer'>
                                        <input
                                            type='checkbox'
                                            name=''
                                            id=''
                                            checked={selectedCategories.includes(innerCat.catOne)}
                                            onChange={() => { }}
                                        />
                                        <p>{innerCat.catOne}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default SideBar


const faqData = [
    {
        id: 1,
        heading: 'All Makeup',
        category: [
            {
                catOne: 'Lips',
            },
            {
                catOne: 'Eyes',
            },
            {
                catOne: 'Foundation',
            },
            {
                catOne: 'Skin Care',
            },
            {
                catOne: 'NailCare',
            },
            {
                catOne: 'Makeup Tools',
            },
        ]
    },
    {
        id: 2,
        heading: 'Lips',
        category: [
            {
                catOne: 'Lipstick',
            },
            {
                catOne: 'Lip Gloss',
            },
            {
                catOne: 'Lip liner',
            },
            {
                catOne: 'Lip Balm',
            },
            {
                catOne: 'Lip Stain',
            },
            {
                catOne: 'Lip Mask',
            },
        ]
    },
    {
        id: 3,
        heading: 'Eyes',
        category: [
            {
                catOne: 'Eyeliner',
            },
            {
                catOne: 'Mascara',
            },
            {
                catOne: 'Kajal',
            },
            {
                catOne: 'Eye Shadow',
            },
            {
                catOne: 'Eye Primer',
            },
            {
                catOne: 'Eyelash Extensions',
            },
            {
                catOne: 'Eye Glitter',
            },
            {
                catOne: 'Eye Concealer',
            },
        ]
    },
    {
        id: 4,
        heading: 'Foundation',
        category: [
            {
                catOne: 'Liquid Foundation',
            },
            {
                catOne: 'Serum Foundation',
            },
            {
                catOne: 'Cream Foundation',
            },
            {
                catOne: 'Stick Foundation',
            },
            {
                catOne: 'Powder Foundation',
            },
        ]
    },
    {
        id: 5,
        heading: 'Skin Care',
        category: [
            {
                catOne: 'Cleanser',
            },
            {
                catOne: 'Moisturizer',
            },
            {
                catOne: 'Sunscreen',
            },
            {
                catOne: 'Serums',
            },
            {
                catOne: 'Toners',
            },
            {
                catOne: 'Masks',
            },
        ]
    },
    {
        id: 6,
        heading: 'Nail Care',
        category: [
            {
                catOne: 'Nail Polish',
            },
            {
                catOne: 'Base Coat',
            },
            {
                catOne: 'Top Coat',
            },
            {
                catOne: 'Nail File',
            },
            {
                catOne: 'Cuticle Oil',
            },
            {
                catOne: 'Nail Strengthener',
            },
            {
                catOne: 'Nail Hygiene',
            },
        ]
    },
    {
        id: 7,
        heading: 'Makeup Tools',
        category: [
            {
                catOne: 'Brushes',
            },
            {
                catOne: 'Beauty Blender',
            },
            {
                catOne: 'Makeup  Mirrors',
            },
            {
                catOne: 'Eyelash Curler',
            },
            {
                catOne: 'Makeup Bag',
            },
        ]
    },
    {
        id: 8,
        heading: 'Makeup Tutorials',
        category: [
            {
                catOne: 'Eye Makeup Tutorials',
            },
            {
                catOne: 'Face Makeup Tutorials',
            },
            {
                catOne: 'Lip Makeup Tutorials',
            },
            {
                catOne: 'Makeup Trends',
            },
        ]
    },
]