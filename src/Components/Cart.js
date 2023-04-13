import React from 'react'
import { useCart } from 'react-use-cart'


const Cart = () => {

  const { removeItem, updateItemQuantity, items, totalItems, totalUniqueItems, cartTotal } = useCart()

  return (
    <>
      <div className='blank'></div>
      <div className='blank'></div>
      <div className='container'>
        <h1>Cart</h1>
        <table className='table table-stripe hover'>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Color</th>
            <th>Actions</th>
          </tr>

          {

            items.map((cval, index) => {
              return (

                <tr>
                  <td>{index + 1}</td>
                  <td><img src={cval.cover} height={'100'} width={'100'} /></td>
                  <td>{cval.name}</td>
                  <td>${cval.price}</td>
                  <td>
                    <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(
                      cval.id, cval.quantity + 1)}>+</button></td>
                  <td className='text-center'>{cval.quantity}</td>
                  <td><button className='btn btn-info ms-2' onClick={() => updateItemQuantity(
                    cval.id, cval.quantity - 1)}>-</button>
                  </td>
                  <td><button className='btn btn-danger text-dark' onClick={() => removeItem(cval.id)}>Remove</button></td>
                </tr>
              )
            })

          }
          <h4 className=' container text-end my-5'>Total= ${cartTotal}</h4>


        </table>

      </div>
      <div className='blank'></div>
    </>
  )
}

export default Cart