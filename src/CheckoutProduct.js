import React from 'react'
import './assets/css/checkoutproduct.css'
import { useStateValue } from './Stateprovider';
function CheckoutProduct({id,image,price,rating,title}) {
    const [{basket},dispatch]=useStateValue();
   const removeFromBasket = () =>{
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    })
   }

  return (

    <div className="checkoutproduct">
        <img className="checkoutproduct-image" src={image} />
        <div className='checkoutproduct-info'>
            <p className='checkoutproduct-title'>{title}</p>
            <p className='checkoutproduct-price'><small>₹</small><strong>{price}</strong></p>
            <div className='checkoutproduct-rating'>{Array(rating).fill().map((_,i)=>(
              <p>⭐</p>
          ))}
          
          </div>
          <button onClick={removeFromBasket}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct