import Image from "next/image"

export default function Profile(){
    return(
        <div className="flex flex-col align-middle  bg-earthGreen-100 mx-0.5 h-100 rounded-2xl">
            <div className="flex items-center justify-center mt-10">
                <div className="w-56 h-56 rounded-full bg-background relative overflow-hidden">
                    <Image
                    src="/me.jpg"
                    alt="my photo"
                    fill
                    />
                </div>
            </div>
            <div className="">
                <p className="text-center">
                    hi my name is shashwat jain
                </p>
            </div>
        </div>
    )
}
