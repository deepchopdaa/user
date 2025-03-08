import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PopularProduct = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, delay: 200, once: false });
        AOS.refresh();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="section-popular-products padding-tb-100" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-30">
                            <div className="cr-banner">
                                <h2>Popular Products</h2>
                            </div>
                            <div className="cr-banner-sub-title">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className="cr-product-card">
                        <div className="cr-product-image">
                            <div className="cr-image-inner zoom-image-hover">
                                <img src={require('../img/product/9.jpg')} alt="product-1" />
                            </div>
                        </div>
                        <div className="cr-product-details">
                            <a href="product-left-sidebar.html" className="title">Best Snacks with Hazelnut Mix</a>
                            <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                        </div>
                    </div>
                    <div className="cr-product-card">
                        <div className="cr-product-image">
                            <div className="cr-image-inner zoom-image-hover">
                                <img src={require('../img/product/10.jpg')} alt="product-2" />
                            </div>
                        </div>
                        <div className="cr-product-details">
                            <a href="product-left-sidebar.html" className="title">Sweet Snacks Crunchy Nut Mix</a>
                            <p className="cr-price"><span className="new-price">$100.00</span> <span className="old-price">$110.00</span></p>
                        </div>
                    </div>
                    <div className="cr-product-card">
                        <div className="cr-product-image">
                            <div className="cr-image-inner zoom-image-hover">
                                <img src={require('../img/product/1.jpg')} alt="product-3" />
                            </div>
                        </div>
                        <div className="cr-product-details">
                            <a href="product-left-sidebar.html" className="title">Crunchy Chocolate Almond Mix</a>
                            <p className="cr-price"><span className="new-price">$90.00</span> <span className="old-price">$100.00</span></p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default PopularProduct;
