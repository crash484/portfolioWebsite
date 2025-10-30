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
        <div className="flex flex-col items-center p-0.5 s w-full h-fit ">
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
                            ←
                        </button>
               <button onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black opacity-50 text-white p-2 rounded-full hover:opacity-70">
                            →
                        </button>
                         {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full ${
                                index === currentIndex 
                                    ? 'bg-white' 
                                    : 'bg-white opacity-50'
                            }`}
                        />
                    ))}
                </div>

            </div>

            {/*text about me*/}
            <div className="text-lg text-wrap p-50 ">
                    <b className="underline">Shashwat Jain</b>
                    <p>Hello. I’m a Computer Science student at <strong>VIT</strong> and a passionate <strong>Fullstack Developer</strong>.  
                    Beyond coding, I’m drawn to <em>psychology, philosophy, history, writing, reading</em>, and <em>design</em>.  
                    I love exploring how art, logic, and human behavior intersect.</p>

                    <p>My professional focus lies in <strong>Web Development</strong>, <strong>Cloud Computing</strong>, and <strong>Design</strong>.</p>

                    <p>Here’s my <a href="#">github</a>, <a href="#">linkedin</a>, and <a href="#">email</a>.</p>

                    <p><strong>Some takes on life:</strong> Always try to grow, but in that effort don’t forget yourself.  
                    Remember — suffering isn’t noble. Great art = lots of exposure.  
                    Be selective, be confident.</p>

                    <p><strong>Goal for the year:</strong> Create with focus, live with intention, and keep learning.</p>

                    <h2>Monthly Suggestions:</h2>

                    <p>
                    <strong>Article you should read:</strong> <a href="https://populationmatters.org/news/2025/07/earth-overshoot-day-we-are-in-debt-to-our-planet/">We are in debt to our planet</a><br/>
                    <strong>Podcast you should Listen:</strong> <a href="https://open.spotify.com/episode/5s1wf4sUEr8wrl39WlyMIf?si=2a6fc35b15514c1b">Shia LeBeouf</a><br/>
                    <strong>Album you should listen to:</strong> <a href="https://open.spotify.com/album/7xYiTrbTL57QO0bb4hXIKo?si=w7PyPgl-RCmKjjAWmrvIDw">Lust For life – Lana del ray</a><br/>
                    <strong>Book you should read:</strong> <a href="https://www.goodreads.com/book/show/22529379-a-higher-form-of-killing?ac=1&from_search=true&qid=qbm5dCi2z6&rank=1">Higher form of killing - Diana Preston</a><br/>
                    <strong>Movie you should watch:</strong> <a href="https://letterboxd.com/film/green-book/">The Green Book</a>
                    </p>
                    
                    <p>Anyway, here’s a quote I love:</p>

                    <blockquote>
                    “When one has no one, nowhere else one can go! For every man must have somewhere to go.” <br/>— Fyodor Dostoevesky
                    </blockquote>

                
            </div>

        </div>
    )
}