export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <div className="text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} GitHub Repo Contribution Analytics. Powered by GitHub API.</p>
                    <p className="mt-2">
                        Analyze repository contributions, track development activity, and gain insights into open source projects.
                    </p>
                    <p className="mt-4">
                        Developed by <a href="https://github.com/HarshYadav152" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Harsh Yadav</a>.
                    </p>
                </div>
            </div>
        </footer>
    )
}