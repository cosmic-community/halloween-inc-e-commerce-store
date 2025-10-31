import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Halloween Inc',
  description: 'Learn about Halloween Inc, your trusted source for all things spooky since 1892. Discover our story and meet our team of Halloween enthusiasts.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-6xl mb-6 block">🎃</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Halloween Inc</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted source for all things spooky since 1892
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Halloween Inc began over a century ago in a small, dusty shop tucked away on the outskirts of Salem, Massachusetts. What started as a humble costume rental service has grown into the premier destination for Halloween enthusiasts worldwide.
            </p>
            <p>
              Our founder, Mortimer Frightful, had a vision: to bring the magic and mystery of Halloween to everyone, every day of the year. From classic monster costumes to elaborate haunted house decorations, we've been helping people embrace their spooky side for generations.
            </p>
            <p>
              Today, Halloween Inc continues to honor that legacy by offering the finest selection of Halloween products, from traditional favorites to cutting-edge creations. Whether you're planning an epic haunted house, searching for the perfect costume, or just want to add some spooky flair to your home, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Our Mission</h2>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
            <p className="text-xl text-gray-700 leading-relaxed">
              To make every day feel like Halloween by providing the most authentic, high-quality, and frighteningly fun products on the market. We believe everyone deserves to experience the thrill of a good scare and the joy of creative self-expression.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👻</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quality & Authenticity</h3>
              <p className="text-gray-600">
                Every product is carefully selected to ensure it meets our high standards for quality and spooky authenticity.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🦇</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Customer Obsession</h3>
              <p className="text-gray-600">
                Your Halloween dreams are our priority. We're here to help you create unforgettable spooky experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🕷️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community Spirit</h3>
              <p className="text-gray-600">
                We believe in bringing people together through the shared love of Halloween magic and mystery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-secondary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Our team of dedicated Halloween enthusiasts works year-round to bring you the best spooky products and experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-6xl">
                🧛
              </div>
              <h3 className="text-xl font-bold mb-2">Count Vladimir</h3>
              <p className="text-gray-300 text-sm mb-2">Chief Spooky Officer</p>
              <p className="text-gray-400 text-xs">
                Overseeing operations since 1892 (allegedly)
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-6xl">
                🧙‍♀️
              </div>
              <h3 className="text-xl font-bold mb-2">Morgana Hex</h3>
              <p className="text-gray-300 text-sm mb-2">Head of Product Magic</p>
              <p className="text-gray-400 text-xs">
                Curating the finest spooky selections
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-6xl">
                🧟
              </div>
              <h3 className="text-xl font-bold mb-2">Frank N. Stein</h3>
              <p className="text-gray-300 text-sm mb-2">Customer Experience Lead</p>
              <p className="text-gray-400 text-xs">
                Bringing our customers back to life (with service)
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-6xl">
                👻
              </div>
              <h3 className="text-xl font-bold mb-2">Casper Boo</h3>
              <p className="text-gray-300 text-sm mb-2">Community Haunt Manager</p>
              <p className="text-gray-400 text-xs">
                Building our frighteningly friendly community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Get Spooky?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our collections and find everything you need for an unforgettable Halloween experience.
          </p>
          <a
            href="/"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  )
}