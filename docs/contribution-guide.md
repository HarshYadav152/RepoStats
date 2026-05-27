# Contribution Guide

Thank you for your interest in contributing to RepoStats! This guide will help you get started with contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## Code of Conduct

Please review our [Code of Conduct](../CODE_OF_CONDUCT.md) before contributing. By participating, you are expected to uphold this code.

## Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/yourusername/RepoStats.git
git remote add upstream https://github.com/HarshYadav152/repoStats
cd RepoStats/repostats
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Start Development Server

```bash
npm run dev
```

## Development Workflow

### Local Development Commands

```bash
# Run development server with hot reload
npm run dev

# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

### Testing Your Changes

1. Start the development server: `npm run dev`
2. Test your changes at [http://localhost:3000](http://localhost:3000)
3. Run linting: `npm run lint`
4. Ensure no errors or warnings

## Coding Standards

### Code Style

- Use 2 spaces for indentation
- Follow ESLint configuration (auto-fix with `npm run lint -- --fix`)
- Use functional components with React hooks
- Use camelCase for variables and functions
- Use PascalCase for components

### React Best Practices

```javascript
// Functional component with hooks
import { useState } from 'react';

export default function Component({ prop }) {
  const [state, setState] = useState(initialValue);
  
  return (
    <div className="container">
      {/* JSX content */}
    </div>
  );
}
```

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Keep styles in the same file as components

### File Organization

- Place components in `components/`
- Place API routes in `app/api/`
- Place utility functions in `lib/`

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>
```

### Commit Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only changes |
| `style` | Formatting, missing semicolons, etc. |
| `refactor` | Code refactoring |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |

### Examples

```bash
git commit -m "feat: add export to CSV functionality"
git commit -m "fix: resolve chart tooltip positioning"
git commit -m "docs: update README with new examples"
git commit -m "style: format code with eslint --fix"
```

## Pull Request Process

### 1. Before Submitting

- [ ] Code follows project style guides
- [ ] ESLint passes without warnings
- [ ] Changes are well-documented
- [ ] No unnecessary dependencies added
- [ ] All tests pass (if applicable)
- [ ] Documentation updated for new features

### 2. Create Pull Request

1. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a PR on GitHub using the template
3. Fill out the PR description with:
   - What changes were made
   - Why the changes were needed
   - How to test the changes
   - Screenshots (if UI changes)

### 3. PR Template

```markdown
## Description
Brief description of changes

## Related Issue
Fixes #123

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update

## How Has This Been Tested?
Describe test steps

## Screenshots
(If applicable)
```

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Title**: Clear, descriptive title
- **Description**: What's the issue?
- **Steps to Reproduce**: How to replicate
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, Node version, browser
- **Screenshots**: If applicable

### Feature Requests

When requesting features:

- **Title**: Concise description
- **Problem Statement**: Why is this needed?
- **Proposed Solution**: Your implementation idea
- **Alternatives Considered**: Other approaches

## Communication

- Use GitHub issues for bugs and features
- Use GitHub discussions for questions and general discussion
- Be respectful and constructive in all interactions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
