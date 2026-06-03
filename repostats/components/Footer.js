import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} GitHub Repo Contribution Analytics. Powered by Next.js</p>
          
          <p className="mt-2">
            Analyze repository contributions, track development activity, and gain insights.
          </p>
          
          {/* Added the Cookie Policy link here */}
          <div className="mt-3">
            <Link 
              href="/cookie-policy" 
              className="text-gray-500 hover:text-white transition-colors underline text-xs"
            >
              Cookie Policy
            </Link>
          </div>

          <p className="mt-4">
            Developed by <a href="https://github.com/HarshYadav152" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">HarshYadav152</a>
          </p>
        </div>
      </div>
    </footer>
  );
}