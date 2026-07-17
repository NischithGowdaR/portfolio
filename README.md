# Nischith Gowda R — Portfolio

A responsive personal portfolio website for **Nischith Gowda R**, a full-stack developer and AI enthusiast. It presents featured projects, technical skills, education, certificates, achievements, and contact details in a polished dark-themed interface.

## Highlights

- Responsive single-page portfolio with smooth section navigation
- Featured projects with direct GitHub links
- Skills, education, awards, and language proficiency sections
- Downloadable/viewable certificate documents
- Contact links for email, LinkedIn, and GitHub
- Production analytics through Vercel Analytics

## Built With

- [Next.js](https://nextjs.org/) 16 and React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons
- Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- npm (included with Node.js)

### Installation

```bash
git clone <your-repository-url>
cd portfolio-creation
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Run the production server after building. |
| `npm run lint` | Run ESLint across the project. |

## Project Structure

```text
app/                 # Next.js app entry point, layout, and global styles
components/          # Portfolio sections and reusable UI components
lib/                 # Shared utilities
public/              # Profile, achievement, icon, and certificate assets
```

## Customization

Portfolio content is organized by section in `components/`:

- `hero.tsx` — introduction and primary calls to action
- `projects.tsx` — featured projects and repository links
- `skills.tsx`, `education.tsx`, `certificates.tsx`, `achievements.tsx` — profile details
- `contact.tsx` — contact and social links

Replace the personal details, project data, and files in `public/` to adapt the site for another portfolio.

## Deployment

This project can be deployed directly on [Vercel](https://vercel.com/new). Import the repository, keep the detected Next.js settings, and deploy.

## Contact

- Email: [nischitgowdar71@gmail.com](mailto:nischitgowdar71@gmail.com)
- LinkedIn: [nischith-gowda-r](https://www.linkedin.com/in/nischith-gowda-r)
- GitHub: [NischithGowdaR](https://github.com/NischithGowdaR)
