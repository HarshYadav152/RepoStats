'use client';

import Link from 'next/link';
import { 
  Github, 
  Users, 
  GitPullRequest, 
  Star, 
  BarChart3, 
  Activity, 
  TrendingUp, 
  Download, 
  Shield, 
  Zap, 
  Globe, 
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Code,
  LayoutDashboard,
  LineChart,
  PieChart
} from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Contributor Analytics",
      description: "Deep dive into who makes your project tick. Track commit counts, active days, and overall impact."
    },
    {
      icon: <GitPullRequest className="w-6 h-6 text-green-400" />,
      title: "Pull Request Insights",
      description: "Monitor merge rates, identify key reviewers, and understand your repository's code review dynamics."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: "Interactive Charts",
      description: "Beautiful, responsive visualizations that make complex git data easy to understand at a glance."
    },
    {
      icon: <Download className="w-6 h-6 text-amber-400" />,
      title: "CSV Export",
      description: "Export all analytical data with a single click for further processing in Excel or custom tools."
    },
    {
      icon: <Zap className="w-6 h-6 text-rose-400" />,
      title: "Fast Performance",
      description: "Built on Next.js with optimized data fetching for lightning-fast analysis of even large repositories."
    },
    {
      icon: <Globe className="w-6 h-6 text-teal-400" />,
      title: "GitHub API Integration",
      description: "Securely connects directly to GitHub's GraphQL and REST APIs for real-time, accurate statistics."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Enter Repository URL",
      description: "Simply paste the link of any public GitHub repository you want to analyze."
    },
    {
      number: "02",
      title: "Analyze Repository",
      description: "Our engine fetches the latest data directly from GitHub in seconds."
    },
    {
      number: "03",
      title: "Explore Insights",
      description: "Navigate through interactive charts, leaderboards, and detailed contributor stats."
    }
  ];

  const useCases = [
    {
      title: "Open Source Maintainers",
      description: "Reward top contributors, identify inactive periods, and keep the community engaged.",
      icon: <Shield className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "Contributors",
      description: "Showcase your impact on major open source projects to peers and potential employers.",
      icon: <Code className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Engineering Managers",
      description: "Track team velocity, identify bottlenecks in PR reviews, and balance workloads.",
      icon: <Activity className="w-5 h-5 text-orange-400" />
    },
    {
      title: "Recruiters",
      description: "Verify candidate contributions and assess their actual impact on open source projects.",
      icon: <Users className="w-5 h-5 text-pink-400" />
    }
  ];

  const roadmapItems = [
    { status: 'completed', title: 'Contributor Analytics' },
    { status: 'completed', title: 'PR Tracking' },
    { status: 'completed', title: 'CSV Export' },
    { status: 'upcoming', title: 'Repository Health Score' },
    { status: 'upcoming', title: 'Bus Factor Analysis' },
    { status: 'upcoming', title: 'AI Insights' },
    { status: 'upcoming', title: 'Repository Comparison' },
  ];

  return (
    <div className="pt-14 pb-10">
      {/* Global Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600/10 to-teal-600/10 dark:from-green-600/20 dark:to-teal-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Hero Section --- */}
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            RepoStats v2.0 is now live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="text-gray-900 dark:text-white">Understand your </span>
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              GitHub repository
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 mb-10">
            Analyze contributions, track pull requests, and uncover deep insights into your open-source projects with beautiful, interactive visualizations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/repo-analytics"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-white transition-all duration-300 overflow-hidden shadow-lg shadow-blue-500/25 dark:shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                <span>Analyze Repository</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <a 
              href="https://github.com/HarshYadav152/repoStats"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-gray-700 dark:text-white transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </section>

        {/* --- Screenshots / Preview Section --- */}
        <section className="py-12 relative z-10" id="preview">
          <div className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-2xl shadow-2xl overflow-hidden group">
            {/* Mockup Top Bar */}
            <div className="h-12 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-4 flex-1 flex justify-center">
                <div className="h-6 w-64 bg-white dark:bg-white/5 rounded-md flex items-center px-3 border border-gray-200 dark:border-transparent">
                  <Globe className="w-3 h-3 text-gray-500 mr-2" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">github.com/facebook/react</span>
                </div>
              </div>
            </div>
            
            {/* Mockup Content */}
            <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Stats Row */}
              <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-24 rounded-xl bg-gradient-to-br from-gray-100 dark:from-white/5 to-transparent border border-gray-200 dark:border-white/5 flex flex-col justify-center px-4">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-white/10 mb-2"></div>
                    <div className="w-16 h-4 bg-gray-200 dark:bg-white/10 rounded"></div>
                  </div>
                ))}
              </div>
              
              {/* Main Chart */}
              <div className="lg:col-span-2 h-64 rounded-xl bg-gradient-to-br from-gray-100 dark:from-white/5 to-transparent border border-gray-200 dark:border-white/5 p-4 flex flex-col">
                <div className="w-32 h-5 bg-gray-200 dark:bg-white/10 rounded mb-4"></div>
                <div className="flex-1 flex items-end gap-2 px-2">
                  {[40, 70, 45, 90, 65, 80, 55, 100, 75, 60].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/50 to-purple-500/50 rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
              
              {/* Side Element */}
              <div className="h-64 rounded-xl bg-gradient-to-br from-gray-100 dark:from-white/5 to-transparent border border-gray-200 dark:border-white/5 p-4 flex flex-col">
                <div className="w-24 h-5 bg-gray-200 dark:bg-white/10 rounded mb-4"></div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-8 border-t-purple-500 border-r-blue-500 border-b-green-500 border-l-amber-500"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#0f172a] via-transparent to-transparent pointer-events-none"></div>
          </div>
        </section>

        {/* --- How It Works Section --- */}
        <section className="py-24" id="how-it-works">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Get comprehensive repository analytics in three simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-24 h-24 mx-auto bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 mb-6 relative z-10 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 dark:from-blue-500/20 to-purple-500/10 dark:to-purple-500/20 rounded-full blur-md"></div>
                  <span className="text-3xl font-black bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Features Section --- */}
        <section className="py-24 border-t border-gray-200 dark:border-white/5" id="features">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to understand your repository's development dynamics.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl backdrop-blur-sm bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors group shadow-sm dark:shadow-none">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Use Cases Section --- */}
        <section className="py-24 border-t border-gray-200 dark:border-white/5" id="use-cases">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Built for everyone in the ecosystem</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">Whether you're maintaining a massive open source library, or hiring for your engineering team, RepoStats gives you the data you need.</p>
              
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                      {useCase.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold text-lg">{useCase.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30">
                <div className="absolute inset-0 blur-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 z-0"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-[22px] p-8 border border-gray-200 dark:border-white/10 z-10 shadow-xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-blue-600 dark:text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Community Health</h3>
                      <p className="text-gray-500 dark:text-gray-400">At a glance</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                      <span className="text-gray-700 dark:text-gray-300">Active Contributors</span>
                      <span className="text-green-600 dark:text-green-400 font-mono font-bold">+12%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                      <span className="text-gray-700 dark:text-gray-300">Time to Merge</span>
                      <span className="text-blue-600 dark:text-blue-400 font-mono font-bold">-4 hrs</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                      <span className="text-gray-700 dark:text-gray-300">Code Reviews</span>
                      <span className="text-purple-600 dark:text-purple-400 font-mono font-bold">894</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Roadmap Section --- */}
        <section className="py-24 border-t border-gray-200 dark:border-white/5" id="roadmap">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Roadmap</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">See what we've built and what's coming next to RepoStats.</p>
          </div>
          
          <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-2xl">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-white/20 before:to-transparent">
              
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 bg-white dark:bg-gray-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {item.status === 'completed' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 bg-white dark:bg-gray-900 rounded-full" />
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                    )}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-sm transition-all hover:bg-gray-100 dark:hover:bg-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-bold ${item.status === 'completed' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-300'}`}>
                        {item.title}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'completed' ? 'bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/20' : 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20'
                      }`}>
                        {item.status === 'completed' ? 'Done' : 'Planned'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 dark:to-blue-900/20 rounded-3xl pointer-events-none"></div>
          <div className="relative z-10 backdrop-blur-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-12 md:p-20 text-center shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[80px]"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Ready to uncover insights?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Start analyzing your repositories today. It's completely free, open-source, and requires no signup.
            </p>
            
            <Link 
              href="/repo-analytics"
              className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Analyze Your Repository Now
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
