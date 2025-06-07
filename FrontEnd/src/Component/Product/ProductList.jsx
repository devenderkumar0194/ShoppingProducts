import React, { useState, useEffect  } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../app/features/product/productSlice';

const ProductList = () => {

    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
            <div className='grid grid-cols-3 gap-4 p-4' >
                {items.map((product) =>
                    <Product product={product}/>
                )}
            </div>
    );
}

export default ProductList;
