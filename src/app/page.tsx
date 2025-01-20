'use client'

import styles from './page.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import projects from './data/projects.json'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function App() {
  const [filter, setFilter] = useState<
    'All' | 'Personal Project' | 'Client Project'
  >('All')

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.type === filter)
  return (
    <>
      <Navbar />
      <section id="banner" className="bg-neutral-900">
        <div className="container mx-auto p-4">
          <div className="flex flex-col mb-4">
            <span
              className="mb-4 text-sm uppercase opacity-75"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              About
            </span>
            <p
              className="text-sm font-bold"
              style={{ fontFamily: 'var(--font-space-sans)' }}
            >
              I am a software engineer with a strong background in full-stack
              development. I have experience working with a variety of
              technologies including React, Node.js, and TypeScript. I am
              passionate about creating efficient and scalable web applications,
              and I enjoy solving complex problems and learning new skills. In
              my free time, I like to contribute to open-source projects and
              stay updated with the latest industry trends.
            </p>
          </div>

          <div className="grid grid-cols-[auto,1fr] gap-x-12 gap-y-4 mb-2">
            {/* Header Row */}
            <p
              className="text-sm uppercase opacity-75 mt-2"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Experience
            </p>
            <p
              className="text-sm uppercase opacity-75 mt-2"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Description
            </p>

            {/* Data Rows */}
            <div>
              <p
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-space-sans)' }}
              >
                Algonquin College
              </p>
              <p
                className="text-sm italic"
                style={{ fontFamily: 'var(--font-space-sans)' }}
              >
                2023 - Present
              </p>
            </div>
            <p
              className="text-sm font-bold"
              style={{ fontFamily: 'var(--font-space-sans)' }}
            >
              Enrolled in the Mobile Application Design and Development program,
              where I am learning about app development, user experience design,
              and software engineering.
            </p>

            <div>
              <p
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-space-sans)' }}
              >
                Intro to Programming
              </p>
              <p
                className="text-sm italic"
                style={{ fontFamily: 'var(--font-space-sans)' }}
              >
                2021 - 2022
              </p>
            </div>
            <p
              className="text-sm font-bold"
              style={{ fontFamily: 'var(--font-space-sans)' }}
            >
              Completed an introductory programming course where I learned the
              fundamentals of programming and software development.
            </p>
          </div>

          <div className="flex flex-col">
            <p
              className="mb-4 text-sm uppercase opacity-75 my-4"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              TECHNOLOGY
            </p>
            <ul className="flex flex-wrap gap-4">
              <li style={{ fontFamily: 'var(--font-space-sans)' }}>
                <a
                  href="https://developer.apple.com/swift/"
                  target="_blank"
                  className="hover:text-cyan-400 text-sm font-bold underline underline-offset-2"
                >
                  Swift
                </a>
                <sup className="font-mono leading-[0] text-[10px] font-light text-cyan-400">
                  *
                </sup>
              </li>
              <li style={{ fontFamily: 'var(--font-space-sans)' }}>
                <a
                  href="https://kotlinlang.org/"
                  target="_blank"
                  className="hover:text-cyan-400 text-sm font-bold underline underline-offset-2"
                >
                  Kotlin
                </a>
                <sup className="font-mono leading-[0] text-[10px] font-light text-cyan-400">
                  *
                </sup>
              </li>
              <li style={{ fontFamily: 'var(--font-space-sans)' }}>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  className="hover:text-cyan-400 text-sm font-bold underline underline-offset-2"
                >
                  TypeScript
                </a>
                <sup className="font-mono leading-[0] text-[10px] font-light text-cyan-400">
                  *
                </sup>
              </li>
              <li style={{ fontFamily: 'var(--font-space-sans)' }}>
                <a
                  href="https://react.dev/"
                  target="_blank"
                  className="hover:text-cyan-400 text-sm font-bold underline underline-offset-2"
                >
                  React
                </a>
                <sup className="font-mono leading-[0] text-[10px] font-light text-cyan-400">
                  *
                </sup>
              </li>
              <li style={{ fontFamily: 'var(--font-space-sans)' }}>
                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  className="hover:text-cyan-400 text-sm font-bold underline underline-offset-2"
                >
                  React Native
                </a>
                <sup className="font-mono leading-[0] text-[10px] font-light text-cyan-400">
                  *
                </sup>
              </li>
              <li style={{ fontFamily: 'var(--font-space-sans)' }}>
                <a
                  href="https://dotnet.microsoft.com/en-us/"
                  target="_blank"
                  className="hover:text-cyan-400 text-sm font-bold underline underline-offset-2"
                >
                  .NET
                </a>
                <sup className="font-mono leading-[0] text-[10px] font-light text-cyan-400">
                  *
                </sup>
              </li>
              <li style={{ fontFamily: 'var(--font-space-sans)' }}>
                <a
                  href="https://dotnet.microsoft.com/en-us/"
                  target="_blank"
                  className="hover:text-cyan-400 text-sm font-bold underline underline-offset-2"
                >
                  MySQL
                </a>
                <sup className="font-mono leading-[0] text-[10px] font-light text-cyan-400">
                  *
                </sup>
              </li>
              <li style={{ fontFamily: 'var(--font-space-sans)' }}>
                <a
                  href="https://dotnet.microsoft.com/en-us/"
                  target="_blank"
                  className="hover:text-cyan-400 text-sm font-bold underline underline-offset-2"
                >
                  MongoDB
                </a>
                <sup className="font-mono leading-[0] text-[10px] font-light text-cyan-400">
                  *
                </sup>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-neutral-900 pb-4">
        <div className={styles.rolling_skills}>
          <ul>
            <li>
              <Image
                src={'/assets/swift.svg'}
                alt="Swift"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/kotlin.svg'}
                alt="Kotlin"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/typescript.svg'}
                alt="TypeScript"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/react.svg'}
                alt="React"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/csharp.svg'}
                alt="C#"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/mysql.svg'}
                alt="C#"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/mongodb.svg'}
                alt="C#"
                width={50}
                height={50}
              />
            </li>
          </ul>

          <ul aria-hidden="true">
            {/* Duplicate for seamless looping */}
            <li>
              <Image
                src={'/assets/swift.svg'}
                alt="Swift"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/kotlin.svg'}
                alt="Kotlin"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/typescript.svg'}
                alt="TypeScript"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/react.svg'}
                alt="React"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/csharp.svg'}
                alt="C#"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/mysql.svg'}
                alt="C#"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src={'/assets/mongodb.svg'}
                alt="C#"
                width={50}
                height={50}
              />
            </li>
          </ul>
        </div>

        {/* <div className="flex flex-col my-4">
            <h3 className="text-3xl font-bold opacity-75 hover:opacity-100">
              Cross-platform Development
            </h3>
            <h3 className="text-3xl font-bold opacity-75 hover:opacity-100">
              Native Mobile Development
            </h3>
            <h3 className="text-3xl font-bold opacity-75 hover:opacity-100">
              Web Development
            </h3>
          </div> */}
      </section>

      <section id="projects" className="pb-4 bg-neutral-950">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center pb-8 pt-2">
            <h2
              className="text-xl font-semibold"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Projects
            </h2>
            <div className="flex items-center gap-4">
              <label
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                Filter:
              </label>
              <select
                value={filter}
                onChange={(e) =>
                  setFilter(
                    e.target.value as
                      | 'All'
                      | 'Personal Project'
                      | 'Client Project'
                  )
                }
                className="text-sm text-neutral-400 bg-neutral-900 hover:bg-neutral-800 py-2 px-4 rounded-md"
                style={{ fontFamily: 'var(--font-space-sans)' }}
              >
                <option value="All">All</option>
                <option value="Personal Project">Personal</option>
                <option value="Client">Client</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
            {filteredProjects.map((project) => (
              <div key={project.id} id={project.id} className="">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="bg-cover bg-center w-full rounded-t-lg"
                />
                <div className="flex flex-col justify-between text-white p-4 rounded-b-lg">
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-lg font-semibold"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-lg font-bold"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      {project.platform}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-neutral-400 text-md font-bold my-2"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      {project.year}
                    </p>
                    <p
                      className="text-sm font-bold"
                      style={{ fontFamily: 'var(--font-space-sans)' }}
                    >
                      {project.description}
                    </p>
                    <Link href={`/${project.id}`} className="flex justify-end">
                      <span
                        className="text-sm text-neutral-400 bg-neutral-900 hover:bg-neutral-800 py-2 px-8 rounded-md mt-4"
                        style={{ fontFamily: 'var(--font-space-sans)' }}
                      >
                        View Project
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
