import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Breadcrums.css';
import RelatedProducts from '../../pages/Related/RelatedProducts';
import { ShopContext } from '../../Context/ShopContext';

const Breadcrum = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(ShopContext);

  if (!product) {
    return null; // Handle case where product is not defined or null
  }

  const handleAddToCart = (productId) => {
    addToCart(productId);
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left-side'>
        <img className='img' src={product.image} alt={product.name} />
      </div>

      <div className="productdisplay-right-side">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className='right-price-old'>Old Price: {product.old_price}</div>
          <div className='right-price-new'>New Price: {product.new_price}</div>
        </div>

        <div className="productdisplay-right-description">
          It is leather shoes.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-options">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XS</div>
          </div>
        </div>

        <button onClick={() => handleAddToCart(product.id)}>ADD TO CART</button>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default Breadcrum;
