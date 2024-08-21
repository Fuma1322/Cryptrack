import { EarthLock, Facebook, Github, Instagram, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <EarthLock className="text-red-600"/>
                        <span className="self-center text-xl font-extrabold whitespace-nowrap text-blue-500">Cryptrack</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-4">
                        <li>
                        <Link
                            href="https://www.linkedin.com/in/nucleus-devs-5295a7262/"
                            className='text-blue-500'
                            >
                            <LinkedinIcon />
                        </Link>
                        </li>
                        <li>
                        <Link
                            href="https://www.linkedin.com/in/nucleus-devs-5295a7262/"
                            className='text-black dark:text-white'
                            >
                            <Github />
                        </Link>  
                        </li>
                        <li>
                        <Link
                            href="https://www.linkedin.com/in/nucleus-devs-5295a7262/"
                            className='text-blue-500'
                            >
                            <Facebook />
                        </Link>
                        </li>
                        <li>
                        <Link
                            href="https://www.linkedin.com/in/nucleus-devs-5295a7262/"
                            className='text-pink-600'
                            >
                            <Instagram />
                        </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Cryptrack™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    </div>
  )
}
