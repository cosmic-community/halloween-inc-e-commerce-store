import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Halloween Inc',
  description: 'Learn about Halloween Inc, your trusted source for spooky costumes, decorations, and treats since our haunting began.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Halloween Inc 🎃
          </h1>
          <p className="text-xl text-gray-300">
            Your one-stop spooky shopping destination for all things Halloween
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Haunting Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Welcome to Halloween Inc, where every day feels like October 31st! Our journey began in a dusty old 
              attic filled with vintage costumes and cobweb-covered decorations. What started as a passion for all 
              things spooky has grown into your trusted source for Halloween magic.
            </p>
            <p className="text-gray-700 mb-4">
              We believe Halloween isn't just a holiday—it's a state of mind. Whether you're looking to transform 
              into a classic monster, deck out your home as a haunted mansion, or simply add some spooky fun to 
              your everyday life, we've got you covered with our carefully curated collections.
            </p>
            <p className="text-gray-700">
              From timeless classics like Dracula and Frankenstein to modern favorites, our products are selected 
              with both quality and scare-factor in mind. We're here to help you create unforgettable Halloween 
              memories, one ghoulish product at a time!
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Costumes</h3>
              <p className="text-gray-600">
                From classic monsters to trending characters, find your perfect transformation
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏚️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Decorations</h3>
              <p className="text-gray-600">
                Transform any space into a haunted house with our spooky decor
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessories</h3>
              <p className="text-gray-600">
                Complete your look with masks, props, and finishing touches
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🍬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Treats</h3>
              <p className="text-gray-600">
                Stock up on candy and treats for all your trick-or-treaters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Spooky Values</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🎃 Quality First</h3>
              <p className="text-gray-700">
                We carefully select every product to ensure it meets our high standards for quality and spookiness.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">👹 Customer Delight</h3>
              <p className="text-gray-700">
                Your satisfaction is our top priority. We're here to help make your Halloween unforgettable.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🦇 Creative Inspiration</h3>
              <p className="text-gray-700">
                We love seeing how our customers use our products to create amazing Halloween experiences.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🕷️ Community Spirit</h3>
              <p className="text-gray-700">
                Halloween brings people together, and we're proud to be part of your celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Spooky?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Browse our collections and find everything you need for a frightfully fun Halloween!
          </p>
          <a 
            href="/" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  )
}