import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <div className="container-fluid footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 check  mb-4">
                            <ul >
                                <NavLink className={'nav-link'} to={'/Store'}><li> <button className="btn last-button rounded-0">SHOP </button></li></NavLink>
                                <li className="underline "></li>
                                <li className="items ">WHEEL COVER</li>
                                <li className="items ">GIFT VOUCHER</li>

                            </ul>
                        </div>
                        <div className="col-md-3  mb-4">
                            <ul>
                                <li> <button className="btn last-button rounded-0">ABOUT</button></li>
                                <li className="underline "></li>
                                <li className="items ">OUR STORY</li>
                                <li className="items ">PUBLIC SPEAKING</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-4">
                            <ul>
                                <li> <button className="btn last-button rounded-0">HELP</button></li>
                                <li className="underline "></li>
                                <li className="items ">CONTACT US</li>
                                <li className="items ">RETURN</li>
                                <li className="items ">HELP & FAQs</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-4">
                            <ul>
                                <li> <button className="btn last-button rounded-0">COMPANY</button></li>
                                <li className="underline "></li>
                                <li className="items ">SUBSCRIBE</li>
                                <li className="items ">WORK WITH US</li>
                                <li className="items ">PRESS</li>
                            </ul>
                        </div><br/>
                        <div className='col-md-12 text-center container my-5 copyright'>
                            &copy;2022 Izzy Wheels<br/>
                            Designer Wheel Covers<br/>
                            If You Can't Stand Up, Stand Out!<br/>
                            All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer