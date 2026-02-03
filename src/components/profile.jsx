import Image from "next/image"

export default function Profile({isDark}){
    return(
        /*remove height once done and give it hieght max */
        <div className="flex flex-col align-middle  mx-0.5 mb-5 h-100  rounded-2xl">
            <div className="flex items-center justify-center mt-5">
                <div className="w-56 h-56 rounded-lg relative overflow-hidden bg-card/20 backdrop-blur-sm border border-border/50 text-foreground hover:bg-card/30 transition-all duration-200">
                    <Image
                    src="/me.jpg"
                    alt="my photo"
                    fill
                    />
                </div>
            </div>
            <div className={`text-center text-xl ${isDark?"text-tertiary":"text-[#EDF1D6]"}`}>
                <p>Currently working on getting my aws certification</p>
            </div>
        </div>
    )
}
