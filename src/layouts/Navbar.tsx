import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full'>

      <div className='sm:container flex justify-between items-center py-4 text-white'>
        <div>
          LOGO
        </div>
        <div>
          <ul className='flex gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Hire Me</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar