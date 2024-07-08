
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../components/Breadcrum/Breadcrum';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Convert productId to a string for comparison (if needed)
  const product = all_product.find((product) => product.id === productId);

  console.log('Product ID from URL:', productId);
  console.log('All Products:', all_product);
  console.log('Found Product:', product);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div key={product.id}>
      <Breadcrum product={product} />
      
      {/* Display other product details */}
    </div>
  );
};

export default Product;
