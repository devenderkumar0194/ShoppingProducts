import React from 'react';
import ProductList from '../../Component/Product/ProductList';
import ProductAdd from '../../Component/Product/ProductAdd';

const Home = () => {
    return (
        <div>
            <div className='text-center mb-2'>
                <h1 className='font-bold text-2xl'>Product List</h1>    
                <div className='text-right'>
                    <ProductAdd/>
                </div>
            </div>
            <ProductList/>
        </div>
    );
}

export default Home;
