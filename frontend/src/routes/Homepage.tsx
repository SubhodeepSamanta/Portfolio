"use client"
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";

const Homepage = () => {
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        const smoother = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        normalizeScroll: true
      });
      return()=>{
        smoother.kill();
    }
    },[])
  return (
    <div className="h-[500vh] bg-amber-400" id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar/>
        <h1 className="h-[500vh]">Here</h1> 
      </div>
    </div>
  );
};

export default Homepage;
