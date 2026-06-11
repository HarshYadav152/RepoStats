export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-16 text-slate-700 dark:text-slate-300">
      <header className="mb-6 sm:mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Last updated: June 2026
        </p>
      </header>

      <div className="space-y-6 sm:space-y-8 text-sm sm:text-base leading-relaxed sm:leading-7">
        <p>
          At <strong>RepoStats</strong>, your data privacy and control are paramount. This policy documents how we handle repository references, process data via the GitHub API, and secure authentication tokens.
        </p>

        {/* Section 1: Data Handling */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            1. Data Handling
          </h2>
          <p>Our platform processes the following scope of information to generate analytics dashboards:</p>
          <ul className="list-disc pl-5 space-y-2 sm:space-y-1">
            <li><strong>GitHub repository URLs:</strong> Entered directly by users to target metric evaluations.</li>
            <li><strong>GitHub API responses:</strong> Information retrieved from public scopes, including contributor activity, commit frequencies, and pull request data.</li>
            <li><strong>GitHub Personal Access Tokens:</strong> Processed temporarily to authenticate authorized API operations.</li>
          </ul>
        </section>

        {/* Section 2: Token Handling */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-amber-600 dark:text-amber-400">
            2. Token Handling (Important)
          </h2>
          <p>
            When utilizing a GitHub Personal Access Token (PAT) to analyze metrics or mitigate rate limiting limits, security is strictly managed:
          </p>
          <ul className="list-disc pl-5 space-y-3 sm:space-y-2">
            <li><strong>No Persistent Storage:</strong> Tokens are <strong>NOT</strong> stored or cached anywhere on our systems.</li>
            <li><strong>In-Memory Processing Only:</strong> Tokens are processed strictly in-memory during active client API communications and are cleared upon closing the session.</li>
            <li>
              <strong>Explicit Storage Restrictions:</strong> Tokens are guaranteed to <strong>never</strong> be saved or recorded inside:
              <ul className="list-[circle] pl-6 mt-2 space-y-1 font-mono text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800 overflow-x-auto">
                <li>localStorage</li>
                <li>cookies</li>
                <li>database storage structures</li>
                <li>application server logs</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}