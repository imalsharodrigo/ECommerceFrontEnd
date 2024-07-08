import React from 'react'
import data_product from '../../assets/assets'


const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <hr />
        <div className="related-products-item">
            {
                data_product.map((item,i)=>{
                    return (
                        <div className="product-item" key={item.id}>
                            
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default RelatedProducts