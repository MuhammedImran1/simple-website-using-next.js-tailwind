"use client";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-600 text-white h-12 py-2 px-3 flex justify-between items-center">
<div className="w-20 h-20 rounded-full flex items-center space-x-2">
  <img src="sufiya-removebg-preview.png" alt="logo"/>
  <h1>
<a href="#!">Sufiya Official</a>
  </h1>
</div>
<div>
  <ul className='flex space-x-5'>
    <li><Link href="/"  className='hover:text-red-600'>Home</Link></li>
    <li><Link href="/About" className='hover:text-red-600'>About Us</Link></li>
    <li><Link href="/Job" className='hover:text-red-600'>Job</Link></li>
    <li><Link href="/Contact" className='hover:text-red-600'>Contact Us</Link></li>
    <li><Link href="/Services" className='hover:text-red-600'>Services</Link></li>

  </ul>
</div>
<div>
  <ul className='flex space-x-5'>
    <li><Link href='#!' className='hover:text-red-800'>Login</Link></li>
    <li><Link href='#!' className='hover:text-red-800'>Sign Up</Link></li>
  </ul>
</div>
      </nav>
    </div>
  )
}
export default Navbar