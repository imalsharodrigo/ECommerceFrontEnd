import React from 'react';
import { Link } from 'react-router-dom';
import  './ShopCategory.css'
import Item from '../components/Item/Item';
import all_product from '../assets/all_product'; // Assuming all_product.js exports the product data

const ShopCategory = (props) => {
  return (
    <div className='shop-category'>
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort By <img src="" alt='' />
        </div>
      </div>
      <div className="shopCategory-products">
        {
          all_product.map((item) => {
            if (props.category === item.category) {
              return (

                <div className="product-item" key={item.id}>
                  <div className="item">
                  <Link to={`/product/${item.id}`} >

                    <img src={item.image} alt={item.name}  />
                    <h3 className="product-name">{item.name}</h3>
                    <div className="item-prices">
                    <p className="item-prices-new">New Price: {item.new_price}</p>
                    <p className="item-prices-old">Old Price: {item.old_price}</p>
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
      <div className="shopCategory_loadMore">
        Explore
      </div>
    </div>
  );
}

export default ShopCategory;
