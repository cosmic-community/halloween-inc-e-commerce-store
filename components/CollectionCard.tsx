import Link from 'next/link'
import { Collection } from '@/types'

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const productCount = collection.metadata.products?.length || 0

  return (
    <Link href={`/collections/${collection.slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {collection.metadata.featured_image && (
          <div className="aspect-video bg-gray-100 overflow-hidden">
            <img
              src={`${collection.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
              alt={collection.metadata.collection_name}
              width="600"
              height="300"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
            {collection.metadata.collection_name}
          </h3>
          {collection.metadata.description && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {collection.metadata.description}
            </p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {productCount} {productCount === 1 ? 'product' : 'products'}
            </span>
            <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
              Explore
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}