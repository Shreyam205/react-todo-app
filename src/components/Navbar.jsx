import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex place-items-center justify-between bg-slate-600 py-1'>
        <div className="logo mx-9">
                <img className='w-10' src="todo.png" alt="" />
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>About</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar