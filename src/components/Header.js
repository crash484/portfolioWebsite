import Image from "next/image"

export default function Header(){
    return(
        <div className="flex flex-row bg-teal-400 z-999 sticky top-0 gap-140">
            {/* container for image*/}
            <div className="basis-64 ">
                    <Image 
                    width={25}
                    height={100}
                    src="/logo.png"
                    alt="my logo"
                    />
            </div>

            {/*container for other icons */}
            <div className="basis-128 grid grid-cols-3">
                <div className=" p-3 w-auto text-center ">hi</div>
                <div className=" p-3 w-auto text-center ">Projects</div>
                <div className=" p-3 w-auto text-center ">about</div>

            </div>

        </div>
    )
}