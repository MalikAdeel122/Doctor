import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaUserMd, FaUsers, FaProcedures, FaHospital } from "react-icons/fa";
const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='wrapper app-width'>
                    <div className="ls">
                        <div className='home_img'>
                            <img src='./img/home-img.svg'></img>
                        </div>


                    </div>
                    <div className="rs">

                        <div className="home_text">
                            <h1>Stay Safe, Stay Healthy</h1>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Rem Sed Autem Vero?
                                Magnam, Est Laboriosam!</p>
                            <button className='btn' action=''>contact us <MdKeyboardArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div >
            {/* Available */}
            <div className='Available'>
                <div className='wrapper app-width'>
                    <div className='container'>
                        <div className='box'>
                            <span className='icon'><FaUserMd /></span>
                            <h1>140+</h1>
                            <p>Doctors At Work</p>
                        </div>
                        <div className='box'>
                            <span className='icon'><FaUsers /></span>
                            <h1>1040+</h1>
                            <p>Satisfied Patients</p>
                        </div>
                        <div className='box'>
                            <span className='icon'><FaProcedures /></span>
                            <h1>500+</h1>
                            <p>Bed Facility</p>
                        </div>
                        <div className='box'>
                            <span className='icon'><FaHospital /></span>
                            <h1>80+</h1>
                            <p>Available Hospitals</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
