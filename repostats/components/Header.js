'use client';

import { useState } from 'react';
import { Github, Star, Menu, X, BarChart3 } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-6 h-6 text-blue-400" />
            <span className="text-white font-bold tracking-tight text-lg">RepoStats</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/HarshYadav152/repoStats"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-colors hover:bg-white/5"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a
              href="https://github.com/HarshYadav152/repoStats"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all duration-300 shadow-md shadow-blue-500/20"
            >
              <Star className="w-4 h-4 fill-white" />
              <span className="text-sm font-medium">Star Repo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-2xl bg-slate-950/95 border-b border-white/10 px-4 pt-2 pb-4 space-y-3">
          <a
            href="https://github.com/HarshYadav152/repoStats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Github className="w-5 h-5" />
            <span className="text-base font-medium">GitHub</span>
          </a>

          <a
            href="https://github.com/HarshYadav152/repoStats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md transition-opacity hover:opacity-90"
            onClick={() => setIsOpen(false)}
          >
            <Star className="w-4 h-4 fill-white" />
            <span>Star Repo</span>
          </a>
        </div>
      )}
    </nav>
  );
}