import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { TbWorldSearch } from "react-icons/tb"

export default function Projects() {
  return (
    <div className="rounded">

      {/* project 1 */}
      <div className="flex flex-col md:flex-row gap-4 relative px-0 py-4 md:p-6 md:pb-2">
        
        {/* image */}
        <div className="w-full h-56 md:w-100 md:h-50 relative overflow-hidden rounded-lg">
          <Image
            src="/blogDemo.png"
            alt="BlogPicture"
            fill
            className="object-cover"
          />
        </div>

        {/* content */}
        <div className="w-full md:w-300">
          <div className="text-base md:text-xl">
            <h1 className="font-bold mb-2">PersonalBlog</h1>
            <p>
              I love thinking and sharing those thoughts with the world
              so i created this blog which allows me to do so and also add images and music.
              It is a dynamic, full-stack platform built with Next.js and TypeScript,
              leveraging Supabase for content management and deployed on Vercel with
              optimized performance and smooth navigation.
            </p>
          </div>

          {/* links */}
          <div className="flex gap-6 mt-4 text-2xl md:text-3xl">
            <a
              href="https://shashwhat.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              <TbWorldSearch />
            </a>
          </div>
        </div>
      </div>

      {/* project 2 */}
      <div className="flex flex-col md:flex-row gap-4 relative px-0 py-4 md:p-6 md:pb-2">

        <div className="w-full h-56 md:w-100 md:h-50 relative overflow-hidden rounded-lg">
          <Image
            src="/SageExcel.png"
            alt="SageExcel png"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-300">
          <div className="text-base md:text-xl">
            <h1 className="font-bold mb-2">SageExcel</h1>
            <p>
              An intelligent Excel analysis tool leveraging AI to provide insights
              and feedback on spreadsheet data. Built with React.js, Node.js, and
              Express.js, it integrates MongoDB and Gemini API for smart analysis,
              with interactive visualizations powered by Chart.js.
            </p>
          </div>

          <div className="flex gap-6 mt-4 text-2xl md:text-3xl">
            <a
              href="https://github.com/crash484/SageExcel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://sage-excel.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              <TbWorldSearch />
            </a>
          </div>
        </div>
      </div>

      {/* project 3 */}
      <div className="flex flex-col md:flex-row gap-4 relative px-0 py-4 md:p-6 md:pb-2">

        <div className="w-full h-56 md:w-100 md:h-50 relative overflow-hidden rounded-lg">
          <Image
            src="/WebDesign.png"
            alt="WebDesign picture"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-300">
          <div className="text-base md:text-xl">
            <h1 className="font-bold mb-2">Design-System</h1>
            <p>
              A design system created to showcase my freelance offerings,
              including forms, layouts, buttons, and reusable UI components.
              It also includes a booking feature allowing clients to schedule
              calls directly.
            </p>
          </div>

          <div className="flex gap-6 mt-4 text-2xl md:text-3xl">
            <a
              href="https://web-design-website-orcin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              <TbWorldSearch />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}
