import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-300 text-black justify-between flex px-2 py-1 my-1'>
        <div className='font-bold' >
            <span className='text-green-700'>&amp;</span>Shok
            <span className='text-green-700'>SI&amp;</span>

        </div>
        <div className='flex space-x-3'>
            <a href="/" className='hover:font-bold'>Home</a>
            <a href="product" className='hover:font-bold'>product</a>
            <a href="contact" className='hover:font-bold'>ContuctUS</a>
        </div>
    </nav>
  )
}

export default Navbar
