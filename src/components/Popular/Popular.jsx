import React from 'react'
import './Popular.css'
import { Link } from 'react-router-dom'
import data_product from '../../assets/assets'
import Item from '../Item/Item'


const Popular = (props) => {
  return (
    <div  className='popular'>
      <h3>POPULAR IN WORLD</h3>
      <hr />
      <div className="shopCategory-products">
        {
          data_product.map((item) => {
            if (props.category === item.category) {
              return (

                <div className="product-item" key={item.id}>
                  <div className="item">
                  <Link to={`/product/${item.id}`} >

                    <img src={item.image} alt={item.name}  />
                    <h3 className="product-name">{item.name}</h3>
                    <div className="item-prices">
                    <p className="item-prices-new">Price: {item.new_price}</p>
                    
                    </div>

                    </Link>
                  </div>
                 
                </div>
              );
            } else {
              return null;
            }
          })
        }
      </div>
      
    </div>
  )
}

export default Popular