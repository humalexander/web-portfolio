import { useEffect, useState } from 'react'
import { getBlogs } from '../data/blogs'
import Image from 'next/image'
import Link from 'next/link'

export default function Blogs() {
  const [info, setInfo] = useState()
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const [info, data] = await getBlogs()
        setInfo(info)
        setBlogs(data)
      } catch (err) {
        console.error('Error fetching blogs:', err)
      }
    }

    loadBlogs()
  }, [])

  return (
    <section id="blogs" className="bg-neutral-900 py-8 px-4">
      <div className="container mx-auto">
        <div id="blogs-header">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            My Blogs
          </h2>
        </div>
        {blogs.length === 0 ? (
          <p className="text-neutral-400">Loading blog posts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((article) => (
              <div
                key={article.guid}
                className="bg-neutral-800 p-4 rounded-lg shadow-md"
              >
                <div className="w-full flex flex-col justify-between h-full">
                  <div>
                    <p
                      className="text-sm font-bold mb-2"
                      style={{ fontFamily: 'var(--font-space-sans)' }}
                    >
                      {article.pubDate.split(' ')[0]}
                    </p>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: 'var(--font-space-sans)' }}
                    >
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex flex-row gap-2 overflow-x-scroll max-w-full whitespace-nowrap scrollbar-hide">
                    {article.categories.map((category) => (
                      <p
                        key={category}
                        className="text-xs font-semibold bg-cyan-500 rounded-md p-1"
                        style={{ fontFamily: 'var(--font-space-sans)' }}
                      >
                        {category.replace('-', ' ').toUpperCase()}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={article.link}
                    target="_blank"
                    className="mt-4 flex justify-end items-center"
                  >
                    <p className="hover:text-cyan-400 text-sm font-bold underline underline-offset-2">
                      Read More
                    </p>
                    <sup className="font-mono leading-[0] text-[10px] font-light text-cyan-400">
                      *
                    </sup>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
