import React from 'react';

export default function Hero() {
	// Server-rendered markup: main text content, structure and fallbacks.
	// Client-only behavior (animations, particles, download handler) will
	// be attached by `Hero.client.jsx` which runs in the browser.

	return (
		<header id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-800 dark:via-blue-900 dark:to-indigo-900 text-white py-32 overflow-hidden">
			{/* Enhanced background with more dynamic elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.05)%22><path d=%22M0 .5H31.5V32%22/></svg>')] opacity-30"></div>

				{/* Enhanced glow effects with proper z-index */}
				<div className="absolute right-0 bottom-0 -mb-16 -mr-16 w-72 h-72 rounded-full bg-blue-500/30 blur-3xl animate-pulse"></div>
				<div className="absolute left-0 top-0 -ml-16 -mt-16 w-72 h-72 rounded-full bg-indigo-500/30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
				<div className="absolute left-1/2 top-1/3 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
			</div>

			<div className="max-w-6xl mx-auto px-4 relative z-10">
				{/* Main text content (server-rendered) */}
				<div id="hero-content" className="">
					<div className="inline-block px-4 py-1.5 bg-blue-800/40 dark:bg-blue-950/60 backdrop-blur-lg rounded-full mb-4 border border-blue-400/20 shadow-lg shadow-blue-900/10">
						<span className="text-blue-200 flex items-center">
							<span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
							Developer &amp; Designer
						</span>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
						Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300">Theophilus Kolawole</span>
						<br />A Passionate <span className="relative inline-block">Software Developer</span>
					</h1>

					<p className="text-lg md:text-xl mb-6 text-blue-100 md:leading-relaxed opacity-90">
						I build scalable web and mobile applications with modern tools, clean code, and a strong user-centered mindset.
					</p>

					<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
						{/* Anchor fallback is server-rendered so download works without JS */}
						<a
							id="resume-btn"
							href="/Theophilus_Kolawole_Resume.pdf"
							download
							className="group bg-white text-blue-700 px-6 py-3 rounded-xl font-medium flex items-center justify-center hover:bg-blue-50 transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 hover:scale-105">
							<span className="mr-2">⬇</span>
							Download Résumé
						</a>

						<a
							href="#contact"
							className="group bg-blue-800/40 hover:bg-blue-700/60 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center hover:text-white transition-all duration-300 shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 hover:scale-105 backdrop-blur-md">
							Contact Me
						</a>
					</div>
				</div>

				{/* Avatar (server-rendered) */}
				<div id="hero-avatar" className="mt-8 lg:mt-0 flex justify-center">
					<div className="relative">
						<div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 p-1 shadow-2xl shadow-blue-900/30">
							<div className="w-full h-full rounded-full bg-blue-800 flex items-center justify-center overflow-hidden border-4 border-white/10">
								<img src="/theophilus.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
							</div>
						</div>
						<div className="absolute top-0 -right-4 w-10 h-10 rounded-full bg-yellow-400 shadow-lg"></div>
						<div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-blue-400/30 backdrop-blur-xl shadow-lg"></div>
					</div>
				</div>

				{/* Particles container (client will populate) */}
				<div id="hero-particles" className="absolute inset-0 pointer-events-none z-0" aria-hidden="true"></div>
			</div>

			{/* Improved wave */}
			<div className="absolute bottom-0 left-0 right-0 z-20">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
					<path
						fill="currentColor"
						className="text-white dark:text-slate-900"
						d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,69.3C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
				</svg>
			</div>
		</header>
	);
}
