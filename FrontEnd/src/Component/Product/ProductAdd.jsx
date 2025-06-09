import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { addProduct, clearAddError } from "../../app/features/product/productSlice";

function ProductAdd() {
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState("");
    const { addStatus, addError } = useSelector((state) => state.products);

  const dispatch = useDispatch();

   const initialValues = {
        title : '',
        price: "",
        description: ""
    };


      const formik = useFormik({
        initialValues: initialValues,
    
        validationSchema: Yup.object({
          title: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .required('title is required'),
            description: Yup.string().required('description is required'),
            price: Yup.number()
                .required('price is required')
                .typeError('price must be a number')
                .min(1, 'price must be 1 or more')
        }),
        onSubmit: async (values) => {

            dispatch(addProduct( values ));
            if(addStatus === 'succeeded'){
                setSuccess("Product added successfully");
                setOpen(false);
                setSuccess("");

                formik.resetForm();

            }else{
                setOpen(true);
            }

        }
      });


      const productModal = () => {
        setOpen(true);
        dispatch(clearAddError());
      } 

      const backResetForm = () => {
        dispatch(clearAddError());
        setOpen(false);
        formik.resetForm();
      }


  return (
    <>
        <div className="flex justify-end">
            <button
                onClick={productModal}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                    Add
            </button>
        </div>
        
      {open && (            
            <div tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden bg-white bg-opacity-20">    <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Add Product 
                            </h3>
                            <button type="button" onClick={backResetForm} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <form className="mx-auto text-left" onSubmit={formik.handleSubmit}>

                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-red-600">{addError}</p>
                            <p className="text-green-600">{success}</p>
                            <div className="mb-5" >
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input autoComplete="off" type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter title"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.title}
                                />
                                {formik.touched.title && formik.errors.title && (
                                <div className='text-red-600'>{formik.errors.title}</div>
                                )}                            
                            </div>

                            <div className="mb-5" >
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input autoComplete="off" type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter price"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.price}
                                />
                                {formik.touched.price && formik.errors.price && (
                                <div className='text-red-600'>{formik.errors.price}</div>
                                )}
                            </div>

                            <div className="mb-5" >
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea autoComplete="off" id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here..."
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.description}
                                ></textarea>
                                {formik.touched.description && formik.errors.description && (
                                <div className='text-red-600'>{formik.errors.description}</div>
                                )}
                            </div>

                        </div>
                        <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                            <button onClick={backResetForm} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Back</button>
                        </div>

                        </form>


                    </div>
                </div>
            </div>    
      )}
    </>
  );
}

export default ProductAdd;
