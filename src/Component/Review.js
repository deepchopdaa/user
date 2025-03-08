import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Review = () => {
    const [review, setreview] = useState(null)
    useEffect(async () => {
        await axios.get("http://localhost:3100/review/getuserreview", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((reviews) => {
            setreview(reviews)
            console.log(reviews)
        }).catch((e) => {
            console.error("Review not Featched", e)
        })
    }, [])
    return (
        <>
            <section className="section-testimonial padding-b-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-30" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="cr-banner">
                                    <h2>Great Words From People</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cr-testimonial-slider swiper-container">
                                <div className="swiper-wrapper cr-testimonial-pt-50">

                                    {/* {
                                        review?.map((reviews) => (
                                            <>
                                            <h1>{reviews.user.id}</h1>
                                            <h1>{reviews.game.id}</h1>
                                            <h1>{reviews.comment}</h1>
                                            </>
                                        ))
                                    } */}
                                    <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                        <div className="cr-testimonial">
                                            <div className="cr-testimonial-image">
                                                <img src="assets/img/testimonial/1.jpg" alt="businessman" />
                                            </div>
                                            <div className="cr-testimonial-inner">
                                                <span>Co Founder</span>
                                                <h4 className="title">Stephen Smith</h4>
                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                                    facilisis.”
                                                </p>
                                                <div className="cr-star">
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                        <div className="cr-testimonial">
                                            <div className="cr-testimonial-image">
                                                <img src="assets/img/testimonial/2.jpg" alt="businessman" />
                                            </div>
                                            <div className="cr-testimonial-inner">
                                                <span>Manager</span>
                                                <h4 className="title">Lorem Robinson</h4>
                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                                    facilisis.”
                                                </p>
                                                <div className="cr-star">
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-line" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-aos="fade-up" data-aos-duration={2000}>
                                        <div className="cr-testimonial">
                                            <div className="cr-testimonial-image">
                                                <img src="assets/img/testimonial/3.jpg" alt="businessman" />
                                            </div>
                                            <div className="cr-testimonial-inner">
                                                <span>Team Leader</span>
                                                <h4 className="title">Saddika Alard</h4>
                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                                    facilisis.”
                                                </p>
                                                <div className="cr-star">
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
                                                    <i className="ri-star-fill" />
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

export default Review
