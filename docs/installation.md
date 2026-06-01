# Installation Guide

This guide will help you set up RepoStats on your local machine for development and testing.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher recommended, minimum 16) - [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** or **bun** package manager (npm comes with Node.js)
- **Git** - [Download Git](https://git-scm.com/)
- A **GitHub account** (optional: personal access token for higher API limits)

### Checking Prerequisites

```bash
node --version
npm --version
git --version
```

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/KGFCH2/RepoStats.git
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

### 3. Set Up Environment Variables (Highly Recommended)

Without a Personal Access Token (PAT), the GitHub API rate limit is restricted to 60 requests per hour per IP address. Providing a token raises this limit to 5000 requests per hour.

#### How to generate a GitHub Token:
1. Go to [GitHub Settings > Developer settings > Personal access tokens (classic)](https://github.com/settings/tokens) or [Fine-grained personal access tokens](https://github.com/settings/personal-access-tokens/new).
2. Generate a new token with `public_repo` scope (classic) or read-only repository permissions for metadata (fine-grained).
3. Copy the token.

Create the local environment file:
```bash
cp .env.local.example .env.local
```

Add your GitHub token to `.env.local`:
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
| `npm run dev` | Starts Next.js development server with hot reload |
| `npm run build` | Builds the app for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check code quality and rules |

## Verification

Once the development server is running:

1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. Enter a GitHub repository URL (e.g., `https://github.com/facebook/react`).
3. (Optional) Enter your GitHub Token for unlimited requests.
4. Click "Analyze Contributors".
5. You should see contributor statistics, charts, and detailed data visualizations.

## Troubleshooting

### Next.js Image Component Whitelisting
To allow avatar images from GitHub to render correctly, the host domain `avatars.githubusercontent.com` must be whitelisted in your `next.config.mjs` config file. This is configured by default:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
      pathname: '/**',
    },
  ],
}
```
If you encounter errors rendering images from other providers, ensure they are added to `remotePatterns`.

### Port Already in Use
If port 3000 is occupied:
```bash
npm run dev -- -p 3001
```

### API Rate Limiting
If you encounter 403 Forbidden rate limit errors:
1. Ensure your GitHub Personal Access Token is accurately copied to your `.env.local` file.
2. Verify that you have uncommented and set the token in your `.env.local` parameters.

### Build Issues
If Next.js compilation fails:
```bash
# Delete build folders and reinstall
rm -rf node_modules .next
npm install
npm run build
```

## Next Steps

- Read the [Architecture Overview](./architecture.md) to understand the project structure
- Check the [Folder Structure](./folder-structure.md) for detailed file organization
- Review the [API Documentation](./api.md) for endpoint details
- See [Contributing Guide](./contribution-guide.md) to start contributing