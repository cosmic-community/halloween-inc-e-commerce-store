// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name: string;
    description: string;
    price: number;
    sku: string;
    product_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    category: {
      key: string;
      value: string;
    };
    in_stock: boolean;
  };
}

// Collection interface
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    collection_name: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    products?: Product[];
  };
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    rating: {
      key: string;
      value: string;
    };
    review_text: string;
    customer_name: string;
    product: Product;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
}

// Type guard for Product
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

// Type guard for Collection
export function isCollection(obj: CosmicObject): obj is Collection {
  return obj.type === 'collections';
}

// Type guard for Review
export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews';
}