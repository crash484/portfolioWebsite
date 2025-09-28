import { FaInfinity } from "react-icons/fa";


export default function footer(){
    return(
        <div className="flex flex-row gap-200 mx-0.5 my-10 h-20 bottom-10 bg-teal-300 rounded-2xl ">
            
            <div className="basis-64 p-6">
                Created by @shashwat
            </div>

            <div className="basis-128 p-6 ">
                <FaInfinity className="text-3xl absolute right-6 " />
            </div>
        </div>
    )
}