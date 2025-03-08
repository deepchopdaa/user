import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const PopularProduct = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, delay: 200, once: false });
        AOS.refresh();
    }, []);
    return (
        <>
            <section className="section-popular-products padding-tb-100" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-30">
                                <div className="cr-banner">
                                    <h2>Popular Products</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et viverra maecenas accumsan lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cr-popular-product">
                                <div className="slick-slide">
                                    <div className="cr-product-card">
                                        <div className="cr-product-image">
                                            <div className="cr-image-inner zoom-image-hover">
                                                <img src="assets/img/product/9.jpg" alt="product-1" />
                                            </div>
                                            <div className="cr-side-view">
                                                <a href="javascript:void(0)" className="wishlist">
                                                    <i className="ri-heart-line" />
                                                </a>
                                                <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                    <i className="ri-eye-line" />
                                                </a>
                                            </div>
                                            <a className="cr-shopping-bag" href="javascript:void(0)">
                                                <i className="ri-shopping-bag-line" />
                                            </a>
                                        </div>
                                        <div className="cr-product-details">
                                            <div className="cr-brand">
                                                <a href="shop-left-sidebar.html">Snacks</a>
                                                <div className="cr-star">
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-line" />
                                                    <p>(4.5)</p>
                                                </div>
                                            </div>
                                            <a href="product-left-sidebar.html" className="title">Best snakes with hazel nut
                                                mix pack 200gm</a>
                                            <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="slick-slide">
                                    <div className="cr-product-card">
                                        <div className="cr-product-image">
                                            <div className="cr-image-inner zoom-image-hover">
                                                <img src="assets/img/product/10.jpg" alt="product-1" />
                                            </div>
                                            <div className="cr-side-view">
                                                <a href="javascript:void(0)" className="wishlist">
                                                    <i className="ri-heart-line" />
                                                </a>
                                                <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                    <i className="ri-eye-line" />
                                                </a>
                                            </div>
                                            <a className="cr-shopping-bag" href="javascript:void(0)">
                                                <i className="ri-shopping-bag-line" />
                                            </a>
                                        </div>
                                        <div className="cr-product-details">
                                            <div className="cr-brand">
                                                <a href="shop-left-sidebar.html">Snacks</a>
                                                <div className="cr-star">
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <p>(5.0)</p>
                                                </div>
                                            </div>
                                            <a href="product-left-sidebar.html" className="title">Sweet snakes crunchy nut
                                                mix 250gm
                                                pack</a>
                                            <p className="cr-price"><span className="new-price">$100.00</span> <span className="old-price">$110.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="slick-slide">
                                    <div className="cr-product-card">
                                        <div className="cr-product-image">
                                            <div className="cr-image-inner zoom-image-hover">
                                                <img src="assets/img/product/1.jpg" alt="product-1" />
                                            </div>
                                            <div className="cr-side-view">
                                                <a href="javascript:void(0)" className="wishlist">
                                                    <i className="ri-heart-line" />
                                                </a>
                                                <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                    <i className="ri-eye-line" />
                                                </a>
                                            </div>
                                            <a className="cr-shopping-bag" href="javascript:void(0)">
                                                <i className="ri-shopping-bag-line" />
                                            </a>
                                        </div>
                                        <div className="cr-product-details">
                                            <div className="cr-brand">
                                                <a href="shop-left-sidebar.html">Snacks</a>
                                                <div className="cr-star">
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-line" />
                                                    <p>(4.5)</p>
                                                </div>
                                            </div>
                                            <a href="product-left-sidebar.html" className="title">Best snakes with hazel nut
                                                mix pack 200gm</a>
                                            <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="slick-slide">
                                    <div className="cr-product-card">
                                        <div className="cr-product-image">
                                            <div className="cr-image-inner zoom-image-hover">
                                                <img src="assets/img/product/2.jpg" alt="product-1" />
                                            </div>
                                            <div className="cr-side-view">
                                                <a href="javascript:void(0)" className="wishlist">
                                                    <i className="ri-heart-line" />
                                                </a>
                                                <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                    <i className="ri-eye-line" />
                                                </a>
                                            </div>
                                            <a className="cr-shopping-bag" href="javascript:void(0)">
                                                <i className="ri-shopping-bag-line" />
                                            </a>
                                        </div>
                                        <div className="cr-product-details">
                                            <div className="cr-brand">
                                                <a href="shop-left-sidebar.html">Snacks</a>
                                                <div className="cr-star">
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <p>(5.0)</p>
                                                </div>
                                            </div>
                                            <a href="product-left-sidebar.html" className="title">Sweet snakes crunchy nut
                                                mix 250gm
                                                pack</a>
                                            <p className="cr-price"><span className="new-price">$100.00</span> <span className="old-price">$110.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="slick-slide">
                                    <div className="cr-product-card">
                                        <div className="cr-product-image">
                                            <div className="cr-image-inner zoom-image-hover">
                                                <img src="assets/img/product/3.jpg" alt="product-1" />
                                            </div>
                                            <div className="cr-side-view">
                                                <a href="javascript:void(0)" className="wishlist">
                                                    <i className="ri-heart-line" />
                                                </a>
                                                <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                    <i className="ri-eye-line" />
                                                </a>
                                            </div>
                                            <a className="cr-shopping-bag" href="javascript:void(0)">
                                                <i className="ri-shopping-bag-line" />
                                            </a>
                                        </div>
                                        <div className="cr-product-details">
                                            <div className="cr-brand">
                                                <a href="shop-left-sidebar.html">Snacks</a>
                                                <div className="cr-star">
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <p>(5.0)</p>
                                                </div>
                                            </div>
                                            <a href="product-left-sidebar.html" className="title">Sweet snakes crunchy nut
                                                mix 250gm
                                                pack</a>
                                            <p className="cr-price"><span className="new-price">$100.00</span> <span className="old-price">$110.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularProduct
