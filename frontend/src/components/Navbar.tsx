"use client"
import useThemeStore from '@/store/useTheme'
import { Moon } from 'lucide-react';
import React from 'react'

const Navbar = () => {
    const {toggleTheme}= useThemeStore();
    
  return (
    <div className=' flex items-center justify-between w-full bg-gray-200 dark:bg-gray-500'>
        <div onClick={toggleTheme}>
            <Moon/>
        </div>
        <div>
        Navbar
        </div>
    </div>
  )
}

export default Navbar