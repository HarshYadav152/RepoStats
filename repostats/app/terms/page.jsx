import React from 'react';

export const metadata = {
  title: 'Terms of Service - RepoStats',
  description: 'Usage rules, token policies, and service limitations for RepoStats.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-[#161b22] border border-[#30363d] rounded-xl p-8 shadow-xl">
        
        <div className="border-b border-[#30363d] pb-6 mb-8">
          <h1 className="text-3xl font-bold text-[#f0f6fc] mb-2 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-[#8b949e]">Last updated: June 2026</p>
        </div>

        <div className="space-y-8">
          <section>
            <p className="text-base leading-relaxed text-[#e6edf3]">
              Welcome to RepoStats. By accessing or using our application, you agree to comply with and be bound by the following rules, limitations, and responsibilities outlined below.
            </p>
          </section>

          <section className="bg-[#0d1117] border border-[#21262d] rounded-lg p-5">
            <h2 className="text-xl font-semibold text-[#58a6ff] mb-3 flex items-center gap-2">
              📋 Service Usage
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#e6edf3]">
              <li>RepoStats is designed and provided as an analytics tool specifically for GitHub repositories.</li>
              <li>The tool and its analytical breakdowns are provided solely for informational and educational purposes.</li>
            </ul>
          </section>

          <section className="bg-[#0d1117] border border-[#21262d] rounded-lg p-5">
            <h2 className="text-xl font-semibold text-[#58a6ff] mb-3 flex items-center gap-2">
              🔑 GitHub Token Usage
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#e6edf3]">
              <li>Personal Access Tokens provided by users are strictly used to authenticate and fetch direct data via the GitHub API.</li>
              <li>Tokens are <span className="text-[#ff7b72] font-medium">NOT</span> stored, cached, or persisted on any backend database or server environment.</li>
              <li>To ensure strict security boundaries, users must re-enter their GitHub tokens manually per active session.</li>
            </ul>
          </section>

          <section className="bg-[#0d1117] border border-[#21262d] rounded-lg p-5">
            <h2 className="text-xl font-semibold text-[#ff7b72] mb-3 flex items-center gap-2">
              ⚠️ Limitations & Liability
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#e6edf3]">
              <li><span className="font-semibold text-[#f0f6fc]">No guarantee of data accuracy:</span> All analytical reporting directly depends on external responses retrieved from the GitHub API.</li>
              <li><span className="font-semibold text-[#f0f6fc]">No guarantee of uptime:</span> We do not guarantee continuous, uninterrupted availability or operational uptime of this tool.</li>
              <li><span className="font-semibold text-[#f0f6fc]">User Responsibility:</span> Users remain entirely responsible for the security, scope permissions, and lifecycle of their own generated GitHub tokens.</li>
            </ul>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-[#30363d] text-center text-xs text-[#8b949e]">
          Thank you for using RepoStats. If you have any issues, please open an issue on our GitHub repository.
        </div>

      </div>
    </div>
  );
}