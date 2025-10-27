# 🎃 Halloween Inc E-Commerce Store

![Halloween Inc Store](https://imgix.cosmicjs.com/2b06c800-b347-11f0-8dcc-651091f6a7c0-photo-1509557965875-b88c97052f0e-1761577868388.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A spooktacular Halloween e-commerce store built with Next.js 16 and Cosmic CMS. Browse costumes, decorations, accessories, and treats with an engaging, responsive shopping experience.

## Features

- 🎃 Dynamic product catalog with detailed product pages
- 👻 Curated Halloween collections (Classic Monsters, Haunted House Essentials)
- ⭐ Customer reviews and ratings system
- 🛒 Category filtering (Costumes, Decorations, Accessories, Candy & Treats)
- 📱 Fully responsive design optimized for all devices
- 🎨 Halloween-themed UI with orange and black color scheme
- ⚡ Fast image loading with imgix optimization
- 🔍 Product search and filtering capabilities

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68ff8ac536b30fc40490b62b&clone_repository=68ff8cd136b30fc40490b669)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for a Halloween e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> "Based on the content model I created for "Design a content model for a Halloween e-commerce store with products, collections, and customer reviews", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official SDK for API integration
- **Bun** - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- Bun installed on your system
- A Cosmic account with the Halloween store content model set up

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Products

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get a single product by slug
const { object: product } = await cosmic.objects
  .findOne({ type: 'products', slug: 'deluxe-vampire-cape' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Collections with Products

```typescript
// Get collections with related products
const { objects: collections } = await cosmic.objects
  .find({ type: 'collections' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes related products
```

### Fetching Reviews

```typescript
// Get reviews with related products
const { objects: reviews } = await cosmic.objects
  .find({ type: 'reviews' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes related product data
```

## Cosmic CMS Integration

This application uses three main content types from your Cosmic bucket:

### Products
- Product Name, Description, Price, SKU
- Multiple Product Images
- Category (Costumes, Decorations, Accessories, Candy & Treats)
- Stock Status

### Collections
- Collection Name and Description
- Featured Image
- Related Products (object relationship)

### Reviews
- Customer Name and Review Text
- Star Rating (1-5)
- Related Product (object relationship)

All content is managed through your Cosmic dashboard and fetched dynamically using the Cosmic SDK.

## Deployment Options

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Add environment variables in Netlify dashboard
4. Set build command: `bun run build`
5. Set publish directory: `.next`
6. Deploy

## Environment Variables

Make sure to set these in your deployment platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key

<!-- README_END -->