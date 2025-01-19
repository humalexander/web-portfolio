import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-neutral-900 text-white">
      <nav className="container mx-auto p-4">
        <div className="flex justify-between items-center pb-2 border-b-2 border-neutral-500">
          <Link href="/">
            <span
              className="text-md hover:text-cyan-400"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Alexander Hum
            </span>
          </Link>
          <span
            className="text-sm"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Full-Stack Developer
          </span>
        </div>
      </nav>
    </header>
  )
}
