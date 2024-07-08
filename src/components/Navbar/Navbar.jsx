import React, { useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(ShopContext);

  const goHomePage = () => {
    navigate('/');
  };

  const goWomen = () => {
    navigate('/women');
  };

  const goMen = () => {
    navigate('/men');
  };

  const goKids = () => {
    navigate('/kids');
  };

  const goLoginsignUp = () => {
    navigate('/loginSignup');
  };

  const goCart = () => {
    navigate('/cart');
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, count) => total + count);
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className='navbar-menu'>
        <li onClick={goHomePage}><Link to='/'>Shop</Link></li>
        <li onClick={goMen}>Men</li>
        <li onClick={goWomen}>Women</li>
        <li onClick={goKids}>Kids</li>
      </ul>
      <div className='navbar-right'>
        <li onClick={goLoginsignUp}><img src={assets.log} alt="" className='log'/></li>
        <li onClick={goCart} className="cart-icon-container">
          <img src={assets.cart} alt="" className='cart'/>
          {getTotalCartItems() > 0 && (
            <span className="cart-item-count">{getTotalCartItems()}</span>
          )}
        </li>
      </div>
      {/* <CartIcon /> */}
    </div>
  );
};

export default Navbar;
