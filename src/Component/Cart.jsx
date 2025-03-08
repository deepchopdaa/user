import React from 'react'
import PopularProduct from './PopularProduct'
import Footer from './Footer'
import Header from './Header'

const Cart = () => {
    return (
        <>
            <Header/>
            <div>
                {/* Breadcrumb */}
                <section className="section-breadcrumb">
                    <div className="cr-breadcrumb-image">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cr-breadcrumb-title">
                                        <h2>Cart</h2>
                                        <span> <a href="index.html">Home</a> / Cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Cart */}
                <section className="section-cart padding-t-100">
                    <div className="container">
                        <div className="row d-none">
                            <div className="col-lg-12">
                                <div className="mb-30" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                                    <div className="cr-banner">
                                        <h2>Cart</h2>
                                    </div>
                                    <div className="cr-banner-sub-title">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore lacus vel facilisis. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="cr-cart-content" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
                                    <div className="row">
                                        <form action="#">
                                            <div className="cr-table-content">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>price</th>
                                                            <th className="text-center">Quantity</th>
                                                            <th>Total</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="cr-cart-name">
                                                                <a href="javascript:void(0)">
                                                                    <img src="assets/img/product/1.jpg" alt="product-1" className="cr-cart-img" />
                                                                    Organic Lemon
                                                                </a>
                                                            </td>
                                                            <td className="cr-cart-price">
                                                                <span className="amount">$56.00</span>
                                                            </td>
                                                            <td className="cr-cart-qty">
                                                                <div className="cart-qty-plus-minus">
                                                                    <button type="button" className="plus">+</button>
                                                                    <input type="text" placeholder="." defaultValue={1} minLength={1} maxLength={20} className="quantity" />
                                                                    <button type="button" className="minus">-</button>
                                                                </div>
                                                            </td>
                                                            <td className="cr-cart-subtotal">$56.00</td>
                                                            <td className="cr-cart-remove">
                                                                <a href="javascript:void(0)">
                                                                    <i className="ri-delete-bin-line" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="cr-cart-name">
                                                                <a href="javascript:void(0)">
                                                                    <img src="assets/img/product/2.jpg" alt="product-1" className="cr-cart-img" />
                                                                    Apple Juice
                                                                </a>
                                                            </td>
                                                            <td className="cr-cart-price">
                                                                <span className="amount">$75.00</span>
                                                            </td>
                                                            <td className="cr-cart-qty">
                                                                <div className="cart-qty-plus-minus">
                                                                    <button type="button" className="plus">+</button>
                                                                    <input type="text" placeholder="." defaultValue={1} minLength={1} maxLength={20} className="quantity" />
                                                                    <button type="button" className="minus">-</button>
                                                                </div>
                                                            </td>
                                                            <td className="cr-cart-subtotal">$75.00</td>
                                                            <td className="cr-cart-remove">
                                                                <a href="javascript:void(0)">
                                                                    <i className="ri-delete-bin-line" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="cr-cart-name">
                                                                <a href="javascript:void(0)">
                                                                    <img src="assets/img/product/3.jpg" alt="product-1" className="cr-cart-img" />
                                                                    Watermelon 5kg Pack
                                                                </a>
                                                            </td>
                                                            <td className="cr-cart-price">
                                                                <span className="amount">$48.00</span>
                                                            </td>
                                                            <td className="cr-cart-qty">
                                                                <div className="cart-qty-plus-minus">
                                                                    <button type="button" className="plus">+</button>
                                                                    <input type="text" placeholder="." defaultValue={1} minLength={1} maxLength={20} className="quantity" />
                                                                    <button type="button" className="minus">-</button>
                                                                </div>
                                                            </td>
                                                            <td className="cr-cart-subtotal">$48.00</td>
                                                            <td className="cr-cart-remove">
                                                                <a href="javascript:void(0)">
                                                                    <i className="ri-delete-bin-line" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="cr-cart-name">
                                                                <a href="javascript:void(0)">
                                                                    <img src="assets/img/product/4.jpg" alt="product-1" className="cr-cart-img" />
                                                                    Pomegranate 5 kg pack
                                                                </a>
                                                            </td>
                                                            <td className="cr-cart-price">
                                                                <span className="amount">$90.00</span>
                                                            </td>
                                                            <td className="cr-cart-qty">
                                                                <div className="cart-qty-plus-minus">
                                                                    <button type="button" className="plus">+</button>
                                                                    <input type="text" placeholder="." defaultValue={1} minLength={1} maxLength={20} className="quantity" />
                                                                    <button type="button" className="minus">-</button>
                                                                </div>
                                                            </td>
                                                            <td className="cr-cart-subtotal">$90.00</td>
                                                            <td className="cr-cart-remove">
                                                                <a href="javascript:void(0)">
                                                                    <i className="ri-delete-bin-line" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="cr-cart-name">
                                                                <a href="javascript:void(0)">
                                                                    <img src="assets/img/product/5.jpg" alt="product-1" className="cr-cart-img" />
                                                                    Organic Peach Fruits
                                                                </a>
                                                            </td>
                                                            <td className="cr-cart-price">
                                                                <span className="amount">$50.00</span>
                                                            </td>
                                                            <td className="cr-cart-qty">
                                                                <div className="cart-qty-plus-minus">
                                                                    <button type="button" className="plus">+</button>
                                                                    <input type="text" placeholder="." defaultValue={1} minLength={1} maxLength={20} className="quantity" />
                                                                    <button type="button" className="minus">-</button>
                                                                </div>
                                                            </td>
                                                            <td className="cr-cart-subtotal">$50.00</td>
                                                            <td className="cr-cart-remove">
                                                                <a href="javascript:void(0)">
                                                                    <i className="ri-delete-bin-line" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="cr-cart-update-bottom">
                                                        <a href="javascript:void(0)" className="cr-links">Continue Shopping</a>
                                                        <a href="cart.html" className="cr-button">
                                                            Check Out
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <PopularProduct/>
            <Footer/>
        </>
    )
}

export default Cart
