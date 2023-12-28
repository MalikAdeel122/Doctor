import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
    return (
        <>
            <div className='about'>
                <div className='heading_about'>
                    <h1><span>ABOUT</span> US</h1>
                </div>
                <div className='wrapper app-width'>
                    <div className='ls'>
                        <div className='about_img'>
                            <img src='./img/about-img.svg'></img>
                        </div>
                    </div>
                    <div className='rs'>
                        <div className='about_text'>
                            <h1>We Take Care Of Your Healthy Life</h1>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Iure Ducimus, Quod Ex Cupiditate Ullam In Assumenda Maiores Et Culpa Odit Tempora Ipsam Qui, Quisquam Quis Facere Iste Fuga, Minus Nesciunt.<br />
                                <br />
                                Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Natus Vero Ipsam Laborum Porro Voluptates Voluptatibus A Nihil Temporibus Deserunt Vel</p>
                            <button className='btn' action=''> Learn more  <MdKeyboardArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
