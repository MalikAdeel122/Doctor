import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

import { FaBriefcaseMedical, FaAmbulance, FaUserMd, FaPills, FaProcedures, FaHeartbeat } from "react-icons/fa";
const Service = () => {
    return (
        <>
            <div className='service'>
                <div className='heading_name'>
                    <h1 >OUR<span>SERVICES</span> </h1>
                </div>
                <div className='wrapper app-width'>
                    <div className='container'>
                        <div className='box'>
                            <span className='service_icon'><FaBriefcaseMedical /></span>
                            <h1>Free Checkups</h1>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                            <button className='btn' action=''> learn more  <MdKeyboardArrowRight /></button>
                        </div>

                        <div className='box'>
                            <span className='service_icon'><FaAmbulance /></span>
                            <h1>24/7 Ambulance</h1>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                            <button className='btn' action=''> learn more  <MdKeyboardArrowRight /></button>
                        </div>

                        <div className='box'>
                            <span className='service_icon'><FaUserMd /></span>
                            <h1>Free Checkups</h1>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                            <button className='btn' action=''> learn more  <MdKeyboardArrowRight /></button>
                        </div>


                        <div className='box'>
                            <span className='service_icon'><FaPills /></span>
                            <h1>Free Checkups</h1>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                            <button className='btn' action=''> learn more  <MdKeyboardArrowRight /></button>
                        </div>


                        <div className='box'>
                            <span className='service_icon'><FaProcedures /></span>
                            <h1>Free Checkups</h1>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                            <button className='btn' action=''> learn more  <MdKeyboardArrowRight /></button>
                        </div>


                        <div className='box'>
                            <span className='service_icon'><FaHeartbeat /></span>
                            <h1>Free Checkups</h1>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                            <button className='btn' action=''> learn more  <MdKeyboardArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
