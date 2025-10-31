import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Halloween Inc</h3>
            <p className="text-gray-300 text-sm">
              Your one-stop shop for all things spooky! From classic monster costumes to haunted house decorations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/#collections" className="hover:text-primary transition-colors">Collections</Link></li>
              <li>Costumes</li>
              <li>Decorations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li>Contact Us</li>
              <li>Shipping Info</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Halloween Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}