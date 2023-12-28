import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'

const Review = () => {
    return (
        <>
            <div className='review'>
                <div className='heading_name'>
                    <h1>CLIENT'S <span>REVIEW</span></h1>
                </div>
                <div className='wrapper app-width'>
                    <div className='container'>
                        <div className='box'>
                            <div className='review_img'>
                                <img src='./img/pic-1.png'></img>
                            </div>
                            <h1>John Deo</h1>
                            <div className='star_icon'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                            <p className='par'>
                                Lorem Ipsum Dolor Sit Amet
                                Consectetur Adipisicing Elit. Laboriosam Sapiente
                                Nihil Aperiam? Repellat Sequi Nisi Aliquid Perspiciatis
                                Libero Nobis Rem Numquam Nesciunt Alias Sapiente Minus
                                Voluptatem, Reiciendis Consequuntur Optio Dolorem!</p>
                        </div>
                        <div className='box'>
                            <div className='review_img'>
                                <img src='./img/pic-2.png'></img>
                            </div>
                            <h1>John Deo</h1>
                            <div className='star_icon'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                            <p className='par'>
                                Lorem Ipsum Dolor Sit Amet
                                Consectetur Adipisicing Elit. Laboriosam Sapiente
                                Nihil Aperiam? Repellat Sequi Nisi Aliquid Perspiciatis
                                Libero Nobis Rem Numquam Nesciunt Alias Sapiente Minus
                                Voluptatem, Reiciendis Consequuntur Optio Dolorem!</p>
                        </div>

                        <div className='box'>
                            <div className='review_img'>
                                <img src='./img/pic-3.png'></img>
                            </div>
                            <h1>John Deo</h1>
                            <div className='star_icon'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                            <p className='par'>
                                Lorem Ipsum Dolor Sit Amet
                                Consectetur Adipisicing Elit. Laboriosam Sapiente
                                Nihil Aperiam? Repellat Sequi Nisi Aliquid Perspiciatis
                                Libero Nobis Rem Numquam Nesciunt Alias Sapiente Minus
                                Voluptatem, Reiciendis Consequuntur Optio Dolorem!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
