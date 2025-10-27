import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstImage = product.metadata.product_images?.[0]

  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {firstImage && (
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img
              src={`${firstImage.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={product.metadata.product_name}
              width="400"
              height="400"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-4">
          <div className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium mb-2">
            {product.metadata.category.value}
          </div>
          <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
            {product.metadata.product_name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${product.metadata.price.toFixed(2)}
            </span>
            {product.metadata.in_stock && (
              <span className="text-xs text-green-600 font-medium">In Stock</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}