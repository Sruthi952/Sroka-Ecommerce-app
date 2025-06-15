import React from 'react'
import dealsImg from "../../assets/deals.png"

const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
    <div className='deals__image'>
        <img src={dealsImg} alt="" />
    </div>
    <div className='deals__content'>
    <h5>Get Up To 20% Discount</h5>
    <h4>Deals Of This Month</h4>
    <p>Discover unbeatable deals on the latest trends in women’s fashion! From chic dresses
         and stylish tops to cozy sweaters and must-have accessories, 
        our collection is designed to help you look and feel your best without breaking the bank. </p>
        <div className='deals__countdown flex-wrap'>
           <div className='deals__countdown__card'>
            <h4>14</h4>
            <p>Days</p>

           </div>
           <div className='deals__countdown__card'>
            <h4>20</h4>
            <p>Hours</p>

           </div>
           <div className='deals__countdown__card'>
            <h4>15</h4>
            <p>Mins</p>

           </div>
           <div className='deals__countdown__card'>
            <h4>5</h4>
            <p>Secs</p>

           </div>
        </div>
    </div>
    </section>
  )
}

export default DealsSection
