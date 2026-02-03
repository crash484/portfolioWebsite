"use client"
import { DivideSquare } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }
  {/*2 function to increment and decrement*/}

  const images = [{ src: "/me.jpg" }, { src: "/blogDemo.png" }, { src: "/SageExcel.png" }]

  return (
    <div className="flex flex-col items-center w-full h-fit px-0 py-4 md:p-0.5">

      {/*few pictures of me in a nice format*/}
      {/* <div className="relative w-96 h-96 overflow-hidden rounded-lg">
          ...
      </div> */}

      {/*text about me*/}
      <div
        className="
          w-full max-w-3xl
          text-base leading-relaxed
          px-4 py-4
          md:text-lg md:px-25 md:py-25
          space-y-4
        "
      >
        <b className="underline block">Shashwat Jain</b>

        <p>
          Hello. I’m a Computer Science student at <strong>VIT</strong> and a{" "}
          <strong>Fullstack Developer</strong>. Beyond coding, I love to study{" "}
          <em>psychology, philosophy, history, writing, reading</em>, and{" "}
          <em>design</em>. I love exploring how art, logic, and human behavior
          intersect.
        </p>

        <p>
          My professional focus lies in <strong>Web Development</strong>,{" "}
          <strong>Cloud Computing</strong>, and <strong>Design</strong>.
        </p>

        <p>
          Here’s my <a href="#">github</a>, <a href="#">linkedin</a>, and{" "}
          <a href="#">email</a>.
        </p>

        <p>
          <strong>Some takes on life:</strong> Always try to grow, but in that
          effort don’t forget yourself. Remember — suffering isn’t noble. Great
          art = lots of exposure. Be selective, be confident.
        </p>

        <p>
          <strong>Goal for the year:</strong> Create with focus, live with
          intention, and keep learning.
        </p>

        <h2 className="text-lg md:text-xl font-semibold pt-2">
          Monthly Suggestions:
        </h2>

        <p className="space-y-1">
          <strong>Article you should read:</strong>{" "}
          <a href="https://populationmatters.org/news/2025/07/earth-overshoot-day-we-are-in-debt-to-our-planet/">
            We are in debt to our planet
          </a>
          <br />
          <strong>Podcast you should Listen:</strong>{" "}
          <a href="https://open.spotify.com/episode/5s1wf4sUEr8wrl39WlyMIf?si=2a6fc35b15514c1b">
            Shia LeBeouf
          </a>
          <br />
          <strong>Album you should listen to:</strong>{" "}
          <a href="https://open.spotify.com/album/7xYiTrbTL57QO0bb4hXIKo?si=w7PyPgl-RCmKjjAWmrvIDw">
            Lust For life
          </a>
          <br />
          <strong>Book you should read:</strong>{" "}
          <a href="https://www.goodreads.com/book/show/22529379-a-higher-form-of-killing?ac=1&from_search=true&qid=qbm5dCi2z6&rank=1">
            Higher form of killing - Diana Preston
          </a>
          <br />
          <strong>Movie you should watch:</strong>{" "}
          <a href="https://letterboxd.com/film/green-book/">The Green Book</a>
        </p>

        <p>Anyway, here’s a quote I love:</p>

        <blockquote className="border-l-2 pl-4 italic opacity-80">
          “When one has no one, nowhere else one can go! For every man must have
          somewhere to go.”
          <br />— Fyodor Dostoevesky
        </blockquote>

        <div className="pt-2 space-y-2">
          <p>You can reach out to me here:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="https://www.linkedin.com/in/shashwat-jain-0827a8251/"
                target="_blank"
              >
                <strong>LinkedIn</strong>
              </a>
            </li>
            <li>
              <a href="https://github.com/crash484" target="_blank">
                <strong>GitHub</strong>
              </a>
            </li>
            <li>
              <a href="mailto:jshashwat032@gmail.com">
                <strong>Email</strong>
              </a>
            </li>
            <li>
              Here is my{" "}
              <a
                href="https://drive.google.com/file/d/1-exPNEKhDBulBboIyNcpxxLUWeqXfR4i/view?usp=drive_link"
                target="_blank"
              >
                <b>Resume</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
