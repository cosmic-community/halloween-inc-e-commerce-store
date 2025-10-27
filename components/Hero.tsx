export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Halloween Inc! 🎃
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Discover the spookiest costumes, creepiest decorations, and most bewitching accessories for an unforgettable Halloween!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="#products" 
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </a>
          <a 
            href="#collections" 
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            View Collections
          </a>
        </div>
      </div>
    </section>
  )
}