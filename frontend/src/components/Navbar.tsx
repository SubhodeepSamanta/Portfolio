"use client"
import useThemeStore from '@/store/useTheme'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import React, { useLayoutEffect, useRef } from 'react'

const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  const navRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!navRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(navRef.current, {
      width: "60%",
      top: "20px",
      borderRadius: "50px",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top+=50 top",
        end: "top+=1500 top",
        toggleActions: "play reverse play reverse",
        scrub: true,
      }
    });
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed left-1/2 -translate-x-1/2 flex items-center justify-between py-4 px-8 
                 bg-gray-200 dark:bg-gray-500 w-[80%] rounded-b-2xl z-50 shadow-lg"
    >
      <div>
        <Link href="/" className="font-bold">
          Subhodeep Samanta
        </Link>
      </div>
      <div onClick={toggleTheme}>
        <div className="p-2 bg-gray-300 rounded-lg cursor-pointer">
          {theme !== 'dark' ? <Moon /> : <Sun />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
