import Image from 'next/image';
import React, { useState } from 'react';
import Container from './Container';
import { IoIosArrowUp } from 'react-icons/io';

const Navbar = () => {

    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <nav>
            <div className="bg-white sticky top-0 py-4">
                <Container>
                    <div className='flex items-center justify-between'>
                        <div>
                            <Image src={'/logo.svg'} alt={'logo'} width={120} height={120} />
                        </div>
                        <ul className="flex space-x-7">
                            {links.map((link, index) => (
                                <li
                                    key={index}
                                    className="relative group "
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button
                                        onMouseOver={() => setActiveDropdown(index)}
                                        className="text-[#000000] font-light text-lg flex items-center hover:text-[#D48D78] transition-all duration-500"
                                    >
                                        {link.mainLink}
                                        {(link.mainLink === 'Lips' || link.mainLink === 'Eyes') && (
                                            <IoIosArrowUp
                                                className={`ml-1 transition-all duration-500 text-sm ${activeDropdown === index ? '-rotate-40' : 'rotate-180'
                                                    }`}
                                            />
                                        )}
                                    </button>
                                    <div className={` transition-all  duration-500 ${activeDropdown === index ? 'dropdown--show' : 'dropdown--hide'
                                        }`}>
                                        {link.innerLink && activeDropdown === index && (
                                            <ul
                                                className={`absolute z-[1000] text-sm shadow  ${link.mainLink === 'Lips'
                                                    ? '-left-5 w-32 pl-2 py-3 dropdown--expanded'
                                                    : '-left-3 w-32 pl-2 py-3 dropdown--expanded'
                                                    }`}
                                            >
                                                {link.innerLink.map((item, innerIndex) => (
                                                    <li key={innerIndex}>
                                                        <p className="cursor-pointer hover:text-[#D48D78] pb-1.5">
                                                            {item.link}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </div>
        </nav >
    );
};

export default Navbar;

const links = [
    {
        mainLink: 'Fondation',
    },
    {
        mainLink: 'Lips',
        innerLink: [
            { link: 'Lip Gloss', url: '/lips/lipgloss' },
            { link: 'Lip liner', url: '/lips/lipliner' },
            { link: 'Lipstick', url: '/lips/lipstick' },
        ],
    },
    {
        mainLink: 'Eyes',
        innerLink: [
            { link: 'Eyeliner' },
            { link: 'Mascara' },
            { link: 'Kajal' },
            { link: 'Eye Shadow' },
        ],
    },
    {
        mainLink: 'Makeup Eraser',
    },
    {
        mainLink: 'Blogs',
    },
    {
        mainLink: 'About',
    },
    {
        mainLink: 'Contact Us',
    },
];
