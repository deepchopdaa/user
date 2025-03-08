import React from 'react'

const ServidesSlider = () => {
    return (
        <>
            <section className="section-services padding-b-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cr-services-border" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="cr-service-slider swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="cr-services">
                                                <div className="cr-services-image">
                                                    <i className="ri-red-packet-line" />
                                                </div>
                                                <div className="cr-services-contain">
                                                    <h4>Product Packing</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="cr-services">
                                                <div className="cr-services-image">
                                                    <i className="ri-customer-service-2-line" />
                                                </div>
                                                <div className="cr-services-contain">
                                                    <h4>24X7 Support</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="cr-services">
                                                <div className="cr-services-image">
                                                    <i className="ri-truck-line" />
                                                </div>
                                                <div className="cr-services-contain">
                                                    <h4>Delivery in 5 Days</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="cr-services">
                                                <div className="cr-services-image">
                                                    <i className="ri-money-dollar-box-line" />
                                                </div>
                                                <div className="cr-services-contain">
                                                    <h4>Payment Secure</h4> 
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                </div>
                                            </div>
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

export default ServidesSlider
