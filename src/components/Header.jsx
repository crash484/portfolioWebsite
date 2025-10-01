"use client"
import Image from "next/image"

import { useState,useEffect } from "react"

export default function Header(){
    const[activeSection, setActiveSection] = useState("Profile");

    useEffect(()=>{
        const sections = ["Profile","Projects","About"]

        const observer = new IntersectionObserver(
            (entries)=> {
                entries.forEach((entry)=>{
                    if(entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold:0
            }
        )
        sections.forEach((id)=>{
            const element = document.getElementById(id)
            if( element ) observer.observe(element)
        })
    },[])

    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId)
        if(element) element.scrollIntoView({behavior:"smooth"})
    }

    return(
        <div className="flex flex-row bg-reddish-1 z-999 sticky top-0 gap-140 px-10 pb-3  mx-0.5 mb-10 rounded-2xl">
            {/* container for image*/}
             
            <div className="basis-64 mr-50">
                    <Image 
                    width={25}
                    height={100}
                    src="/logo.png"
                    alt="my logo"
                    />
            </div>


            {/*container for other icons */}
            <div className="basis-128 grid grid-cols-3">
                <button className={`p-3 w-auto text-center font-display text-red-300 hover:bg-card/50 transition-all duration-500 rounded-2xl
                                    relative ${activeSection==="Profile"?"after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-red-300 after:rounded-full":""}`}
                        onClick={()=>scrollToSection("Profile")}
                >
                    heyaa!
                </button>
                <button className={`p-3 w-auto text-center font-display text-red-300 hover:bg-card/50 transition-all duration-500 rounded-2xl
                                    relative ${activeSection==="Projects"?"after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-red-300 after:rounded-full":""}`}
                        onClick={()=>scrollToSection("Projects")}
                >
                    Projects
                </button>
                <button className={`p-3 w-auto text-center font-display text-red-300 hover:bg-card/50 transition-all duration-500 rounded-2xl
                                    relative ${activeSection==="About"?"after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-red-300 after:rounded-full":""}`}
                        onClick={()=>scrollToSection("About")}
                >
                    About
                </button>
            </div>
        </div>
    )
}