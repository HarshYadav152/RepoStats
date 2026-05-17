# RepoStats - GitHub Repo Contribution Analytics

Analyze repository contributions with detailed insights into contributor activity, pull requests, and development patterns.

![RepoStats Banner](https://img.shields.io/badge/GitHub-RepoStats-blue?style=flat-square&logo=github)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-16+-brightgreen)](https://nodejs.org)

## Features

- 📊 **Contributor Analytics** - Visualize contributor statistics and activity patterns
- 🔍 **Detailed Insights** - Track merged PRs, contributions, and development trends
- 📈 **Interactive Charts** - Beautiful data visualization with Recharts
- 🔐 **GitHub API Integration** - Optional token support for higher API rate limits
- 📥 **Export Data** - Download contributor data in CSV format
- 🎨 **Modern UI** - Built with React and Tailwind CSS
- ⚡ **Fast Performance** - Next.js optimization and serverless API routes

## Tech Stack

- **Framework**: Next.js 16.1.4
- **Frontend**: React 19.2.3
- **Charts**: Recharts 3.6.0 & Chart.js 4.5.1
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Linting**: ESLint 9

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- A GitHub account (optional: personal access token for higher API limits)

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/RepoStats.git
   cd RepoStats/repostats
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.local.example .env.local
   ```
   Add your GitHub personal access token if you have one:
   ```env
   GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run linting
npm run lint
```

## Usage

1. Enter a GitHub repository URL in the format: `https://github.com/username/repository`
2. (Optional) Provide a GitHub Personal Access Token for higher API rate limits
3. Click "Analyze Contributors" to fetch and display analytics
4. View detailed statistics including:
   - Total contributors and contributions
   - Merged pull requests per contributor
   - Contribution distribution charts
   - Development activity timeline
5. Export contributor data to CSV for further analysis

### Example Repository URLs

- `https://github.com/facebook/react`
- `https://github.com/torvalds/linux`
- `https://github.com/microsoft/vscode`

## API Documentation

### POST `/api/gitstat`

Fetches repository statistics and contributor information.

**Request Body:**
```json
{
  "url": "https://github.com/username/repository",
  "GITHUB_TOKEN": "ghp_optional_token"
}
```

**Response:**
```json
{
  "success": true,
  "contributors": [
    {
      "username": "contributor",
      "avatar": "https://avatars.githubusercontent.com/...",
      "contributions": 42,
      "mergedPRs": 5,
      "githubUrl": "https://github.com/contributor",
      "type": "User"
    }
  ],
  "stats": {
    "totalContributions": 1000,
    "totalMergedPRs": 150,
    "totalContributors": 25,
    "avgContributionsPerUser": 40
  }
}
```

## Project Structure

```
repostats/
├── app/
│   ├── api/
│   │   └── gitstat/
│   │       └── route.js          # GitHub API integration
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Main analytics page
│   └── globals.css               # Global styles
├── components/
│   ├── Header.js                 # Header component
│   └── Footer.js                 # Footer component
├── lib/
│   ├── getAllRepoPages.js        # Pagination handler
│   └── parseRepoUrl.js           # URL parsing utility
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── ...
├── package.json
├── next.config.mjs
├── tailwind.config.mjs
└── eslint.config.mjs
```

## Contributing

We welcome contributions! Please read our Contributing Guide and Code of Conduct first.

### Quick Start for Contributors

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/RepoStats.git
   cd RepoStats/repostats
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Make Your Changes**
   - Follow the coding standards below
   - Test your changes locally
   - Update documentation as needed

5. **Commit Your Changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
   See Commit Guidelines below

6. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Use the pull request template
   - Provide a clear description
   - Link any related issues

### Coding Standards

- **Code Style**: Follow ESLint configuration
- **Formatting**: Use consistent indentation (2 spaces)
- **Components**: Use functional components with hooks
- **Naming**: Use camelCase for variables/functions, PascalCase for components
- **Comments**: Add meaningful comments for complex logic
- **Tests**: Write tests for new features (when applicable)

### Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>
<blank line>
<body>
<blank line>
<footer>
```

**Types:**
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that don't affect code meaning (formatting, missing semicolons, etc)
- `refactor:` Code change that neither fixes a bug nor adds a feature
- `perf:` Code change that improves performance
- `test:` Adding missing tests or correcting existing tests
- `chore:` Changes to build process, dependencies, or other maintenance tasks

**Examples:**
```bash
git commit -m "feat(api): add pagination support for contributors"
git commit -m "fix(chart): resolve tooltip positioning issue"
git commit -m "docs: update API documentation"
git commit -m "refactor: simplify data parsing logic"
```

### Pull Request Process

1. Update the README.md with any new features or changes
2. Update version numbers if applicable
3. Ensure all tests pass and linting succeeds
4. Request review from maintainers
5. Address any feedback or requested changes

### Reporting Issues

Found a bug? Please open an issue with:

- **Title**: Clear, descriptive title
- **Description**: What's the issue?
- **Steps to Reproduce**: How to replicate the bug
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, Node version, browser
- **Screenshots**: If applicable

### Feature Requests

Have an idea? Open a feature request with:

- **Title**: Concise feature description
- **Problem Statement**: Why is this needed?
- **Proposed Solution**: Your implementation idea
- **Alternatives Considered**: Other approaches

## Development Guidelines

### Local Development

```bash
# Install dependencies
npm install

# Run development server with hot reload
npm run dev

# Run linting check
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

### Debugging

- Use browser DevTools for frontend debugging
- Check the console for API errors
- Use GitHub API error responses for backend debugging

### Code Review Checklist

Before submitting a PR, ensure:

- [ ] Code follows project style guides
- [ ] ESLint passes without warnings
- [ ] Changes are well-documented
- [ ] No unnecessary dependencies added
- [ ] Performance impact is considered
- [ ] Backward compatibility maintained (if applicable)

## Troubleshooting

### API Rate Limiting

If you hit GitHub API rate limits:
1. Provide a GitHub personal access token
2. Tokens provide 5000 requests/hour instead of 60

### Build Issues

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port Already in Use

```bash
# Change port for development
npm run dev -- -p 3001
```

## Security

Please report security vulnerabilities responsibly. See SECURITY.md for details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [GitHub API](https://docs.github.com/en/rest) for repository data
- [Next.js](https://nextjs.org/) framework
- [React](https://react.dev/) library
- [Recharts](https://recharts.org/) for beautiful charts
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Roadmap

- [ ] Advanced filtering and sorting options
- [ ] Time-range analytics (e.g., contributions in last month)
- [ ] Performance metrics and insights
- [ ] Multiple repository comparison
- [ ] Webhook integration for real-time updates
- [ ] Dark mode theme
- [ ] Data caching for improved performance

## Support

For help and questions:
- Open a GitHub issue for bugs and feature requests
- Check [Discussions](https://github.com/yourusername/RepoStats/discussions) for Q&A
- Review [Documentation](https://github.com/yourusername/RepoStats/wiki) for guides

---

**Built with THINKING by [Harsh Yadav](https://github.com/harshyadav)**

**Made with [Next.js](https://nextjs.org/), [React](https://react.dev/), and [Recharts](https://recharts.org/)**