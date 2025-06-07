import React from 'react';
import ProductList from '../Product/ProductList';

const Home = () => {
    return (
        <div>
            <div className='text-center mb-2'>
                <h1 className='font-bold text-2xl'>Product List</h1>
            </div>
            <ProductList/>  
        </div>
    );
}

export default Home;
