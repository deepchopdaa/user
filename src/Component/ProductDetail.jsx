import React, { useEffect, useState } from 'react'
import PopularProduct from './PopularProduct'
import Footer from './Footer'
import Header from './Header'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [gamedetail,setgamedetail] = useState(null);
    const id = useParams();
    console.log(id.id)
    useEffect(() => {
        const Detail = async () => {
           axios.get(`http://localhost:3100/userpenel/productDetail/${id.id}`,{
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }   
        }).then((detail)=>{
            setgamedetail(detail.data)
            console.log(detail.data)
        }).catch((e)=>{
            console.log('Product Detail Not Found',e)
        })
        }
        Detail()
    },[])
    return (
        <>
            <Header />
            <div>
                <section className="section-breadcrumb">
                    <div className="cr-breadcrumb-image">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cr-breadcrumb-title">
                                        <h2>Product</h2>
                                        <span> <a href="index.html">Home</a> - product</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Product */}
                <section className="section-product padding-t-100">
                    <div className="container">
                        <div className="row mb-minus-24" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={600}>
                            <div className="col-xxl-4 col-xl-5 col-md-6 col-12 mb-24">
                                <div className="vehicle-detail-banner banner-content clearfix">
                                    <div className="banner-slider">
                                        <div className="slider slider-for">
                                            <div className="slider-banner-image">
                                                <div className="zoom-image-hover">
                                                    <img src={require('../img/product/9.jpg')} alt="product-tab-1" className="product-image" />
                                                    {/* <img src="assets/img/" alt="product-tab-1" className="product-image" /> */}
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-8 col-xl-7 col-md-6 col-12 mb-24">
                                <div className="cr-size-and-weight-contain">
                                    <h2 className="heading">Better Munch - Sweet Crunchy Nut Mix - Roasted Almonds, Dried Dates and Coconuts.</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sequi unde libero ea
                                        odio aperiam ex alias quod? Tempora, magnam? Reprehenderit incidunt repudiandae officia eius
                                        a ullam. Recusandae quia aliquid ratione est quis voluptatibus magni porro a.
                                        Necessitatibus, tenetur ducimus.</p>
                                </div>
                                <div className="cr-size-and-weight">
                                    <div className="cr-review-star">
                                        <div className="cr-star">
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                        </div>
                                        <p>( 75 Review )</p>
                                    </div>
                                    <div className="list">
                                        <ul>
                                            <li><label>Brand <span>:</span></label>ESTA BETTERU CO</li>
                                            <li><label>Flavour <span>:</span></label>Super Saver Pack</li>
                                            <li><label>Diet Type <span>:</span></label>Vegetarian</li>
                                            <li><label>Weight <span>:</span></label>200 Grams</li>
                                            <li><label>Speciality <span>:</span></label>Gluten Free, Sugar Free</li>
                                            <li><label>Info <span>:</span></label>Egg Free, Allergen-Free</li>
                                            <li><label>Items <span>:</span></label>1</li>
                                        </ul>
                                    </div>
                                    <div className="cr-product-price">
                                        <span className="new-price">$120.25</span>
                                        <span className="old-price">$123.25</span>
                                    </div>
                                    <div className="cr-size-weight">
                                        <h5><span>Size</span>/<span>Weight</span> :</h5>
                                        <div className="cr-kg">
                                            <ul>
                                                <li className="active-color">50kg</li>
                                                <li>80kg</li>
                                                <li>120kg</li>
                                                <li>200kg</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="cr-add-card">
                                        <div className="cr-qty-main">
                                            <input type="text" placeholder="." defaultValue={1} minLength={1} maxLength={20} className="quantity" />
                                            <button type="button" className="plus">+</button>
                                            <button type="button" className="minus">-</button>
                                        </div>
                                        <div className="cr-add-button">
                                            <button type="button" className="cr-button cr-shopping-bag">Add to cart</button>
                                        </div>
                                        <div className="cr-card-icon">
                                            <a href="javascript:void(0)" className="wishlist">
                                                <i className="ri-heart-line" />
                                            </a>
                                            <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                                <i className="ri-eye-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={600}>
                            <div className="col-12">
                                <div className="cr-paking-delivery">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="additional-tab" data-bs-toggle="tab" data-bs-target="#additional" type="button" role="tab" aria-controls="additional" aria-selected="false">Information</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">Review</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                            <div className="cr-tab-content">
                                                <div className="cr-description">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                                        sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit
                                                        dignissimos consectetur quae in perferendis
                                                        doloribusdebitis corporis, eaque dicta, repellat amet, illum adipisci vel
                                                        perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                                                        ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                                                        laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                                                </div>
                                                <h4 className="heading">Packaging &amp; Delivery</h4>
                                                <div className="cr-description">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                                        perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                                                        ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                                                        laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="additional" role="tabpanel" aria-labelledby="additional-tab">
                                            <div className="cr-tab-content">
                                                <div className="cr-description">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                                        sapiente
                                                        doloribus debitis corporis, eaque dicta, repellat amet, illum adipisci vel
                                                        perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                                                        ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                                                        laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                                                </div>
                                                <div className="list">
                                                    <ul>
                                                        <li><label>Brand <span>:</span></label>ESTA BETTERU CO</li>
                                                        <li><label>Flavour <span>:</span></label>Super Saver Pack</li>
                                                        <li><label>Diet Type <span>:</span></label>Vegetarian</li>
                                                        <li><label>Weight <span>:</span></label>200 Grams</li>
                                                        <li><label>Speciality <span>:</span></label>Gluten Free, Sugar Free</li>
                                                        <li><label>Info <span>:</span></label>Egg Free, Allergen-Free</li>
                                                        <li><label>Items <span>:</span></label>1</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                            <div className="cr-tab-content-from">
                                                <div className="post">
                                                    <div className="content">
                                                        <img src="../img/review/1.jpg" alt="review" />
                                                        <div className="details">
                                                            <span className="date">Jan 08, 2024</span>
                                                            <span className="name">Oreo Noman</span>
                                                        </div>
                                                        <div className="cr-t-review-rating">
                                                            <i className="ri-star-s-fill" />
                                                            <i className="ri-star-s-fill" />
                                                            <i className="ri-star-s-fill" />
                                                            <i className="ri-star-s-fill" />
                                                            <i className="ri-star-s-fill" />
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                                        sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum
                                                        adipisci vel
                                                        perferendis dolor! quae vero in perferendis provident quis.</p>
                                                    <div className="content mt-30">
                                                        <img src="../img/review/2.jpg" alt="review" />
                                                        <div className="details">
                                                            <span className="date">Mar 22, 2024</span>
                                                            <span className="name">Lina Wilson</span>
                                                        </div>
                                                        <div className="cr-t-review-rating">
                                                            <i className="ri-star-s-fill" />
                                                            <i className="ri-star-s-fill" />
                                                            <i className="ri-star-s-fill" />
                                                            <i className="ri-star-s-fill" />
                                                            <i className="ri-star-s-line" />
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                                        sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum
                                                        adipisci vel
                                                        perferendis dolor! quae vero in perferendis provident quis.</p>
                                                </div>
                                                <h4 className="heading">Add a Review</h4>
                                                <form action="javascript:void(0)">
                                                    <div className="cr-ratting-star">
                                                        <span>Your rating :</span>
                                                        <div className="cr-t-review-rating">
                                                            <i className="ri-star-s-fill" />
                                                            <i className="ri-star-s-fill" />
                                                            <i className="ri-star-s-line" />
                                                            <i className="ri-star-s-line" />
                                                            <i className="ri-star-s-line" />
                                                        </div>
                                                    </div>
                                                    <div className="cr-ratting-input">
                                                        <input name="your-name" placeholder="Name" type="text" />
                                                    </div>
                                                    <div className="cr-ratting-input">
                                                        <input name="your-email" placeholder="Email*" type="email" required />
                                                    </div>
                                                    <div className="cr-ratting-input form-submit">
                                                        <textarea name="your-commemt" placeholder="Enter Your Comment" defaultValue={""} />
                                                        <button className="cr-button" type="submit" value="Submit">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <PopularProduct />
            <Footer />
        </>
    )
}

export default ProductDetail
