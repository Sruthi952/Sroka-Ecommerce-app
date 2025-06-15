import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import products from "../../data/products.json"
import ProductCards from '../home/shop/ProductsCards';

const CategoryPage = () => {
 const {catrgoryName}= useParams();
  const [filteredProducts,setFilteredProducts] =useState([]);
  useEffect(() =>{
    const filtered = products.filter((product)=> product.category ===catrgoryName.toLowerCase());
    setFilteredProducts(filtered);
  }
     ,[catrgoryName])
 
  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return (
    <>
      <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>{catrgoryName}</h2>
                <p className='section__subheader'>Browse a diverse range of catogories from chic dresses to versatile accessories.Elevate  your style today!</p>
      </section>
      {/* products card*/}
          <div className='section__container'>
            <ProductCards products={filteredProducts}/>
          </div>

    </>
  )
}

export default CategoryPage
