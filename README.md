# Next.js Blog App

This is a small full-stack blog project built with **Next.js 14 App Router**, **Prisma**, and **Kinde Auth**.  
The goal of this project was to **practice conditional rendering,  server actions, and authentication ** with **Kinde**.


## Features

- Authentication with [Kinde](https://kinde.com)
- Conditional rendering based on user login state
- Create, edit, and delete blog posts through database
- Auth-protected routes for post creation and deletion
- Built using **Server Actions** (Next.js 14)
- Simple upvote button (disabled for authors)
- Tailwind CSS for styling

## Learning Goals

- Practice **conditional UI rendering**
- Understand **authentication** flow with Kinde
- Implement **server actions** in Next.js
- Work with **relational data** using Prisma
- Improve UX with real-time UI updates


## Technologies used

- Next.js [App Router](https://nextjs.org/docs/app)
- [Prisma + PostgreSQL](https://www.prisma.io/nextjs) 
- Kinde Auth (OAuth authentication)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [TypeScript](https://nextjs.org/docs/pages/api-reference/config/typescript)


## Getting Started

```bash
git clone https://github.com/yourusername/blog-app.git
cd blog-app
npm install
npx prisma generate
npx prisma db push
npm run dev
```
## Future Features

- Display `createdAt` and `updatedAt` timestamps for posts
- Improved and responsive UI for mobile/desktop
- Share post functionality (e.g., social links or copy URL)
- Comment system
- Post search and filtering



## Credits

Special thanks to [Youyube Video (BiteGrad)](https://www.youtube.com/watch?v=vwSlYG7hFk0) for the helpful content and inspiration.

