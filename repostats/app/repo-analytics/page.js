'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Github, Users, GitPullRequest, Star, Code, Activity, TrendingUp, Download, Shield, Zap, Globe, ExternalLink } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function GitHubContributors() {
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('');
  const [githubToken, setGithubToken] = useState('');
  
  const { theme } = useTheme() || { theme: 'dark' };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const handleFetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/gitstat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, GITHUB_TOKEN: githubToken }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.details || 'Failed to fetch repository data');
      }

      setApiResponse(data);

    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    if (!apiResponse?.contributors.length) return;

    const headers = ['Username', 'Contributions', 'Merged PRs', 'Avatar URL', 'GitHub URL', 'Type'];
    const csvRows = [
      headers.join(','),
      ...apiResponse.contributors.map(c => [
        c.username,
        c.contributions,
        c.mergedPRs,
        c.avatar,
        c.githubUrl,
        c.type
      ].join(','))
    ];

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${apiResponse.repoStats.repoName}_contributors.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="py-10">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/5 to-teal-500/5 dark:from-green-500/10 dark:to-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="relative backdrop-blur-xl bg-white/80 dark:bg-gradient-to-b dark:from-white/5 dark:to-white/10 rounded-3xl border border-gray-200 dark:border-white/20 shadow-lg dark:shadow-2xl p-4 mb-8">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur opacity-30 pointer-events-none"></div>

          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="relative p-4 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 rounded-2xl shadow-lg">
                    <Github className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
                    GitHub Repo Contributors Analytics
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Analyze repository contributions with detailed insights</p>
                </div>
              </div>
            </div>

            {/* Input Section */}
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                    <Globe className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2" />
                    GitHub Repository URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://github.com/username/repository"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full backdrop-blur-sm bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                    <Shield className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    GitHub Token (Optional)
                  </label>
                  <input
                    type="password"
                    placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                    value={githubToken}
                    onChange={(e) => setGithubToken(e.target.value)}
                    className="w-full backdrop-blur-sm bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleFetchData}
                  disabled={isLoading || !url}
                  className="group relative flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-white transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative flex items-center">
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                        <span>Fetching Data...</span>
                      </>
                    ) : (
                      <>
                        <Activity className="w-5 h-5 mr-2" />
                        <span>Analyze Contributors</span>
                      </>
                    )}
                  </div>
                </button>

                {apiResponse?.contributors.length > 0 && (
                  <button
                    onClick={exportToCSV}
                    className="group relative flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-gray-700 dark:text-white transition-all duration-300 overflow-hidden backdrop-blur-sm bg-white dark:bg-gradient-to-br dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:border-white/20 shadow-sm dark:shadow-none"
                  >
                    <div className="relative flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      <span>Export CSV</span>
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Repository Info Banner */}
            {apiResponse?.repoStats && (
              <div className="mb-6 p-4 rounded-xl backdrop-blur-sm bg-blue-50/80 dark:bg-gradient-to-r dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-900/30 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Repository</p>
                      <p className="text-gray-900 dark:text-white font-semibold">
                        {apiResponse.repoStats.owner}/{apiResponse.repoStats.repoName}
                      </p>
                    </div>
                  </div>
                  <a
                    href={apiResponse.repoStats.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                  >
                    <span className="text-sm">View on GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* Stats Cards */}
            {apiResponse?.repoStats && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="backdrop-blur-sm bg-white dark:bg-gradient-to-br dark:from-blue-900/30 dark:to-purple-900/20 rounded-2xl border border-gray-200 dark:border-blue-900/30 p-6 shadow-sm dark:shadow-none">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Contributions</p>
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-300">{apiResponse.repoStats.totalContributions}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-gradient-to-r dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-100 dark:border-transparent">
                      <Code className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-sm bg-white dark:bg-gradient-to-br dark:from-green-900/30 dark:to-teal-900/20 rounded-2xl border border-gray-200 dark:border-green-900/30 p-6 shadow-sm dark:shadow-none">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Active Contributors</p>
                      <p className="text-3xl font-bold text-green-600 dark:text-green-300">{apiResponse.repoStats.activeContributors}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-green-50 dark:bg-gradient-to-r dark:from-green-500/20 dark:to-teal-500/20 border border-green-100 dark:border-transparent">
                      <Users className="w-6 h-6 text-green-500 dark:text-green-400" />
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-sm bg-white dark:bg-gradient-to-br dark:from-amber-900/30 dark:to-orange-900/20 rounded-2xl border border-gray-200 dark:border-amber-900/30 p-6 shadow-sm dark:shadow-none">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Merged PRs</p>
                      <p className="text-3xl font-bold text-amber-600 dark:text-amber-300">{apiResponse.authorStats.totalMergedPRs}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-50 dark:bg-gradient-to-r dark:from-amber-500/20 dark:to-orange-500/20 border border-amber-100 dark:border-transparent">
                      <GitPullRequest className="w-6 h-6 text-amber-500 dark:text-amber-400" />
                    </div>
                  </div>
                </div>

                {apiResponse.repoStats.topContributor && apiResponse.repoStats.topContributor !== "HarshYadav152" && (
                  <div className="backdrop-blur-sm bg-white dark:bg-gradient-to-br dark:from-rose-900/30 dark:to-pink-900/20 rounded-2xl border border-gray-200 dark:border-rose-900/30 p-6 shadow-sm dark:shadow-none">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Top Contributor</p>
                        <p className="text-xl font-bold text-rose-600 dark:text-rose-300 truncate">{apiResponse.repoStats.topContributor}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-rose-50 dark:bg-gradient-to-r dark:from-rose-500/20 dark:to-pink-500/20 border border-rose-100 dark:border-transparent">
                        <Star className="w-6 h-6 text-rose-500 dark:text-rose-400" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-8 p-5 rounded-xl backdrop-blur-sm bg-rose-50 dark:bg-gradient-to-r dark:from-rose-900/30 dark:to-red-900/20 border-l-4 border-rose-500 shadow-sm dark:shadow-none">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-rose-600 dark:text-rose-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-rose-800 dark:text-rose-200">{error}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Charts Section */}
        {apiResponse?.charts && (
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Bar Chart - Top Contributors */}
            <div className="relative backdrop-blur-xl bg-white/80 dark:bg-gradient-to-b dark:from-white/5 dark:to-white/10 rounded-3xl border border-gray-200 dark:border-white/20 shadow-lg dark:shadow-2xl p-3 overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur opacity-30 -z-10 pointer-events-none"></div>

              <div className="relative">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-2" />
                  Top 10 Contributors by Commits
                </h3>
                <div className="h-80 relative z-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={apiResponse.charts.topContributors}>
                      <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#E5E7EB'} />
                      <XAxis
                        dataKey="name"
                        stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis
                        stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'}
                        tick={{ fontSize: 12 }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                          border: theme === 'dark' ? '1px solid rgba(75, 85, 99, 0.5)' : '1px solid rgba(229, 231, 235, 1)',
                          color: theme === 'dark' ? 'white' : '#111827',
                          borderRadius: '0.5rem',
                          backdropFilter: 'blur(8px)',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                        labelFormatter={(label) => {
                          const contributor = apiResponse.charts.topContributors.find(c => c.name === label);
                          return contributor?.username || label;
                        }}
                      />
                      <Legend
                        wrapperStyle={{ fontSize: '12px' }}
                      />
                      <Bar
                        dataKey="contributions"
                        name="Commits"
                        fill="#8884d8"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="mergedPRs"
                        name="Merged PRs"
                        fill="#82ca9d"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Pie Chart - PR Distribution */}
            <div className="relative backdrop-blur-xl bg-white/80 dark:bg-gradient-to-b dark:from-white/5 dark:to-white/10 rounded-3xl border border-gray-200 dark:border-white/20 shadow-lg dark:shadow-2xl p-6 overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-3xl blur opacity-30 -z-10 pointer-events-none"></div>

              <div className="relative">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 mb-6 flex items-center">
                  <GitPullRequest className="w-5 h-5 text-green-500 dark:text-green-400 mr-2" />
                  PR Distribution by Count
                </h3>
                <div className="h-80 relative z-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={apiResponse.charts.prDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {apiResponse.charts.prDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                          border: theme === 'dark' ? '1px solid rgba(75, 85, 99, 0.5)' : '1px solid rgba(229, 231, 235, 1)',
                          color: theme === 'dark' ? 'white' : '#111827',
                          borderRadius: '0.5rem',
                          backdropFilter: 'blur(8px)',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                        formatter={(value) => [value, 'Contributors']}
                      />
                      <Legend
                        wrapperStyle={{ fontSize: '12px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Line Chart - Activity Trend */}
            <div className="relative backdrop-blur-xl bg-white/80 dark:bg-gradient-to-b dark:from-white/5 dark:to-white/10 rounded-3xl border border-gray-200 dark:border-white/20 shadow-lg dark:shadow-2xl p-3 lg:col-span-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur opacity-30 pointer-events-none"></div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 mb-6 flex items-center">
                  <Zap className="w-5 h-5 text-purple-500 dark:text-purple-400 mr-2" />
                  Contributor Activity Trend
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={apiResponse.charts.activityTrend}>
                      <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#E5E7EB'} />
                      <XAxis dataKey="month" stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'} />
                      <YAxis stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                          border: theme === 'dark' ? '1px solid rgba(75, 85, 99, 0.5)' : '1px solid rgba(229, 231, 235, 1)',
                          color: theme === 'dark' ? 'white' : '#111827',
                          borderRadius: '0.5rem',
                          backdropFilter: 'blur(8px)',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="contributions"
                        name="Commits"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="prs"
                        name="Merged PRs"
                        stroke="#82ca9d"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contributors List */}
        {apiResponse?.contributors.length > 0 && (
          <div className="relative backdrop-blur-xl bg-white/80 dark:bg-gradient-to-b dark:from-white/5 dark:to-white/10 rounded-3xl border border-gray-200 dark:border-white/20 shadow-lg dark:shadow-2xl p-4">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur opacity-30 pointer-events-none"></div>

            <div className="relative">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300 mb-6 flex items-center">
                <Users className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-2" />
                All Contributors ({apiResponse.contributors.length})
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {apiResponse.contributors.map((contributor) => (
                  <div
                    key={contributor.username}
                    className="group relative backdrop-blur-sm bg-white dark:bg-gradient-to-br dark:from-white/5 dark:to-white/10 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/30 p-6 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative flex items-start space-x-4">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <img
                          src={contributor.avatar}
                          alt={contributor.username}
                          className="relative w-16 h-16 rounded-full border-2 border-white dark:border-white/20 shadow-sm dark:shadow-none"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg truncate">
                            {contributor.username}
                          </h4>
                          <a
                            href={contributor.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Code className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
                              <span>Commits</span>
                            </div>
                            <span className="text-lg font-bold text-blue-600 dark:text-blue-300">
                              {contributor.contributions}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <GitPullRequest className="w-4 h-4 mr-2 text-green-500 dark:text-green-400" />
                              <span>Merged PRs</span>
                            </div>
                            <span className="text-lg font-bold text-green-600 dark:text-green-300">
                              {contributor.mergedPRs}
                            </span>
                          </div>

                          <div className="pt-3 border-t border-gray-100 dark:border-white/10">
                            <div className="flex items-center text-xs text-gray-500">
                              <Star className="w-3 h-3 mr-1 text-yellow-500 dark:text-yellow-400" />
                              <span>{contributor.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Metadata Footer */}
        {apiResponse?.metadata && (
          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-500">
            <p>API Version: {apiResponse.metadata.apiVersion} | Last Updated: {new Date(apiResponse.timestamp).toLocaleString()}</p>
            <p className="mt-1">{apiResponse.metadata.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}