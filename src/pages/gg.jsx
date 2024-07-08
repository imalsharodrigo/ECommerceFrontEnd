import React from 'react';
import { useContext } from 'react'
import  './ShopCategory.css'
import { Link } from 'react-router-dom';
import all_product from '../assets/all_product'; // Assuming all_product.js exports the product data
import Item from '../components/Item/Item';


const ShopCategory = (props) => {
  return (
    <div className='shop-category'>
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort By <img src="" alt=''></img>
        </div>
      </div>
      <div className="shopCategory-products">
        {
          all_product.map((item) => {
            if (props.category === item.category) {
              return (

                <div className="product-item" key={item.id}>
                     <Item key={id} 
                     id={item.id}
                     name={item.name} 
                     image={item.image}
                    new_price={item.new_price} 
                     old_price={item.old_price}></Item>

                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to={`/product/${item.id}`}>View Product</Link>
                </div>
              );


              
            } else {
              return null;
            }
          })
        }
      </div>
      <div className="shopCategory_loadMore">
        Explore
      </div>
    </div>
  );
}

export default ShopCategory;
