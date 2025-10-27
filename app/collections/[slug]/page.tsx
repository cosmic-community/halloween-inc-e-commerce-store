// app/collections/[slug]/page.tsx
import { getCollection } from '@/lib/cosmic'
import { Collection } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'

export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = await getCollection(slug) as Collection | null

  if (!collection) {
    return {
      title: 'Collection Not Found',
    }
  }

  return {
    title: `${collection.metadata.collection_name} - Halloween Inc`,
    description: collection.metadata.description || '',
  }
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = await getCollection(slug) as Collection | null

  if (!collection) {
    notFound()
  }

  const products = collection.metadata.products || []

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Collection Header */}
        <div className="mb-12">
          {collection.metadata.featured_image && (
            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <img
                src={`${collection.metadata.featured_image.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`}
                alt={collection.metadata.collection_name}
                width="1200"
                height="400"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {collection.metadata.collection_name}
          </h1>
          {collection.metadata.description && (
            <p className="text-xl text-gray-600 max-w-3xl">
              {collection.metadata.description}
            </p>
          )}
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products in this collection yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}