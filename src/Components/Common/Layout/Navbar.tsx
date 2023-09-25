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
    const [isFoundationHovered, setIsFoundationHovered] = useState<boolean>(false);

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
                        <ul className="flex gap-4 nav-links">
                            {links.map((link, index) => (
                                <li
                                    key={index}
                                    className={` relative group ${scrollDown ? 'links-two' : 'links'}`}
                                    onMouseLeave={() => {
                                        setActiveDropdown(null);
                                        if (link.mainLink === 'Foundation') {
                                            setIsFoundationHovered(false); // Step 1: Reset the state when leaving the "Foundation" link
                                        }
                                    }}
                                >
                                    <span
                                        onMouseOver={() => {
                                            setActiveDropdown(index);
                                            if (link.mainLink === 'Foundation') {
                                                setIsFoundationHovered(true); // Step 1: Set the state when hovering over the "Foundation" link
                                            }
                                        }}
                                        className={`text-[#000000] font-extralight text-[16px] flex items-center  transition-all duration-500 ${index == 0 || index == 1 ? 'hidden' : ''} ${scrollDown ? '' : 'hover:text-[#D48D78]'}`}
                                    >
                                        {link.mainLink}
                                        {(link.mainLink === 'All MakeUp' || link.mainLink === 'Lips' || link.mainLink === 'Eyes' || link.mainLink === 'Makeup Tutorials') && (
                                            <IoIosArrowUp
                                                className={`ml-1 transition-all duration-500 text-sm ${activeDropdown === index ? '-rotate-40' : 'rotate-180'}`}
                                            />
                                        )}
                                    </span>
                                    <div className={` transition-all  duration-500  ${activeDropdown === index ? 'dropdown--show' : 'dropdown--hide'
                                        }`}>
                                        {link.innerLink && activeDropdown === index && (
                                            <ul
                                                className={`absolute z-[1000] text-sm shadow ${scrollDown ? ' bg-tertiary' : 'bg-white '} ${link.mainLink === 'Makeup Tutorials'
                                                    ? '-left-1.5 w-40 pl-4 py-3 dropdown--expanded'
                                                    : ''
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
                                        {link.makeUp && (
                                            <ul
                                                className={`mega-menu pt-7 z-[1000] text-sm shadow w-[870px]  py-3 px-5 ${scrollDown ? ' bg-tertiary' : 'bg-white '}`}
                                            >
                                                <div className=' flex justify-evenly'>
                                                    {link.innerMakeUp?.map((item, idx) => {
                                                        return (
                                                            <div className=''
                                                                key={idx}>
                                                                <h2 className=' font-semibold text-[17px] pb-3'>{item.heading}</h2>
                                                                {item.lipsInner.map((newitem, newIdx) => {
                                                                    return (
                                                                        <div className={` mb-2`} key={newIdx}>
                                                                            <span className={`cursor-pointer pb-1.5 transition-all duration-500 ${scrollDown ? '' : 'hover:text-[#D48D78] '}`}>
                                                                                {newitem.link}
                                                                            </span>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
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
                                    {(link.mainLink === 'Lips' || link.mainLink === 'Eyes' || link.mainLink === 'Makeup Tips') && (
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
        mainLink: 'Lips',
        makeUp: false,
        innerLink: [
            { link: 'Lip Gloss', url: '/lips/lipgloss' },
            { link: 'Lip liner', url: '/lips/lipliner' },
            { link: 'Lipstick', url: '/lips/lipstick' },
        ],
    },
    {
        mainLink: 'Eyes',
        makeUp: false,
        innerLink: [
            { link: 'Eyeliner' },
            { link: 'Mascara' },
            { link: 'Kajal' },
            { link: 'Eye Shadow' },
        ],
    },
    {
        mainLink: 'All MakeUp',
        makeUp: true,
        innerMakeUp: [
            {
                heading: 'Lips',
                lipsInner: [
                    { link: 'Lipstick', url: '/lips/lipstick' },
                    { link: 'Lip Gloss', url: '/lips/lipgloss' },
                    { link: 'Lip liner', url: '/lips/lipliner' },
                    { link: 'Lip Balm', url: '/lips/lipliner' },
                    { link: 'Lip Stain', url: '/lips/lipliner' },
                    { link: 'Lip Mask', url: '/lips/lipliner' },
                ]
            },
            {
                heading: 'Eyes',
                lipsInner: [
                    { link: 'Eyeliner', url: '/lips/lipgloss' },
                    { link: 'Mascara', url: '/lips/lipliner' },
                    { link: 'Kajal', url: '/lips/lipstick' },
                    { link: 'Eye Shadow', url: '/lips/lipstick' },
                    { link: 'Eye Primer', url: '/lips/lipstick' },
                    { link: 'Eyelash Extensions', url: '/lips/lipstick' },
                    { link: 'Eye Glitter', url: '/lips/lipstick' },
                    { link: 'Eye Concealer', url: '/lips/lipstick' },
                ]
            },
            {
                heading: 'Fundation',
                lipsInner: [
                    { link: 'Liquid foundation', url: '/lips/lipgloss' },
                    { link: 'Serum foundation', url: '/lips/lipliner' },
                    { link: 'Cream foundation', url: '/lips/lipstick' },
                    { link: 'Stick foundation', url: '/lips/lipstick' },
                    { link: 'Powder foundation', url: '/lips/lipstick' },
                ]
            },
            {
                heading: 'Skin Care',
                lipsInner: [
                    { link: 'Cleanser', url: '/lips/lipgloss' },
                    { link: 'Moisturizer', url: '/lips/lipliner' },
                    { link: 'Sunscreen', url: '/lips/lipstick' },
                    { link: 'Serums', url: '/lips/lipstick' },
                    { link: 'Toners', url: '/lips/lipstick' },
                    { link: 'Masks', url: '/lips/lipstick' },
                ]
            },
            {
                heading: 'Nail Care ',
                lipsInner: [
                    { link: 'Nail Polish', url: '/lips/lipgloss' },
                    { link: 'Base Coat', url: '/lips/lipliner' },
                    { link: 'Top Coat', url: '/lips/lipstick' },
                    { link: 'Nail File', url: '/lips/lipstick' },
                    { link: 'Cuticle Oil', url: '/lips/lipstick' },
                    { link: 'Nail Strengthener', url: '/lips/lipstick' },
                ]
            },
            {
                heading: 'Makeup Tools ',
                lipsInner: [
                    { link: 'Brushes', url: '/lips/lipgloss' },
                    { link: 'Beauty Blender', url: '/lips/lipliner' },
                    { link: 'Makeup  Mirrors', url: '/lips/lipstick' },
                    { link: 'Eyelash Curler', url: '/lips/lipstick' },
                    { link: 'Makeup Bag', url: '/lips/lipstick' },
                ]
            },
        ]
    },
    {
        mainLink: 'Makeup Eraser',
        makeUp: false,

    },
    {
        mainLink: 'Makeup Tutorials',
        innerLink: [
            { link: 'Lip Gloss', url: '/lips/lipgloss' },
            { link: 'Lip liner', url: '/lips/lipliner' },
            { link: 'Lipstick', url: '/lips/lipstick' },
        ],
    },
    {
        mainLink: 'Buying Guide',
        makeUp: false,

    },
    {
        mainLink: 'Blogs',
        makeUp: false,

    },
    {
        mainLink: 'About',
        makeUp: false,

    },
    {
        mainLink: 'Contact Us',
        makeUp: false,

    },
];
