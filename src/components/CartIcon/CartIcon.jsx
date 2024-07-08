import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import './CartIcon.css';

const CartIcon = () => {
  const { cartItems } = useContext(ShopContext);

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  return (
    <div className="cart-icon">
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">{getTotalItems()}</span>
      </Link>
    </div>
  );
};

export default CartIcon;
