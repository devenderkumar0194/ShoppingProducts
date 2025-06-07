import React, { useState } from 'react';
import Product from './Product';

const ProductList = () => {

    const [products , setProducts] = useState([
        { "name" : "sdf"},{ "name" : "sdf"},
    ]);

    return (
            <div className='body text-lef flex' >
                {products.map((product) =>
                    <Product product={product}/>
                )}
            </div>
    );
}

export default ProductList;
