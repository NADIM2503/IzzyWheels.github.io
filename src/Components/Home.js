import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";



const Home = () => {
    return (
        <>
            <div>
                <div className="container-fluid entry ">
                    <div className="container  text-center">
                        <NavLink to="/Store" className={'nav-link'}>
                            <button className="btn shopbutton classbut rounded-0">SHOP NOW</button></NavLink></div>

                    <p className="homeline text-center ">IF YOU CAN'T <br />STAND UP,<br />STAND OUT!</p>
                    <img className="disneyimg" src="https://static.wixstatic.com/media/38036e_67b3989945514457a59b6558b9162dea~mv2.png/v1/fill/w_217,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Disney-x-Izzy---Web-Logo.png" />
                </div>

                {/* the rolling images section */}


                <div >
                    <div className="container headof4">
                        <div className="row image-inside rotates">

                            <div className="col-md-3 column img">
                                <img className="roll-img " src="https://static.wixstatic.com/media/38036e_ccc2a30ae87f4964ade95d5833da96c3~mv2.jpg/v1/fill/w_330,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Star-Wars-Stripes.jpg" />
                            </div>

                            <div className=" col-md-3 column img">
                                <img className="roll-img " src="https://static.wixstatic.com/media/38036e_ca4061f580d044538c9d591bc449dbdf~mv2.jpg/v1/fill/w_332,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Nightmare-Before-Christmas.jpg" />
                            </div>

                            <div className=" col-md-3 column img">
                                <img className="roll-img " src="https://static.wixstatic.com/media/38036e_c03a7f2002274e228871c0d0fd591963~mv2.jpg/v1/fill/w_332,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Encanto-Birds.jpg" />
                            </div>

                            <div className="col-md-3 column img">
                                <img className="roll-img" src="https://static.wixstatic.com/media/38036e_a41238ab1c6d4aefaf3f7fefb8c0a10f~mv2.jpg/v1/crop/x_0,y_1,w_1200,h_1189/fill/w_333,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Stitch%20Pink.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="container text-center ">
                        <NavLink to="/Store" className={'nav-link'}>
                            <button className="btn shopbutton rounded-0">SHOP NOW</button>
                        </NavLink></div>
                    <div className="blank"></div>
                </div>



                {/* 2 images and 1 text column section after the rolling images */}
                <div className="container-fluid">
                    <div className="row  mt-1 sections">

                        <div className="col-md-4 col-lg-4 col-sm-12 single-section">
                            <img className="sideImg " src="https://static.wixstatic.com/media/38036e_0c47a3c607164422bf38969cd6c49468~mv2.jpg/v1/fill/w_505,h_807,al_c,q_85,enc_auto/38036e_0c47a3c607164422bf38969cd6c49468~mv2.jpg" />
                        </div>

                        <div className="divfor3 col-md-4 col-lg-4 col-sm-12 single-section">

                            <div className="">
                                <img className="disney mt-5" src="https://static.wixstatic.com/media/38036e_67b3989945514457a59b6558b9162dea~mv2.png/v1/fill/w_320,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Disney-x-Izzy---Web-Logo.png" />
                            </div>

                            <div>
                                <p className="para1 text-center m-3">
                                    IZZY WHEELS HAS JOINED FORCES WITH DISNEY TO LAUNCH A MAGICAL COLLECTION OF FASHIONABLE WHEEL COVERS FOR WHEELCHAIRS INCLUDING CHARACTERS FROM DISNEY, MARVEL & STAR WARS!</p>
                            </div>

                                <div className="container text-center mt-5">
                            <NavLink to="/Store" className={'nav-link'}>
                                    <div className="button3  btn shopbutton rounded-0">SHOP NOW</div>
                                    </NavLink></div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 single-section">
                            <img className="sideImg " src="https://static.wixstatic.com/media/38036e_bb0bc8832cf648b08ed6358522161fb3~mv2.jpg/v1/fill/w_631,h_1025,al_c,q_85,enc_auto/38036e_bb0bc8832cf648b08ed6358522161fb3~mv2.jpg" />
                        </div>
                    </div>
                </div>

                {/* <div className="blank"></div> */}


                <div className="container-fluid entry2">
                    <div className="container  text-center">
                        <NavLink to="/Store" className={'nav-link'}>
                            <button className="button4 btn shopbutton rounded-0">SEE COLLECTIONS
                            </button></NavLink></div>
                </div>

                {/* single text line */}
                <div className="weship grid-container ">
                    <div className="col-12 grid-item world">
                        <p className="world-para ">WE SHIP WORLDWIDE!</p>
                    </div>
                </div>
                <br />



                {/* three images with text */}
                <div className="container-fluid">
                    <div className="photo3 row text-center">

                        <div className="col-md-4 col-lg-4 col-sm-12 ">
                            <img className="photo its1" src="https://static.wixstatic.com/media/38036e_4d10af3f69cf430c985958468cb3d9c8~mv2.jpg/v1/fill/w_630,h_872,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/38036e_4d10af3f69cf430c985958468cb3d9c8~mv2.jpg" />
                            <div className="font">AWARD-WINNING DESIGNER <br /> WHEEL COVERS</div>
                        </div>


                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <img className="photo  its2" src="https://static.wixstatic.com/media/38036e_0a069082f804414194bd7afeb64a3665~mv2.jpg/v1/fill/w_633,h_872,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/38036e_0a069082f804414194bd7afeb64a3665~mv2.jpg" />
                            <p className="font">CREATED BY WORLD FAMOUS <br />ARTISTS & FASHION DESIGNERS</p>
                        </div>


                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <img className="photo  its3" src="https://static.wixstatic.com/media/38036e_fe6dd0c9e9d6435c87d72f71e65bb997~mv2.jpg/v1/fill/w_633,h_872,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/38036e_fe6dd0c9e9d6435c87d72f71e65bb997~mv2.jpg" />
                            <p className="font text-center">TRANSFORM YOUR WHEELCHAIR <br /> INTO A PIECE OF FASHION</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row box">
                        <div className="text-box col-7 ">
                            <p className="last-line"> IF YOU CAN'T  STAND UP,<br />STAND OUT! </p>
                        </div>
                        <div className="follow-box col-2 ">
                            <p className="follow-line centered"> FOLLOW US ON</p>
                        </div>
                        <div className="col-3 logo-box ">
                            <img className="logo" src="https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0678ef25486466ba65ef6ad47b559e1.png" />
                            <img className="logo" src="https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da7ef6dd1302486c9a67baebe4b364bc.png" />
                            <img className="logo" src="https://static.wixstatic.com/media/c4392d634a0148fda8b7b2b0ad98293b.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c4392d634a0148fda8b7b2b0ad98293b.png" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;