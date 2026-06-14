'use client';

import Link from 'next/link';
import { 
  Github, 
  Activity, 
  Users, 
  GitPullRequest, 
  BarChart3, 
  Download, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Trophy,
  Briefcase,
  LineChart,
  Search,
  Code2,
  Sparkles,
  GitBranch,
  ShieldCheck
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen pt-16">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm shadow-sm transition-transform hover:scale-105">
            <Sparkles className="w-4 h-4" />
            <span>Discover deep insights into your repositories</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
            <span className="text-gray-900 dark:text-white">Uncover the Story</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Behind Your Code
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Analyze GitHub repositories with unparalleled clarity. Gain instant insights into contributor activity, merged pull requests, and project trends to boost productivity and recognize top talent.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/repo-analytics"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Activity className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Analyze Repository</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="https://github.com/HarshYadav152/repoStats"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto font-semibold text-gray-700 dark:text-gray-200 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:scale-105 hover:shadow-xl"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>View on GitHub</span>
            </a>
          </div>
        </section>

        {/* SCREENSHOT PREVIEW SECTION */}
        <section className="relative -mt-8 mb-32 z-10">
          <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] bg-white dark:bg-[#0f172a] group">
            {/* Browser Header Bar */}
            <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-white/10 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto bg-white dark:bg-gray-800 rounded-md px-4 py-1 text-xs text-gray-500 dark:text-gray-400 font-mono shadow-sm">
                repostats.geetasystems.co.in/repo-analytics
              </div>
            </div>
            {/* The Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-50 dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src="/repostats.png" 
                alt="RepoStats Dashboard Preview" 
                className="w-full h-full object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-20 border-t border-gray-200 dark:border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Get actionable repository insights in three simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 -z-10"></div>
            
            <div className="relative group p-8 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)]">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">1. Enter URL</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm leading-relaxed">
                Simply paste any public GitHub repository URL into the search bar. No installation required.
              </p>
            </div>

            <div className="relative group p-8 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_10px_30px_-15px_rgba(168,85,247,0.3)]">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">2. Analyze</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm leading-relaxed">
                Our engine fetches and crunches the data, processing commits, PRs, and contributor history in seconds.
              </p>
            </div>

            <div className="relative group p-8 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-white/10 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_10px_30px_-15px_rgba(34,197,94,0.3)]">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">3. Explore</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm leading-relaxed">
                Dive into beautiful, interactive charts and export the data to uncover the true story of the project.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful Analytics Features</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to understand open-source and private team dynamics.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group p-6 bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/5 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Contributor Analytics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Identify top performers and active contributors driving the project forward.</p>
            </div>
            
            <div className="group p-6 bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/5 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <GitPullRequest className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Pull Request Insights</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Track merged PRs to understand code velocity and collaboration patterns.</p>
            </div>

            <div className="group p-6 bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/5 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Interactive Charts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Visualize trends over time with dynamic, responsive data visualizations.</p>
            </div>

            <div className="group p-6 bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/5 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">CSV Export</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Download contributor data instantly for custom reporting and external analysis.</p>
            </div>

            <div className="group p-6 bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/5 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Native Integration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Seamlessly interacts with GitHub APIs, supporting optional tokens for higher limits.</p>
            </div>

            <div className="group p-6 bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/5 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Blazing Fast</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Built on Next.js with optimized functions for instantaneous results.</p>
            </div>
          </div>
        </section>

        {/* USE CASES & ROADMAP */}
        <section className="py-20 grid lg:grid-cols-2 gap-12 border-t border-gray-200 dark:border-white/5">
          {/* USE CASES */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Who is it for?</h2>
            <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-2xl bg-white/40 dark:bg-gray-800/30 border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-colors">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Open Source Maintainers</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monitor project health, identify emerging contributors to promote, and track community growth.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-white/40 dark:bg-gray-800/30 border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-colors">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Contributors</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Showcase your impact, visualize your coding journey, and find active projects to join.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-white/40 dark:bg-gray-800/30 border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-colors">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Engineering Managers</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Measure team velocity, spot bottlenecks in the review process, and balance workloads.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-white/40 dark:bg-gray-800/30 border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-colors">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Trophy className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Recruiters</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Discover top engineering talent by analyzing their real-world contributions and open-source impact.</p>
                  </div>
                </div>
            </div>
          </div>

          {/* ROADMAP */}
          <div id="roadmap">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Product Roadmap</h2>
            <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/80 dark:to-[#0f172a] rounded-3xl border border-gray-200 dark:border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/5 rounded-bl-full"></div>
              
              <div className="mb-8 relative z-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Completed
                </h3>
                <ul className="space-y-3">
                  {['Contributor Analytics', 'PR Tracking', 'CSV Export'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4 flex items-center gap-2">
                  <GitBranch className="w-4 h-4" /> Upcoming
                </h3>
                <ul className="space-y-3">
                  {['Repository Health Score', 'Bus Factor Analysis', 'AI Insights & Summaries', 'Repository Comparison'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 text-center">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden p-12 lg:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 -z-20"></div>
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent -z-10"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to decode your repository?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join developers and teams who use RepoStats to gain actionable insights into their open source and private codebases.
            </p>
            
            <Link 
              href="/repo-analytics"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 font-bold text-blue-900 bg-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Activity className="w-6 h-6 text-blue-600" />
              <span className="text-lg">Start Analyzing Now</span>
              <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
        
      </div>
    </div>
  );
}
