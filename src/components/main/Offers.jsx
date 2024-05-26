

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import offer5 from '../../Images/offer-5.webp'
import offer4 from '../../Images/offer-4.webp'
import offer3 from '../../Images/offer-3.webp'
import offer2 from '../../Images/offer-2.webp'
import offer1 from '../../Images/offer-1.webp'



export const MyItems5 = () => {
  return (
    <div className=' m-2'>
      <img style={{ width: "100%" }} src={offer5} alt="" />
    </div>
  )
}

export const MyItems4 = () => {
  return (
    <div className=' m-2'>
      <img style={{ width: "100%" }} src={offer4} alt="" />
    </div>
  )
}

export const MyItems3 = () => {
  return (
    <div className=' m-2'>
      <img style={{ width: "100%" }} src={offer3} alt="" />
    </div>
  )
}

export const MyItems2 = () => {
  return (
    <div className=' m-2'>
      <img style={{ width: "100%" }} src={offer2} alt="" />
    </div>
  )
}

export const MyItems1 = () => {
  return (
    <div className=' m-2'>
      <img style={{ width: "100%" }} src={offer1} alt="" />
    </div>
  )
}


function UncontrolledExample() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (

    <Carousel responsive={responsive}  >

      <MyItems5 />
      <MyItems4 />
      <MyItems3/>
      <MyItems2 />
      <MyItems1 />

    </Carousel>

  )
}

export default UncontrolledExample