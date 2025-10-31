"use client"
import { FaInfinity } from "react-icons/fa";


export default function footer(){
    return(
        <div className="flex justify-between items-center w-full px-6 mt-10 h-20  rounded-2xl shadow-lg">
            
            <div className="">
                Created by @shashwat
            </div>

            <div className="">
                <FaInfinity className="text-3xl" onClick={()=> 
                                                        window.scroll({top:0,
                                                                behavior:"smooth"
                                                                })} />
            </div>
        </div>
    )
}