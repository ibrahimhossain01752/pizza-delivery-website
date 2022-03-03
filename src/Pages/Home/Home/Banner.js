import React from 'react';
import './Banner.css';
import banner from './../../../images/banner-pizza.jpg';

const Banner = () => {
    return (
        <div className="banner-main">
            <div className="banner-overlay">
                <div className="container col-md-12 col-sm-6">
                    <div className="row">
                        <div className="col-lg-6">
                           <div className="banner-content text-center text-md-start banner1 ">
                                <h1 className="banner-title">Sweet And Spicy <span className="inline">Pepporoni</span></h1>
                                <p className="text">100% Gras-fed beef party, cheddar chese, special sause, <span className="inline">tomato, pickless, lettuce, sessume seed bun</span></p>
                           </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content text-center text-md-start banner">
                            <img src={banner} className="banner" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;