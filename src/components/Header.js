import React, { useState } from 'react'
import { FaHeartbeat, FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

import { useLocation } from "react-router-dom";

import { Link } from 'react-router-dom'

const Header = () => {
    const [openSidebar, setOpenSidebar] = useState();
    const { pathname } = useLocation()

    const nav = [
        {
            label: "Home",
            link: '/',
        },
        {
            label: "Service",
            link: '/service',
        },
        {
            label: "About",
            link: '/about',
        },
        {
            label: "Doctor",
            link: '/doctor',
        },
        {
            label: "Book",
            link: '/book',
        },
        {
            label: "Review",
            link: '/review',
        },
        {
            label: "Blog",
            link: '/blog',
        },


    ]
    return (
        <>
            <div className='header'>
                <div className='wrapper app-width'>
                    <div className='ls'>
                        <Link to="" className='logo'><FaHeartbeat />Medcare.</Link>
                    </div>
                    <div className='rs'>
                        <ul>
                            {nav.map((item) => (
                                <Link to={item.link} className={`link ${pathname === item.link ? "active" : ""}`}>
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                            {/* <Link to='' className='link'>Home</Link> */}
                            {/* <Link to='/service' className='link'>Services</Link> */}
                            {/* <Link to='/about' className='link'>About </Link> */}
                            {/* <Link to='/doctor' className='link'>Doctors </Link> */}
                            {/* <Link to='/book' className='link'>Book</Link> */}
                            {/* <Link to='/review' className='link'>Review</Link> */}
                            {/* <Link to='/blog' className='link'>Blogs</Link> */}
                        </ul>
                        <div className='menu_icon' onClick={() => setOpenSidebar(true)}>
                            <FaBars />
                        </div>
                    </div>
                </div>
            </div>

            {/* sidebar */}

            <div className={`sidebar ${openSidebar ? 'open' : "close"}`} >
                <button className='close-btn' onClick={() => setOpenSidebar(false)}><CgClose /></button>
                <div className='navbar'>

                    {nav.map((item) => (
                        <Link to={item.link} className={`link ${pathname === item.link ? "active" : ""}`}>
                            <span onClick={() => setOpenSidebar(false)}>{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Header
