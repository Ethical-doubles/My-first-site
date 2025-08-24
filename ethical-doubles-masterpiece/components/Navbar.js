import Link from 'next/link'
export default function Navbar(){
  return (
    <header className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/"><a className="font-bold text-lg text-emerald-300">Ethical Doubles</a></Link>
        <nav className="space-x-4">
          <Link href="/talent"><a className="hover:underline">Talent</a></Link>
          <Link href="/hire"><a className="hover:underline">Hire</a></Link>
          <Link href="/apply"><a className="hover:underline">Apply</a></Link>
          <Link href="/about"><a className="hover:underline">About</a></Link>
        </nav>
      </div>
    </header>
  )
}
