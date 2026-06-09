export default function TermsOfServicePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300">
      <header className="mb-8 border-b pb-4 border-slate-200 dark:border-slate-800">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Last updated: June 2026
        </p>
      </header>

      <div className="space-y-8 text-base leading-7">
        <p>
          At <strong>RepoStats</strong>, we value your trust and strive to provide deep transparency. By accessing or using our application, you agree to comply with and be bound by the rules, limitations, and responsibilities outlined below.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            1. Service Usage
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>RepoStats is designed and provided as an analytics tool specifically for GitHub repositories.</li>
            <li>The data aggregation and analytical breakdowns are provided solely for informational and educational purposes.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            2. GitHub Token Security
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Personal Access Tokens provided by users are strictly used to authenticate client requests and fetch data via the public GitHub API.</li>
            <li>Tokens are entirely session-based; they are <strong>NOT</strong> stored, cached, or persisted on any server, database, or local browser storage.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}