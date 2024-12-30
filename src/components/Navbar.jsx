import React from 'react'
import logo from '/logo/khemtawTiffinLogo.png'
import { Link } from 'react-router-dom'

const Navbar = ({ children }) => {
    
    return (
        <>
            <header>
                <nav className='flex justify-around py-6 bg-slate-300 items-center'>
                    <div>
                        <Link to={"/"}><img src={logo} alt="Logo" width={120} height={90} className=' cursor-pointer' /></Link> 
                    </div>
                    <ul className='flex gap-4'>
                        <Link to={'/about'}>About Us</Link>
                        <Link to={'/tiffinService'}>Tiffin Service</Link>
                        <Link to={"/joinus"}>Join Us</Link>
                        <Link to={'/contact'}>Contact Us</Link>
                    </ul>
                    <button className='hover:bg-teal-400 bg-teal-600 py-2 px-10 animate-[bounce_2s_linear_3] shadow-2xl rounded-full text-white hover:text-black'>Order Now</button>
                </nav>
            </header>
            { children }
        </>
    )
}

export default Navbar
