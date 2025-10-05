"use client"
import { DivideSquare } from "lucide-react";
import Image from "next/image"
import { useState } from "react"

export default function About(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = ()=> {
        setCurrentIndex((prevIndex)=> 
                prevIndex === images.length - 1 ? 0: prevIndex+1)
    }

    const prevSlide= () =>{
        setCurrentIndex((prevIndex)=>
        prevIndex === 0 ? images.length -1 : prevIndex -1)
    }
    {/*2 function to increment and decrement*/}

    const images=[{src:"/me.jpg"},{src:"/blogDemo.png"},{src:"/SageExcel.png"}]
    return(
        <div className="flex flex-col items-center p-0.5 bg-reddish-1 w-full h-fit ">
            {/*few pictures of me in a nice format*/}
            <div className="relative w-96 h-96 overflow-hidden rounded-lg">
                <div className="flex transition-transform duration-300 ease-in-out h-full"
                    style={{transform: `translate(-${currentIndex * 100}%)`}}>
                   {images.map((image,index)=>(
                    <div key={index} className="w-96 h-96 flex-shrink-0 relative">
                    <Image
                    src={image.src}
                    alt="image for carousel"
                    fill
                    />
                    </div>
               ))}
               </div>

               <button onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black opacity-50 text-white p-2 rounded-full hover:opacity-70">
                            back
                        </button>
               <button onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black opacity-50 text-white p-2 rounded-full hover:opacity-70">
                            next
                        </button>
            </div>

            {/*text about me*/}

        </div>
    )
}