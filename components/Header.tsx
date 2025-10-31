import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-secondary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <span className="text-3xl">🎃</span>
            <div>
              <h1 className="text-2xl font-bold text-primary">Halloween Inc</h1>
              <p className="text-xs text-gray-300">Your Spooky Shopping Destination</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/#collections" className="hover:text-primary transition-colors">
              Collections
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}