import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Container from './Container';
import { IoIosArrowUp, IoMdArrowDropdown } from 'react-icons/io';
import { CgMenuLeft } from 'react-icons/cg';
import { RxCross1 } from 'react-icons/rx';
import Link from 'next/link';

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

    const [resNav, setResNav] = useState(null);

    const toggleMenu = (index: any) => {
        setResNav(resNav === index ? null : index);
    };


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
            <div className={`fixed z-[1000] top-0 py-5 w-full transition-all duration-500  ${scrollDown ? 'bg-tertiary text-[#000000] shadow-md bg-opacity-90' : 'bg-white'}`}>
                <div className=' relative'>
                    <Container>
                        <div className='flex items-center justify-between z-[1000] '>
                            <div className=''>
                                <Link href={'/'}>
                                    <Image
                                        src={scrollDown ? '/logo.svg' : '/primarylogo.svg'}
                                        alt={'logo'}
                                        width={120}
                                        height={120}
                                        className={` transition-all duration-500 ${scrollDown ? ' shadow-lg' : ''}`}
                                    />
                                </Link>
                            </div>
                            <ul className="flex gap-4 nav-links">
                                {links.map((link, index) => (
                                    <li
                                        key={index}
                                        className={` relative group ${scrollDown ? 'links-two' : 'links'}`}
                                        onMouseLeave={() => {
                                            setActiveDropdown(null);
                                            if (link.mainLink === 'Foundation') {
                                                setIsFoundationHovered(false);
                                            }
                                        }}
                                    >
                                        <span
                                            onMouseOver={() => {
                                                setActiveDropdown(index);
                                                if (link.mainLink === 'Foundation') {
                                                    setIsFoundationHovered(true);
                                                }
                                            }}
                                            className={`text-[#000000] text-[16px] flex items-center  transition-all duration-500 ${index == 0 || index == 1 ? 'hidden' : ''} ${scrollDown ? '' : 'hover:text-[#D48D78]'}`}
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
                                                        ? '-left-6 w-44 pl-4 py-3 dropdown--expanded'
                                                        : ''
                                                        }`}
                                                >
                                                    {link.innerLink.map((item, innerIndex) => (
                                                        <div className={` mb-2 ${scrollDown ? 'links-two' : 'links'}`} key={innerIndex}>
                                                            <Link href={(item as { url: string }).url}>
                                                                <span className={`cursor-pointer pb-1.5 transition-all duration-500 ${scrollDown ? '' : 'hover:text-[#D48D78] '}`}>
                                                                    {item.link}
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </ul>
                                            )}
                                            {link.makeUp && (
                                                <ul
                                                    className={`mega-menu z-[2000] text-sm shadow w-[900px] pb-3 pt-8 px-5 ${scrollDown ? 'bg-tertiary' : 'bg-white'
                                                        }`}
                                                    style={{
                                                        background: `linear-gradient(to bottom, transparent 30px,)`,
                                                    }}
                                                >
                                                    <div className=' flex justify-evenly'>
                                                        {link.innerMakeUp?.map((item, idx) => {
                                                            return (
                                                                <div className=''
                                                                    key={idx}>
                                                                    <Link href={item.url}> <span className=' font-semibold text-[17px]'>{item.heading}</span> </Link>
                                                                    <div className='pt-3'></div>
                                                                    {item.lipsInner.map((newitem, newIdx) => {
                                                                        return (
                                                                            <Link href={newitem.url} key={newIdx}>
                                                                                <div className={` mb-2`}>
                                                                                    <span className={`cursor-pointer pb-1.5 transition-all duration-500 ${scrollDown ? '' : 'hover:text-[#D48D78] '}`}>
                                                                                        {newitem.link}
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
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
                    <div className={` w-full z-[2000] fixed top-[85px] py-5 h-full transition-all duration-700 shadow-md  right-0 max-w-[300px] ${toggelTab ? ' right-0 block z-[400]' : '  translate-x-[600px]  h-0'} ${scrollDown ? 'bg-tertiary text-[#000000] shadow-md bg-opacity-90' : 'bg-white'}`}>
                        {toggelTab && (
                            <ul className="flex flex-col space-x-7">
                                {resMenu.map((item: any, index: any) => (
                                    <div key={index} className={`mb- pb-2 px-2 `}>
                                        <div
                                            className='flex justify-between items-center cursor-pointer transition-all duration-500 pb-2'
                                            onClick={() => toggleMenu(item.id)}
                                        >
                                            <h3 className='font-semibold'>{item.heading}</h3>
                                            <span className={`text-xl transition-all duration-300 ${resNav === item.id ? ' rotate-180' : ''}`}><IoMdArrowDropdown /></span>

                                        </div>
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ${resNav === item.id ? 'max-h-[300px]' : 'max-h-0'
                                                }`}
                                        >
                                            {item.category.map((innerCat: any, idx: any) => (
                                                <Link href={innerCat.url} key={idx}> <p className='text-sm pb-2 cursor-pointer'>{innerCat.catOne}</p> </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div>
                                    <Link href={'/buying-guide'}> <p className='font-semibold pb-4 px-2'>Buying Guide</p> </Link>
                                    <Link href={'/blogs'}> <p className='font-semibold pb-4 px-2'>Blogs</p> </Link>
                                    <Link href={'/about-us'}> <p className='font-semibold pb-4 px-2'>About Us</p> </Link>
                                </div>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;

const links = [

    {
        mainLink: 'Lips',
        url: '/lips',
        makeUp: false,
        innerLink: [
            { link: 'Lip Gloss', url: '/lips/lipstick' },
            { link: 'Lip liner', url: '/lips/lipgloss' },
            { link: 'Lipstick', url: '/lips/lipliner' },
        ],
    },
    {
        mainLink: 'Eyes',
        url: '/eyes',
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
        url: '/',
        makeUp: true,
        innerMakeUp: [
            {
                heading: 'Lips',
                url: '/lips',
                lipsInner: [
                    { link: 'Lipstick', url: '/lips/lipstick' },
                    { link: 'Lip Gloss', url: '/lips/lipgloss' },
                    { link: 'Lip liner', url: '/lips/lipliner' },
                    { link: 'Lip Balm', url: '/lips/lipbalm' },
                    { link: 'Lip Stain', url: '/lips/lipstain' },
                    { link: 'Lip Mask', url: '/lips/lipmask' },
                ]
            },
            {
                heading: 'Eyes',
                url: '/eyes',
                lipsInner: [
                    { link: 'Eyeliner', url: '/eyes/eyeliner' },
                    { link: 'Mascara', url: '/eyes/mascara' },
                    { link: 'Kajal', url: '/eyes/kajal' },
                    { link: 'Eye Shadow', url: '/eyes/eye-Shadow' },
                    { link: 'Eye Primer', url: '/eyes/eye-primers' },
                    { link: 'Eyelash Extensions', url: '/eyes/eyelash-extensions' },
                    { link: 'Eye Glitter', url: '/eyes/eye-glitter' },
                    { link: 'Eye Concealer', url: '/eyes/eye-concealer' },
                ]
            },
            {
                heading: 'Hairs',
                url: '/hairs',
                lipsInner: [
                    { link: 'Hair Styles', url: '/hairs/hair-styles' },
                    { link: 'Shampoo and Conditioner', url: '/hairs/shampoo-and-conditioner' },
                    { link: 'Hair Treatments', url: '/hairs/hair-treatments' },
                    { link: 'Hair Care Routines', url: '/hairs/hair-care-routines' },
                    { link: 'Hair Oils', url: '/hairs/hair-oils' },
                    { link: 'Hair Serums', url: '/hairs/hair-serums' },
                    { link: `Men's Hair Care`, url: '/hairs/men-hair-care' },
                    { link: `Women's Hair Care`, url: '/hairs/women-hair-care' },
                ]
            },
            {
                heading: 'Foundation',
                url: '/foundation',
                lipsInner: [
                    { link: 'Liquid Foundation', url: '/foundation/liquid-foundation' },
                    { link: 'Serum Foundation', url: '/foundation/serum-foundation' },
                    { link: 'Cream Foundation', url: '/foundation/cream-foundation' },
                    { link: 'Stick Foundation', url: '/foundation/stick-foundation' },
                    { link: 'Powder Foundation', url: '/foundation/powder-foundation' },
                ]
            },
            {
                heading: 'Skin Care',
                url: '/skincare',
                lipsInner: [
                    { link: 'Cleanser', url: '/skincare/cleanser' },
                    { link: 'Moisturizer', url: '/skincare/moisturizer' },
                    { link: 'Sunscreen', url: '/skincare/sunscreen' },
                    { link: 'Serums', url: '/skincare/serums' },
                    { link: 'Toners', url: '/skincare/toners' },
                    { link: 'Masks', url: '/skincare/Masks' },
                ]
            },
            {
                heading: 'Nail Care ',
                url: '/nailcare',
                lipsInner: [
                    { link: 'Nail Polish', url: '/nailcare/nail-polish' },
                    { link: 'Base Coat', url: '/nailcare/base-coat' },
                    { link: 'Top Coat', url: '/nailcare/top-coat' },
                    { link: 'Nail File', url: '/nailcare/nail-file' },
                    { link: 'Cuticle Oil', url: '/nailcare/cuticle-Oil' },
                    { link: 'Nail Strengthener', url: '/nailcare/nail-strengthener' },
                    { link: 'Nail Hygiene', url: '/nailcare/nail-hygiene' },
                ]
            },
            {
                heading: 'Makeup Tools ',
                url: '/makeuptools',
                lipsInner: [
                    { link: 'Brushes', url: '/makeuptools/brushes' },
                    { link: 'Beauty Blender', url: '/makeuptools/beauty-blender' },
                    { link: 'Makeup  Mirrors', url: '/makeuptools/makeup-mirrors' },
                    { link: 'Eyelash Curler', url: '/makeuptools/eyelash-curler' },
                    { link: 'Makeup Bag', url: '/makeuptools/makeup-bag' },
                ]
            },
        ]
    },
    {
        mainLink: 'Makeup Eraser',
        url: '/',
        makeUp: false,

    },
    {
        mainLink: 'Makeup Tutorials',
        url: '/blogs',
        innerLink: [
            {
                link: 'Eye Makeup Tutorials',
                url: '/makeup-tutorials/eye-makeup-tutorials'
            },
            {
                link: 'Face Makeup Tutorials',
                url: '/makeup-tutorials/face-makeup-tutorials'
            },
            {
                link: 'Lip Makeup Tutorials',
                url: '/makeup-tutorials/lip-makeup-tutorials'
            },
            {
                link: 'Makeup Trends',
                url: '/makeup-tutorials/makeup-trends'
            },
        ],
    },
    {
        mainLink: 'Buying Guide',
        url: '/',
        makeUp: false,

    },
    {
        mainLink: 'Blogs',
        url: '/',
        makeUp: false,

    },
    {
        mainLink: 'About',
        url: '/',
        makeUp: false,

    },
    {
        mainLink: 'Contact Us',
        url: '/',
        makeUp: false,

    },
];




const resMenu = [
    {
        id: 1,
        heading: 'All Makeup',
        category: [
            {
                catOne: 'Lips',
                url: '/lips'
            },
            {
                catOne: 'Eyes',
                url: '/eyes'
            },
            {
                catOne: 'Foundation',
                url: '/foundation'
            },
            {
                catOne: 'Skin Care',
                url: '/skincare'
            },
            {
                catOne: 'NailCare',
                url: '/nailcare'
            },
            {
                catOne: 'Makeup Tools',
                url: '/makeuptools'
            },
        ]
    },
    {
        id: 2,
        heading: 'Lips',
        category: [
            {
                catOne: 'Lipstick',
                url: '/lips/lipstick'
            },
            {
                catOne: 'Lip Gloss',
                url: '/lips/lipgloss'
            },
            {
                catOne: 'Lip liner',
                url: '/lips/lipliner'
            },
            {
                catOne: 'Lip Balm',
                url: '/lips/lipbalm'
            },
            {
                catOne: 'Lip Stain',
                url: '/lips/lipstain'
            },
            {
                catOne: 'Lip Mask',
                url: '/lips/lipmask'
            },
        ]
    },
    {
        id: 3,
        heading: 'Hairs',
        category: [
            {
                catOne: 'Hair Styles',
                url: '/hairs/hair-styles'
            },
            {
                catOne: 'Shampoo and Conditioner',
                url: '/hairs/shampoo-and-conditioner'
            },
            {
                catOne: 'Hair Treatments',
                url: '/hairs/hair-treatments'
            },
            {
                catOne: `Hair Care Routine's`,
                url: '/hairs/hair-care-routines'
            },
            {
                catOne: 'Hair Oils',
                url: '/hairs/hair-oils'
            },
            {
                catOne: 'Hair Serums',
                url: '/hairs/hair-serums'

            },
            {
                catOne: `Men's Hair Care`,
                url: '/hairs/men-hair-care'
            },
            {
                catOne: `Women's Hair Care`,
                url: '/hairs/women-hair-care'
            },
        ]
    },
    {
        id: 4,
        heading: 'Eyes',
        category: [
            {
                catOne: 'Eyeliner',
                url: '/eyes/eyeliner'
            },
            {
                catOne: 'Mascara',
                url: '/eyes/mascara'
            },
            {
                catOne: 'Kajal',
                url: '/eyes/kajal'
            },
            {
                catOne: 'Eye Shadow',
                url: '/eyes/eye-Shadow'
            },
            {
                catOne: 'Eye Primer',
                url: '/eyes/eye-primers'
            },
            {
                catOne: 'Eyelash Extensions',
                url: '/eyes/eyelash-extensions'
            },
            {
                catOne: 'Eye Glitter',
                url: '/eyes/eye-glitter'
            },
            {
                catOne: 'Eye Concealer',
                url: '/eyes/eye-concealer'
            },
        ]
    },
    {
        id: 5,
        heading: 'Foundation',
        category: [
            {
                catOne: 'Liquid Foundation',
                url: '/foundation/liquid-foundation'
            },
            {
                catOne: 'Serum Foundation',
                url: '/foundation/serum-foundation'
            },
            {
                catOne: 'Cream Foundation',
                url: '/foundation/cream-foundation'
            },
            {
                catOne: 'Stick Foundation',
                url: '/foundation/stick-foundation'
            },
            {
                catOne: 'Powder Foundation',
                url: '/foundation/powder-foundation'
            },
        ]
    },
    {
        id: 6,
        heading: 'Skin Care',
        category: [
            {
                catOne: 'Cleanser',
                url: '/skincare/cleanser'
            },
            {
                catOne: 'Moisturizer',
                url: '/skincare/moisturizer'
            },
            {
                catOne: 'Sunscreen',
                url: '/skincare/sunscreen'
            },
            {
                catOne: 'Serums',
                url: '/skincare/serums'
            },
            {
                catOne: 'Toners',
                url: '/skincare/toners'
            },
            {
                catOne: 'Masks',
                url: '/skincare/Masks'
            },
        ]
    },
    {
        id: 7,
        heading: 'Nail Care',
        category: [
            {
                catOne: 'Nail Polish',
                url: '/nailcare/nail-polish'
            },
            {
                catOne: 'Base Coat',
                url: '/nailcare/base-coat'
            },
            {
                catOne: 'Top Coat',
                url: '/nailcare/top-coat'
            },
            {
                catOne: 'Nail File',
                url: '/nailcare/nail-file'
            },
            {
                catOne: 'Cuticle Oil',
                url: '/nailcare/cuticle-Oil'
            },
            {
                catOne: 'Nail Strengthener',
                url: '/nailcare/nail-strengthener'
            },
            {
                catOne: 'Nail Hygiene',
                url: '/nailcare/nail-hygiene'
            },
        ]
    },
    {
        id: 8,
        heading: 'Makeup Tools',
        category: [
            {
                catOne: 'Brushes',
                url: '/makeuptools/brushes'
            },
            {
                catOne: 'Beauty Blender',
                url: '/makeuptools/beauty-blender'
            },
            {
                catOne: 'Makeup  Mirrors',
                url: '/makeuptools/makeup-mirrors'
            },
            {
                catOne: 'Eyelash Curler',
                url: '/makeuptools/eyelash-curler'
            },
            {
                catOne: 'Makeup Bag',
                url: '/makeuptools/makeup-bag'
            },
        ]
    },
]