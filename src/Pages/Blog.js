import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCalendar, FaUser, FaChevronRight, FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <div className='blog'>
                <div className='heading_name'>
                    <h1>OUR <span>BLOGS</span></h1>
                </div>
                <div className='wrapper app-width'>
                    <div className='container'>
                        <div className='box'>
                            <div className='blog_img'>
                                <img src='./img/blog-1.jpg'></img>
                            </div>

                            <div className='blog_date'>
                                <div className="ls">
                                    <span>
                                        <FaCalendar />
                                    </span>
                                    <p>1st May, 2021</p>
                                </div>
                                <div className="rs">
                                    <span><FaUser /></span>
                                    <p>By Admin</p>
                                </div>
                            </div>
                            <h1>Blog Title Goes Here</h1>
                            <p>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius.</p>
                            <button className='btn' action=''> learn more  <MdKeyboardArrowRight /></button>
                        </div>

                        <div className='box'>
                            <div className='blog_img'>
                                <img src='./img/blog-2.jpg'></img>
                            </div>

                            <div className='blog_date'>
                                <div className="ls">
                                    <span>
                                        <FaCalendar />
                                    </span>
                                    <p>1st May, 2021</p>
                                </div>
                                <div className="rs">
                                    <span><FaUser /></span>
                                    <p>By Admin</p>
                                </div>
                            </div>
                            <h1>Blog Title Goes Here</h1>
                            <p>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius.</p>
                            <button className='btn' action=''> learn more  <MdKeyboardArrowRight /></button>
                        </div>

                        <div className='box'>
                            <div className='blog_img'>
                                <img src='./img/blog-3.jpg'></img>
                            </div>

                            <div className='blog_date'>
                                <div className="ls">
                                    <span>
                                        <FaCalendar />
                                    </span>
                                    <p>1st May, 2021</p>
                                </div>
                                <div className="rs">
                                    <span><FaUser /></span>
                                    <p>By Admin</p>
                                </div>
                            </div>
                            <h1>Blog Title Goes Here</h1>
                            <p>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius.</p>
                            <button className='btn' action=''> learn more  <MdKeyboardArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className='footer'>
                <div className='wrapper app-width'>
                    <div className='container'>
                        <div className='box'>
                            <h1>Quick Links</h1>
                            <Link to='' className="footer_link"><span><FaChevronRight /></span>Home</Link>
                            <Link to='' className="footer_link"><span><FaChevronRight /></span>Service</Link>
                            <Link to='' className="footer_link"><span><FaChevronRight /></span>About</Link>
                            <Link to='' className="footer_link"><span><FaChevronRight /></span>Doctors</Link>
                            <Link to='' className="footer_link"><span><FaChevronRight /></span>Book</Link>
                            <Link to='' className="footer_link"><span><FaChevronRight /></span>Review</Link>
                            <Link to='' className="footer_link"><span><FaChevronRight /></span>Blog</Link>
                        </div>

                        <div className='box'>
                            <h1>our services</h1>
                            <Link to='' className="footer_link"><span><FaChevronRight /> </span>dental care </Link>
                            <Link to='' className="footer_link"><span><FaChevronRight /></span> message therapy </Link>
                            <Link to='' className="footer_link"><span><FaChevronRight /></span>cardioloty </Link>
                            <Link to='' className="footer_link"><span><FaChevronRight /></span> diagnosis </Link>
                            <Link to='' className="footer_link"><span><FaChevronRight /></span> ambulance service </Link>
                        </div>

                        <div className='box'>
                            <h1>contact info</h1>
                            <Link to='' className="footer_link"><span><FaPhone /></span> +123-456-7890 </Link>
                            <Link to='' className="footer_link"><span><FaPhone /> </span> +111-222-3333</Link>
                            <Link to='' className="footer_link"><span><FaEnvelope /></span> shaikhanas@gmail.com </Link>
                            <Link to='' className="footer_link"><span><FaEnvelope /></span> anasbhai@gmail.com </Link>
                            <Link to='' className="footer_link"><span><FaMapMarkerAlt /></span> mumbai, india - 400104 </Link>
                        </div>
                        <div className='box'>
                            <h1>contact info</h1>
                            <Link to='' className="footer_link"><span><FaFacebookF /></span>Facebook</Link>
                            <Link to='' className="footer_link"><span><FaTwitter /></span>Twitter</Link>
                            <Link to='' className="footer_link"><span><FaInstagram /></span>Instagram</Link>
                            <Link to='' className="footer_link"><span><FaLinkedinIn /></span>Linkedin</Link>
                            <Link to='' className="footer_link"><span><FaPinterest />  </span>Pinterest</Link>
                        </div>
                    </div>
                    <div className='credit'>
                        <p> created by <span>mr. web designer</span> | all rights reserved </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
