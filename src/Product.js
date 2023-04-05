import React from 'react'
import './assets/css/Product.css'
import { useStateValue } from './Stateprovider'
function Product({id,title,image,price,rating}) {
  const [{basket},dispatch]=useStateValue();

  const addtoBasket = ()=>{
      dispatch({
        type: 'ADD_TO_BASKET',
        item:{
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
  };
  return (
    <div className='product'>
          <img src={image} alt='product'></img>
    <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          {Array(rating).fill().map((_,i)=>(
              <p>⭐</p>
          ))}
        
        </div>
    </div>
    <button className='btn' onClick= {addtoBasket}>Add to Cart</button>
</div>
  )
}

export default Product