import Image from "next/image"
import { FaGithub } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";
import GlassIcons from "./GlassIcons";


export default function Projects(){
    const items = [{
        icon:<FaGithub />
    },{
        icon:<TbWorldSearch />
    }]
    return(
        <div className="rounded bg-earthGreen-100 ">
            {/*this will be a card for a project image on the right and text on the left */}
            <div className="flex gap-1 border-2 border-stone-300 rounded relative pb-2 ">
                <div className="relative ">
                    <Image 
                    src="/me.jpg"
                    alt="for now nothing"
                    width={200}
                    height={200}
                    />
                </div>
                <div className="flex flex-col">
                    <div className=" text-xl">
                        {/*this will contain the text part */}
                        <p>
                            I love thinking and sharing those thoughts with the world
                            so i created this blog which allows me to do so and also add images and music
                        </p>
                    </div>
                    
                    {/*code and links used add icons with links */}
                    <div className="flex items-start">
                        <GlassIcons items={items} />
                    </div>
                </div>
            </div>

            <div className="flex gap-1 border-2 border-stone-300 rounded relative pb-2">
                <div className="relative ">
                    <Image 
                    src="/me.jpg"
                    alt="for now nothing"
                    width={200}
                    height={200}
                    />
                </div>
                <div className="flex flex-col">
                    <div className=" text-xl">
                        {/*this will contain the text part */}
                        <p>
                            I love thinking and sharing those thoughts with the world
                            so i created this blog which allows me to do so and also add images and music
                        </p>
                    </div>
                    
                    {/*code and links used add icons with links */}
                    <div className="flex gap-1 text-2xl">
                        <FaGithub />
                        <TbWorldSearch />
                    </div>
                </div>
            </div>

        </div>
    )
}