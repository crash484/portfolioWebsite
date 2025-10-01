import Image from "next/image"

export default function Header(){
    return(
        <div className="flex flex-row bg-reddish-1 z-999 sticky top-0 gap-140 px-10 pb-3  mx-0.5 mb-10 rounded-2xl">
            {/* container for image*/}
             
            <div className="basis-64 mr-50">
                    <Image 
                    width={25}
                    height={100}
                    src="/logo.png"
                    alt="my logo"
                    />
            </div>


            {/*container for other icons */}
            <div className="basis-128 grid grid-cols-3">
                <div className=" p-3 w-auto text-center font-display text-red-300 hover:bg-card/50 transition-all duration-500 rounded-2xl ">heyaa!</div>
                <div className=" p-3 w-auto text-center font-display hover:bg-card/50 transition-all duration-500 rounded-2xl">Projects</div>
                <div className=" p-3 w-auto text-center font-display hover:bg-card/50 transition-all duration-500 rounded-2xl">about</div>
            </div>
        </div>
    )
}