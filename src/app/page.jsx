import Image from "next/image";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Profile from "@/components/profile"
import Projects from "@/components/projects";

{/* icons ill need */}
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


export default function Home() {
  return (
    
    <div className="h-screen bg-whitish-1">
     <div className="px-0.5 pb-0.5">
      <Header />
     </div>

    {/*this is for profile section*/}
    <div className="p-0.5">
      <Profile/>
    </div>

     {/*this is for projects section*/}
     <div className="p-0.5">
      <Projects/>
     </div>

     {/*this is for free time section */}
     <div></div>

     <div className="p-0.5">
      <Footer />
     </div>
    </div>
  );
}
