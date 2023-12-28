import React from 'react'

const Book = () => {
    return (
        <>
            <div className='book'>
                <div className='heading_name'>
                    <h1><span>BOOK</span> NOW</h1>
                </div>
                <div className='wrapper app-width'>
                    <div className='ls'>
                        <div className='book_img'>
                            <img src='./img/book-img.svg'></img>
                        </div>
                    </div>
                    <div className='rs'>
                        <div className='book_form'>
                            <h1>Book Appointment</h1>
                            <div className='book_input'>
                                <input type='text' placeholder='text' name='text'></input>
                            </div>

                            <div className='book_input'>
                                <input type='text' placeholder='your name' name='text' maxLength={11}></input>
                            </div>

                            <div className='book_input'>
                                <input type='number' placeholder='your number' name='number' required></input>
                            </div>

                            <div className='book_input'>
                                <input type='email' placeholder='your email' name='email'></input>
                            </div>
                            <div className='book_input'>
                                <input type='date' name='date'></input>
                            </div>
                            <div className='submit_btn'>
                                <input type="submit" value="book now" class="btn"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book
