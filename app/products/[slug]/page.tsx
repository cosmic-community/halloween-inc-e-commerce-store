// app/products/[slug]/page.tsx
import { getProduct, getProductReviews } from '@/lib/cosmic'
import { Product, Review } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReviewCard from '@/components/ReviewCard'

export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProduct(slug) as Product | null

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.metadata.product_name} - Halloween Inc`,
    description: product.metadata.description.replace(/<[^>]*>/g, '').substring(0, 160),
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProduct(slug) as Product | null

  if (!product) {
    notFound()
  }

  const reviews = await getProductReviews(product.id) as Review[]

  const firstImage = product.metadata.product_images?.[0]

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
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {firstImage && (
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={`${firstImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                  alt={product.metadata.product_name}
                  width="600"
                  height="600"
                  className="w-full h-auto"
                />
              </div>
            )}
            {product.metadata.product_images && product.metadata.product_images.length > 1 && (
              <div className="grid grid-cols-4 gap-4 mt-4">
                {product.metadata.product_images.slice(1, 5).map((image, index) => (
                  <div key={index} className="bg-gray-100 rounded overflow-hidden">
                    <img
                      src={`${image.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                      alt={`${product.metadata.product_name} ${index + 2}`}
                      width="100"
                      height="100"
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {product.metadata.category.value}
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              {product.metadata.product_name}
            </h1>
            <div className="text-3xl font-bold text-primary mb-6">
              ${product.metadata.price.toFixed(2)}
            </div>
            
            <div 
              className="prose max-w-none mb-8 text-gray-600"
              dangerouslySetInnerHTML={{ __html: product.metadata.description }}
            />

            <div className="border-t border-gray-200 pt-6 mb-6">
              <p className="text-sm text-gray-500 mb-2">SKU: {product.metadata.sku}</p>
              <div className="flex items-center">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  product.metadata.in_stock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.metadata.in_stock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        {reviews && reviews.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Customer Reviews ({reviews.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}