import Image from "next/image"
import { FaGithub } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";

export default function Projects(){
    
    return(
        <div className="rounded ">
            {/*this will be a card for a project image on the right and text on the left */}
            <div className="flex gap-1 relative p-6 pb-2 ">
                <div className="w-100 h-50 relative overflow-hidden rounded-lg ">
                    <Image 
                    src="/blogDemo.png"
                    alt="BlogPicture"
                    fill
                    />
                </div>
                <div className="w-300">
                    <div className=" text-xl text-wrap">
                        {/*this will contain the text part */}
                        <p>
                            I love thinking and sharing those thoughts with the world
                            so i created this blog which allows me to do so and also add images and music
                            it is a dynamic, full-stack platform built with Next.js and TypeScript, featuring a responsive design and seamless user experience. 
                            It leverages supabase for content management and allows easy creation, editing, and publishing
                            of posts. Deployed on Vercel with optimized performance, 
                            the blog emphasizes readability, modern UI, and smooth navigation. 
                        </p>
                    </div>
                    
                    {/*code and links used add icons with links */}
                    <div className="flex items-start gap-8 mt-13 text-3xl">
                        <a href="https://shashwhat.me" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                            <TbWorldSearch />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex gap-1 p-6 rounded relative pb-2">
                <div className="relative w-100 h-50 overflow-hidden rounded-lg">
                    <Image 
                    src="/SageExcel.png"
                    alt="SageExcel png"
                    fill
                    />
                </div>
                <div className="w-300">
                    <div className=" text-xl text-wrap">
                        {/*this will contain the text part */}
                        <p>
                           SageExcel is an intelligent Excel analysis tool that leverages AI to provide insights and 
                           feedback on spreadsheet data. Built with a React.js  Node.js and Express.js backend
                           , it integrates MongoDB for storage and Gemini API for smart data analysis. Users can upload 
                           Excel files and instantly visualize trends through interactive charts powered by Chart.js. This 
                           project showcases seamless collaboration, AI integration, and a user-friendly interface for 
                           efficient data management and decision-making.
                        </p>
                    </div>
                    
                    {/*code and links used add icons with links */}
                    <div className="flex justify-start gap-8 mt-6 text-3xl">
                        <a href="https://github.com/crash484/SageExcel" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                            <FaGithub />
                        </a>
                        <a href="sage-excel.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                            <TbWorldSearch />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}