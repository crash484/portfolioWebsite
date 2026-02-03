"use client"
import { FaInfinity } from "react-icons/fa"

export default function Footer() {
  return (
    <div
      className="
        w-full rounded-2xl shadow-lg mt-8
        flex flex-col gap-3 items-center justify-center
        px-0 py-4 h-auto
        md:flex-row md:justify-between md:items-center
        md:px-6 md:mt-10 md:h-20
      "
    >
      <div className="text-sm md:text-base text-center">
        Created by @shashwat
      </div>

      <div>
        <FaInfinity
          className="text-2xl md:text-3xl cursor-pointer"
          onClick={() =>
            window.scroll({
              top: 0,
              behavior: "smooth",
            })
          }
        />
      </div>
    </div>
  )
}
