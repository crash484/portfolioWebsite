import Image from "next/image"
import TextType from "./TextType"

export default function Profile(){
    return(
        <div className="flex flex-col align-middle  bg-earthGreen-100 mx-0.5 h-100 rounded-2xl">
            <div className="flex items-center justify-center mt-10">
                <div className="w-56 h-56 rounded-full relative overflow-hidden bg-card/20 backdrop-blur-sm border border-border/50 text-foreground hover:bg-card/30 transition-all duration-200">
                    <Image
                    src="/me.jpg"
                    alt="my photo"
                    fill
                    />
                </div>
            </div>
            <TextType className="text-center text-2xl"
                  text={["Hiii There", "Welcome to my website"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
            />
        </div>
    )
}
