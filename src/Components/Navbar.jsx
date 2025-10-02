import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-white shadow-md '>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-2xl font-bold '>
                    <Link to='/'>E-Com</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form>
                        <input type='text' placeholder='Search Product' className='w-full rounded px-4 py-2' />
                        <FaSearch className='absolute top-3 right-3 text-red-500' />
                    </form>
                </div>.
                <div className='flex items-center space-x-4'>
                    <Link to='/cart'>Cart</Link>
                    <FaShoppingCart />
                    <button className='hidden md:block'> Login | Register</button>
                    <button className='md:hidden '><FaUser /></button>
                </div>
                <div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
