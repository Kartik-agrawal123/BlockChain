import React, { useState } from 'react';

const Navbar1 = () => {

  return (
    <>
    
    

<nav class="bg-[url('/public/images/navstyleimg.png')] bg-cover">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        
        <span class="self-center left-10 relative text-3xl font-semibold whitespace-nowrap dark:text-white">MERKA</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <a href="/" class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0 dark:text-white md:hover:text-blue-700 " aria-current="page">Home</a>
        </li>
        <li>
          <a href="/coins" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500   dark:hover:text-white md:dark:hover:bg-transparent">Coins</a>
        </li>
        <li>
          <a href="/exchange" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Exchange</a>
        </li>
        <li>
          <a href="/blog" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
{/* Hamburger icon */}
{/* <div className=' md:hidden flex flex-row justify-between px-10 py-8'>
  <h1 className='text-white text-4xl'>MERKA</h1>
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6l16 0" />
  <path d="M4 12l16 0" />
  <path d="M4 18l16 0" />
</svg>
  </div>
</div> */}
{/* Mobile Menu */}
{/* <div>
<div className='flex space-y-8 flex-col justify-center items-center relative'>
  <div className='text-2xl text-white'>Home</div>
  <div className='text-2xl text-white'>Coins</div>
  <div className='text-2xl text-white'>Exchange</div>
  <div className='text-2xl text-white'>Blogs</div>
</div>
  <div className='absolute top-10 right-10'>
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10l4 4m0 -4l-4 4" />
  <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
</svg>
  </div>
</div> */}





    </>



  )
}

export default Navbar1;