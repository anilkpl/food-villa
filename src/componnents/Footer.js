import React from 'react'

export const Footer = () => {
  return (
    
<footer class="bg-purple-100 rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a  class="flex items-center mb-4 sm:mb-0">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkML6BRWil3kliTdFT-6LYBEeRsnkd_hmMNAowM3oalP-VbwLnT7vvG70rlP2_gcxbd0&usqp=CAU" class="h-20 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Food - Villa</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 text-lg font-bold">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 text-lg font-bold">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 text-lg font-bold">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline text-lg font-bold">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-lg font-bold text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Kokkiligadda Anil Kumar™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}
