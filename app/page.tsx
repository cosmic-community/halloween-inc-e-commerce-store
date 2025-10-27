import { getProducts, getCollections } from '@/lib/cosmic'
import { Product, Collection } from '@/types'
import ProductCard from '@/components/ProductCard'
import CollectionCard from '@/components/CollectionCard'
import Hero from '@/components/Hero'

export const revalidate = 60

export default async function HomePage() {
  const products = await getProducts() as Product[]
  const collections = await getCollections() as Collection[]

  return (
    <div>
      <Hero />
      
      {/* Collections Section */}
      {collections && collections.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Featured Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      {products && products.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              All Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}