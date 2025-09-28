import Image from "next/image";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Profile from "@/components/profile"

export default function Home() {
  return (
    
    <div className="h-screen">
    <Header />

    {/*this is for profile section*/}
    <div>
      <Profile/>
    </div>

     {/*this is for projects section*/}
     <div></div>

     {/*this is for free time section */}
     <div></div>

    <Footer/>
    </div>
  );
}
