"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Profile from "@/components/profile"
import Projects from "@/components/projects";
import About from "@/components/About";
import { useState,useEffect } from "react";
import Design from "@/components/Design";


{/* icons ill need */}
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


export default function Home() {
  //for changing theme
  const [isDark, setIsDark] = useState(true);
  useEffect(()=>{
    console.log(isDark)
  },[isDark])
  return (
    
    <div className={`${isDark?"bg-reddish-1":"bg-pink-950 text-white"}`}>
      <Header isDark={isDark} setIsDark={setIsDark}/>
    
    {/* for design */}
    <div>
      <Design />
    </div>

    {/*this is for profile section*/}
    <div className="p-15 " id="Profile">
      <Profile/>
    </div>

     {/*this is for projects section*/}
     <div className="p-0.5 " id="Projects" >
      <Projects/>
     </div>

     {/*this is for free time section */}
     <div className="p-0.5" id="About">
      <About />
     </div>

     <div className="p-0.5">
      <Footer />
     </div>
    </div>
  );
}
