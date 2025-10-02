import React from 'react'
import { Categories } from '../assets/Mockdata'
import homeimg from '../assets/images/homeimg.jpg'
const Home = () => {
    return (
        <div className='bg-white mt-2 px-4 md:px-16 lg:px-24 py-4'>
            <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
                <div className='w-full md:w-3/12'>
                    <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>
                        Shop By Categories
                    </div>
                    <ul className='space-y-4 bg-gray-100 p-3 border'>
                        {Categories.map((category, index) => (
                            <li key={index} className='flex items-center text-sm hover:underline cursor-pointer'>
                                <div className='w-2 h-2 border border-red-500 rounded-full mr-2 '></div>
                                {category}</li>
                        ))}
                    </ul>

                </div>
                <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative '>
                    <img src={homeimg} alt="" className='h-full w-full ' />
                    <div className='absolute top-1/4 left-10 text-white space-y-4'>
                        <p className='text-gray-600 mb-4'>Code with Aswin</p>
                        <h2 className='text-3xl font-bold'>Welcome To E-Shop</h2>
                        <p className='text-xl mt-2.5'>Millions + Products</p>
                        <button className='bg-red-500 text-white px-4 py-2 mt-4'>Shop Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
