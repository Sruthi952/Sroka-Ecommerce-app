import React, { useState } from 'react'
import ProductCards from './ProductsCards';

import products from "../../../data/products.json";


const TrendingProducts = () => {
    const[VisibleProducts,setVisibleProducts]=useState(8);
    const loadMoreProducts=()=>{
        setVisibleProducts(preCount=>preCount+4);
    }
  return (
    
    <section className='section__container product__container'>
         <h2 className='section__header'>Trending Products</h2> 
         <p className='section__subheader mb-12'>
          Discover the hottest picks: Elevate your style with our Curated collection of Trending 
          Women's Fashion Products.
         </p>
         <div className='mt-12'>
         {/*produts card*/}
         <ProductCards products={products.slice(0,VisibleProducts)} />
         </div>
         {/*load more product btn*/}
         <div className='product__btn'>
              {
                VisibleProducts<products.length && (
                  <button className='btn' onClick={loadMoreProducts}>Load More</button>
                )
              }
         </div>
    </section>
    
  )
}

export default TrendingProducts;
