import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import {useCart} from 'react-use-cart'




const StoreCard = (props) => {

  const { addItem } = useCart();

  console.log(props.item)
  return (
    <>
      <div className='col-md-6 col-lg-4 col-sm-12 card-main' key={props.id}>
        <NavLink  className={'nav-link'} to={`/ProductInfo/${props.id}`} >
          <Card className='my-5  store-card' style={{ width: '18rem' }}>
            <Card.Img className='card-img ' variant="top" src={props.cover} />
            <Card.Body>
              <Card.Title className='prop-name'>{props.name}</Card.Title>
              <Card.Text className='prop-price'>${props.price}</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              
            </Card.Body>
          </Card>
        </NavLink>
      </div>

    </>
  )
}

export default StoreCard