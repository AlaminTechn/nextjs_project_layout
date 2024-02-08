This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More ========================================================

*  use Next.js and Turbo  - [https://nextjs.org/docs/architecture/turbopack](Turbo)
*  Try Out with Turbo Documnetation
*  Group Routes
*  Dynamic Routes
*  Parallel Routes
*  Intercepting Routes
*  Routes Handlers
*  Middleware
*  Redirecting
*  Rendering
*  Caching
*  Prefetching

## Next.js Documentation and Routing Documentation

```````
=======================  Dynamic Routes  ==============================
-- blog/c	{ slug: 'c' }


** # Catch-all Segments ======


app/shop/[...slug]/page.js	/shop/a/b/c	{ slug: ['a', 'b', 'c'] }
 ------ 

Catch-all Segments Optional ===

Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...folderName].

For example, app/shop/[...slug]/page.js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.


======================= Parallel Routes ==============================

** app/@auth/default.tsx

======================= Intercepting Routes ==========================



```````

