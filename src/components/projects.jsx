import Image from "next/image"
import { FaGithub } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";
import GlassIcons from "./GlassIcons";
import AnimatedContent from "./AnimatedContent"

export default function Projects(){
    const items = [{
        icon:<FaGithub />,
        link:null
    },{
        icon:<TbWorldSearch />,
        link:"https://sage-excel.vercel.app/"
    }]
    return(
        <div className="rounded bg-reddish-1 ">
            <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            initialOpacity={0.0}
            animateOpacity={true}
            scale={2}
            threshold={0.5}
            delay={0.4}
            >
            {/*this will be a card for a project image on the right and text on the left */}
            <div className="flex gap-1 relative p-6 pb-2 ">
                <div className="relative overflow-hidden ">
                    <Image 
                    src="/blogDemo.png"
                    alt="BlogPicture"
                    width={400}
                    height={200}
                    />
                </div>
                <div className="w-300">
                    <div className=" text-xl text-wrap">
                        {/*this will contain the text part */}
                        <p>
                            I love thinking and sharing those thoughts with the world
                            so i created this blog which allows me to do so and also add images and music
                        </p>
                    </div>
                    
                    {/*code and links used add icons with links */}
                    <div className="flex items-start">
                        <GlassIcons items={items}></GlassIcons>
                    </div>
                </div>
            </div>
        </AnimatedContent>

            <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            initialOpacity={0.0}
            animateOpacity={true}
            scale={2}
            threshold={0.5}
            delay={0.4}
            >
            <div className="flex gap-1 p-6 rounded relative pb-2">
                <div className="relative ">
                    <Image 
                    src="/me.jpg"
                    alt="for now nothing"
                    width={200}
                    height={200}
                    />
                </div>
                <div className="w-300">
                    <div className=" text-xl text-wrap">
                        {/*this will contain the text part */}
                        <p>
                            I love thinking and sharing those thoughts with the world
                            so i created this blog which allows me to do so and also add images and music
                        </p>
                    </div>
                    
                    {/*code and links used add icons with links */}
                    <div className="flex justify-start mt-20">
                        <GlassIcons className="mx-0" items={items} />
                    </div>
                </div>
            </div>
            </AnimatedContent>

        </div>
    )
}