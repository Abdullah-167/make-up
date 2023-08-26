import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Container from './Container';
import { IoIosArrowUp } from 'react-icons/io';
import { CgMenuLeft } from 'react-icons/cg';
import { RxCross1 } from 'react-icons/rx';

interface LinkItem {
    link: string;
    url?: string;
}

interface MainLink {
    mainLink: string;
    innerLink?: LinkItem[];
}

const Navbar: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [scrollDown, setScrollDown] = useState<boolean>(false);
    const [toggelTab, setToggelTab] = useState<boolean>(false);

    const handleMenu = () => {
        setToggelTab(!toggelTab);
    };

    useEffect(() => {
        if (toggelTab) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [toggelTab]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setScrollDown(true);
            } else {
                setScrollDown(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <nav>
            <div className={`fixed top-0 py-5 w-full z-[1000] transition-all duration-500  ${scrollDown ? 'bg-tertiary text-[#000000] shadow-md bg-opacity-90' : 'bg-white'}`}>
                <Container>
                    <div className='flex items-center justify-between'>
                        <div className=''>
                            <Image
                                src={scrollDown ? '/logo.svg' : '/primarylogo.svg'}
                                alt={'logo'}
                                width={120}
                                height={120}
                                className={` transition-all duration-500 ${scrollDown ? ' shadow-lg' : ''}`}
                            />
                        </div>
                        <ul className="flex space-x-7 nav-links">
                            {links.map((link, index) => (
                                <li
                                    key={index}
                                    className={` relative group ${scrollDown ? 'links-two' : 'links'}`}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <span
                                        onMouseOver={() => setActiveDropdown(index)}
                                        className={`text-[#000000] font-light text-lg flex items-center  transition-all duration-500 ${scrollDown ? '' : 'hover:text-[#D48D78]'}`}
                                    >
                                        {link.mainLink}
                                        {(link.mainLink === 'Lips' || link.mainLink === 'Eyes') && (
                                            <IoIosArrowUp
                                                className={`ml-1 transition-all duration-500 text-sm ${activeDropdown === index ? '-rotate-40' : 'rotate-180'
                                                    }`}
                                            />
                                        )}
                                    </span>
                                    <div className={` transition-all  duration-500  ${activeDropdown === index ? 'dropdown--show' : 'dropdown--hide'
                                        }`}>
                                        {link.innerLink && activeDropdown === index && (
                                            <ul
                                                className={`absolute z-[1000] text-sm shadow ${scrollDown ? ' bg-tertiary' : 'bg-white '} ${link.mainLink === 'Lips'
                                                    ? '-left-7 w-24 pl-4 py-3 dropdown--expanded'
                                                    : '-left-8 w-32 pl-4 py-3 dropdown--expanded'
                                                    }`}
                                            >
                                                {link.innerLink.map((item, innerIndex) => (
                                                    <div className={` mb-2 ${scrollDown ? 'links-two' : 'links'}`} key={innerIndex}>
                                                        <span className={`cursor-pointer pb-1.5 transition-all duration-500 ${scrollDown ? '' : 'hover:text-[#D48D78] '}`}>
                                                            {item.link}
                                                        </span>
                                                    </div>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={`res-hamburger text-black cursor-pointer ${toggelTab ? 'text-3xl' : 'text-4xl'}`}
                            onClick={() => handleMenu()}
                        >
                            {toggelTab ? (
                                <RxCross1 />
                            ) :
                                <CgMenuLeft />

                            }
                        </div>
                    </div>
                </Container>
            </div >
            <div className={` w-full absolute py-5 transition-all duration-700 shadow-md bg-white right-0 max-w-[300px] ${toggelTab ? ' top-[85px] block z-[400]' : ' -top-40  h-0'}`}>
                {toggelTab && (
                    <ul className="flex flex-col space-x-7">
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className={` relative group`}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <span
                                    onMouseOver={() => setActiveDropdown(index)}
                                    className={`text-[#000000] cursor-pointer z-[20] font-light text-lg flex items-center  transition-all duration-500 ${index === 0 ? 'pl-7' : ''} ${scrollDown ? '' : 'hover:text-[#D48D78]'}`}
                                >
                                    {link.mainLink}
                                    {(link.mainLink === 'Lips' || link.mainLink === 'Eyes') && (
                                        <IoIosArrowUp
                                            className={`ml-1 transition-all duration-500 text-sm ${activeDropdown === index ? '-rotate-40' : 'rotate-180'
                                                }`}
                                        />
                                    )}
                                </span>
                                <div className={` absolute transition-all  duration-500 z-[1000] bg-white  ${activeDropdown === index ? 'top-[24px]' : ''
                                    }`}>
                                    {link.innerLink && activeDropdown === index && (
                                        <ul
                                            className={`absolute z-[1000] text-sm shadow  ${scrollDown ? ' bg-tertiary' : 'bg-white '} ${link.mainLink === 'Lips'
                                                ? '-left-4 w-24 pl-4 py-3'
                                                : '-left-5 w-32 pl-4 py-3'
                                                }`}
                                        >
                                            {link.innerLink.map((item, innerIndex) => (
                                                <div className={` mb-2`} key={innerIndex}>
                                                    <span className={`cursor-pointer pb-1.5 transition-all duration-500 ${scrollDown ? '' : 'hover:text-[#D48D78] '}`}>
                                                        {item.link}
                                                    </span>
                                                </div>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
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
