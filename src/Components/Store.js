import React from 'react'
import NavLink from 'react-bootstrap/esm/NavLink'
import StoreCard from './StoreCard'
import StoreData from './StoreData'
import Footer from './Footer'


const Store = () => {
  return (
    <>
      <div className='blank'></div>
      <h1 className='text-center store-head'>THE COLLECTION</h1>
      <h4 className='text-center store-head2'>Masterpieces for your wheels<br />
        designed with love by top artists</h4>
      <div className='container '>
        <div className='row'>
          {
            StoreData.map((cval, index) => {
             
              return (
                <StoreCard
                  id={cval.id}
                  name={cval.name}
                  cover={cval.cover}
                  price={cval.price}
                  data = {cval}

                />
              )
            })
          }
        </div>

      </div>


    </>
  )
}

export default Store