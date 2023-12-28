import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Doctor = () => {
    return (
        <>
            <div className='doctor'>
                <div className='heading_name'>
                    <h1>OUR <span>DOCTORS</span></h1>
                </div>
                <div className='wrapper app-width'>
                    <div className='container'>
                        <div className='box'>
                            <div className="doc_img">
                                <img src='./img/doc-1.jpg'></img>
                            </div>
                            <h1>John Deo</h1>
                            <p>Expert Doctor</p>
                            <div className='doc_icons'>
                                <Link to='' className='link_social'><FaFacebookF /></Link>
                                <Link to='' className='link_social'><FaTwitter /></Link>
                                <Link to='' className='link_social'><FaInstagram /></Link>
                                <Link to='' className='link_social'><FaLinkedinIn /></Link>
                            </div>
                        </div>
                        <div className='box'>
                            <div className="doc_img">
                                <img src='./img/doc-2.jpg'></img>
                            </div>
                            <h1>John Deo</h1>
                            <p>Expert Doctor</p>
                            <div className='doc_icons'>
                                <Link to='' className='link_social'><FaFacebookF /></Link>
                                <Link to='' className='link_social'><FaTwitter /></Link>
                                <Link to='' className='link_social'><FaInstagram /></Link>
                                <Link to='' className='link_social'><FaLinkedinIn /></Link>
                            </div>
                        </div>
                        <div className='box'>
                            <div className="doc_img">
                                <img src='./img/doc-3.jpg'></img>
                            </div>
                            <h1>John Deo</h1>
                            <p>Expert Doctor</p>
                            <div className='doc_icons'>
                                <Link to='' className='link_social'><FaFacebookF /></Link>
                                <Link to='' className='link_social'><FaTwitter /></Link>
                                <Link to='' className='link_social'><FaInstagram /></Link>
                                <Link to='' className='link_social'><FaLinkedinIn /></Link>
                            </div>
                        </div>
                        <div className='box'>
                            <div className="doc_img">
                                <img src='./img/doc-4.jpg'></img>
                            </div>
                            <h1>John Deo</h1>
                            <p>Expert Doctor</p>
                            <div className='doc_icons'>
                                <Link to='' className='link_social'><FaFacebookF /></Link>
                                <Link to='' className='link_social'><FaTwitter /></Link>
                                <Link to='' className='link_social'><FaInstagram /></Link>
                                <Link to='' className='link_social'><FaLinkedinIn /></Link>
                            </div>
                        </div>
                        <div className='box'>
                            <div className="doc_img">
                                <img src='./img/doc-5.jpg'></img>
                            </div>
                            <h1>John Deo</h1>
                            <p>Expert Doctor</p>
                            <div className='doc_icons'>
                                <Link to='' className='link_social'><FaFacebookF /></Link>
                                <Link to='' className='link_social'><FaTwitter /></Link>
                                <Link to='' className='link_social'><FaInstagram /></Link>
                                <Link to='' className='link_social'><FaLinkedinIn /></Link>
                            </div>
                        </div>
                        <div className='box'>
                            <div className="doc_img">
                                <img src='./img/doc-6.jpg'></img>
                            </div>
                            <h1>John Deo</h1>
                            <p>Expert Doctor</p>
                            <div className='doc_icons'>
                                <Link to='' className='link_social'><FaFacebookF /></Link>
                                <Link to='' className='link_social'><FaTwitter /></Link>
                                <Link to='' className='link_social'><FaInstagram /></Link>
                                <Link to='' className='link_social'><FaLinkedinIn /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doctor
