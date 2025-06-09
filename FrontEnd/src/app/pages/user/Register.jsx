import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { registerUser } from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    
    const dispatch = useDispatch();
    const { addStatus, addError } = useSelector((state) => state.users);

    console.log(addStatus);

    
       const initialValues = {
            name : '',
            email : '',
            password : '',
            confirmPassword : '',
        };
    
        const formik = useFormik({
        initialValues: initialValues,
    
        validationSchema: Yup.object({
            name: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .required('Name is required'),
            email: Yup.string()
            .email('Invalid email format')
            .min(3, 'Must be at least 3 characters')
            .required('Email is required'),
            password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        }),
        onSubmit: async (values) => {


            dispatch(registerUser( values ));
            //     if(addStatus === 'succeeded'){
            //         setSuccess("Product added successfully");
            //         setOpen(false);
            //         setSuccess("");
    
            //         formik.resetForm();
    
            //     }else{
            //         setOpen(true);
            //     }




        }
        });


    return (
        <div className=''>
            <h1 className='font-bold text-2xl'>Register Now</h1>    

            <div className='text-left mt-1 p-2'>
                <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
                
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="text-red-600">{formik.errors.name}</div>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-600">{formik.errors.email}</div>
                    )}

                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-red-600">{formik.errors.password}</div>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your confirm Password</label>
                    <input type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <div className="text-red-600">{formik.errors.confirmPassword}</div>
                    )}

                </div>
                
                <button type="submit" className="text-white float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>


            </div>
     
            

            


        </div>
    );
}

export default Register;
