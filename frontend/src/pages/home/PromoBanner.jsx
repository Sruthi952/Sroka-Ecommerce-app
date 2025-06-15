import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
      <div className='banner__card'>
        <span><i className="ri-truck-line"></i></span>
        <h4>Free Delivery</h4>
        <p>Offers convenience and the ability to shop from anywhere,anytime</p>
      </div>
      <div className='banner__card'>
        <span><i className="ri-exchange-dollar-line"></i></span>
        <h4>100% Money Back Guaranty</h4>
        <p>E-Commerce have a review system where customers can share feedback</p>
      </div>
      <div className='banner__card'>
        <span><i className="ri-user-voice-line"></i></span>
        <h4>Stong Support</h4>
        <p>Offer customer support services to assist customers with quries</p>
      </div>
    </section>
  )
}

export default PromoBanner
