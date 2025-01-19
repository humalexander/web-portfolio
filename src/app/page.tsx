import styles from './page.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import projects from './data/projects.json'

import Image from 'next/image'
import Link from 'next/link'

export default function App() {
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
          <div className="flex gap-8 mb-2">
            <div>
              <p
                className="text-sm uppercase opacity-75 my-4"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                Experience
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex flex-col">
                  <span
                    className="text-sm font-bold"
                    style={{ fontFamily: 'var(--font-space-sans)' }}
                  >
                    Algonquin College
                  </span>
                  <span
                    className="text-sm font-bold min-w-32"
                    style={{ fontFamily: 'var(--font-space-sans)' }}
                  >
                    2023 - Present
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <p
                className="text-sm uppercase opacity-75 my-4"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                Description
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex flex-col">
                  <span
                    className="text-sm font-bold"
                    style={{ fontFamily: 'var(--font-space-sans)' }}
                  >
                    Enrolled in the Mobile Application Design and Development
                    program, I learned both front-end and back-end development.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <p
              className="mb-4 text-sm uppercase opacity-75 my-4"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              TECHNOLOGY
            </p>
            <ul className="flex flex-wrap gap-4">
              <li
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-space-sans)' }}
              >
                Swift
              </li>
              <li
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-space-sans)' }}
              >
                Kotlin
              </li>
              <li
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-space-sans)' }}
              >
                TypeScript
              </li>
              <li
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-space-sans)' }}
              >
                React
              </li>
              <li
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-space-sans)' }}
              >
                React Native
              </li>
              <li
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-space-sans)' }}
              >
                Flutter
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-neutral-900">
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
                src={'/assets/javascript.svg'}
                alt="JavaScript"
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
                src={'/assets/flutter.svg'}
                alt="Flutter"
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
                src={'/assets/javascript.svg'}
                alt="JavaScript"
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
                src={'/assets/flutter.svg'}
                alt="Flutter"
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
          <h2
            className="text-xl font-semibold pb-8 pt-2"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
            {projects.map((project) => (
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
                        className="text-sm text-neutral-400 bg-neutral-800 hover:bg-neutral-500 uppercase py-2 px-8 rounded-md mt-4"
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
      <div className="sticky bottom-0 -z-20">
        <Footer />
      </div>
    </>
  )
}
