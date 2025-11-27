# ContactManager

A simple Next.js App Router project to manage contacts.

## Requirements
- Node.js 18+ (tested with Node v22.20.0)
- npm (or pnpm/yarn)

## Install
```bash
npm install
```

## Development
```bash
npm run dev
# If port 3000 is busy
npm run dev -- -p 3001
```
Open `http://localhost:3000` (or `http://localhost:3001`).

## Build + Start
```bash
npm run build
npm run start
```

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – run production server

## App Structure
```
src/app/
	_components/
		Navbar.tsx
	_data/
		db.json
	(auth)/
		login/
			page.tsx
			LoginForm.tsx
		register/
			page.tsx
			RegisterForm.tsx
	contact/
		page.tsx
		new/page.tsx
		edit/[id]/page.tsx
	contacts/page.tsx
	users/page.tsx
	layout.tsx
	page.tsx
```

## Routes
- `/` – Home
- `/login` – Login page
- `/register` – Register page
- `/contact` – Contacts index
- `/contact/new` – New contact
- `/contact/edit/[id]` – Edit contact by id
- `/contacts` – Lists contacts from `db.json`
- `/users` – Lists users from `db.json`

## Metadata
Global metadata set in `src/app/layout.tsx`. Per-page metadata defined in `login/register` pages. Use `generateMetadata` for dynamic routes.

## Notes
- If dev server refuses to connect, clear the Next cache:
```powershell
Remove-Item ".next" -Recurse -Force -ErrorAction SilentlyContinue
npm run dev -- -p 3001
```
- JSON data is imported from `src/app/_data/db.json`. For production, prefer API routes or a database.

## License
Proprietary – for personal use.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
