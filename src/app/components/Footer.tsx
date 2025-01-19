import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-neutral-900">
      <div className="container mx-auto p-4">
        <div className="pb-8">
          <h2
            className="text-xl font-semibold py-2"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Get in Touch.
          </h2>
          <p
            className="text-sm font-bold"
            style={{ fontFamily: 'var(--font-space-sans)' }}
          >
            I&apos;d love to help you create your next big idea.
          </p>
          <a
            href="mailto:alexanderhum@icloud.com"
            className="block w-full text-black bg-white font-bold py-2 px-4 rounded-md mt-4"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col pt-4 pb-2">
          <div className="flex gap-4 items-center mb-2">
            <span
              className="text-sm text-cyan-400 border border-cyan-400 px-2 py-1 rounded-xl"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              v2.0.0
            </span>
            <p
              className="text-xs uppercase opacity-75"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Last updated 19-01-2025
            </p>
          </div>
          <p
            className="text-lg font-semibold"
            style={{ fontFamily: 'var(--font-space-sans)' }}
          >
            Made with Next.js & Tailwind.
          </p>
          <span
            className="text-xs uppercase opacity-75 my-2"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Designed & developed by Alexander Hum @ 2025
          </span>
        </div>
        <div className="flex gap-4 pt-4 pb-4 border-t-2 border-gray-400">
          <a href="https://github.com/hum00058">
            <Image
              src="/assets/github.svg"
              alt="GitHub Logo"
              width={50}
              height={50}
            />
          </a>
          <a href="https://www.linkedin.com/in/alexander-hum-2710922a1">
            <Image
              src="/assets/linkedin.svg"
              alt="LinkedIn Logo"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
