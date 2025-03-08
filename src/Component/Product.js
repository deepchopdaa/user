import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Product = () => {
    const [game, setgame] = useState(null);

    const navigate = useNavigate("/")
    useEffect(async () => {
        await axios.get("http://localhost:3100/game/getUserGame", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((res) => {
            console.log(res.data);
            setgame(res.data)
        }).catch((e) => {
            console.log("Data Feating Error");
        })

    }, [])
    return (
        <>
            <section className="section-popular-product-shape padding-b-100">
                <div className="container" data-aos="fade-up" data-aos-duration={2000}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-30">
                                <div className="cr-banner">
                                    <h2>Popular Products</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-content row mb-minus-24" id="MixItUpDA2FB7">
                        <div className="col-xl-3 col-lg-4 col-12 mb-24">
                            <div className="row mb-minus-24 sticky">
                                <div className="col-lg-12 col-sm-6 col-6 cr-product-box mb-24">
                                    <div className="cr-product-tabs">
                                        <ul>
                                            <li className="active" data-filter="all">All</li>
                                            <li data-filter=".snack">Snack</li>
                                            <li data-filter=".vegetable">Vegetable</li>
                                            <li data-filter=".fruit">Fruit</li>
                                            <li data-filter=".bakery">Bakery</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-6 col-6 cr-product-box banner-480 mb-24">
                                    <div className="cr-ice-cubes">
                                        <img src="assets/img/product/product-banner.jpg" alt="product banner" />
                                        <div className="cr-ice-cubes-contain">
                                            <h4 className="title">Juicy </h4>
                                            <h5 className="sub-title">Fruits</h5>
                                            <span>100% Natural</span>
                                            <a href="shop-left-sidebar.html" className="cr-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-12 mb-24">
                            <div className="row mb-minus-24">
                                {/* mapping game data */}
                                {

                                    game?.map((item) => (

                                        <div className="mix vegetable col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                                            <div className="cr-product-card" key={item._id}>
                                                <div className="cr-product-image">
                                                    <div className="cr-image-inner zoom-image-hover">
                                                        <img src={`http://localhost:3100/${item.image}`} alt="product-1" />
                                                    </div>
                                                    {/* <div className="cr-side-view">
                                                        <a href="javascript:void(0)" className="wishlist">
                                                            <i className="ri-heart-line" />
                                                        </a>
                                                        <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                            <i className="ri-eye-line" />
                                                        </a>
                                                    </div> */}
                                                    {/* <a className="cr-shopping-bag" href="javascript:void(0)">
                                                        <i className="ri-shopping-bag-line" />
                                                    </a> */}
                                                    {/* <Link className="cr-shopping-bag" to='/product'><i className="ri-shopping-bag-line" /></Link> */}
                                                    <p className="cr-shopping-bag" onClick={()=>navigate(`/product/${item._id}`)}><i className="ri-shopping-bag-line" /></p>
                                                </div>

                                                <div className="cr-product-details">
                                                    <div className="cr-brand">
                                                        <a href="shop-left-sidebar.html">{item.title}</a>
                                                        <div className="cr-star">
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-line" />
                                                            <p>(4.5)</p>
                                                        </div>
                                                    </div>
                                                    <a href="product-left-sidebar.html" className="title">{item.description}</a>
                                                    <p className="cr-price"><span className="new-price"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                                    </svg>{item.price}</span> {/* <span className="old-price">$123.25</span> */}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product
