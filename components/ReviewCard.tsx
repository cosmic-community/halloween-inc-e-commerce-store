import { Review } from '@/types'

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const rating = parseInt(review.metadata.rating.key)

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                index < rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        <span className="text-sm font-medium text-gray-900">
          {review.metadata.customer_name}
        </span>
      </div>
      <p className="text-gray-600 mb-4">
        {review.metadata.review_text}
      </p>
      {review.metadata.product && (
        <div className="text-sm text-gray-500">
          Product: <span className="font-medium text-gray-700">{review.metadata.product.title}</span>
        </div>
      )}
    </div>
  )
}