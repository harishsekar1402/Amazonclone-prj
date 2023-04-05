import React from 'react'
import './assets/css/Home.css'
import Product from './Product'
import banner from './assets/img/banner.jpg'
function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img className ='home-image' src={banner} alt='banner'/>
        <div className='home-row'>
        <Product id="121" title='Apple iPhone 14 Pro (128 GB) - Space Black' image='https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg' price={119900} rating={5}/>
          <Product id="122"title='Fossil Chronograph Black Men Watch CH2885' price={5585} image='https://m.media-amazon.com/images/I/61lEGRZwG1L._UX679_.jpg' rating={5}/>
          <Product id="123"title='Noise X-Fit 1 (HRX Edition) Smart Watch Fitness Tracker with 1.52"(3.9cm) IPS TruView Display, Best in Class Resolution, Spo2 (Silver Grey)' image='https://m.media-amazon.com/images/I/61YMlC-F3OL._SX679_.jpg' price={1499} rating={4}/>
        </div>
        <div className='home-row'>

        <Product id="124"title='Apple 2020 MacBook Air Laptop M1 chip' image='https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg' price={84990} rating={4}/>
        <Product id="125" title='Apple AirPods (2nd Generation)' price={11999} image="https://m.media-amazon.com/images/I/7120GgUKj3L._SX679_.jpg" rating={3}/>
        <Product id="126"title='MI Poco M2 Pro (Green and Greener, 6GB RAM, 128GB)' image='https://m.media-amazon.com/images/I/81w3UsCHEtL._SY879_.jpg' price={13999} rating={4}/>
        <Product id="127" title='IMPERIOUS - THE ROYAL WAY Analogue Womens Watch (Black Dial)' image='https://m.media-amazon.com/images/I/51LTJjshaIL._UL1100_.jpg' price={999} rating={2}/>

          
        </div>
        <div className='home-row'>
          <Product id="128" title='AOPEN Acer 43XV1C P 43.8 Inch IPS DFHD (3840 x 1080) Pixels UltraWide Gaming LCD Monitor with LED Back Light | AMD FreeSync Premium | 120Hz | 1MS VRB | HDR400 | 93% DCI-P3 | 1 x Display Port, White' image='https://m.media-amazon.com/images/I/71yWZT2TP5L._SX679_.jpg' price={70000} rating={3} />
          <Product id="129" title='Vu 215cm (85 inches) The Masterpiece 4K Ultra HD Android QLED TV 85QPX (Armani Gold) (2020 Model)' image='https://m.media-amazon.com/images/I/71B7sRIydwL._AC_UY327_FMwebp_QL65_.jpg' price={238599} rating={4} />

        </div>
      </div>
    </div>
  )
}

export default Home