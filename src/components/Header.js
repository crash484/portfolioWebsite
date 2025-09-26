import Image from "next/image"

export default function Header(){
    return(
        <div className="flex flex-row items-center bg-teal-400 z-999 sticky top-0">
            <Image 
            width={25}
            height={100}
            src="/logo.png"
            alt="my logo"
            ></Image>
            <div className="w-350"></div>
            <div className="w-75">Hi!</div>
            <div className="w-75">Projects</div>
            <div className="w-25">About</div>
        </div>
    )
}