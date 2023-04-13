import React from 'react'
import StoreData from './StoreData'
import { useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'



const ProductInfo = (props) => {
    const { id } = useParams();
    const { addItem } = useCart();

    return (
        <>
            <div className='blank'></div>
            <h1 className=' container text-center my-5 info-head'> Product Info</h1>
            {
                StoreData.map((cval) => {
                    if (id == cval.id) {
                        return (
                            <>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6 rolling2 text-center'>
                                            <img className='rolling3' src={cval.cover}   alt="product-img" />
                                        </div>
                                        <div className='col-md-6 px-5 py-3 container text-center'>
                                            <h3 className='info-head'>{cval.name}</h3>
                                            <h5 className='my-3 info-head price'>${cval.price}</h5>

                                            <div className='container'>
                                                <form className='p-3'>
                                                    <label className='labels' >Size(Diametre)</label><br />
                                                    <input placeholder='in mm..' className=' dropdown-toggle dropdown-toggle-split inputs-product'></input><br /><br />
                                                    <label className='labels' >Who are the wheel covers for? (Their name so <br /> we can write them a little note)</label><br />
                                                    <input placeholder='500' maxLength={"500"} className=' dropdown-toggle dropdown-toggle-split inputs-product'></input>
                                                </form>

                                                <button type='button ' className='btn rounded btn-info my-5 m-3 addtocart' onClick={() => addItem(cval)}>Add To Cart</button>
                                            </div>
                                        </div>


                                        <div className='col-md-7 text-center my-5  '>
                                            <p className='text-start'>Disney x Izzy Wheels<br /><br />
                                                This special edition design was created to celebrate Disney's 100 year anniversary!<br /><br />
                                                These wheelchair wheel covers come as a pair, one for each wheel. This stylish product is lightweight, waterproof, and scratch-proof. There are 3 velcro straps at the back of each to easily fasten the wheel covers directly to the spokes of the wheel of any manual wheelchair. <br /><br />
                                                To find your wheel cover size: use a measuring tape to measure the diameter of the area inside the hand rim on your wheel.<br /><br />
                                                Every pair of Izzy Wheels is made with love in Ireland.<br /><br />FREE worldwide shipping if you order more than one pair of wheel covers.<br /><br />
                                                If you require more information or a different size not listed in the dropdown menu please contact us on hello@izzywheels.com or visit our Help and FAQ page. <br /><br /></p>

                                        </div>
                                    </div>
                                </div>


                            </>
                        )
                    }
                })
            }



        </>
    )
}

export default ProductInfo