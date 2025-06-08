import React from 'react';
import ProductList from '../Product/ProductList';
import ProductAdd from '../Product/ProductAdd';

const Home = () => {

    const add = () => {
        alert();
    }


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
