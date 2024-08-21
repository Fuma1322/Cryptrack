import { EarthLock, Facebook, Github, Instagram, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="rounded-lg shadow m-4" style={{zIndex:9999}}>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" style={{zIndex:9999}}>
                        <EarthLock className="text-red-600"/>
                        <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#2729b4]">Cryptrack</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-4" style={{zIndex:9999}}>
                        <li style={{zIndex:9999}}>
                        <Link
                            href="https://www.linkedin.com/in/tankiso-leonard-fuma-2b16352a5"
                            className='text-blue-500'
                            >
                            <LinkedinIcon />
                        </Link>
                        </li>
                        <li style={{zIndex:9999}}>
                        <Link
                            href="https://www.github.com/Fuma1322"
                            className='text-black dark:text-white'
                            >
                            <Github />
                        </Link>  
                        </li>
                        <li style={{zIndex:9999}}>
                        <Link
                            href="https://www.facebook.com/profile.php?id=100008058046488"
                            className='text-blue-500'
                            >
                            <Facebook />
                        </Link>
                        </li>
                        <li style={{zIndex:9999}}>
                        <Link
                            href="https://www.instagram.com/tequila.stash/"
                            className='text-pink-600'
                            >
                            <Instagram />
                        </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://cryptrack-five.vercel.app" className="hover:underline">Cryptrack™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    </div>
  )
}
