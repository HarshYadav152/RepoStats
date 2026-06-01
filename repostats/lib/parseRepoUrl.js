export default function parseRepoUrl(url) {
  if (!url || typeof url !== 'string') {
    throw new Error('Invalid URL: URL must be a non-empty string');
  }

  // Trim whitespace and remove trailing slashes
  let cleanUrl = url.trim().replace(/\/+$/, "");

  // Clean trailing .git if present
  if (cleanUrl.endsWith('.git')) {
    cleanUrl = cleanUrl.slice(0, -4);
  }

  // Regex to match github url patterns:
  // Supports:
  // https://github.com/owner/repo
  // http://github.com/owner/repo
  // github.com/owner/repo
  // git@github.com:owner/repo
  const githubRegex = /^(?:https?:\/\/)?(?:www\.)?github\.com[\/|:]([a-zA-Z0-9-_]+)\/([a-zA-Z0-9-_.]+)(?:\/.*)?$/;
  const match = cleanUrl.match(githubRegex);

  if (!match) {
    throw new Error('Invalid GitHub repository URL. Expected format: https://github.com/owner/repo');
  }

  return {
    owner: match[1],
    repo: match[2]
  };
}