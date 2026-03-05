import { Github, Star } from 'lucide-react';

export default function Header() {
  return (
    <>
      {/* Minimal Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* GitHub Repo Button */}
            <a
              href="https://github.com/HarshYadav152/repoStats"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors hover:bg-white/5"
            >
              <Github className="w-5 h-5 text-gray-300" />
              <span className="text-sm text-gray-300">GitHub</span>
            </a>

            {/* Star Button */}

            <a href='https://github.com/HarshYadav152/repoStats'
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 text-white hover:bg-white/5">
              <Star className="w-4 h-4" />
              <span className="text-sm text-gray-300">Stars</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}