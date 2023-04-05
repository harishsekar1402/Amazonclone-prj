import React from 'react'
import './assets/css/Checkout.css'
import banner from './assets/img/chech_banner.jpg'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './Stateprovider';

function Checkout() {
  const [{basket,user},dispatch]=useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img className='checkout-ad' src={banner} alt='banner'></img>
            <div>
              <h3>Hello, {user?.email}</h3>
                <h2 className='checkout-title'>Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
            </div>
        </div>
        <div className='checkout-right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout