# Installation Guide

This guide will help you set up RepoStats on your local machine for development and testing.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** package manager (npm comes with Node.js)
- **Git** - [Download Git](https://git-scm.com/)
- A **GitHub account** (optional: for higher API rate limits)

### Checking Prerequisites

```bash
node --version
npm --version
git --version
```

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/HarshYadav152/repoStats
cd RepoStats/repostats
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### 3. Set Up Environment Variables (Optional)

For higher GitHub API rate limits, create a GitHub Personal Access Token:

1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Generate a new token with `public_repo` scope
3. Copy the token

Create the environment file:
```bash
cp .env.local.example .env.local
```

Add your GitHub token:
```env
GITHUB_TOKEN=ghp_your_token_here
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts development server with hot reload |
| `npm run build` | Builds the app for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check code quality |

## Verification

Once the development server is running:

1. Open [http://localhost:3000](http://localhost:3000) in your browser
2. Enter a GitHub repository URL (e.g., `https://github.com/facebook/react`)
3. Click "Analyze Contributors"
4. You should see contributor statistics and charts

## Troubleshooting

### Port Already in Use

If port 3000 is occupied:
```bash
npm run dev -- -p 3001
```

### API Rate Limiting

If you encounter rate limit errors:
1. Add a GitHub Personal Access Token to `.env.local`
2. Tokens provide 5000 requests/hour instead of 60

### Build Issues

Clear cache and reinstall:
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Missing Environment File

If `.env.local.example` doesn't exist, create `.env.local` manually:
```env
# Optional: Add your GitHub token here
GITHUB_TOKEN=your_token_here
```

## Next Steps

- Read the [Architecture Overview](./architecture.md) to understand the project structure
- Check the [Folder Structure](./folder-structure.md) for detailed file organization
- Review the [API Documentation](./api.md) for endpoint details
- See [Contributing Guide](./contribution-guide.md) to start contributing