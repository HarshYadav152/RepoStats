import React from 'react';

export const metadata = {
  title: 'Cookie Policy | RepoStats',
  description: 'Learn about how RepoStats uses browser storage.',
};

export default function CookiePolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300">
      {/* Page Header */}
      <header className="mb-8 border-b pb-4 border-slate-200 dark:border-slate-800">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Cookie Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Last updated: June 2026
        </p>
      </header>

      <div className="space-y-8 text-base leading-7">
        <p>
          At <strong>RepoStats</strong>, we value your privacy and believe in complete transparency. 
          This policy details exactly what we store in your browser and, more importantly, what we do not.
        </p>

        {/* Section 1: Browser Storage Usage */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Browser Storage Usage
          </h2>
          <p className="mb-3">
            We do not use traditional tracking cookies. Instead, RepoStats may use standard web browser storage 
            (such as <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-sm">localStorage</code>) 
            exclusively for the following functional layout preferences:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Theme preference:</strong> To remember whether you prefer our dark mode or light mode interface.
            </li>
            <li>
              <strong>Optional UI state:</strong> To remember transient interface preferences (such as collapsed or expanded sidebars) so you don't have to readjust them on every visit.
            </li>
          </ul>
        </section>

        {/* Section 2: Important Clarifications */}
        <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Important Clarifications
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 font-bold">✓</span>
              <span><strong>No cookies</strong> are used for user authentication.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 font-bold">✓</span>
              <span><strong>GitHub tokens</strong> are <span className="underline decoration-red-500 decoration-2">NOT</span> stored in cookies or any form of permanent browser storage.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 font-bold">✓</span>
              <span><strong>No tracking</strong>, marketing, third-party analytics, or advertising cookies are utilized on this application.</span>
            </li>
          </ul>
        </section>

        <p className="text-sm text-slate-500 dark:text-slate-400 pt-4">
          If you have any questions or feedback regarding this transparency policy, feel free to open a public issue on our official GitHub repository.
        </p>
      </div>
    </main>
  );
}